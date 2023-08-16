import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
	experimental: {
		assets: true
	},
	output: 'server',
	integrations: [preact(), react(), tailwind(), sitemap()]
})
