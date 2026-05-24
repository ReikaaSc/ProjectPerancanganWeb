// ============================================================
// SISTEM ANTRIAN PELANGGAN - Andini Rumah Jahit
// File: queue.js
// ============================================================

// ── FUNGSI UTAMA ────────────────────────────────────────────

function ambilAntrian() {
    let data = localStorage.getItem("antrian_pelanggan");
    return data ? JSON.parse(data) : [];
}

function simpanAntrian(antrian) {
    localStorage.setItem("antrian_pelanggan", JSON.stringify(antrian));
}

// ENQUEUE — Tambah pelanggan baru ke belakang antrian
function enqueue(nama, kebutuhan, acara, catatan, noHp) {
    let antrian = ambilAntrian();

    let pelangganBaru = {
        id: Date.now(),
        nama: nama,
        noHp: noHp,
        kebutuhan: kebutuhan,
        acara: acara,              
        catatan: catatan,
        waktu: new Date().toLocaleString("id-ID")
    };

    antrian.push(pelangganBaru);
    simpanAntrian(antrian);
}

// DEQUEUE — Hapus pelanggan pertama dari antrian
function dequeue() {
    let antrian = ambilAntrian();

    if (antrian.length === 0) {
        alert("Antrian sudah kosong!");
        return;
    }

    let selesai = antrian.shift();
    simpanAntrian(antrian);
    tampilkanAntrian();

    console.log("Selesai dilayani:", selesai);
}

// Tampilkan antrian di halaman
function tampilkanAntrian() {
    let antrian = ambilAntrian();

    let daftarEl = document.getElementById("daftar-antrian");
    let infoEl   = document.getElementById("info-antrian");

    daftarEl.innerHTML = "";

    if (antrian.length === 0) {
        infoEl.innerText = "Belum ada antrian.";
        return;
    }

    infoEl.innerText = "Total antrian: " + antrian.length + " pelanggan";

    antrian.forEach(function(pelanggan, index) {
        let li = document.createElement("li");

        li.innerHTML = `
            <div class="kartu-antrian">
                <strong>${index + 1}. ${pelanggan.nama}</strong>
                <p>WhatsApp: ${pelanggan.noHp || "-"}</p>
                <span class="badge-kebutuhan">${pelanggan.kebutuhan}</span>
                <p>Acara: ${pelanggan.acara || "-"}</p>
                <p>Catatan: ${pelanggan.catatan || "-"}</p>
                <small>Dipesan: ${pelanggan.waktu}</small>
                ${index === 0
                    ? '<button class="btn-selesai" onclick="dequeue()">✓ Selesai Dilayani</button>'
                    : ""}
            </div>
        `;

        daftarEl.appendChild(li);
    });
}

// ── EVENT LISTENER ──────────────────────────────────────────

document.addEventListener("DOMContentLoaded", function() {

    tampilkanAntrian();

    let form = document.querySelector(".kontak-form form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Ambil nilai dari semua field
        let nama      = document.getElementById("nama").value.trim();
        let noHp = document.getElementById("pelanggan").value.trim();
        let kebutuhan = document.getElementById("kebutuhan").value;
        let acara     = document.getElementById("acara").value.trim();  // field baru
        let catatan   = document.getElementById("catatan").value.trim();

        // Validasi
        if (nama === "") {
            alert("Nama tidak boleh kosong!");
            return;
        }

        if (kebutuhan === "") {
            alert("Pilih jenis kebutuhan dulu!");
            return;
        }

        enqueue(nama, kebutuhan, acara, catatan, noHp);
        tampilkanAntrian();

        form.reset();
        alert("Permintaan berhasil dikirim! Kamu masuk ke antrian.");
    });
});