import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    title: z.literal(true).optional(),
    notes: z.literal(true).optional(),
    date: z.literal(true).optional(),
    time: z.literal(true).optional(),
    color: z.literal(true).optional(),
    completed: z.literal(true).optional(),
    archived: z.literal(true).optional(),
    parentId: z.literal(true).optional(),
    listId: z.literal(true).optional(),
  })
  .strict();

export const TaskMaxAggregateInputObjectSchema = Schema;
