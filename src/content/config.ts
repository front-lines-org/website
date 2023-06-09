import { defineCollection, z } from 'astro:content';
import dayjs from 'dayjs';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		subject: z.string().optional(),
		title: z.string().optional(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(+dayjs(val))),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		img: z.string().optional(),
		shortDescription: z.string().optional(),
		author: z.string().optional(),
		tags: z.string().or(z.string().array()).optional()
	}),
});

export const collections = { blog };
