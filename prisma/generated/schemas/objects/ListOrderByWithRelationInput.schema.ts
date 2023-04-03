import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TaskOrderByRelationAggregateInputObjectSchema } from './TaskOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ListOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    position: z.lazy(() => SortOrderSchema).optional(),
    tasks: z
      .lazy(() => TaskOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ListOrderByWithRelationInputObjectSchema = Schema;
