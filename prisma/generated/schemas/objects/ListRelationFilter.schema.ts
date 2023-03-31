import { z } from 'zod';
import { ListWhereInputObjectSchema } from './ListWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ListRelationFilter> = z
  .object({
    is: z
      .lazy(() => ListWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ListWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ListRelationFilterObjectSchema = Schema;
