export const collaboration = {
    name: 'collaboration',
    title: 'Logo Kolaborasi & Mitra',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Nama Mitra / Universitas / Komunitas',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'logo',
            title: 'Logo Mitra',
            type: 'image',
            options: { hotspot: true },
            validation: Rule => Rule.required()
        },
        {
            name: 'link',
            title: 'Link Website/Instagram Mitra (Opsional)',
            type: 'url'
        }
    ]
}
