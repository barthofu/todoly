import { z } from 'zod';
import { ListUpdateInputObjectSchema } from './objects/ListUpdateInput.schema';
import { ListUncheckedUpdateInputObjectSchema } from './objects/ListUncheckedUpdateInput.schema';
import { ListWhereUniqueInputObjectSchema } from './objects/ListWhereUniqueInput.schema';

export const ListUpdateOneSchema = z.object({
  data: z.union([
    ListUpdateInputObjectSchema,
    ListUncheckedUpdateInputObjectSchema,
  ]),
  where: ListWhereUniqueInputObjectSchema,
});
