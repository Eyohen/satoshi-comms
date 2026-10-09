import { defineConfig } from 'vite'
import { cpSync, mkdirSync, readdirSync, statSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'

const projectRoot = fileURLToPath(new URL('.', import.meta.url))
const designRoot = resolve(projectRoot, 'satoshi-comms-site')
const outputRoot = resolve(projectRoot, 'dist')

function copyRuntimeAssets() {
  return {
    name: 'copy-runtime-assets',
    closeBundle() {
      const copy = (source, destination) => {
        const sourcePath = resolve(designRoot, source)
        const destinationPath = resolve(outputRoot, destination)
        mkdirSync(resolve(destinationPath, '..'), { recursive: true })
        cpSync(sourcePath, destinationPath, { recursive: statSync(sourcePath).isDirectory() })
      }

      // site.js constructs these image URLs at runtime, so Rollup cannot infer
      // them from the HTML dependency graph.
      copy('site.js', 'site.js')
      for (const entry of readdirSync(designRoot)) {
        if (/\.(png|jpe?g|webp|gif|svg)$/i.test(entry)) copy(entry, entry)
      }
      for (const directory of ['assets', 'art', 'ba', 'mascot', 'pf', 'shot02', 'shot03']) {
        copy(directory, directory)
      }
    },
  }
}

export default defineConfig({
  // Serve the complete HTML design as the public site. This keeps index.html
  // as the landing page and preserves all of the design's relative links.
  root: 'satoshi-comms-site',
  plugins: [copyRuntimeAssets()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: resolve(designRoot, 'index.html'),
        work: resolve(designRoot, 'work.html'),
        services: resolve(designRoot, 'services.html'),
        about: resolve(designRoot, 'about.html'),
        contact: resolve(designRoot, 'contact.html'),
        notFound: resolve(designRoot, '404.html'),
        pamperPreview: resolve(designRoot, 'pf-preview/index.html'),
        akinPreview: resolve(designRoot, 'akin-preview/index.html'),
        lovingPreview: resolve(designRoot, 'lovin-preview/index.html'),
      },
    },
  },
})
