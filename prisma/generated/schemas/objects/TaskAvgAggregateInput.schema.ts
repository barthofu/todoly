import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    parentId: z.literal(true).optional(),
    listId: z.literal(true).optional(),
  })
  .strict();

export const TaskAvgAggregateInputObjectSchema = Schema;
