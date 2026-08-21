import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'sqzxcjql',
    dataset: 'production',
    useCdn: false, // Disabled CDN during development for fresh data
    apiVersion: '2024-03-01', // Use current date for api version
});

const builder = imageUrlBuilder(client);

// Helper function to get image URLs easily
export const urlFor = (source) => {
    return builder.image(source);
};
