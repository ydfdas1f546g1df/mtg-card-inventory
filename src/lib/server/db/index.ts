import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import dotenv from 'dotenv';

// Load the DATABASE_URL from the environment variable file .env
dotenv.config();

if (!process.env.DATABASE_URL){
    throw new Error('DATABASE_URL is not set');
}
const client = postgres(process.env.DATABASE_URL);
export const db = drizzle(client);