import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    subcategory: z.string().optional(),
    description: z.string(),
    tags: z.array(z.string()),
    difficulty: z.enum(['basic', 'intermediate', 'advanced']),
    lastUpdated: z.string(),
    author: z.string().optional(),
    featuredImage: z.string().optional(),
    references: z.array(z.object({
      title: z.string(),
      authors: z.string(),
      journal: z.string(),
      year: z.number(),
      doi: z.string().optional(),
      pmid: z.string().optional(),
    })).optional(),
  }),
});

export const collections = { articles };
