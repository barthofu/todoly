import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { TaskListRelationFilterObjectSchema } from './TaskListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ListWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ListWhereInputObjectSchema),
        z.lazy(() => ListWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ListWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ListWhereInputObjectSchema),
        z.lazy(() => ListWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    tasks: z.lazy(() => TaskListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const ListWhereInputObjectSchema = Schema;
