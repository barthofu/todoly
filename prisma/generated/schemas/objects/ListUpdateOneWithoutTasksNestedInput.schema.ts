import { z } from 'zod';
import { ListCreateWithoutTasksInputObjectSchema } from './ListCreateWithoutTasksInput.schema';
import { ListUncheckedCreateWithoutTasksInputObjectSchema } from './ListUncheckedCreateWithoutTasksInput.schema';
import { ListCreateOrConnectWithoutTasksInputObjectSchema } from './ListCreateOrConnectWithoutTasksInput.schema';
import { ListUpsertWithoutTasksInputObjectSchema } from './ListUpsertWithoutTasksInput.schema';
import { ListWhereUniqueInputObjectSchema } from './ListWhereUniqueInput.schema';
import { ListUpdateWithoutTasksInputObjectSchema } from './ListUpdateWithoutTasksInput.schema';
import { ListUncheckedUpdateWithoutTasksInputObjectSchema } from './ListUncheckedUpdateWithoutTasksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ListUpdateOneWithoutTasksNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ListCreateWithoutTasksInputObjectSchema),
        z.lazy(() => ListUncheckedCreateWithoutTasksInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ListCreateOrConnectWithoutTasksInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => ListUpsertWithoutTasksInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ListWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ListUpdateWithoutTasksInputObjectSchema),
        z.lazy(() => ListUncheckedUpdateWithoutTasksInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ListUpdateOneWithoutTasksNestedInputObjectSchema = Schema;
