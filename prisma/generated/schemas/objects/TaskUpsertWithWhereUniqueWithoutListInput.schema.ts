import { z } from 'zod';
import { TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateWithoutListInputObjectSchema } from './TaskUpdateWithoutListInput.schema';
import { TaskUncheckedUpdateWithoutListInputObjectSchema } from './TaskUncheckedUpdateWithoutListInput.schema';
import { TaskCreateWithoutListInputObjectSchema } from './TaskCreateWithoutListInput.schema';
import { TaskUncheckedCreateWithoutListInputObjectSchema } from './TaskUncheckedCreateWithoutListInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskUpsertWithWhereUniqueWithoutListInput> = z
  .object({
    where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => TaskUpdateWithoutListInputObjectSchema),
      z.lazy(() => TaskUncheckedUpdateWithoutListInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TaskCreateWithoutListInputObjectSchema),
      z.lazy(() => TaskUncheckedCreateWithoutListInputObjectSchema),
    ]),
  })
  .strict();

export const TaskUpsertWithWhereUniqueWithoutListInputObjectSchema = Schema;
