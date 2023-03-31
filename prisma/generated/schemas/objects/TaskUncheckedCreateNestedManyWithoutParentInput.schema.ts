import { z } from 'zod';
import { TaskCreateWithoutParentInputObjectSchema } from './TaskCreateWithoutParentInput.schema';
import { TaskUncheckedCreateWithoutParentInputObjectSchema } from './TaskUncheckedCreateWithoutParentInput.schema';
import { TaskCreateOrConnectWithoutParentInputObjectSchema } from './TaskCreateOrConnectWithoutParentInput.schema';
import { TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskUncheckedCreateNestedManyWithoutParentInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TaskCreateWithoutParentInputObjectSchema),
          z.lazy(() => TaskCreateWithoutParentInputObjectSchema).array(),
          z.lazy(() => TaskUncheckedCreateWithoutParentInputObjectSchema),
          z
            .lazy(() => TaskUncheckedCreateWithoutParentInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => TaskCreateOrConnectWithoutParentInputObjectSchema),
          z
            .lazy(() => TaskCreateOrConnectWithoutParentInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => TaskWhereUniqueInputObjectSchema),
          z.lazy(() => TaskWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TaskUncheckedCreateNestedManyWithoutParentInputObjectSchema =
  Schema;
