import { z } from 'zod';
import { TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskCreateWithoutParentInputObjectSchema } from './TaskCreateWithoutParentInput.schema';
import { TaskUncheckedCreateWithoutParentInputObjectSchema } from './TaskUncheckedCreateWithoutParentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskCreateOrConnectWithoutParentInput> = z
  .object({
    where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TaskCreateWithoutParentInputObjectSchema),
      z.lazy(() => TaskUncheckedCreateWithoutParentInputObjectSchema),
    ]),
  })
  .strict();

export const TaskCreateOrConnectWithoutParentInputObjectSchema = Schema;
