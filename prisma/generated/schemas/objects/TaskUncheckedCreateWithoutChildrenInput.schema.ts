import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskUncheckedCreateWithoutChildrenInput> = z
  .object({
    id: z.number().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    date: z.date().optional().nullable(),
    time: z.date().optional().nullable(),
    color: z.string().optional().nullable(),
    done: z.boolean().optional(),
    archived: z.boolean().optional(),
    parentId: z.number().optional().nullable(),
    listId: z.number().optional().nullable(),
  })
  .strict();

export const TaskUncheckedCreateWithoutChildrenInputObjectSchema = Schema;
