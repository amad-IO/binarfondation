export const program = {
    name: 'program',
    title: 'Program & Event (Seminar/Volunteer)',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Nama Program',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'type',
            title: 'Jenis Program',
            type: 'string',
            options: {
                list: [
                    { title: 'Seminar', value: 'seminar' },
                    { title: 'Webinar', value: 'webinar' },
                    { title: 'Open Volunteer', value: 'volunteer' },
                    { title: 'Lainnya', value: 'lainnya' }
                ],
                layout: 'radio'
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'description',
            title: 'Deskripsi Singkat',
            type: 'text',
            validation: Rule => Rule.required()
        },
        {
            name: 'poster',
            title: 'Poster / Gambar Program',
            type: 'image',
            options: { hotspot: true },
            validation: Rule => Rule.required()
        },
        {
            name: 'date',
            title: 'Tanggal Pelaksanaan / Deadline',
            type: 'datetime'
        },
        {
            name: 'registrationLink',
            title: 'Link Pendaftaran (Tally.so / GForm)',
            type: 'url'
        },
        {
            name: 'isActive',
            title: 'Status Aktif (Tampil di Web?)',
            type: 'boolean',
            initialValue: true
        }
    ]
}
