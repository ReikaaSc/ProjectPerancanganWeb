# Instruksi Setup Email.js untuk Form Kontak

## Langkah 1: Daftar di Email.js

1. Buka https://www.emailjs.com
2. Klik "Sign Up" dan buat akun baru
3. Verifikasi email kamu

## Langkah 2: Setup Gmail Service

Service ID kamu: **`service_djrdj2e`**

Jika ini sudah ter-setup di akun Email.js kamu, skip ke Langkah 3.

Jika belum, ikuti langkah di bawah:

1. Di dashboard Email.js, klik "Email Services" di sidebar kiri
2. Klik "Add Service"
3. Pilih "Gmail"
4. Klik "Connect Gmail Account"
5. Login dengan akun Gmail kamu (markyazi21@gmail.com)
6. Izinkan akses
7. Service ID akan otomatis menjadi: `service_djrdj2e`

## Langkah 3: Buat Email Template

1. Di dashboard Email.js, klik "Email Templates"
2. Klik "Create New Template"
3. Beri nama: `template_andini`
4. Isi template dengan:

```
Subject: Permintaan Jahit Baru - {{nama}}

Nama: {{nama}}
Email: {{email}}
Nomor WhatsApp: {{pelanggan}}
Jenis Jahit: {{kebutuhan}}
Tanggal Dibutuhkan: {{acara}}

Catatan & Referensi:
{{catatan}}
```

5. Save template

## Langkah 4: Dapatkan Public Key

1. Di dashboard Email.js, klik "Account" (ikon di kanan atas)
2. Klik tab "API Keys"
3. Catat **Public Key** (dimulai dengan huruf)

## Langkah 5: Update File HTML

**PENTING:** Hanya langkah ini yang perlu dilakukan!

1. Buka file `kontak.html`
2. Cari baris: `emailjs.init("YOUR_PUBLIC_KEY_HERE");`
3. Ganti `YOUR_PUBLIC_KEY_HERE` dengan Public Key kamu

**Contoh:**

```javascript
emailjs.init("k1a2b3c4d5e6f7g8h9i0j");
```

Service ID (`service_djrdj2e`) dan Template (`template_andini`) sudah ter-setup di file. Kamu tinggal update Public Key saja.

## Langkah 6: Test Form

1. Buka `kontak.html` di browser
2. Isi semua field form
3. Klik "Kirim Permintaan"
4. Cek email `markyazi21@gmail.com`

## Troubleshooting

### Pesan "Gagal mengirim permintaan"

- Pastikan Public Key sudah benar
- Pastikan Service ID adalah `gmail`
- Pastikan Template ID adalah `template_andini`
- Buka Console (F12 > Console) untuk lihat error detail

### Email tidak masuk

- Cek folder Spam
- Pastikan Gmail account sudah terkoneksi di Email.js
- Coba refresh page dan ulangi test

### Email tapi error credentials

- Setup ulang Gmail service di Email.js dashboard
- Pastikan akun Gmail sudah mengizinkan akses Email.js

---

**Note:** Email.js gratis untuk 200 email/bulan. Cukup untuk bisnis kecil.
