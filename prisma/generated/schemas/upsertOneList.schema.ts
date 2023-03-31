import { z } from 'zod';
import { ListWhereUniqueInputObjectSchema } from './objects/ListWhereUniqueInput.schema';
import { ListCreateInputObjectSchema } from './objects/ListCreateInput.schema';
import { ListUncheckedCreateInputObjectSchema } from './objects/ListUncheckedCreateInput.schema';
import { ListUpdateInputObjectSchema } from './objects/ListUpdateInput.schema';
import { ListUncheckedUpdateInputObjectSchema } from './objects/ListUncheckedUpdateInput.schema';

export const ListUpsertSchema = z.object({
  where: ListWhereUniqueInputObjectSchema,
  create: z.union([
    ListCreateInputObjectSchema,
    ListUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ListUpdateInputObjectSchema,
    ListUncheckedUpdateInputObjectSchema,
  ]),
});
