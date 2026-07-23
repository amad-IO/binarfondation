const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'public/logo kolaborasi');
const outputDir = path.join(__dirname, 'public/logos-compressed');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdir(inputDir, (err, files) => {
  if (err) throw err;

  files.forEach(file => {
    const ext = path.extname(file).toLowerCase();
    if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
      const inputFile = path.join(inputDir, file);
      // Change extension to .webp
      const outputFile = path.join(outputDir, file.replace(ext, '.webp'));

      // Compress, resize down a bit if it's too large, and convert to webp
      sharp(inputFile)
        .resize({ width: 300, withoutEnlargement: true }) // resize to a reasonable width for logos
        .webp({ quality: 80 })
        .toFile(outputFile)
        .then(info => console.log(`Compressed ${file} to WEBP (${info.size} bytes)`))
        .catch(err => console.error(`Error processing ${file}:`, err));
    }
  });
});
