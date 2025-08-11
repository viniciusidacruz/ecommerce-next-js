import { relations } from "drizzle-orm";
import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const userTable = pgTable("users", {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type User = typeof userTable.$inferSelect;
export type InsertUser = typeof userTable.$inferInsert;

export const productTable = pgTable("products", {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  slug: text().notNull().unique(),
  description: text().notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  categoryId: uuid("category_id")
    .notNull()
    .references(() => categoryTable.id),
});

export const productRelations = relations(productTable, ({ one, many }) => ({
  category: one(categoryTable, {
    fields: [productTable.categoryId],
    references: [categoryTable.id],
  }),
  variants: many(productVariantsTable),
}));

export const productVariantsTable = pgTable("product_variants", {
  id: uuid().primaryKey().defaultRandom(),
  productId: uuid("product_id")
    .notNull()
    .references(() => productTable.id),
  name: text().notNull(),
  color: text().notNull(),
  slug: text().notNull().unique(),
  imageUrl: text("image_url").notNull(),
  priceInCents: integer("price_in_cents").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const productVariantRelations = relations(
  productVariantsTable,
  ({ one }) => ({
    product: one(productTable, {
      fields: [productVariantsTable.productId],
      references: [productTable.id],
    }),
  }),
);

export type Product = typeof productTable.$inferSelect;
export type InsertProduct = typeof productTable.$inferInsert;

export const categoryTable = pgTable("categories", {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  slug: text().notNull().unique(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const categoryRelations = relations(categoryTable, ({ many }) => ({
  products: many(productTable),
}));

export type Category = typeof categoryTable.$inferSelect;
export type InsertCategory = typeof categoryTable.$inferInsert;
