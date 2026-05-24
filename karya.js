// ============================================================
// LOAD GAMBAR KARYA DARI database.json
// File: karya.js
// ============================================================

// fetch() = fungsi JS untuk membaca file dari luar (JSON, dll)
fetch("database.json")
    .then(function(response) {
        // Ubah response menjadi array JavaScript
        return response.json();
    })
    .then(function(data) {
        // data = isi database.json dalam bentuk array
        tampilkanKarya(data);
    })
    .catch(function(error) {
        console.log("Gagal load database.json:", error);
    });

function tampilkanKarya(data) {

    // Ambil kolom kiri dan kanan dari karya.html
    let kolomKiri  = document.querySelector(".kiri");
    let kolomKanan = document.querySelector(".kanan");

    // Kosongkan dulu isi HTML yang ada (yang masih di-comment)
    kolomKiri.innerHTML  = "";
    kolomKanan.innerHTML = "";

    // Loop tiap item di database.json
    data.forEach(function(item, index) {

        // Skip Banner/placeholder — itu bukan karya yang ditampilkan
        if (item.foto === "placeholder.svg") return;

        // Buat elemen kartu karya
        let div = document.createElement("div");
        div.classList.add("karya-item");

        div.innerHTML = `
            <div class="karya-gambar">
                <img src="img/${item.foto}" alt="${item.Item}">
            </div>
            <p class="karya-kategori">${item.Item}</p>
        `;

        // Item genap → kolom kiri, item ganjil → kolom kanan
        if (index % 2 === 0) {
            kolomKiri.appendChild(div);
        } else {
            kolomKanan.appendChild(div);
        }
    });
}