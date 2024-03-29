| Raden Rizki | 2141720064 | TI - 3C | 13 |

## Praktikum 1: Mendefinisikan Komponen

### Langkah 1: Buat Folder Baru

```bash
npx create-next-app
```

![gambar-praktikum](../pbf-pertemuan-03/img/praktikum-1-langkah-1.png)

### Langkah 2: Buat Komponen Baru

![gambar-praktikum](../pbf-pertemuan-03/img/praktikum-1-langkah-2.png)

### Langkah 3: Import Komponen

```bash
import Profile from "../app/components/profile";
```

![gambar-praktikum](../pbf-pertemuan-03/img/praktikum-1-langkah-3.png)

![gambar-praktikum](../pbf-pertemuan-03/img/praktikum-1-langkah-3-error.png)

**Soal 1**

Terdapat error saat menggunakan gambar dari url, untuk menyelesaikan permasalahan tersebut maka perlu ditambahkan domain dari gambar yang digunakan didalam file next.config.mjs terlebih dahulu, seperti kode berikut.

![gambar-praktikum](../pbf-pertemuan-03/img/praktikum-1-langkah-3-1.png)

![gambar-praktikum](../pbf-pertemuan-03/img/praktikum-1-langkah-3-2.png)

![gambar-praktikum](../pbf-pertemuan-03/img/praktikum-1-langkah-3-3.png)

## Praktikum 2: Mengimpor dan Mengekspor Komponen

### Langkah 1: Buat Komponen Baru

![gambar-praktikum](../pbf-pertemuan-03/img/praktikum-2-langkah-1.png)

### Langkah 2: Impor Komponen

```bash
import { Gallery } from "../app/components/gallery";
```

![gambar-praktikum](../pbf-pertemuan-03/img/praktikum-2-langkah-2.png)

**Soal 2**

Dari kode yang sudah diperbarui tersebut memiliki hasil yang berbada dari hal penataan gambar, dikarenakan pada class Gallery menggunakan className="columns-3". Selain itu untuk penggunaan nama function dari suatu class untuk default bisa bebas untuk mengganti penamaan function yang digunakan, sedangkan untuk named harus sama seperti pada class.

***default***

![gambar-praktikum](../pbf-pertemuan-03/img/praktikum-2-langkah-2-1.png)

***named***

![gambar-praktikum](../pbf-pertemuan-03/img/praktikum-2-langkah-2-2.png)

**Soal 3**

Terdapat error yang terjadi pada kode, disebabkan oleh penutup tag yang tidak tepat, seperti berikut ini.

![gambar-praktikum](../pbf-pertemuan-03/img/praktikum-2-langkah-2-3.png)

Maka dapat diperbaiki dengan memindahkan penutup untuk <i>, sehingga kode sudah tidak terjadi error.

![gambar-praktikum](../pbf-pertemuan-03/img/praktikum-2-langkah-2-4.png)

![gambar-praktikum](../pbf-pertemuan-03/img/praktikum-2-langkah-2-5.png)

## Praktikum 3: Menggunakan JSX dinamis

### Langkah 1: Buat Komponen Baru

**Soal 4**

![gambar-praktikum](../pbf-pertemuan-03/img/praktikum-3-langkah-1-error.png)

![gambar-praktikum](../pbf-pertemuan-03/img/praktikum-3-langkah-1.png)

### Langkah 2: Impor Komponen

![gambar-praktikum](../pbf-pertemuan-03/img/praktikum-3-langkah-2.png)

![gambar-praktikum](../pbf-pertemuan-03/img/praktikum-3-langkah-2-1.png)

**Soal 5**

Hasil yang ditampilkan masih sama dengan sebelumnya, dikarenakan hanya melakukan penambahan atribut pada objek person, kemudian menggunakannya kembali seperti atribut lain seperti theme dan name.

![gambar-praktikum](../pbf-pertemuan-03/img/praktikum-3-langkah-2-2.png)

![gambar-praktikum](../pbf-pertemuan-03/img/praktikum-3-langkah-2-3.png)

