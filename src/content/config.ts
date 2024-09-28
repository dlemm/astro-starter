import { defineCollection, z } from "astro:content";
import { heroSchema, textSchema } from "./schemas/modules.ts";

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    hero: heroSchema,
    text: textSchema.optional(),
  }),
});

const text = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    id: z.string(),
  }),
});

export const collections = {
  pages,
  text,
};
