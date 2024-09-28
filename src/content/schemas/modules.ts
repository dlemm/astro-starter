import { z } from "astro:content";

export const heroSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  image: z.string().url(),
  buttonText: z.string().optional(),
  buttonLink: z.string().url().optional(),
});

export const textSchema = z.object({
  title: z.string(), // Titel des Text-Moduls
  id: z.string(), // ID, um den Textinhalt eindeutig zu identifizieren
  reference: z.string(), // Referenz auf die externe Datei
});
