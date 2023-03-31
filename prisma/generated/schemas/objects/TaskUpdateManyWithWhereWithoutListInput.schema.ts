import { z } from 'zod';
import { TaskScalarWhereInputObjectSchema } from './TaskScalarWhereInput.schema';
import { TaskUpdateManyMutationInputObjectSchema } from './TaskUpdateManyMutationInput.schema';
import { TaskUncheckedUpdateManyWithoutTasksInputObjectSchema } from './TaskUncheckedUpdateManyWithoutTasksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskUpdateManyWithWhereWithoutListInput> = z
  .object({
    where: z.lazy(() => TaskScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => TaskUpdateManyMutationInputObjectSchema),
      z.lazy(() => TaskUncheckedUpdateManyWithoutTasksInputObjectSchema),
    ]),
  })
  .strict();

export const TaskUpdateManyWithWhereWithoutListInputObjectSchema = Schema;
