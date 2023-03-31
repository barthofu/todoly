import { z } from 'zod';
import { TaskCreateWithoutListInputObjectSchema } from './TaskCreateWithoutListInput.schema';
import { TaskUncheckedCreateWithoutListInputObjectSchema } from './TaskUncheckedCreateWithoutListInput.schema';
import { TaskCreateOrConnectWithoutListInputObjectSchema } from './TaskCreateOrConnectWithoutListInput.schema';
import { TaskUpsertWithWhereUniqueWithoutListInputObjectSchema } from './TaskUpsertWithWhereUniqueWithoutListInput.schema';
import { TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateWithWhereUniqueWithoutListInputObjectSchema } from './TaskUpdateWithWhereUniqueWithoutListInput.schema';
import { TaskUpdateManyWithWhereWithoutListInputObjectSchema } from './TaskUpdateManyWithWhereWithoutListInput.schema';
import { TaskScalarWhereInputObjectSchema } from './TaskScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskUncheckedUpdateManyWithoutListNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TaskCreateWithoutListInputObjectSchema),
          z.lazy(() => TaskCreateWithoutListInputObjectSchema).array(),
          z.lazy(() => TaskUncheckedCreateWithoutListInputObjectSchema),
          z.lazy(() => TaskUncheckedCreateWithoutListInputObjectSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => TaskCreateOrConnectWithoutListInputObjectSchema),
          z.lazy(() => TaskCreateOrConnectWithoutListInputObjectSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => TaskUpsertWithWhereUniqueWithoutListInputObjectSchema),
          z
            .lazy(() => TaskUpsertWithWhereUniqueWithoutListInputObjectSchema)
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
          z.lazy(() => TaskUpdateWithWhereUniqueWithoutListInputObjectSchema),
          z
            .lazy(() => TaskUpdateWithWhereUniqueWithoutListInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => TaskUpdateManyWithWhereWithoutListInputObjectSchema),
          z
            .lazy(() => TaskUpdateManyWithWhereWithoutListInputObjectSchema)
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

export const TaskUncheckedUpdateManyWithoutListNestedInputObjectSchema = Schema;
