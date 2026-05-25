// fetch() = fungsi JS untuk membaca file dari luar (JSON, dll)
fetch("database.json")
    .then(function(response) {
        // Ubah response menjadi array JavaScript
        return response.json();
    })
    .then(function(data) {
        tampilkanKarya(data);
    })
    .catch(function(error) {
        console.log("Gagal load database.json:", error);
    });


function tampilkanKarya(data) {
    let kolomKiri  = document.querySelector(".kiri");
    let kolomKanan = document.querySelector(".kanan");

    kolomKiri.innerHTML  = "";
    kolomKanan.innerHTML = "";

    data.forEach(function(item, index) {
        if (item.foto === "ini.png") return;

        // Buat elemen kartu karya
        let div = document.createElement("div");
        div.classList.add("karya-item");

        div.innerHTML = `
            <div class="karya-gambar">
                <img src="img/${item.foto}" alt="${item.Item}">
            </div>
            <p class="karya-kategori">${item.Item}</p>
        `;
        
        if (index % 2 === 0) {
            kolomKiri.appendChild(div);
        } else {
            kolomKanan.appendChild(div);
        }
    });
}