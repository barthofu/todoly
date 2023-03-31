import { z } from 'zod';
import { TaskWhereInputObjectSchema } from './TaskWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskListRelationFilter> = z
  .object({
    every: z.lazy(() => TaskWhereInputObjectSchema).optional(),
    some: z.lazy(() => TaskWhereInputObjectSchema).optional(),
    none: z.lazy(() => TaskWhereInputObjectSchema).optional(),
  })
  .strict();

export const TaskListRelationFilterObjectSchema = Schema;
