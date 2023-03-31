import { z } from 'zod';
import { TaskWhereInputObjectSchema } from './TaskWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskRelationFilter> = z
  .object({
    is: z
      .lazy(() => TaskWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => TaskWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const TaskRelationFilterObjectSchema = Schema;
