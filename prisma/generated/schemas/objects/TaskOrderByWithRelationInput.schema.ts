import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TaskOrderByRelationAggregateInputObjectSchema } from './TaskOrderByRelationAggregateInput.schema';
import { ListOrderByWithRelationInputObjectSchema } from './ListOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskOrderByWithRelationInput> = z
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
    parent: z.lazy(() => TaskOrderByWithRelationInputObjectSchema).optional(),
    children: z
      .lazy(() => TaskOrderByRelationAggregateInputObjectSchema)
      .optional(),
    list: z.lazy(() => ListOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const TaskOrderByWithRelationInputObjectSchema = Schema;
