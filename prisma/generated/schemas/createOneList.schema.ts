import { z } from 'zod';
import { ListCreateInputObjectSchema } from './objects/ListCreateInput.schema';
import { ListUncheckedCreateInputObjectSchema } from './objects/ListUncheckedCreateInput.schema';

export const ListCreateOneSchema = z.object({
  data: z.union([
    ListCreateInputObjectSchema,
    ListUncheckedCreateInputObjectSchema,
  ]),
});
