#!/usr/bin/env node
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const prismaDir = path.join(__dirname, '..', 'node_modules', 'prisma')
const binPath = path.join(prismaDir, 'build', 'index.js')

console.log('Checking Prisma installation...')

if (!fs.existsSync(binPath)) {
  console.log('Prisma CLI not found, installing...')
  try {
    execSync('npm install prisma@5.10.0 --save-dev', { 
      cwd: path.join(__dirname, '..'),
      stdio: 'inherit' 
    })
  } catch (e) {
    console.log('Could not install Prisma. Will try to continue...')
  }
}

try {
  console.log('Generating Prisma client...')
  execSync('npx prisma generate', { 
    cwd: path.join(__dirname, '..'),
    stdio: 'inherit',
    env: { ...process.env, FORCE_COLOR: '1' }
  })
  console.log('✓ Prisma client generated!')
} catch (e) {
  console.log('Note: You may need to run "npx prisma generate" manually')
}

try {
  console.log('Pushing schema to database...')
  execSync('npx prisma db push --accept-data-loss', { 
    cwd: path.join(__dirname, '..'),
    stdio: 'inherit',
    env: { ...process.env, FORCE_COLOR: '1' }
  })
  console.log('✓ Database schema pushed!')
} catch (e) {
  console.log('Note: You may need to run "npx prisma db push" manually')
}

try {
  console.log('Seeding database...')
  execSync('npx tsx prisma/seed.ts', { 
    cwd: path.join(__dirname, '..'),
    stdio: 'inherit',
    env: { ...process.env, FORCE_COLOR: '1' }
  })
  console.log('✓ Database seeded!')
} catch (e) {
  console.log('Note: You may need to run "npm run db:seed" manually')
}

console.log('\n✓ Setup complete!')
