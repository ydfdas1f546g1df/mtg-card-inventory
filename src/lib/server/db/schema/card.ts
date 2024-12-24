import * as t from 'drizzle-orm/pg-core';
import {cardCategories, colors, timestamps} from "$lib/server/db/schema/library";

export const languages = t.pgTable(
    'languages',
    {
        id: t.uuid('id').primaryKey().default('gen_random_uuid()'),
        name: t.text('name').notNull(),
        ...timestamps
    }
)
// Example: KLD, AER, etc.
export const releaseTag = t.pgTable(
    'release_tag',
    {
        id: t.uuid('id').primaryKey().default('gen_random_uuid()'),
        name: t.text('name').notNull(),
        ...timestamps
    }
)

export const card = t.pgTable(
    'card',
    {
        id: t.uuid('id').primaryKey().default('gen_random_uuid()'),
        name: t.text('name').notNull(),
        description: t.text('description'),
        language: t.uuid('language').notNull().references(() => languages.id),
        picture_url: t.varchar('picture_url'),
        releaseTag: t.uuid('releaseTag').notNull().references(() => releaseTag.id),
        category: cardCategories('type').notNull().default('creature'),
        attack: t.integer('attack').default(0),
        defense: t.integer('defense').default(0),
        ...timestamps
    }
)

// Example: Vehicle, Cat, Human, etc.
export const cardTypes = t.pgTable(
    'card_types',
    {
        id: t.uuid('id').primaryKey().default('gen_random_uuid()'),
        name: t.text('name').notNull(),
        ...timestamps
    }
)

export const attribute = t.pgTable(
    'attribute',
    {
        id: t.uuid('id').primaryKey().default('gen_random_uuid()'),
        name: t.text('name').notNull(),
        ...timestamps
    }
)

export const action = t.pgTable(
    'action',
    {
        id: t.uuid('id').primaryKey().default('gen_random_uuid()'),
        description: t.text('description'),
        ...timestamps
    }
)



// JOINS

export const cardColorJoin = t.pgTable(
    'card_color_join',
    {
        card_id: t.uuid('card_id').notNull(),
        color_id: t.uuid('color_id').notNull(),
        ...timestamps
    }
)

export const cardCostJoin = t.pgTable(
    'card_cost_join',
    {
        card_id: t.uuid('card_id').notNull(),
        cost_id: t.integer('cost_id').notNull().default(0),
        color: colors('color').notNull().default('colorless'),
        ...timestamps
    }
)

export const cardAttributeJoin = t.pgTable(
    'card_attribute_join',
    {
        card_id: t.uuid('card_id').notNull(),
        attribute_id: t.uuid('attribute_id').notNull(),
        ...timestamps
    }
)

export const cardActionJoin = t.pgTable(
    'card_action_join',
    {
        card_id: t.uuid('card_id').notNull(),
        action_id: t.uuid('action_id').notNull(),
        ...timestamps
    }
)

