import { defineCollection, z } from "astro:content";

const components = defineCollection({
    type: "content",
    schema: ({ image }) => z.object({
        name: z.string()
    })
})

export const collections = {
    components
}