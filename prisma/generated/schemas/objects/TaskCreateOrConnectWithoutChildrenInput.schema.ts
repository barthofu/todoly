import { z } from 'zod';
import { TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskCreateWithoutChildrenInputObjectSchema } from './TaskCreateWithoutChildrenInput.schema';
import { TaskUncheckedCreateWithoutChildrenInputObjectSchema } from './TaskUncheckedCreateWithoutChildrenInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskCreateOrConnectWithoutChildrenInput> = z
  .object({
    where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TaskCreateWithoutChildrenInputObjectSchema),
      z.lazy(() => TaskUncheckedCreateWithoutChildrenInputObjectSchema),
    ]),
  })
  .strict();

export const TaskCreateOrConnectWithoutChildrenInputObjectSchema = Schema;
