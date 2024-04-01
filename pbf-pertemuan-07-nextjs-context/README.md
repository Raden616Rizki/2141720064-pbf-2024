| Raden Rizki | 2141720064 | TI - 3C | 13 |

## Praktikum 1: Membuat Variasi Ukuran Teks Heading dengan Context

### Langkah 1: Buat project baru dan repo baru di GitHub

```bash
npx create-next-app pbf-pertemuan-07-nextjs-context
```

![gambar-praktikum](../pbf-pertemuan-07-nextjs-context/img/praktikum_1_langkah_1.png)

### Langkah 2: Buat struktur folder dengan prinsip [atomic design](https://bradfrost.com/blog/post/atomic-web-design/)

![gambar-praktikum](../pbf-pertemuan-07-nextjs-context/img/praktikum_1_langkah_2.png)

### Langkah 3: Buat komponen atom baru

![gambar-praktikum](../pbf-pertemuan-07-nextjs-context/img/praktikum_1_langkah_3_1.png)

![gambar-praktikum](../pbf-pertemuan-07-nextjs-context/img/praktikum_1_langkah_3_2.png)

![gambar-praktikum](../pbf-pertemuan-07-nextjs-context/img/praktikum_1_langkah_3_3.png)

### Langkah 4: Ubah isi kode page.tsx dan run

![gambar-praktikum](../pbf-pertemuan-07-nextjs-context/img/praktikum_1_langkah_4_1.png)

![gambar-praktikum](../pbf-pertemuan-07-nextjs-context/img/praktikum_1_langkah_4_error_1.png)

![gambar-praktikum](../pbf-pertemuan-07-nextjs-context/img/praktikum_1_langkah_4_error_1_solved.png)

**Soal 1**
Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?

![gambar-praktikum](../pbf-pertemuan-07-nextjs-context/img/praktikum_1_langkah_4_2.png)

Dengan menggunakan atomic design ini, struktur penulisan kode untuk sintaks lebih mudah digunakan dan untuk component yang memiliki struktur yang mirip ataupun class yang sama dapat menggunakan function component yang sudah dibuat tanpa harus menulis kode yang sama berulang kali, hanya perlu memasukkan parameter untuk kedinamisan tampilkan yang dihasilkan dari kode yang dibuat. Tampilan laman yang ditampilkan dapat seperti hasil dari kode html yang umum digunakan, dengan variasi penggunaan heading.
