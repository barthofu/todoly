import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ListCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    title: z.literal(true).optional(),
    description: z.literal(true).optional(),
    position: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ListCountAggregateInputObjectSchema = Schema;
