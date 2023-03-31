import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TaskCountOrderByAggregateInputObjectSchema } from './TaskCountOrderByAggregateInput.schema';
import { TaskAvgOrderByAggregateInputObjectSchema } from './TaskAvgOrderByAggregateInput.schema';
import { TaskMaxOrderByAggregateInputObjectSchema } from './TaskMaxOrderByAggregateInput.schema';
import { TaskMinOrderByAggregateInputObjectSchema } from './TaskMinOrderByAggregateInput.schema';
import { TaskSumOrderByAggregateInputObjectSchema } from './TaskSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    time: z.lazy(() => SortOrderSchema).optional(),
    color: z.lazy(() => SortOrderSchema).optional(),
    done: z.lazy(() => SortOrderSchema).optional(),
    archived: z.lazy(() => SortOrderSchema).optional(),
    parentId: z.lazy(() => SortOrderSchema).optional(),
    listId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => TaskCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => TaskAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => TaskMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => TaskMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => TaskSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const TaskOrderByWithAggregationInputObjectSchema = Schema;
