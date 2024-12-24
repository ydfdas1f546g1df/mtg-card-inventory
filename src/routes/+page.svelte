<script>
    import { db } from '$lib/server/db';
    import { sql } from 'drizzle-orm';

    async function testConnection() {
        const result = await db.execute(sql`SELECT 1 AS test`);
        console.log('Database connection test result:', result);
    }

    testConnection().catch(console.error);

</script>