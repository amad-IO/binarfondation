import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'financialReport',
  title: 'Laporan Keuangan',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Laporan',
      type: 'string',
      description: 'Contoh: Laporan Keuangan Agustus 2026',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'chapter',
      title: 'Pilih Chapter',
      type: 'string',
      options: {
        list: [
          { title: 'Binar Pusat', value: 'pusat' },
          { title: 'Chapter Jawa Timur', value: 'jatim' },
          { title: 'Chapter Riau', value: 'riau' },
        ],
        layout: 'radio'
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'month',
      title: 'Bulan',
      type: 'number',
      description: 'Pilih bulan laporan (1 - 12)',
      options: {
        list: [
          { title: 'Januari', value: 1 },
          { title: 'Februari', value: 2 },
          { title: 'Maret', value: 3 },
          { title: 'April', value: 4 },
          { title: 'Mei', value: 5 },
          { title: 'Juni', value: 6 },
          { title: 'Juli', value: 7 },
          { title: 'Agustus', value: 8 },
          { title: 'September', value: 9 },
          { title: 'Oktober', value: 10 },
          { title: 'November', value: 11 },
          { title: 'Desember', value: 12 },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Tahun',
      type: 'number',
      description: 'Tahun laporan (contoh: 2026)',
      validation: (Rule) => Rule.required().min(2020).max(2100),
    }),
    defineField({
      name: 'income',
      title: 'Total Pemasukan (Rp)',
      type: 'number',
      description: 'Contoh: 5000000 (tanpa titik)',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'expense',
      title: 'Total Pengeluaran (Rp)',
      type: 'number',
      description: 'Contoh: 3500000 (tanpa titik)',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'notes',
      title: 'Detail Penggunaan Dana',
      type: 'text',
      description: 'Jelaskan secara singkat dana tersebut digunakan untuk program atau keperluan apa saja.',
    }),
    defineField({
      name: 'reportFile',
      title: 'File Laporan Lengkap / PDF (Opsional)',
      type: 'file',
      description: 'Unggah file PDF laporan jika ada',
      options: {
        accept: 'application/pdf',
      }
    }),
  ],
  preview: {
    select: {
      title: 'title',
      income: 'income',
      expense: 'expense',
    },
    prepare(selection) {
      const { title, income, expense } = selection
      return {
        title: title,
        subtitle: `Masuk: Rp${income?.toLocaleString('id-ID')} | Keluar: Rp${expense?.toLocaleString('id-ID')}`,
      }
    },
  },
})
