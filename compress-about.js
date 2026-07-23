import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = path.resolve('public');
const outputDir = path.resolve('public');

const files = [
    { in: '1.JPG', out: '1.webp' },
    { in: '2.JPG', out: '2.webp' },
    { in: '3.JPG', out: '3.webp' }
];

async function processImages() {
    for (const file of files) {
        const inputPath = path.join(inputDir, file.in);
        const outputPath = path.join(outputDir, file.out);
        
        if (fs.existsSync(inputPath)) {
            try {
                await sharp(inputPath)
                    .resize({ width: 800, withoutEnlargement: true })
                    .webp({ quality: 80 })
                    .toFile(outputPath);
                console.log(`Compressed: ${file.in} -> ${file.out}`);
            } catch (err) {
                console.error(`Error processing ${file.in}:`, err);
            }
        } else {
            console.log(`File not found: ${inputPath}`);
        }
    }
}

processImages();
