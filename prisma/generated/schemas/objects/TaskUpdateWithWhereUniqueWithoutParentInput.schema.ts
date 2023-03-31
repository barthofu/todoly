import { z } from 'zod';
import { TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateWithoutParentInputObjectSchema } from './TaskUpdateWithoutParentInput.schema';
import { TaskUncheckedUpdateWithoutParentInputObjectSchema } from './TaskUncheckedUpdateWithoutParentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskUpdateWithWhereUniqueWithoutParentInput> = z
  .object({
    where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => TaskUpdateWithoutParentInputObjectSchema),
      z.lazy(() => TaskUncheckedUpdateWithoutParentInputObjectSchema),
    ]),
  })
  .strict();

export const TaskUpdateWithWhereUniqueWithoutParentInputObjectSchema = Schema;
