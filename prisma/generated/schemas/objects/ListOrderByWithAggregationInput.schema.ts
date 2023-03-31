import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ListCountOrderByAggregateInputObjectSchema } from './ListCountOrderByAggregateInput.schema';
import { ListAvgOrderByAggregateInputObjectSchema } from './ListAvgOrderByAggregateInput.schema';
import { ListMaxOrderByAggregateInputObjectSchema } from './ListMaxOrderByAggregateInput.schema';
import { ListMinOrderByAggregateInputObjectSchema } from './ListMinOrderByAggregateInput.schema';
import { ListSumOrderByAggregateInputObjectSchema } from './ListSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ListOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => ListCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => ListAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ListMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ListMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ListSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ListOrderByWithAggregationInputObjectSchema = Schema;
