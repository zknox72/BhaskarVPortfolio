import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
	publications: defineCollection({
		// Load JSON files in the src/content/publications directory.
		loader: glob({ base: './src/content/publications', pattern: '**/*.json' }),
		schema: z.object({
			journal: z.array(z.object({
				id: z.string(),
				title: z.string(),
				authors: z.string(),
				journal: z.string(),
				year: z.number(),
				type: z.string(),
			})).optional(),
			conference: z.array(z.object({
				id: z.string(),
				title: z.string(),
				authors: z.string(),
				journal: z.string(),
				year: z.number(),
				type: z.string(),
			})).optional(),
			preparation: z.array(z.object({
				id: z.string(),
				title: z.string(),
				type: z.string(),
			})).optional(),
		}),
	}),
	research: defineCollection({
		// Load JSON files in the src/content/research directory.
		loader: glob({ base: './src/content/research', pattern: '**/*.json' }),
		schema: z.object({
			overview: z.object({
				intro: z.string(),
				pillars: z.array(z.object({
					title: z.string(),
					description: z.string(),
				})),
				coreAreas: z.array(z.object({
					title: z.string(),
					description: z.string(),
				})),
			}).optional(),
			ongoing: z.array(z.object({
				id: z.string(),
				title: z.string(),
				description: z.string(),
				highlights: z.array(z.string()),
			})).optional(),
			longterm: z.array(z.object({
				id: z.string(),
				title: z.string(),
				subtitle: z.string(),
				badge: z.string(),
				description: z.string(),
				approach: z.array(z.string()),
				applications: z.string(),
			})).optional(),
			secondary: z.array(z.object({
				title: z.string(),
				description: z.string(),
			})).optional(),
		}),
	}),
};
