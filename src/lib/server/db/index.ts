import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

if (!process.env.DATABASE_URL){
    throw new Error('DATABASE_URL is not set');
}
const client = postgres(process.env.DATABASE_URL);
export const db = drizzle(client);