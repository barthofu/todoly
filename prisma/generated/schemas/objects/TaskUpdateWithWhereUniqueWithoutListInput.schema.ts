import { z } from 'zod';
import { TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateWithoutListInputObjectSchema } from './TaskUpdateWithoutListInput.schema';
import { TaskUncheckedUpdateWithoutListInputObjectSchema } from './TaskUncheckedUpdateWithoutListInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskUpdateWithWhereUniqueWithoutListInput> = z
  .object({
    where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => TaskUpdateWithoutListInputObjectSchema),
      z.lazy(() => TaskUncheckedUpdateWithoutListInputObjectSchema),
    ]),
  })
  .strict();

export const TaskUpdateWithWhereUniqueWithoutListInputObjectSchema = Schema;
