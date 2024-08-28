# Project-Laravel

## Deskripsi Proyek

Proyek ini adalah implementasi dari tugas teknikal Fullstack Developer yang mencakup pembuatan API dengan Laravel dan aplikasi frontend dengan React JS. Proyek ini mengimplementasikan operasi CRUD (Create, Read, Update, Delete) untuk data produk dengan antarmuka pengguna yang memungkinkan interaksi dengan API.

## Fitur

### Backend (Laravel)

- **CRUD untuk Produk**: Operasi untuk membuat, membaca, memperbarui, dan menghapus data produk.
- **Tabel Produk**: Menggunakan tabel `products` dengan field:
  - `id`: int (Primary Key)
  - `product_name`: varchar(150) (Not Null)
  - `category`: varchar(100) (Not Null)
  - `price`: numeric (Not Null)
  - `discount`: float (Null)
- **Laravel Migrations**: Untuk pembuatan tabel `products`.

### Frontend (React JS)

- **Integrasi API**: Menggunakan Axios untuk berkomunikasi dengan API Laravel.
- **Manajemen State**: Menggunakan Redux untuk mengelola state aplikasi.
- **Antarmuka Pengguna**: UI yang responsif dan menarik untuk mengelola produk.

## Teknologi yang Digunakan

- **Backend**: Laravel 10/11
- **Frontend**: React JS, Redux, Axios
- **Optional**: TypeScript, Validasi Form

## Instalasi

### Backend

1. **Kloning Repository**

   ```bash
   git clone https://github.com/Revii28/Project-Laravel.git
    ```

2. **Instalasi Dependencies**

   ```bash
     cd Product-Server
     composer install
    ```

3. **Konfigurasi Environment**

 - Salin file .env.example ke .env dan sesuaikan pengaturan database.

4. **Menjalankan Migrasi**

   ```bash
    php artisan migrate
    ```

5. **Menjalankan Server Backend**

   ```bash
    php artisan serve
    ```

    ### Frontend

1. **Instalasi Dependencies**

   ```bash
     cd product-client
     npm install
    ```

2. **Menjalankan Aplikasi Frontend**

   ```bash
    npm start
    ```

## Penggunaan

  ### Backend

   **Endpoint API:**

- `GET /api/products`: 
  Mendapatkan daftar produk.

- `POST /api/products`: 
  Membuat produk baru. Data yang harus dikirimkan:
  ```json
  {
    "product_name": "Nama Produk",
    "category": "Kategori",
    "price": 100000,
    "discount": 10.5
  }
- `PUT /api/products/{id}`: Memperbarui produk dengan ID tertentu.  Data yang harus dikirimkan:
  ```json
  {
    "product_name": "Nama Produk",
    "category": "Kategori",
    "price": 100000,
    "discount": 10.5
  }
- `DELETE /api/products/{id}`: Menghapus produk dengan ID tertentu.

### Fitur Utama :


- **Daftar Produk**: 
  Melihat semua produk yang ada.

- **Tambah Produk**: 
  Menambahkan produk baru.

- **Edit Produk**: 
  Mengedit produk yang ada.

- **Hapus Produk**: 
  Menghapus produk yang ada.

