| Raden Rizki | 2141720064 | TI - 3C | 13 |

## Praktikum 1: Instalasi Redux dan bootstrap

### Langkah 1: Membuat Proyek Baru

![gambar-praktikum](../pbf-pertemuan-06/img/praktikum_1_langkah_1.png)

### Langkah 2: Menginstall Bootstrap

```bash
npm install bootstrap
```

![gambar-praktikum](../pbf-pertemuan-06/img/praktikum_1_langkah_2.png)

### Langkah 3: Memperbarui file _app.tsx di pages

![gambar-praktikum](../pbf-pertemuan-06/img/praktikum_1_langkah_3.png)

### Langkah 4: Memperbarui file index.tsx di pages

![gambar-praktikum](../pbf-pertemuan-06/img/praktikum_1_langkah_4_1.png)

![gambar-praktikum](../pbf-pertemuan-06/img/praktikum_1_langkah_4_2.png)

Laman menampilkan content baru sesuai dengan perbaruan yang sudah ditambahkan kedalam file pages/index.tsx, sehingga saat ini hanya button dan text yang ditampilkan berupa pop up dilaman browser ketika button diklik.

## Praktikum 2: Contoh Login dengan Redux

### Langkah 1: Menginstall redux-toolkit dan redux-persistent

```bash
npm i --save redux-persist react-redux @reduxjs/toolkit 
```

![gambar-praktikum](../pbf-pertemuan-06/img/praktikum_2_langkah_1.png)

### Langkah 2: Menginstall wrapper untuk redux di next.js

```bash
npm i --save next-redux-wrapper
```

![gambar-praktikum](../pbf-pertemuan-06/img/praktikum_2_langkah_2.png)

### Langkah 3: Menggunakan html parser yang ada di react

```bash
npm install html-react-parser
```

![gambar-praktikum](../pbf-pertemuan-06/img/praktikum_2_langkah_3.png)

### Langkah 4: Mengecek package.json

![gambar-praktikum](../pbf-pertemuan-06/img/praktikum_2_langkah_4.png)

### Langkah 5: Membuat file redux/auth/authSlice.js

![gambar-praktikum](../pbf-pertemuan-06/img/praktikum_2_langkah_5.png)

### Langkah 6: Membuat file redux/store/store.js

![gambar-praktikum](../pbf-pertemuan-06/img/praktikum_2_langkah_6.png)

### Langkah 7: Membuat file .env.local

![gambar-praktikum](../pbf-pertemuan-06/img/praktikum_2_langkah_7.png)

### Langkah 8: Membuat file pages/login.tsx

![gambar-praktikum](../pbf-pertemuan-06/img/praktikum_2_langkah_8_1.png)

![gambar-praktikum](../pbf-pertemuan-06/img/praktikum_2_langkah_8_2.png)

Terjadi saat mengakses /login, sehingga perlu memberbarui file _app.tsx

![gambar-praktikum](../pbf-pertemuan-06/img/praktikum_2_langkah_8_error.png)

![gambar-praktikum](../pbf-pertemuan-06/img/praktikum_2_langkah_8_3.png)

![gambar-praktikum](../pbf-pertemuan-06/img/praktikum_2_langkah_8_4.png)

![gambar-praktikum](../pbf-pertemuan-06/img/praktikum_2_langkah_8_5.png)

**Soal**

1. Coba akses http://localhost:3000/login, dan klik tombol login. Kemudian lakukan refresh page berkali-kali (jika perlu restart npm run dev nya). Simpulkan apa yang terjadi ?

Terjadi error ketika merefresh laman dalam keadaan sudah login sebagai berikut.

![gambar-praktikum](../pbf-pertemuan-06/img/praktikum_2_soal_1_error_1.png)

![gambar-praktikum](../pbf-pertemuan-06/img/praktikum_2_soal_1_error_2.png)


2. Baris 25 dan 30 terdapat method parse(), apa yang terjadi jika kita tidak menggunakan method tersebut?

![gambar-praktikum](../pbf-pertemuan-06/img/praktikum_2_soal_2_error_1.png)

Saat parse tidak digunakan, maka kode dalam parse sebelumnya akan dianggap sebagai string, bukan sintaks dari html, sehingga yang ditampilkan akan menjadi seperti gambar diatas.

## Praktikum 3: Membuat Aplikasi Counter Sederhana

### Langkah 1: Membuat file redux/counter/naikTurunSlice.js

![gambar-praktikum](../pbf-pertemuan-06/img/praktikum_3_langkah_1.png)

### Langkah 2: Modifikasi redux/store/store.js

![gambar-praktikum](../pbf-pertemuan-06/img/praktikum_3_langkah_2.png)

### Langkah 3: Membuat file baru pages/counter.tsx

![gambar-praktikum](../pbf-pertemuan-06/img/praktikum_3_langkah_3_1.png)

![gambar-praktikum](../pbf-pertemuan-06/img/praktikum_3_langkah_3_3.png)

![gambar-praktikum](../pbf-pertemuan-06/img/praktikum_3_langkah_3_2.png)
