import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    parentId: z.literal(true).optional(),
    listId: z.literal(true).optional(),
  })
  .strict();

export const TaskSumAggregateInputObjectSchema = Schema;
