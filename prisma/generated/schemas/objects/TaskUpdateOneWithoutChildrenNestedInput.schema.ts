import { z } from 'zod';
import { TaskCreateWithoutChildrenInputObjectSchema } from './TaskCreateWithoutChildrenInput.schema';
import { TaskUncheckedCreateWithoutChildrenInputObjectSchema } from './TaskUncheckedCreateWithoutChildrenInput.schema';
import { TaskCreateOrConnectWithoutChildrenInputObjectSchema } from './TaskCreateOrConnectWithoutChildrenInput.schema';
import { TaskUpsertWithoutChildrenInputObjectSchema } from './TaskUpsertWithoutChildrenInput.schema';
import { TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateWithoutChildrenInputObjectSchema } from './TaskUpdateWithoutChildrenInput.schema';
import { TaskUncheckedUpdateWithoutChildrenInputObjectSchema } from './TaskUncheckedUpdateWithoutChildrenInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskUpdateOneWithoutChildrenNestedInput> = z
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
    upsert: z.lazy(() => TaskUpsertWithoutChildrenInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => TaskWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => TaskUpdateWithoutChildrenInputObjectSchema),
        z.lazy(() => TaskUncheckedUpdateWithoutChildrenInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const TaskUpdateOneWithoutChildrenNestedInputObjectSchema = Schema;
