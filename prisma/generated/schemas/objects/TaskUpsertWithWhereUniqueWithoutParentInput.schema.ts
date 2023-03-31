import { z } from 'zod';
import { TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateWithoutParentInputObjectSchema } from './TaskUpdateWithoutParentInput.schema';
import { TaskUncheckedUpdateWithoutParentInputObjectSchema } from './TaskUncheckedUpdateWithoutParentInput.schema';
import { TaskCreateWithoutParentInputObjectSchema } from './TaskCreateWithoutParentInput.schema';
import { TaskUncheckedCreateWithoutParentInputObjectSchema } from './TaskUncheckedCreateWithoutParentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskUpsertWithWhereUniqueWithoutParentInput> = z
  .object({
    where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => TaskUpdateWithoutParentInputObjectSchema),
      z.lazy(() => TaskUncheckedUpdateWithoutParentInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TaskCreateWithoutParentInputObjectSchema),
      z.lazy(() => TaskUncheckedCreateWithoutParentInputObjectSchema),
    ]),
  })
  .strict();

export const TaskUpsertWithWhereUniqueWithoutParentInputObjectSchema = Schema;
