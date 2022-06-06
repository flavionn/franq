import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import path from 'path'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'
import extractorPug from '@unocss/extractor-pug'
import { extractorSplit } from '@unocss/core'
import presetWebFonts from '@unocss/preset-web-fonts'
import presetWind from '@unocss/preset-wind'
import presetIcons from '@unocss/preset-icons'
import transformerDirective from '@unocss/transformer-directives'

const config = defineConfig({
	plugins: [
		Vue(),
		Pages(),
		Layouts(),
		Components({
			directoryAsNamespace: true,
		}),
		Unocss({
			presets: [
				presetWind(),
				presetIcons(),
				presetWebFonts({
					provider: 'google',
					fonts: {
						sans: 'Inter:400,500,600,700,800,900',
						serif: 'Lora',
					}
				})
			],
			extractors: [
				extractorPug(),
				extractorSplit,
			],
			transformers: [
				transformerDirective()
			]
		})
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		}
	},
	build: {
		target: 'esnext',
	}
})

export default config
