| Raden Rizki | 2141720064 | TI - 3C | 13 |

## Praktikum 1: Instalisasi Laravel

### Langkah 1: Membuat Proyek Laravel

```bash
composer create-project --prefer-dist laravel/laravel:^11.0 pbf-pertemuan-07-laravel-nextjs
```

![gambar-praktikum](../pbf-pertemuan-07-laravel-nextjs/img/praktikum_1_langkah_1.png)


### Langkah 2: Menjalankan Proyek

```bash
php artisan serve
```

![gambar-praktikum](../pbf-pertemuan-07-laravel-nextjs/img/praktikum_1_langkah_2.png)

### Langkah 3: Konfigurasi Koneksi Database

![gambar-praktikum](../pbf-pertemuan-07-laravel-nextjs/img/praktikum_1_langkah_3.png)

### Langkah 4: Membuat Database

![gambar-praktikum](../pbf-pertemuan-07-laravel-nextjs/img/praktikum_1_langkah_4.png)

### Langkah 5: Membuat Model dan Migration

```bash
php artisan make:model Post -m
```

![gambar-praktikum](../pbf-pertemuan-07-laravel-nextjs/img/praktikum_1_langkah_5_1.png)

![gambar-praktikum](../pbf-pertemuan-07-laravel-nextjs/img/praktikum_1_langkah_5_2.png)

### Langkah 6: Menjalankan Migration

```bash
php artisan migrate
```
