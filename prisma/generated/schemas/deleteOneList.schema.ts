import { z } from 'zod';
import { ListWhereUniqueInputObjectSchema } from './objects/ListWhereUniqueInput.schema';

export const ListDeleteOneSchema = z.object({
  where: ListWhereUniqueInputObjectSchema,
});
