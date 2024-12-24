import { pgTable, serial, text, integer } from 'drizzle-orm/pg-core';

export const users = pgTable('user', {
	id: serial('id').primaryKey(),
	age: integer('age')
});
