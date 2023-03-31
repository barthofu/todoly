import { z } from 'zod';
import { TaskCreateNestedManyWithoutParentInputObjectSchema } from './TaskCreateNestedManyWithoutParentInput.schema';
import { ListCreateNestedOneWithoutTasksInputObjectSchema } from './ListCreateNestedOneWithoutTasksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskCreateWithoutParentInput> = z
  .object({
    title: z.string(),
    description: z.string().optional().nullable(),
    date: z.date().optional().nullable(),
    time: z.date().optional().nullable(),
    color: z.string().optional().nullable(),
    done: z.boolean().optional(),
    archived: z.boolean().optional(),
    children: z
      .lazy(() => TaskCreateNestedManyWithoutParentInputObjectSchema)
      .optional(),
    list: z
      .lazy(() => ListCreateNestedOneWithoutTasksInputObjectSchema)
      .optional(),
  })
  .strict();

export const TaskCreateWithoutParentInputObjectSchema = Schema;
