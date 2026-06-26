import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

// Copy user logo to assets
try {
  const srcImg = 'C:/Users/MAHAJAN ASHOK/.gemini/antigravity-ide/brain/a60494e6-ce49-4d34-83fe-3e57e415e61a/media__1782460549338.jpg'
  const destDir = path.resolve(__dirname, 'src/assets')
  const destImg = path.resolve(destDir, 'logo.jpg')
  fs.writeFileSync('copy-log.txt', `Running copy from ${srcImg} to ${destImg}\n`)
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true })
  }
  if (fs.existsSync(srcImg)) {
    fs.copyFileSync(srcImg, destImg)
    fs.appendFileSync('copy-log.txt', 'Successfully copied logo image to src/assets.\n')
  } else {
    fs.appendFileSync('copy-log.txt', `Source image not found: ${srcImg}\n`)
  }
} catch (e) {
  fs.writeFileSync('copy-log.txt', `Error: ${e.message}\n${e.stack}\n`)
}


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
