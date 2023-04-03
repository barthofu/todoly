import { z } from 'zod';

export const TaskScalarFieldEnumSchema = z.enum([
  'id',
  'title',
  'notes',
  'date',
  'time',
  'color',
  'completed',
  'archived',
  'parentId',
  'listId',
]);
