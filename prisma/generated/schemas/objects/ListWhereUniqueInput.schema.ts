import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ListWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
    position: z.number().optional(),
  })
  .strict();

export const ListWhereUniqueInputObjectSchema = Schema;
