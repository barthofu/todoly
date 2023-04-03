import { getAllIntermediateDates } from '@core/utils/functions'
import { prisma } from '@server/prisma'
import { publicProcedure, router } from '@server/trpc'
import { TRPCError } from '@trpc/server'
import dayjs from 'dayjs'
import { ListCreateOneSchema } from 'prisma/generated/schemas'
import { z } from 'zod'

export const listsRouter = router({

    // CRUD

    getAll: publicProcedure
        .query(async () => {
            
            const lists = await prisma.list.findMany()
            
            return lists
        }),

    get: publicProcedure
        .input(z.object({
            id: z.number()
        }))
        .query(async ({ input }) => {

            const list = await prisma.list.findUnique({
                where: {
                    id: input.id
                }
            })

            if (!list) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: 'Task not found'
                })
            }

            return list
        }),

    create: publicProcedure
        .input(ListCreateOneSchema)
        .mutation(async ({ input }) => {
                
            const list = await prisma.list.create({
                data: input.data
            })

            return list
        }),

    // Custom            

    getDailyLists: publicProcedure
        .input(z.object({
            date: z.string(),
            dayCount: z.number().default(5),
            offset: z.number().default(1)
        }))
        .query(async ({ input }) => {

            const parsedDate = dayjs(input.date)
            const startDate = parsedDate.subtract(input.offset - 1, 'day')
            const endDate = parsedDate.add(input.dayCount + input.offset, 'day')

            // get all tasks between start and end date
            const tasks = await prisma.task.findMany({
                where: {
                    date: {
                        gte: startDate.format('YYYY-MM-DD'),
                        lte: endDate.format('YYYY-MM-DD')
                    }
                }
            })

            // get an array of all intermediate dates between start and end date
            const intermediateDates = getAllIntermediateDates(startDate.toDate(), endDate.toDate())
                .map(date => dayjs(date).format('YYYY-MM-DD'))

            // create an array of lists objects for each date with the tasks for that date 
            const dailyLists = intermediateDates.map(date => ({
                    date,
                    tasks: tasks.filter(task => task.date === date)
                }))

            return dailyLists
        }),


    

})