import { defineConfig } from "astro/config"
import wikiLinkPlugin from "@flowershow/remark-wiki-link"

// https://astro.build/config
export default defineConfig({
  markdown: {
    // Applied to .md and .mdx files
    remarkPlugins: [wikiLinkPlugin],
  },
})
