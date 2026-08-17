const fs = require('fs');
const path = require('path');

const projectRoot = __dirname;
const publicImages = path.join(projectRoot, 'public', 'images');
const publicVideos = path.join(projectRoot, 'public', 'videos');
const publicMusic = path.join(projectRoot, 'public', 'music');

[publicImages, publicVideos, publicMusic].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const files = fs.readdirSync(projectRoot);
const jpegs = files.filter(f => f.endsWith('.jpeg'));

jpegs.forEach((file, index) => {
  const destName = `birthday-0${index + 1}.jpg`;
  const srcPath = path.join(projectRoot, file);
  const destPath = path.join(publicImages, destName);
  fs.copyFileSync(srcPath, destPath);
  console.log(`Copied ${file} -> ${destName}`);
});
