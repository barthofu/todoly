import { prisma } from '@server/prisma'
import { publicProcedure, router } from '@server/trpc'
import { TRPCError } from '@trpc/server'
import { getAllIntermediateDates } from '@utils/functions'
import dayjs from 'dayjs'
import { TaskCreateOneSchema } from 'prisma/generated/schemas'
import { z } from 'zod'

export const tasksRouter = router({

    // CRUD

    getAll: publicProcedure
        .query(async () => {
            
            const tasks = await prisma.task.findMany()
            
            return tasks
        }),

    get: publicProcedure
        .input(z.object({
            id: z.number()
        }))
        .query(async ({ input }) => {

            const task = await prisma.task.findUnique({
                where: {
                    id: input.id
                }
            })

            if (!task) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: 'Task not found'
                })
            }

            return task
        }),

    create: publicProcedure
        .input(TaskCreateOneSchema)
        .mutation(async ({ input }) => {
                
            const task = await prisma.task.create({
                data: input.data
            })

            return task
        }),

    // Custom

    getByDate: publicProcedure
        .input(z.object({
            date: z.string()
        }))
        .query(async ({ input }) => {

            const tasks = await prisma.task.findMany({
                where: {
                    date: input.date
                }
            })

            return tasks
        }),

})