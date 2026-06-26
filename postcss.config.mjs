import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

try {
  const __dirname = path.dirname(fileURLToPath(import.meta.url))
  const srcImg = 'C:/Users/MAHAJAN ASHOK/.gemini/antigravity-ide/brain/a60494e6-ce49-4d34-83fe-3e57e415e61a/media__1782460549338.jpg'
  const destImg = path.resolve(__dirname, 'logo.jpg')
  fs.writeFileSync('copy-log-postcss.txt', `Running from ${srcImg} to ${destImg}\n`)
  if (fs.existsSync(srcImg)) {
    fs.copyFileSync(srcImg, destImg)
    fs.appendFileSync('copy-log-postcss.txt', 'Success\n')
  } else {
    fs.appendFileSync('copy-log-postcss.txt', 'Source not found\n')
  }
} catch (e) {
  fs.writeFileSync('copy-log-postcss.txt', `Error: ${e.message}\n${e.stack}\n`)
}

export default {}
