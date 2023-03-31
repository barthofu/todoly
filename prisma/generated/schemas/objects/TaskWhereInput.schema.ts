import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { TaskRelationFilterObjectSchema } from './TaskRelationFilter.schema';
import { TaskListRelationFilterObjectSchema } from './TaskListRelationFilter.schema';
import { ListRelationFilterObjectSchema } from './ListRelationFilter.schema';
import { ListWhereInputObjectSchema } from './ListWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TaskWhereInputObjectSchema),
        z.lazy(() => TaskWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TaskWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TaskWhereInputObjectSchema),
        z.lazy(() => TaskWhereInputObjectSchema).array(),
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
    date: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    time: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    color: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    done: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    archived: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    parentId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    listId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    parent: z
      .union([
        z.lazy(() => TaskRelationFilterObjectSchema),
        z.lazy(() => TaskWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    children: z.lazy(() => TaskListRelationFilterObjectSchema).optional(),
    list: z
      .union([
        z.lazy(() => ListRelationFilterObjectSchema),
        z.lazy(() => ListWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const TaskWhereInputObjectSchema = Schema;
