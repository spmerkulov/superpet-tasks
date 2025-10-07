import { defineCollection, z } from "astro:content";

const taskCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
	}),
});

export const collections = {
	task: taskCollection,
};
