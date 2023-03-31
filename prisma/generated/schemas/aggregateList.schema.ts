import { z } from 'zod';
import { ListOrderByWithRelationInputObjectSchema } from './objects/ListOrderByWithRelationInput.schema';
import { ListWhereInputObjectSchema } from './objects/ListWhereInput.schema';
import { ListWhereUniqueInputObjectSchema } from './objects/ListWhereUniqueInput.schema';
import { ListCountAggregateInputObjectSchema } from './objects/ListCountAggregateInput.schema';
import { ListMinAggregateInputObjectSchema } from './objects/ListMinAggregateInput.schema';
import { ListMaxAggregateInputObjectSchema } from './objects/ListMaxAggregateInput.schema';
import { ListAvgAggregateInputObjectSchema } from './objects/ListAvgAggregateInput.schema';
import { ListSumAggregateInputObjectSchema } from './objects/ListSumAggregateInput.schema';

export const ListAggregateSchema = z.object({
  orderBy: z
    .union([
      ListOrderByWithRelationInputObjectSchema,
      ListOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ListWhereInputObjectSchema.optional(),
  cursor: ListWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ListCountAggregateInputObjectSchema])
    .optional(),
  _min: ListMinAggregateInputObjectSchema.optional(),
  _max: ListMaxAggregateInputObjectSchema.optional(),
  _avg: ListAvgAggregateInputObjectSchema.optional(),
  _sum: ListSumAggregateInputObjectSchema.optional(),
});
