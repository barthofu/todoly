import { publicProcedure, router } from '@server/trpc'

import { tasksRouter } from './tasks'

export const appRouter = router({

    tasks: tasksRouter
})
   
export type AppRouter = typeof appRouter