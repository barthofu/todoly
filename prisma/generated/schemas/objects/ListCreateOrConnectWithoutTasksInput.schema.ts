import { z } from 'zod';
import { ListWhereUniqueInputObjectSchema } from './ListWhereUniqueInput.schema';
import { ListCreateWithoutTasksInputObjectSchema } from './ListCreateWithoutTasksInput.schema';
import { ListUncheckedCreateWithoutTasksInputObjectSchema } from './ListUncheckedCreateWithoutTasksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ListCreateOrConnectWithoutTasksInput> = z
  .object({
    where: z.lazy(() => ListWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ListCreateWithoutTasksInputObjectSchema),
      z.lazy(() => ListUncheckedCreateWithoutTasksInputObjectSchema),
    ]),
  })
  .strict();

export const ListCreateOrConnectWithoutTasksInputObjectSchema = Schema;
