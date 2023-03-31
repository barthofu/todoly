import { z } from 'zod';

export const TaskScalarFieldEnumSchema = z.enum([
  'id',
  'title',
  'description',
  'date',
  'time',
  'color',
  'done',
  'archived',
  'parentId',
  'listId',
]);
