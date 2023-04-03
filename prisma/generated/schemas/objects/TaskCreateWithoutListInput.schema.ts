import { z } from 'zod';
import { TaskCreateNestedOneWithoutChildrenInputObjectSchema } from './TaskCreateNestedOneWithoutChildrenInput.schema';
import { TaskCreateNestedManyWithoutParentInputObjectSchema } from './TaskCreateNestedManyWithoutParentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskCreateWithoutListInput> = z
  .object({
    title: z.string(),
    notes: z.string().optional().nullable(),
    date: z.string().optional().nullable(),
    time: z.string().optional().nullable(),
    color: z.string().optional().nullable(),
    completed: z.boolean().optional(),
    archived: z.boolean().optional(),
    parent: z
      .lazy(() => TaskCreateNestedOneWithoutChildrenInputObjectSchema)
      .optional(),
    children: z
      .lazy(() => TaskCreateNestedManyWithoutParentInputObjectSchema)
      .optional(),
  })
  .strict();

export const TaskCreateWithoutListInputObjectSchema = Schema;
