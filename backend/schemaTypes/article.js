export const article = {
    name: 'article',
    title: 'Artikel & Berita',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Judul Artikel',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug (URL)',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'mainImage',
            title: 'Gambar Utama (Cover)',
            type: 'image',
            options: {
                hotspot: true, // Allows admin to crop/focus image
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'publishedAt',
            title: 'Tanggal Terbit',
            type: 'datetime',
            validation: Rule => Rule.required()
        },
        {
            name: 'author',
            title: 'Penulis',
            type: 'string',
        },
        {
            name: 'body',
            title: 'Isi Artikel',
            type: 'array',
            of: [
                { type: 'block' },
                { type: 'image' }
            ]
        }
    ]
}
