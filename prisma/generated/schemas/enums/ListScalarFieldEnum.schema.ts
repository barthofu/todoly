import { z } from 'zod';

export const ListScalarFieldEnumSchema = z.enum([
  'id',
  'title',
  'description',
  'position',
]);
