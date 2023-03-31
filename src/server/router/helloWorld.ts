import { publicProcedure, router } from '@server/trpc'
import { TRPCError } from '@trpc/server'
import { z } from 'zod'

export const helloWorldRouter = router({

    helloWorld: publicProcedure
        .query(async () => {
            
            return {
                message: 'Hello World!'
            }
        }),

    helloWorldWithParams: publicProcedure
        .input(z.object({
            name: z.string()
        }))
        .query(async ({ input }) => {

            return {
                message: `Hello ${input.name}!`
            }
        }),

    helloWorldWithParamsAndError: publicProcedure
        .input(z.object({
            name: z.string()
        }))
        .query(async ({ input }) => {

            if (input.name === 'error') {
                throw new TRPCError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: 'invalid name!'
                })
            }

            return {
                message: `Hello ${input.name}!`
            }
        }),   
        
    helloWorldMutation: publicProcedure
        .input(z.object({
            name: z.string()
        }))
        .mutation(async ({ input }) => {

            return {
                message: `Hello ${input.name}!`
            }
        })

})