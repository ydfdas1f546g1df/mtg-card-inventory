import { db } from '$lib/server/db'
import {card} from "$lib/server/db/schema/card";

async function getAllCards() {
    return db.select().from(card)
}

export async function GET() {
    return new Response(JSON.stringify(await getAllCards()),
        {
            headers: {
                'Content-Type': 'application/json'
            },
            status: 200
        }
    )
}

export async function POST() {
    return new Response("Not implemented",
        {
            headers: {
                'Content-Type': 'application/json'
            },
            status: 418
        }
    )
}

export async function PATCH() {
    return new Response("Not implemented",
        {
            headers: {
                'Content-Type': 'application/json'
            },
            status: 418
        }
    )
}

export async function DELETE() {
    return new Response("Not implemented",
        {
            headers: {
                'Content-Type': 'application/json'
            },
            status: 418
        }
    )
}

export async function HEAD() {
    return new Response("Working",
        {
            headers: {
                'Content-Type': 'text/plain'
            },
            status: 200
        }
    )
}