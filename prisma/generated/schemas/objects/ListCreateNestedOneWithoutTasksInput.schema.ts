import { z } from 'zod';
import { ListCreateWithoutTasksInputObjectSchema } from './ListCreateWithoutTasksInput.schema';
import { ListUncheckedCreateWithoutTasksInputObjectSchema } from './ListUncheckedCreateWithoutTasksInput.schema';
import { ListCreateOrConnectWithoutTasksInputObjectSchema } from './ListCreateOrConnectWithoutTasksInput.schema';
import { ListWhereUniqueInputObjectSchema } from './ListWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ListCreateNestedOneWithoutTasksInput> = z
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
    connect: z.lazy(() => ListWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ListCreateNestedOneWithoutTasksInputObjectSchema = Schema;
