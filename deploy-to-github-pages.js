// Script để hỗ trợ việc build cho GitHub Pages
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Tạo thư mục dist nếu nó không tồn tại
if (!fs.existsSync('./dist')) {
  fs.mkdirSync('./dist');
}

// Build dự án với cấu hình GitHub Pages
console.log('Building project for GitHub Pages...');
try {
  execSync('vite build --config vite.github-pages.config.js', { stdio: 'inherit' });
  console.log('Build completed successfully!');
  
  // Tạo file .nojekyll để ngăn GitHub Pages sử dụng Jekyll
  fs.writeFileSync('./dist/.nojekyll', '');
  console.log('Created .nojekyll file to prevent Jekyll processing');
  
  // Tạo file 404.html để hỗ trợ routing cho SPA
  const indexHtmlContent = fs.readFileSync('./dist/index.html', 'utf-8');
  fs.writeFileSync('./dist/404.html', indexHtmlContent);
  console.log('Created 404.html for SPA routing support');
  
  console.log('\nYour project is ready for GitHub Pages!');
  console.log('Follow these steps to deploy:');
  console.log('1. Push the dist folder to a GitHub repository.');
  console.log('2. Go to your repository Settings > Pages');
  console.log('3. Select "Deploy from a branch" and choose "main" or "master" and "/docs" folder');
  console.log('   Or use GitHub Actions for deployment.');
  console.log('\nNote: If the repo name is different from "portfolio", update the "base" field in vite.github-pages.config.js.');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}