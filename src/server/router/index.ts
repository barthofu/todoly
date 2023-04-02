import { publicProcedure, router } from '@server/trpc'

import { tasksRouter } from './tasks'
import { listsRouter } from './lists'

export const appRouter = router({

    tasks: tasksRouter,
    lists: listsRouter,
})
   
export type AppRouter = typeof appRouter