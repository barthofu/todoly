import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ListCreateWithoutTasksInput> = z
  .object({
    title: z.string(),
    description: z.string().optional().nullable(),
  })
  .strict();

export const ListCreateWithoutTasksInputObjectSchema = Schema;
