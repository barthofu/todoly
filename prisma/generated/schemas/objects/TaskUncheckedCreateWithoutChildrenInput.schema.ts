import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskUncheckedCreateWithoutChildrenInput> = z
  .object({
    id: z.number().optional(),
    title: z.string(),
    notes: z.string().optional().nullable(),
    date: z.string().optional().nullable(),
    time: z.string().optional().nullable(),
    color: z.string().optional().nullable(),
    completed: z.boolean().optional(),
    archived: z.boolean().optional(),
    parentId: z.number().optional().nullable(),
    listId: z.number().optional().nullable(),
  })
  .strict();

export const TaskUncheckedCreateWithoutChildrenInputObjectSchema = Schema;
