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

![gambar-praktikum](../pbf-pertemuan-07-laravel-nextjs/img/praktikum_1_langkah_6.png)

### Langkah 7: Menambahkan Mass Assignment

![gambar-praktikum](../pbf-pertemuan-07-laravel-nextjs/img/praktikum_1_langkah_7.png)

### Langkah 8: Menjalankan Storage Link

```bash
php artisan storage:link
```

![gambar-praktikum](../pbf-pertemuan-07-laravel-nextjs/img/praktikum_1_langkah_8.png)

## Praktikum 2: Membuat API Resources

### Langkah 1: Membuat API Resources

```bash
php artisan make:resource PostResource
```

![gambar-praktikum](../pbf-pertemuan-07-laravel-nextjs/img/praktikum_2_langkah_1.png)

### Langkah 2: Melakukan Custom API Resources

![gambar-praktikum](../pbf-pertemuan-07-laravel-nextjs/img/praktikum_2_langkah_2.png)

## Praktikum 3: Menampilkan Data dari Database

### Langkah 1: Membuat Controller

```bash
php artisan make:controller Api/PostController
```

![gambar-praktikum](../pbf-pertemuan-07-laravel-nextjs/img/praktikum_3_langkah_1.png)

### Langkah 2: Membuat Route API Resource

```bash
php artisan install:api
```

![gambar-praktikum](../pbf-pertemuan-07-laravel-nextjs/img/praktikum_3_langkah_2_1.png)

```bash
php artisan route:list
```

![gambar-praktikum](../pbf-pertemuan-07-laravel-nextjs/img/praktikum_3_langkah_2_2.png)

### Langkah 3: Uji Coba Rest API

![gambar-praktikum](../pbf-pertemuan-07-laravel-nextjs/img/praktikum_3_langkah_3.png)

## Praktikum 4: Insert Data ke Database

### Langkah 1: Menambahkan Method Store

![gambar-praktikum](../pbf-pertemuan-07-laravel-nextjs/img/praktikum_4_langkah_1_1.png)

![gambar-praktikum](../pbf-pertemuan-07-laravel-nextjs/img/praktikum_4_langkah_1_2.png)

### Langkah 2: Uji Coba Rest API

![gambar-praktikum](../pbf-pertemuan-07-laravel-nextjs/img/praktikum_4_langkah_2_1.png)

![gambar-praktikum](../pbf-pertemuan-07-laravel-nextjs/img/praktikum_4_langkah_2_2.png)

![gambar-praktikum](../pbf-pertemuan-07-laravel-nextjs/img/praktikum_4_langkah_2_3.png)

