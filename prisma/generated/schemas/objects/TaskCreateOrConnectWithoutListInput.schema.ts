import { z } from 'zod';
import { TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskCreateWithoutListInputObjectSchema } from './TaskCreateWithoutListInput.schema';
import { TaskUncheckedCreateWithoutListInputObjectSchema } from './TaskUncheckedCreateWithoutListInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskCreateOrConnectWithoutListInput> = z
  .object({
    where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TaskCreateWithoutListInputObjectSchema),
      z.lazy(() => TaskUncheckedCreateWithoutListInputObjectSchema),
    ]),
  })
  .strict();

export const TaskCreateOrConnectWithoutListInputObjectSchema = Schema;
