import { timestamp } from 'drizzle-orm/pg-core'
import * as t from "drizzle-orm/pg-core";

export const timestamps = {
    updated_at: timestamp("updated_at"),
    created_at: timestamp("created_at").defaultNow().notNull(),
    deleted_at: timestamp("deleted_at"),
}

export const cardCategories = t.pgEnum(
    'card_type',
    [
        'creature',
        'spell',
        'enchantment',
        'artifact',
        'land'
    ]
)

export const colors = t.pgEnum(
    'colors',
    [
        'red',
        'green',
        'blue',
        'black',
        'white',
        'colorless'
    ]
)