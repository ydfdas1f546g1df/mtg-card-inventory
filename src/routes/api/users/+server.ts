import { json } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { users } from '$lib/server/db/schema';

export async function GET() {
    const result = await db.select().from(users);
    return json(result);
}