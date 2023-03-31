import { z } from 'zod';
import { TaskCreateWithoutParentInputObjectSchema } from './TaskCreateWithoutParentInput.schema';
import { TaskUncheckedCreateWithoutParentInputObjectSchema } from './TaskUncheckedCreateWithoutParentInput.schema';
import { TaskCreateOrConnectWithoutParentInputObjectSchema } from './TaskCreateOrConnectWithoutParentInput.schema';
import { TaskUpsertWithWhereUniqueWithoutParentInputObjectSchema } from './TaskUpsertWithWhereUniqueWithoutParentInput.schema';
import { TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateWithWhereUniqueWithoutParentInputObjectSchema } from './TaskUpdateWithWhereUniqueWithoutParentInput.schema';
import { TaskUpdateManyWithWhereWithoutParentInputObjectSchema } from './TaskUpdateManyWithWhereWithoutParentInput.schema';
import { TaskScalarWhereInputObjectSchema } from './TaskScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskUncheckedUpdateManyWithoutParentNestedInput> =
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
      upsert: z
        .union([
          z.lazy(() => TaskUpsertWithWhereUniqueWithoutParentInputObjectSchema),
          z
            .lazy(() => TaskUpsertWithWhereUniqueWithoutParentInputObjectSchema)
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => TaskWhereUniqueInputObjectSchema),
          z.lazy(() => TaskWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => TaskWhereUniqueInputObjectSchema),
          z.lazy(() => TaskWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => TaskWhereUniqueInputObjectSchema),
          z.lazy(() => TaskWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => TaskWhereUniqueInputObjectSchema),
          z.lazy(() => TaskWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => TaskUpdateWithWhereUniqueWithoutParentInputObjectSchema),
          z
            .lazy(() => TaskUpdateWithWhereUniqueWithoutParentInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => TaskUpdateManyWithWhereWithoutParentInputObjectSchema),
          z
            .lazy(() => TaskUpdateManyWithWhereWithoutParentInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => TaskScalarWhereInputObjectSchema),
          z.lazy(() => TaskScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TaskUncheckedUpdateManyWithoutParentNestedInputObjectSchema =
  Schema;
