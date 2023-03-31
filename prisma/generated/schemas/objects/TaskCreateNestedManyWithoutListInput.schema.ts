import { z } from 'zod';
import { TaskCreateWithoutListInputObjectSchema } from './TaskCreateWithoutListInput.schema';
import { TaskUncheckedCreateWithoutListInputObjectSchema } from './TaskUncheckedCreateWithoutListInput.schema';
import { TaskCreateOrConnectWithoutListInputObjectSchema } from './TaskCreateOrConnectWithoutListInput.schema';
import { TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskCreateNestedManyWithoutListInput> = z
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
    connect: z
      .union([
        z.lazy(() => TaskWhereUniqueInputObjectSchema),
        z.lazy(() => TaskWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const TaskCreateNestedManyWithoutListInputObjectSchema = Schema;
