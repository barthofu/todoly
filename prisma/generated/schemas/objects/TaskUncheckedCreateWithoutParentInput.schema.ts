import { z } from 'zod';
import { TaskUncheckedCreateNestedManyWithoutParentInputObjectSchema } from './TaskUncheckedCreateNestedManyWithoutParentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskUncheckedCreateWithoutParentInput> = z
  .object({
    id: z.number().optional(),
    title: z.string(),
    notes: z.string().optional().nullable(),
    date: z.string().optional().nullable(),
    time: z.string().optional().nullable(),
    color: z.string().optional().nullable(),
    completed: z.boolean().optional(),
    archived: z.boolean().optional(),
    listId: z.number().optional().nullable(),
    children: z
      .lazy(() => TaskUncheckedCreateNestedManyWithoutParentInputObjectSchema)
      .optional(),
  })
  .strict();

export const TaskUncheckedCreateWithoutParentInputObjectSchema = Schema;