### Langkah 3: Ubah ekspresi URL di src

![gambar-praktikum](../pbf-pertemuan-03/img/praktikum-3-langkah-3.png)

**Soal 6**

***imageSize: 's'***

![gambar-praktikum](../pbf-pertemuan-03/img/praktikum-3-langkah-3-1.png)

***imageSize: 'b'***

![gambar-praktikum](../pbf-pertemuan-03/img/praktikum-3-langkah-3-2.png)

Penggunaan Image Size antara s dengan b menghasilkan ukuran gambar yang berbeda pula saat ditampilkan, dimana dengan imageSize b dapat menghasilkan ukuran gambar yang lebih besar.

Terdapat error pada gambar yang ditampilkan, yaitu berupa url yang tidak tepat, menjadi src="${baseUrl}${person.imageId}${person.imageSize}.jpg" saat menggunakan kode seperti berikut

```bash
src="${baseUrl}${person.imageId}${person.imageSize}.jpg"
```

Maka dengan kode dibawah ini permasalahan tersebut dapat terselesaikan, yaitu dengan menggunakan backtick ataupun concat.

```bash
src={`${baseUrl}${person.imageId}${person.imageSize}.jpg`}

src={baseUrl.concat(person.imageId, person.imageSize, ".jpg")}
```

Dari permasalahan tersebut terdapat struktur lain untuk menggunakan variabel untuk menjadi satu kesatuan dalam string, berbeda dengan menggunakannya langsung sebagai value atau content dalam suatu tag, dimana hanya perlu menggunakan kurung kurawa saja disertai nama variabel.

## Praktikum 4: Menggunakan Props

### Langkah 1: Buat Komponen Baru

![gambar-praktikum](../pbf-pertemuan-03/img/praktikum-4-langkah-1.png)

**Soal 7**

Terdapat error pada penggunaan getImageUrls pada @/utils/utils dikarenakan fungsi tersebut akan dibuat pada langkah berikutnya.

Dari penggunaan props tersebut, suatu function dapat memiliki suatu parameter yang nantinya dapat memperoleh value dari parent, parameter tersebut dapat juga diberi nilai default jika value tidak diberikan nilai ataupun undifined.

![gambar-praktikum](../pbf-pertemuan-03/img/praktikum-4-langkah-1-2.png)

![gambar-praktikum](../pbf-pertemuan-03/img/praktikum-4-langkah-1-1.png)

### Langkah 2: Buat fungsi getImageUrl

![gambar-praktikum](../pbf-pertemuan-03/img/praktikum-4-langkah-2.png)

### Langkah 3: Buat komponen baru

![gambar-praktikum](../pbf-pertemuan-03/img/praktikum-4-langkah-3.png)

![gambar-praktikum](../pbf-pertemuan-03/img/praktikum-4-langkah-3-1.png)

**Soal 8**

![gambar-praktikum](../pbf-pertemuan-03/img/praktikum-4-langkah-3-2.png)

Sebelumnya terdapat permasalahan di URL gambar yang menghasilkan gambar, sehingga saya rubah penggunaan parameter seperti diatas, sehingga URL yang diberikan dapat tepat dan menghasilkan tampilan seperti dibawah ini.

![gambar-praktikum](../pbf-pertemuan-03/img/praktikum-4-langkah-3-3.png)

Untuk size yang menentukan 's' atau 'b' dari URL gambar, maka dapat digunakan ternary operator untuk menangani kondisi tersebut.

![gambar-praktikum](../pbf-pertemuan-03/img/praktikum-4-langkah-3-4.png)

### Buat komponen baru MyProfileV2

**Soal 9**

![gambar-praktikum](../pbf-pertemuan-03/img/praktikum-4-langkah-4.png)

![gambar-praktikum](../pbf-pertemuan-03/img/praktikum-4-langkah-4-1.png)

Dengan membuat function Card, penulisan tag yang berulang seperti card tersebut, dapat ditulis sekali saja dalam function, kemudian dengan function tersebut, komponen yang sama dapat digunakan diparent dengan penulisan yang lebih singkat.