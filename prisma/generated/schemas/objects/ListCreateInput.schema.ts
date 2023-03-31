import { z } from 'zod';
import { TaskCreateNestedManyWithoutListInputObjectSchema } from './TaskCreateNestedManyWithoutListInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ListCreateInput> = z
  .object({
    title: z.string(),
    description: z.string().optional().nullable(),
    tasks: z
      .lazy(() => TaskCreateNestedManyWithoutListInputObjectSchema)
      .optional(),
  })
  .strict();

export const ListCreateInputObjectSchema = Schema;
