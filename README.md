# Astro Starter Kit: Blog

```sh
bun create astro@latest -- --template blog
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                           |
| :-------------------- | :----------------------------------------------- |
| `bun install`         | Installs dependencies                            |
| `bun dev`             | Starts local dev server at `localhost:4321`      |
| `bun build`           | Build your production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying     |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).

---

# 🐳 Docker — Development & Production

Proyek ini menggunakan Docker Compose dengan **profiles** untuk memisahkan mode dev dan prod dalam 1 file.

## Prasyarat

- [Docker](https://docs.docker.com/get-docker/) & Docker Compose terinstall
- File `.env` di root project

## Environment Variables

Salin file sesuai environment, lalu rename ke `.env`:

```bash
# Development
cp .env.development .env

# Production
cp .env.production .env
```

| Variable       | Keterangan                                  |
| :------------- | :------------------------------------------ |
| `STRAPI_URL`   | URL Strapi CMS (tanpa trailing slash)       |
| `STRAPI_TOKEN` | API Token dari Strapi admin panel           |
| `SITE_URL`     | URL publik site (untuk sitemap & canonical) |

## Development (Hot Reload)

```bash
cp .env.development .env
docker compose --profile dev up
```

- Menggunakan `Dockerfile.dev` + `oven/bun`
- Source code di-mount via volume → perubahan langsung terdeteksi
- Akses di `http://localhost:4321`

Stop:

```bash
docker compose --profile dev down
```

## Production

```bash
cp .env.production .env
docker compose --profile prod up -d --build
```

- Menggunakan `Dockerfile` (multi-stage build) + `oven/bun`
- Image optimal, hanya berisi build output + production deps
- Akses di `http://localhost:4321`

Perintah lain:

```bash
# Lihat logs
docker compose --profile prod logs -f

# Restart
docker compose --profile prod restart

# Stop
docker compose --profile prod down
```

## Tanpa Docker Compose (Manual)

```bash
# Build image
docker build -t medika-astro \
  --build-arg STRAPI_URL=https://dev.rsuafdila.com \
  --build-arg STRAPI_TOKEN=xxx \
  --build-arg SITE_URL=https://domain.com .

# Jalankan container
docker run -p 4321:4321 \
  -e STRAPI_URL=https://dev.rsuafdila.com \
  -e STRAPI_TOKEN=xxx \
  medika-astro
```

## File Docker

| File                 | Fungsi                                 |
| :------------------- | :------------------------------------- |
| `Dockerfile`         | Production — multi-stage build (Bun)   |
| `Dockerfile.dev`     | Development — hot reload (Bun)         |
| `docker-compose.yml` | Orchestration dev & prod via profiles  |
| `.dockerignore`      | Exclude file yang tidak perlu di image |
| `.env.example`       | Template environment variables         |
| `.env.development`   | Preset untuk development               |
| `.env.production`    | Preset untuk production                |

## SSR & SSG

- `output: "server"` → semua halaman SSR by default
- Halaman yang ingin di-prerender (SSG): tambahkan `export const prerender = true`
- Halaman SSG butuh env vars saat **build time** (via build args)
- Halaman SSR butuh env vars saat **runtime** (via environment)

---

# 🛠 Panduan Sinkronisasi Clean Code (Dev ke Main)

Panduan ini menjelaskan cara memindahkan perubahan fitur dari branch `dev` ke branch `main` tanpa membawa file sampah, referensi, atau riwayat commit yang berantakan.

Metode yang digunakan adalah **Diff & Patch** (menggunakan `git checkout dev -- .`)

## 🚀 Langkah-Langkah Eksekusi

### 1. Persiapan di Branch Main

Pastikan kamu berada di branch `main` dan versinya sudah sinkron dengan repository pusat (remote).

```
git checkout main
git pull origin main
```

### 2. Mengambil Perubahan dari Dev

Gunakan perintah di bawah ini untuk menyalin seluruh status file dari branch `dev` ke branch `main`. Perintah ini tidak akan membuat _merge commit_, melainkan hanya menaruh file di staging area.

```
git checkout dev -- .
```

**Catatan:** Sekarang semua file dari `dev` ada di folder kamu, tetapi statusnya "siap di-commit" di branch `main`.

### 3. Pembersihan File Sampah (Sapu Bersih)

Karena semua file terbawa, kamu harus menghapus file-file referensi atau file yang tidak diinginkan sebelum melakukan commit.

- Menghapus Folder secara massal:

```bash
git rm -r folder_referensi/
```

- Menghapus File spesifik:

```bash
git rm file_yang_tidak_perlu.txt
```

- Membatalkan perubahan pada file tertentu (Kembali ke versi Main): Jika ada file (seperti config) yang seharusnya tetap memakai versi `main`, jalankan:

```bash
git checkout main -- nama_file_asli.js
```

### 4. Verifikasi Akhir

Cek kembali file apa saja yang akan masuk ke branch `main`:

```bash
git status
```

_Pastikan hanya file fitur yang "Clean" yang ada di daftar "Changes to be committed"._

### 5. Commit dan Push

Jika sudah yakin bersih, lakukan commit tunggal untuk semua fitur tersebut.

```bash
git add .
git commit -m "feat: sinkronisasi fitur dari dev (clean version)"
git push origin main
```

## 💡 Mengapa Menggunakan Cara Ini?

1. **Main Tetap Suci:** Tidak ada file dokumentasi/referensi yang tidak sengaja ter-push ke produksi.

2. **Riwayat Rapi:** Menghindari _merge bubbles_ atau riwayat commit `dev` yang mungkin isinya banyak "trial and error".

3. **Kendali Penuh:** Kamu bisa memilih secara detail apa saja yang ingin dimasukkan ke branch stabil.
