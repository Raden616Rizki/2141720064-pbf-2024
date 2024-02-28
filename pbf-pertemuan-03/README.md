| Raden Rizki | 2141720064 | TI - 3C | 13 |

## Praktikum 1: Mendefinisikan Komponen

### Langkah 1: Buat Folder Baru

```bash
npx create-next-app
```

![gambar-praktikum](/img/praktikum-1-langkah-1.png)

### Langkah 2: Buat Komponen Baru

![gambar-praktikum](/img/praktikum-1-langkah-2.png)

### Langkah 3: Import Komponen

```bash
import Profile from "../app/components/profile";
```

![gambar-praktikum](/img/praktikum-1-langkah-3.png)

![gambar-praktikum](/img/praktikum-1-langkah-3-error.png)

Terdapat error saat menggunakan gambar dari url, untuk menyelesaikan permasalahan tersebut maka perlu ditambahkan domain dari gambar yang digunakan didalam file next.config.mjs terlebih dahulu, seperti kode berikut.

![gambar-praktikum](/img/praktikum-1-langkah-3-1.png)

![gambar-praktikum](/img/praktikum-1-langkah-3-2.png)

![gambar-praktikum](/img/praktikum-1-langkah-3-3.png)

## Praktikum 2: Mengimpor dan Mengekspor Komponen

### Langkah 1: Buat Komponen Baru

![gambar-praktikum](/img/praktikum-2-langkah-1.png)

### Langkah 2: Impor Komponen

```bash
import { Gallery } from "../app/components/gallery";
```

![gambar-praktikum](/img/praktikum-2-langkah-2.png)

Dari kode yang sudah diperbarui tersebut memiliki hasil yang berbada dari hal penataan gambar, dikarenakan pada class Gallery menggunakan className="columns-3". Selain itu untuk penggunaan nama function dari suatu class untuk default bisa bebas untuk mengganti penamaan function yang digunakan, sedangkan untuk named harus sama seperti pada class.

***default***

![gambar-praktikum](/img/praktikum-2-langkah-2-1.png)

***named***

![gambar-praktikum](/img/praktikum-2-langkah-2-2.png)

