import { publicProcedure, router } from '@server/trpc'

import { helloWorldRouter } from './helloWorld'

export const appRouter = router({

    helloWorld: helloWorldRouter
})
   
export type AppRouter = typeof appRouter