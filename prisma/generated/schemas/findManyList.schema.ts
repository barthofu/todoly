import { z } from 'zod';
import { ListOrderByWithRelationInputObjectSchema } from './objects/ListOrderByWithRelationInput.schema';
import { ListWhereInputObjectSchema } from './objects/ListWhereInput.schema';
import { ListWhereUniqueInputObjectSchema } from './objects/ListWhereUniqueInput.schema';
import { ListScalarFieldEnumSchema } from './enums/ListScalarFieldEnum.schema';

export const ListFindManySchema = z.object({
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
  distinct: z.array(ListScalarFieldEnumSchema).optional(),
});
