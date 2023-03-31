import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    title: z.literal(true).optional(),
    description: z.literal(true).optional(),
    date: z.literal(true).optional(),
    time: z.literal(true).optional(),
    color: z.literal(true).optional(),
    done: z.literal(true).optional(),
    archived: z.literal(true).optional(),
    parentId: z.literal(true).optional(),
    listId: z.literal(true).optional(),
  })
  .strict();

export const TaskMinAggregateInputObjectSchema = Schema;
