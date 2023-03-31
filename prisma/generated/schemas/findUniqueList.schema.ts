import { z } from 'zod';
import { ListWhereUniqueInputObjectSchema } from './objects/ListWhereUniqueInput.schema';

export const ListFindUniqueSchema = z.object({
  where: ListWhereUniqueInputObjectSchema,
});
