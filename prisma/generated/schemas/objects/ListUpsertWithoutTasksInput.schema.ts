import { z } from 'zod';
import { ListUpdateWithoutTasksInputObjectSchema } from './ListUpdateWithoutTasksInput.schema';
import { ListUncheckedUpdateWithoutTasksInputObjectSchema } from './ListUncheckedUpdateWithoutTasksInput.schema';
import { ListCreateWithoutTasksInputObjectSchema } from './ListCreateWithoutTasksInput.schema';
import { ListUncheckedCreateWithoutTasksInputObjectSchema } from './ListUncheckedCreateWithoutTasksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ListUpsertWithoutTasksInput> = z
  .object({
    update: z.union([
      z.lazy(() => ListUpdateWithoutTasksInputObjectSchema),
      z.lazy(() => ListUncheckedUpdateWithoutTasksInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ListCreateWithoutTasksInputObjectSchema),
      z.lazy(() => ListUncheckedCreateWithoutTasksInputObjectSchema),
    ]),
  })
  .strict();

export const ListUpsertWithoutTasksInputObjectSchema = Schema;
