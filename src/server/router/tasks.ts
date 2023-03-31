import { PrismaClient } from '@prisma/client'
import { prisma } from '@server/prisma'
import { publicProcedure, router } from '@server/trpc'
import { TRPCError } from '@trpc/server'
import { TaskCreateOneSchema } from 'prisma/generated/schemas'
import { z } from 'zod'

export const tasksRouter = router({

    getAll: publicProcedure
        .query(async () => {
            
            const tasks = await prisma.task.findMany()
            
            return tasks
        }),

    create: publicProcedure
        .input(TaskCreateOneSchema)
        .mutation(async ({ input }) => {
                
            const task = await prisma.task.create({
                data: input.data
            })

            return task
        })

})