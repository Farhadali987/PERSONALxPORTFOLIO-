const { execSync } = require('child_process')
const path = require('path')

try {
  console.log('Generating Prisma client...')
  const result = execSync('node node_modules/@prisma/client/runtime/library.js --generate', {
    cwd: path.join(__dirname),
    encoding: 'utf8',
    stdio: 'inherit'
  })
  console.log('Prisma client generated successfully!')
} catch (error) {
  console.log('Note: Prisma generation might need manual run with: npx prisma generate')
}
