import { getAllIntermediateDates, getFormatedDate, getLocalizedCurrentDay, isToday } from '@core/utils/functions'
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

    getDailyList: publicProcedure
        .input(z.object({
            date: z.string()
        }))
        .query(async ({ input }) => {

            const { date } = input

            // get all tasks between start and end date
            const tasks = await prisma.task.findMany({
                where: {
                    date: date
                }
            })

            return {
                id: input.date,
                title: getLocalizedCurrentDay(date, 'fr'),
                description: getFormatedDate(date),
                highlighted: isToday(date),
                tasks: tasks
            }
        }),    

})