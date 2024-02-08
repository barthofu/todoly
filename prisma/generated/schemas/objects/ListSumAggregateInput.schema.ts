import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ListSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    position: z.literal(true).optional(),
  })
  .strict();

export const ListSumAggregateInputObjectSchema = Schema;
