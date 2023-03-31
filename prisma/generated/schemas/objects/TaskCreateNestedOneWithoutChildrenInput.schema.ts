import { z } from 'zod';
import { TaskCreateWithoutChildrenInputObjectSchema } from './TaskCreateWithoutChildrenInput.schema';
import { TaskUncheckedCreateWithoutChildrenInputObjectSchema } from './TaskUncheckedCreateWithoutChildrenInput.schema';
import { TaskCreateOrConnectWithoutChildrenInputObjectSchema } from './TaskCreateOrConnectWithoutChildrenInput.schema';
import { TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskCreateNestedOneWithoutChildrenInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TaskCreateWithoutChildrenInputObjectSchema),
        z.lazy(() => TaskUncheckedCreateWithoutChildrenInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => TaskCreateOrConnectWithoutChildrenInputObjectSchema)
      .optional(),
    connect: z.lazy(() => TaskWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const TaskCreateNestedOneWithoutChildrenInputObjectSchema = Schema;
