import { z } from 'zod';
import { TaskScalarWhereInputObjectSchema } from './TaskScalarWhereInput.schema';
import { TaskUpdateManyMutationInputObjectSchema } from './TaskUpdateManyMutationInput.schema';
import { TaskUncheckedUpdateManyWithoutChildrenInputObjectSchema } from './TaskUncheckedUpdateManyWithoutChildrenInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskUpdateManyWithWhereWithoutParentInput> = z
  .object({
    where: z.lazy(() => TaskScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => TaskUpdateManyMutationInputObjectSchema),
      z.lazy(() => TaskUncheckedUpdateManyWithoutChildrenInputObjectSchema),
    ]),
  })
  .strict();

export const TaskUpdateManyWithWhereWithoutParentInputObjectSchema = Schema;
