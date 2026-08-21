export const gallery = {
    name: 'gallery',
    title: 'Galeri Dokumentasi',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Nama Kegiatan / Album',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'date',
            title: 'Tanggal Kegiatan',
            type: 'date'
        },
        {
            name: 'order',
            title: 'Urutan Tampil',
            type: 'number',
            description: 'Angka urutan (contoh: 1 untuk paling atas/pertama). Kosongkan untuk urutan berdasarkan tanggal.',
        },
        {
            name: 'images',
            title: 'Foto-foto Kegiatan',
            type: 'array',
            of: [{ 
                type: 'image', 
                options: { hotspot: true },
                fields: [
                    {
                        name: 'caption',
                        type: 'string',
                        title: 'Caption / Detail Kegiatan',
                        description: 'Penjelasan singkat tentang foto ini',
                        options: {
                            isHighlighted: true // This makes the field easily accessible in the Sanity Studio
                        }
                    }
                ]
            }],
            options: {
                layout: 'grid'
            },
            validation: Rule => Rule.required().min(1)
        }
    ]
}
