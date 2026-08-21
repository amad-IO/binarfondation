import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = path.resolve('public');
const outputDir = path.resolve('public/divisions-compressed');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const files = [
    'bi-main.jpg',
    'teman-sembuh.JPG',
    'teman-tumbuh.JPG',
    'med-u.JPG',
    'binar-goes-to-you.jpg'
];

async function processImages() {
    for (const file of files) {
        const inputPath = path.join(inputDir, file);
        if (fs.existsSync(inputPath)) {
            const basename = path.basename(file, path.extname(file)).toLowerCase();
            const outputPath = path.join(outputDir, `${basename}.webp`);
            
            try {
                await sharp(inputPath)
                    .resize({ width: 800, withoutEnlargement: true }) // reasonable size for web carousel
                    .webp({ quality: 80 })
                    .toFile(outputPath);
                console.log(`Compressed: ${file} -> ${basename}.webp`);
            } catch (err) {
                console.error(`Error processing ${file}:`, err);
            }
        } else {
            console.log(`File not found: ${inputPath}`);
        }
    }
}

processImages();
