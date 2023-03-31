import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ListUncheckedCreateWithoutTasksInput> = z
  .object({
    id: z.number().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
  })
  .strict();

export const ListUncheckedCreateWithoutTasksInputObjectSchema = Schema;
