import { z } from 'zod';
import { TaskUncheckedCreateNestedManyWithoutListInputObjectSchema } from './TaskUncheckedCreateNestedManyWithoutListInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ListUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    tasks: z
      .lazy(() => TaskUncheckedCreateNestedManyWithoutListInputObjectSchema)
      .optional(),
  })
  .strict();

export const ListUncheckedCreateInputObjectSchema = Schema;
