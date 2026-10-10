// データベースの表の設計（Drizzle）。まだNeonにはつないでいない。
import { pgTable, serial, text, integer, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(), // 早稲田のメールアドレス
  name: text("name"),
});

export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  teacher: text("teacher").notNull(),
  faculty: text("faculty").notNull(),
  day: text("day").notNull(),
  period: integer("period").notNull(),
});

export const reviews = pgTable("reviews", {
  id: serial("id").primaryKey(),
  courseId: integer("course_id").notNull().references(() => courses.id),
  userId: integer("user_id").notNull().references(() => users.id),
  easy: integer("easy").notNull(), // 単位の取りやすさ（1〜5）
  text: text("text").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
