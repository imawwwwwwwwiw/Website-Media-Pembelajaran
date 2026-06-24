const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const progressBar = document.getElementById("myBar");

function bukaMenu() {
  sidebar.classList.add("buka");
  overlay.style.display = "block";
}
function bukaMateri(idHalaman) {
  // 1. Sembunyikan semua bab materi yang menggunakan class 'materi-section'
  const semuaMateri = document.querySelectorAll(".materi-section");
  semuaMateri.forEach((materi) => {
    materi.style.display = "none";
  });

  // 2. Tampilkan halaman tujuan / profil yang dipilih
  const halamanTujuan = document.getElementById(idHalaman);
  if (halamanTujuan) {
    halamanTujuan.style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    console.warn("Elemen dengan ID '" + idHalaman + "' tidak ditemukan.");
  }

  // ========================================================
  // SOLUSI PAMUNGKAS: SIMULASI KLIK TOMBOL MENU UNTUK MENUTUP SIDEBAR
  // ========================================================
  // Mencari tombol hamburger/garis tiga di navbar aplikasi Anda
  // Kode ini mencari elemen tombol berdasarkan ikon, class, atau id umum menu toggle
  const tombolMenu = document.querySelector(
    ".menu-toggle, .toggle-btn, #menu-btn, .navbar-toggler, i.fa-bars",
  );

  // Kita cek apakah sidebar sedang terbuka (melayang di layar HP)
  // Umumnya saat terbuka, lebar layar di bawah 768px
  if (window.innerWidth <= 768 && tombolMenu) {
    tombolMenu.click(); // "Ketuk" tombol menu secara otomatis untuk menutup laci sidebar
  }
  // ========================================================
}
function tutupMenu() {
  sidebar.classList.remove("buka");
  overlay.style.display = "none";
}

function toggleDropdown(element) {
  element.classList.toggle("active-dropdown");
  const dropdownContent = element.nextElementSibling;

  if (
    dropdownContent.style.maxHeight &&
    dropdownContent.style.maxHeight !== "0px"
  ) {
    dropdownContent.style.maxHeight = "0px";
  } else {
    dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
  }
}

function toggleNestedDropdown(element, event) {
  event.stopPropagation();
  element.classList.toggle("active-nested");
  const nestedContent = element.nextElementSibling;
  const parentContainer = element.parentElement;

  if (
    nestedContent.style.maxHeight &&
    nestedContent.style.maxHeight !== "0px"
  ) {
    nestedContent.style.maxHeight = "0px";
  } else {
    nestedContent.style.maxHeight = nestedContent.scrollHeight + "px";
    parentContainer.style.maxHeight =
      parentContainer.scrollHeight + nestedContent.scrollHeight + "px";
  }
}

const totalModul = 61;

function bukaMateri(idMateri, event) {
  let semuaMateri = document.querySelectorAll(".materi-section");
  semuaMateri.forEach((section) => {
    section.style.display = "none";
  });

  document.getElementById(idMateri).style.display = "block";

  let allLinks = document.querySelectorAll(".sidebar-links a");
  allLinks.forEach((link) => {
    link.classList.remove("active");
  });

  event.currentTarget.classList.add("active");

  let linksArray = Array.from(
    document.querySelectorAll(".sidebar-links .sub-link"),
  );
  let indexKlik = linksArray.indexOf(event.currentTarget) + 1;
  let kalkulasiProgress = (indexKlik / totalModul) * 100;
  progressBar.style.width = kalkulasiProgress + "%";

  if (idMateri === "kuis") {
    mulaiKuisUlang();
  } else if (idMateri === "kuis-css") {
    ulangiKuisCSS();
  } else if (idMateri === "kuis-js") {
    ulangiKuisJS();
  } else if (idMateri === "kuis-java") {
    ulangiKuisJava();
  }

  window.scrollTo(0, 0);
  tutupMenu();
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode-active");
  const ikonFab = document.querySelector(".fab-theme i");
  if (document.body.classList.contains("dark-mode-active")) {
    ikonFab.className = "fas fa-sun";
  } else {
    ikonFab.className = "fas fa-moon";
  }
}

const dataSoalKuis = [
  {
    tanya: "Apa kepanjangan dari singkatan HTML?",
    opsi: {
      A: "HyperText Markup Language",
      B: "Hyperlinks Language",
      C: "Home Tool Markup",
    },
    kunci: "A",
  },
  {
    tanya:
      "Tag HTML manakah yang digunakan untuk membuat judul halaman dengan ukuran terbesar?",
    opsi: { A: "&lt;heading&gt;", B: "&lt;h6&gt;", C: "&lt;h1&gt;" },
    kunci: "C",
  },
  {
    tanya:
      "Elemen HTML apa yang digunakan untuk menyisipkan baris baru (ganti baris)?",
    opsi: { A: "&lt;br&gt;", B: "&lt;lb&gt;", C: "&lt;break&gt;" },
    kunci: "A",
  },
  {
    tanya:
      "Karakter apa yang digunakan untuk menunjukkan tag penutup pada HTML?",
    opsi: {
      A: "Simbol garis miring ( / )",
      B: "Simbol tanda seru ( ! )",
      C: "Simbol bintang ( * )",
    },
    kunci: "A",
  },
  {
    tanya:
      "Atribut mana yang digunakan untuk membuat tautan atau link pada tag &lt;a&gt;?",
    opsi: { A: "src", B: "href", C: "link" },
    kunci: "B",
  },
  {
    tanya:
      "Tag manakah yang benar untuk menyisipkan gambar ke dalam halaman web?",
    opsi: {
      A: '&lt;img src="gambar.jpg"&gt;',
      B: '&lt;image href="gambar.jpg"&gt;',
      C: '&lt;picture src="gambar.jpg"&gt;',
    },
    kunci: "A",
  },
  {
    tanya:
      "Elemen &lt;table&gt; digunakan untuk membuat tabel. Tag apa yang digunakan untuk membuat baris baru di dalam tabel tersebut?",
    opsi: { A: "&lt;td&gt;", B: "&lt;tr&gt;", C: "&lt;th&gt;" },
    kunci: "B",
  },
  {
    tanya:
      "Atribut HTML mana yang digunakan untuk menentukan gaya inline secara langsung pada elemen?",
    opsi: { A: "class", B: "styles", C: "style" },
    kunci: "C",
  },
  {
    tanya:
      "Karakter penulisan komentar yang benar di dalam dokumen HTML adalah...",
    opsi: {
      A: "&lt;!-- Ini Komentar --&gt;",
      B: "// Ini Komentar",
      C: "/* Ini Komentar */",
    },
    kunci: "A",
  },
  {
    tanya:
      "Manakah dari elemen berikut yang termasuk dalam elemen blok (block-level element)?",
    opsi: { A: "&lt;span&gt;", B: "&lt;div&gt;", C: "&lt;a&gt;" },
    kunci: "B",
  },
];
let indeksSoalSkrg = 0;
let totalSkorBenar = 0;
function mulaiKuisUlang() {
  indeksSoalSkrg = 0;
  totalSkorBenar = 0;
  tampilkanSoalMateri();
}

function tampilkanSoalMateri() {
  const infoProgress = document.getElementById("quiz-progress");
  const teksSoal = document.getElementById("quiz-question");
  const areaOpsi = document.getElementById("quiz-options");
  const teksHasil = document.getElementById("hasil-kuis");
  const btnSubmit = document.getElementById("btn-submit-quiz");
  const btnNext = document.getElementById("btn-next-quiz");

  teksHasil.innerText = "";
  btnSubmit.style.display = "inline-block";
  btnNext.style.display = "none";

  if (indeksSoalSkrg < dataSoalKuis.length) {
    let soalSkrg = dataSoalKuis[indeksSoalSkrg];
    infoProgress.innerText = `Soal ${indeksSoalSkrg + 1} dari ${dataSoalKuis.length}`;
    teksSoal.innerHTML = soalSkrg.tanya;
    areaOpsi.innerHTML = "";
    for (let kunciOpsi in soalSkrg.opsi) {
      areaOpsi.innerHTML += `
                <div class="quiz-option-item" onclick="pilihRadioOtomatis('${kunciOpsi}')">
                    <input type="radio" name="pilihanSoal" id="opt-${kunciOpsi}" value="${kunciOpsi}">
                    <label for="opt-${kunciOpsi}" style="cursor:pointer;"><strong>${kunciOpsi}.</strong> ${soalSkrg.opsi[kunciOpsi]}</label>
                </div>`;
    }
  } else {
    infoProgress.innerText = "Kuis Selesai!";
    teksSoal.innerText = "";
    btnSubmit.style.display = "none";
    btnNext.style.display = "none";

    const totalNilai = (totalSkorBenar / dataSoalKuis.length) * 100;
    let pesanKelulusan = "";
    let warnaTeks = "";

    if (totalNilai >= 70) {
      pesanKelulusan = "Selamat! Anda Lulus Kuis HTML";
      warnaTeks = "#2e7d32";
      if (typeof pemicuEfekConfetti === "function") {
        pemicuEfekConfetti();
      }
    } else {
      pesanKelulusan = "Coba Lagi! Anda Belum Lulus Kuis";
      warnaTeks = "#e65100";
    }

    areaOpsi.innerHTML = `
      <div style="text-align: center; padding: 20px 0;">
        <i class="fas fa-trophy" style="font-size: 50px; color: #ffbc00; margin-bottom: 15px;"></i>
        <h2 style="color: ${warnaTeks}; margin-bottom: 5px;">${pesanKelulusan}</h2>
        <p style="font-size: 24px; font-weight: bold; margin: 15px 0; color: var(--text-color);">Skor Anda: ${totalNilai} / 100</p>
        <p style="color: #666; font-size: 15px;">Mampu menjawab benar sebanyak <strong>${totalSkorBenar}</strong> dari <strong>${dataSoalKuis.length}</strong> pertanyaan.</p>
        <button onclick="mulaiKuisUlang()" style="background-color: #343a40; color: white; border: none; padding: 12px 20px; border-radius: 8px; font-weight: bold; cursor: pointer; margin-top: 20px; font-size: 14px; width: 48%; margin-right: 2%;">Ulangi Kuis</button>
        <button onclick="document.getElementById('kuis').style.display = 'none'; document.getElementById('pengertian').style.display = 'block';" style="background-color: #ff4d6d; color: white; border: none; padding: 12px 20px; border-radius: 8px; font-weight: bold; cursor: pointer; margin-top: 20px; font-size: 14px; width: 48%;">Kembali</button>
      </div>
    `;
  }
}

function pilihRadioOtomatis(kunciOpsi) {
  const r = document.getElementById(`opt-${kunciOpsi}`);
  if (r) r.checked = true;
}

function cekJawabanKuis() {
  let opsiTerpilih = document.querySelector(
    'input[name="pilihanSoal"]:checked',
  );
  let teksHasil = document.getElementById("hasil-kuis");
  if (!opsiTerpilih) {
    teksHasil.innerText = " Pilih salah satu opsi jawaban.";
    return;
  }

  let jawabanUser = opsiTerpilih.value;
  let kunciBenar = dataSoalKuis[indeksSoalSkrg].kunci;

  if (jawabanUser === kunciBenar) {
    teksHasil.innerText = "Betul sekali!";
    teksHasil.style.color = "#2e7d32";
    totalSkorBenar++;
    putarSuaraFeedback("benar");
  } else {
    teksHasil.innerText = `Kurang tepat. Kunci: (${kunciBenar})`;
    teksHasil.style.color = "#d32f2f";
    putarSuaraFeedback("salah");
  }

  document.querySelectorAll('input[name="pilihanSoal"]').forEach((radio) => {
    radio.disabled = true;
    const parentDiv = radio.parentElement;

    if (radio.value === kunciBenar) {
      parentDiv.style.backgroundColor = "#e8f5e9";
      parentDiv.style.borderColor = "#a5d6a7";
      parentDiv.style.color = "#1b5e20";
    }

    if (radio.checked && jawabanUser !== kunciBenar) {
      parentDiv.style.backgroundColor = "#ffebee";
      parentDiv.style.borderColor = "#ef9a9a";
      parentDiv.style.color = "#c62828";
    }
  });

  document.getElementById("btn-submit-quiz").style.display = "none";
  document.getElementById("btn-next-quiz").style.display = "inline-block";
}

function lanjutSoalKuis() {
  indeksSoalSkrg++;
  tampilkanSoalMateri();
}
function tampilkanHasilAkhirKuis() {
  const totalNilai = (jumlahSkorBenar / daftarSoalHTML.length) * 100;
  const kontainerKartu = document.getElementById("quiz-card-container");

  let pesanKelulusan = "";
  let warnaTeks = "";
  if (totalNilai >= 70) {
    pesanKelulusan = "Selamat! Anda Lulus Kuis HTML";
    warnaTeks = "#2e7d32";
    pemicuEfekConfetti();
  } else {
    pesanKelulusan = "Coba Lagi! Anda Belum Lulus Kuis";
    warnaTeks = "#e65100";
  }

  kontainerKartu.innerHTML = `
        <div style="text-align: center; padding: 20px 0;">
            <i class="fas fa-trophy" style="font-size: 50px; color: #ffbc00; margin-bottom: 15px;"></i>
            <h2 style="color: ${warnaTeks}; margin-bottom: 5px;">${pesanKelulusan}</h2>
            <p style="font-size: 24px; font-weight: bold; margin: 15px 0; color: #333;">Skor Anda: ${totalNilai} / 100</p>
            <p style="color: #666; font-size: 15px;">Mampu menjawab benar sebanyak <strong>${jumlahSkorBenar}</strong> dari <strong>${daftarSoalHTML.length}</strong> pertanyaan.</p>
            
            <button onclick="ulangiKuisHTML()" style="background-color: #343a40; color: white; border: none; padding: 12px 20px; border-radius: 8px; font-weight: bold; cursor: pointer; margin-top: 20px; font-size: 14px; width: 48%; margin-right: 2%;">Ulangi Kuis</button>
            
            <button onclick="kembaliKeUtama()" style="background-color: #ff4d6d; color: white; border: none; padding: 12px 20px; border-radius: 8px; font-weight: bold; cursor: pointer; margin-top: 20px; font-size: 14px; width: 48%;">Kembali</button>
        </div>
    `;
}

function kembaliKeUtama() {
  document.getElementById("kuis").style.display = "none";

  const halamanUtama = document.getElementById("html-pengertian");
  if (halamanUtama) {
    halamanUtama.style.display = "block";
  }

  indeksSoalSekarang = 0;
  jumlahSkorBenar = 0;
  ulangiKuisHTML();
}

const dataSoalKuisCSS = [
  {
    tanya: "Apa kepanjangan dari singkatan CSS?",
    opsi: {
      A: "Creative Style Sheets",
      B: "Cascading Style Sheets",
      C: "Computer Style Sheets",
    },
    kunci: "B",
  },
  {
    tanya:
      "Di dalam dokumen HTML, di manakah lokasi yang benar untuk merujuk ke file style sheet eksternal?",
    opsi: {
      A: "Di dalam bagian &lt;body&gt;",
      B: "Di dalam bagian &lt;head&gt;",
      C: "Di bagian paling bawah dokumen",
    },
    kunci: "B",
  },
  {
    tanya:
      "Properti CSS manakah yang digunakan untuk mengubah warna latar belakang (background) suatu elemen?",
    opsi: {
      A: "color",
      B: "bgcolor",
      C: "background-color",
    },
    kunci: "C",
  },
  {
    tanya: "Bagaimana cara membuat komentar di dalam file CSS?",
    opsi: {
      A: "/* Ini komentar CSS */",
      B: "// Ini komentar CSS",
      C: "&lt;!-- Ini komentar CSS --&gt;",
    },
    kunci: "A",
  },
  {
    tanya:
      "Properti mana yang digunakan untuk mengubah ruang di DALAM elemen (antara konten dan border)?",
    opsi: {
      A: "margin",
      B: "padding",
      C: "outline",
    },
    kunci: "B",
  },
  {
    tanya:
      "Selector manakah yang digunakan untuk memilih elemen dengan ID spesifik di CSS?",
    opsi: {
      A: ". (titik)",
      B: "# (tagar/pagar)",
      C: "* (bintang)",
    },
    kunci: "B",
  },
  {
    tanya:
      "Selector manakah yang digunakan untuk memilih elemen dengan Class tertentu di CSS?",
    opsi: {
      A: ". (titik)",
      B: "# (tagar/pagar)",
      C: "@ (at)",
    },
    kunci: "A",
  },
  {
    tanya:
      "Properti CSS mana yang digunakan untuk mengubah ukuran font atau teks?",
    opsi: {
      A: "text-size",
      B: "font-size",
      C: "text-style",
    },
    kunci: "B",
  },
  {
    tanya:
      "Bagaimana cara menampilkan tautan/link (&lt;a&gt;) tanpa memiliki garis bawah (underline) di bawah teksnya?",
    opsi: {
      A: "a {text-decoration: none;}",
      B: "a {text-underline: none;}",
      C: "a {decoration: no-underline;}",
    },
    kunci: "A",
  },
  {
    tanya:
      "Nilai properti position manakah yang membuat elemen tetap berada di posisi yang sama meskipun halaman di-scroll?",
    opsi: {
      A: "relative",
      B: "absolute",
      C: "fixed",
    },
    kunci: "C",
  },
];

let indeksSoalCSS = 0;
let jumlahSkorBenarCSS = 0;

const templateAwalKuisCSS = document.getElementById("css-quiz-card-container")
  ? document.getElementById("css-quiz-card-container").innerHTML
  : "";

function ulangiKuisCSS() {
  const kontainerKartu = document.getElementById("css-quiz-card-container");
  if (templateAwalKuisCSS) {
    kontainerKartu.innerHTML = templateAwalKuisCSS;
  }
  indeksSoalCSS = 0;
  jumlahSkorBenarCSS = 0;
  tampilkanSoalMateriCSS();
}

function tampilkanSoalMateriCSS() {
  const infoProgress = document.getElementById("css-quiz-progress");
  const teksSoal = document.getElementById("css-quiz-question");
  const areaOpsi = document.getElementById("css-quiz-options");
  const teksHasil = document.getElementById("css-hasil-kuis");
  const btnSubmit = document.getElementById("css-btn-submit-quiz");
  const btnNext = document.getElementById("css-btn-next-quiz");

  if (!infoProgress || !teksSoal) return;

  teksHasil.innerText = "";
  btnSubmit.style.display = "inline-block";
  btnNext.style.display = "none";

  if (indeksSoalCSS < dataSoalKuisCSS.length) {
    let soalSkrg = dataSoalKuisCSS[indeksSoalCSS];
    infoProgress.innerText = `Soal ${indeksSoalCSS + 1} dari ${dataSoalKuisCSS.length}`;
    teksSoal.innerHTML = soalSkrg.tanya;
    areaOpsi.innerHTML = "";
    for (let kunciOpsi in soalSkrg.opsi) {
      areaOpsi.innerHTML += `
                <div class="quiz-option-item" onclick="pilihRadioCSSOtomatis('${kunciOpsi}')">
                    <input type="radio" name="pilihanSoalCSS" id="css-opt-${kunciOpsi}" value="${kunciOpsi}">
                    <label for="css-opt-${kunciOpsi}" style="cursor:pointer;"><strong>${kunciOpsi}.</strong> ${soalSkrg.opsi[kunciOpsi]}</label>
                </div>`;
    }
  } else {
    tampilkanHasilAkhirKuisCSS();
  }
}

function pilihRadioCSSOtomatis(kunciOpsi) {
  const r = document.getElementById(`css-opt-${kunciOpsi}`);
  if (r) r.checked = true;
}

function cekJawabanKuisCSS() {
  let opsiTerpilih = document.querySelector(
    'input[name="pilihanSoalCSS"]:checked',
  );
  let teksHasil = document.getElementById("css-hasil-kuis");
  if (!opsiTerpilih) {
    teksHasil.innerText = "Pilih salah satu opsi jawaban.";
    return;
  }

  let jawabanUser = opsiTerpilih.value;
  let kunciBenar = dataSoalKuisCSS[indeksSoalCSS].kunci;
  if (jawabanUser === kunciBenar) {
    teksHasil.innerText = "Betul sekali!";
    teksHasil.style.color = "#2e7d32";
    jumlahSkorBenarCSS++;
    putarSuaraFeedback("benar");
  } else {
    teksHasil.innerText = `Kurang tepat. Kunci: (${kunciBenar})`;
    teksHasil.style.color = "#d32f2f";
    putarSuaraFeedback("salah");
  }

  document.querySelectorAll('input[name="pilihanSoalCSS"]').forEach((radio) => {
    radio.disabled = true;
    const parentDiv = radio.parentElement;

    if (radio.value === kunciBenar) {
      parentDiv.style.backgroundColor = "#e8f5e9";
      parentDiv.style.borderColor = "#a5d6a7";
      parentDiv.style.color = "#1b5e20";
    }

    if (radio.checked && jawabanUser !== kunciBenar) {
      parentDiv.style.backgroundColor = "#ffebee";
      parentDiv.style.borderColor = "#ef9a9a";
      parentDiv.style.color = "#c62828";
    }
  });

  document.getElementById("css-btn-submit-quiz").style.display = "none";
  document.getElementById("css-btn-next-quiz").style.display = "inline-block";
}

function lanjutSoalKuisCSS() {
  indeksSoalCSS++;
  tampilkanSoalMateriCSS();
}

function tampilkanHasilAkhirKuisCSS() {
  const totalNilai = (jumlahSkorBenarCSS / dataSoalKuisCSS.length) * 100;
  const kontainerKartu = document.getElementById("css-quiz-card-container");

  let pesanKelulusan = "";
  let warnaTeks = "";
  if (totalNilai >= 70) {
    pesanKelulusan = "Selamat! Anda Lulus Kuis CSS ";
    warnaTeks = "#2e7d32";
    pemicuEfekConfetti();
  } else {
    pesanKelulusan = "Coba Lagi! Anda Belum Lulus Kuis ";
    warnaTeks = "#e65100";
  }

  kontainerKartu.innerHTML = `
        <div style="text-align: center; padding: 20px 0;">
            <i class="fas fa-trophy" style="font-size: 50px; color: #ffbc00; margin-bottom: 15px;"></i>
            <h2 style="color: ${warnaTeks}; margin-bottom: 5px;">${pesanKelulusan}</h2>
            <p style="font-size: 24px; font-weight: bold; margin: 15px 0; color: #333;">Skor Anda: ${totalNilai} / 100</p>
            <p style="color: #666; font-size: 15px;">Mampu menjawab benar sebanyak <strong>${jumlahSkorBenarCSS}</strong> dari <strong>${dataSoalKuisCSS.length}</strong> pertanyaan.</p>
            
            <button onclick="ulangiKuisCSS()" style="background-color: #343a40; color: white; border: none; padding: 12px 20px; border-radius: 8px; font-weight: bold; cursor: pointer; margin-top: 20px; font-size: 14px; width: 48%; margin-right: 2%;">Ulangi Kuis</button>
            
            <button onclick="kembaliKeUtamaCSS()" style="background-color: #ff4d6d; color: white; border: none; padding: 12px 20px; border-radius: 8px; font-weight: bold; cursor: pointer; margin-top: 20px; font-size: 14px; width: 48%;">Kembali</button>
        </div>
    `;
}

function kembaliKeUtamaCSS() {
  document.getElementById("kuis-css").style.display = "none";
  const halamanUtama = document.getElementById("css-pengertian");
  if (halamanUtama) {
    halamanUtama.style.display = "block";
  }
  indeksSoalCSS = 0;
  jumlahSkorBenarCSS = 0;
  ulangiKuisCSS();
}

const dataSoalKuisJS = [
  {
    tanya: "Di dalam elemen HTML manakah kita meletakkan kode JavaScript?",
    opsi: {
      A: "&lt;script&gt;",
      B: "&lt;javascript&gt;",
      C: "&lt;js&gt;",
    },
    kunci: "A",
  },
  {
    tanya:
      "Bagaimana cara menulis pesan 'Hello World' di dalam kotak peringatan (alert box)?",
    opsi: {
      A: "msgBox('Hello World');",
      B: "alert('Hello World');",
      C: "alertBox('Hello World');",
    },
    kunci: "B",
  },
  {
    tanya:
      "Bagaimana cara yang benar untuk membuat fungsi (function) di JavaScript?",
    opsi: {
      A: "function:myFunction()",
      B: "function = myFunction()",
      C: "function myFunction()",
    },
    kunci: "C",
  },
  {
    tanya:
      "Bagaimana cara menulis conditional statement 'IF' di JavaScript untuk memeriksa apakah variabel i TIDAK sama dengan 5?",
    opsi: {
      A: "if (i != 5)",
      B: "if i <> 5",
      C: "if (i tidak sama 5)",
    },
    kunci: "A",
  },
  {
    tanya:
      "Manakah keyword yang digunakan untuk mendeklarasikan variabel yang nilainya TIDAK dapat diubah kembali (konstan)?",
    opsi: {
      A: "var",
      B: "let",
      C: "const",
    },
    kunci: "C",
  },
  {
    tanya:
      "Bagaimana cara menuliskan komentar satu baris yang benar di dalam kode JavaScript?",
    opsi: {
      A: "' Ini komentar JavaScript",
      B: "// Ini komentar JavaScript",
      C: "* Ini komentar JavaScript",
    },
    kunci: "B",
  },
  {
    tanya: "Manakah cara yang benar untuk menuliskan array di JavaScript?",
    opsi: {
      A: "let warna = ['merah', 'hijau', 'biru']",
      B: "let warna = (1:'merah', 2:'hijau', 3:'biru')",
      C: "let warna = 'merah', 'hijau', 'biru'",
    },
    kunci: "A",
  },
  {
    tanya:
      "Bagaimana cara membulatkan angka 7.25 ke bilangan bulat terdekat di JavaScript?",
    opsi: {
      A: "Math.rnd(7.25)",
      B: "Math.round(7.25)",
      C: "round(7.25)",
    },
    kunci: "B",
  },
  {
    tanya:
      "Operator perbandingan manakah yang digunakan untuk memeriksa kesamaan nilai DAN tipe datanya sekaligus (strict equal)?",
    opsi: {
      A: "==",
      B: "=",
      C: "===",
    },
    kunci: "C",
  },
  {
    tanya:
      "Event handler manakah yang terpicu ketika pengguna mengklik pada suatu elemen HTML?",
    opsi: {
      A: "onchange",
      B: "onclick",
      C: "onmouseover",
    },
    kunci: "B",
  },
];

let indeksSoalJS = 0;
let jumlahSkorBenarJS = 0;

const templateAwalKuisJS = document.getElementById("js-quiz-card-container")
  ? document.getElementById("js-quiz-card-container").innerHTML
  : "";

function ulangiKuisJS() {
  const kontainerKartu = document.getElementById("js-quiz-card-container");
  if (templateAwalKuisJS) {
    kontainerKartu.innerHTML = templateAwalKuisJS;
  }
  indeksSoalJS = 0;
  jumlahSkorBenarJS = 0;
  tampilkanSoalMateriJS();
}

function tampilkanSoalMateriJS() {
  const infoProgress = document.getElementById("js-quiz-progress");
  const teksSoal = document.getElementById("js-quiz-question");
  const areaOpsi = document.getElementById("js-quiz-options");
  const teksHasil = document.getElementById("js-hasil-kuis");
  const btnSubmit = document.getElementById("js-btn-submit-quiz");
  const btnNext = document.getElementById("js-btn-next-quiz");

  if (!infoProgress || !teksSoal) return;

  teksHasil.innerText = "";
  btnSubmit.style.display = "inline-block";
  btnNext.style.display = "none";

  if (indeksSoalJS < dataSoalKuisJS.length) {
    let soalSkrg = dataSoalKuisJS[indeksSoalJS];
    infoProgress.innerText = `Soal ${indeksSoalJS + 1} dari ${dataSoalKuisJS.length}`;
    teksSoal.innerHTML = soalSkrg.tanya;
    areaOpsi.innerHTML = "";
    for (let kunciOpsi in soalSkrg.opsi) {
      areaOpsi.innerHTML += `
                <div class="quiz-option-item" onclick="pilihRadioJSOtomatis('${kunciOpsi}')">
                    <input type="radio" name="pilihanSoalJS" id="js-opt-${kunciOpsi}" value="${kunciOpsi}">
                    <label for="js-opt-${kunciOpsi}" style="cursor:pointer;"><strong>${kunciOpsi}.</strong> ${soalSkrg.opsi[kunciOpsi]}</label>
                </div>`;
    }
  } else {
    tampilkanHasilAkhirKuisJS();
  }
}

function pilihRadioJSOtomatis(kunciOpsi) {
  const r = document.getElementById(`js-opt-${kunciOpsi}`);
  if (r) r.checked = true;
}

function cekJawabanKuisJS() {
  let opsiTerpilih = document.querySelector(
    'input[name="pilihanSoalJS"]:checked',
  );
  let teksHasil = document.getElementById("js-hasil-kuis");
  if (!opsiTerpilih) {
    teksHasil.innerText = "Pilih salah satu opsi jawaban.";
    return;
  }

  let jawabanUser = opsiTerpilih.value;
  let kunciBenar = dataSoalKuisJS[indeksSoalJS].kunci;
  if (jawabanUser === kunciBenar) {
    teksHasil.innerText = "Betul sekali!";
    teksHasil.style.color = "#2e7d32";
    jumlahSkorBenarJS++;
    putarSuaraFeedback("benar");
  } else {
    teksHasil.innerText = `Kurang tepat. Kunci: (${kunciBenar})`;
    teksHasil.style.color = "#d32f2f";
    putarSuaraFeedback("salah");
  }

  document.querySelectorAll('input[name="pilihanSoalJS"]').forEach((radio) => {
    radio.disabled = true;
    const parentDiv = radio.parentElement;

    if (radio.value === kunciBenar) {
      parentDiv.style.backgroundColor = "#e8f5e9";
      parentDiv.style.borderColor = "#a5d6a7";
      parentDiv.style.color = "#1b5e20";
    }

    if (radio.checked && jawabanUser !== kunciBenar) {
      parentDiv.style.backgroundColor = "#ffebee";
      parentDiv.style.borderColor = "#ef9a9a";
      parentDiv.style.color = "#c62828";
    }
  });
  document.getElementById("js-btn-submit-quiz").style.display = "none";
  document.getElementById("js-btn-next-quiz").style.display = "inline-block";
}

function lanjutSoalKuisJS() {
  indeksSoalJS++;
  tampilkanSoalMateriJS();
}

function tampilkanHasilAkhirKuisJS() {
  const totalNilai = (jumlahSkorBenarJS / dataSoalKuisJS.length) * 100;
  const kontainerKartu = document.getElementById("js-quiz-card-container");

  let pesanKelulusan = "";
  let warnaTeks = "";
  if (totalNilai >= 70) {
    pesanKelulusan = "Selamat! Anda Lulus Kuis JavaScript ";
    warnaTeks = "#2e7d32";
    pemicuEfekConfetti();
  } else {
    pesanKelulusan = "Coba Lagi! Anda Belum Lulus Kuis";
    warnaTeks = "#e65100";
  }

  kontainerKartu.innerHTML = `
        <div style="text-align: center; padding: 20px 0;">
            <i class="fas fa-trophy" style="font-size: 50px; color: #ffbc00; margin-bottom: 15px;"></i>
            <h2 style="color: ${warnaTeks}; margin-bottom: 5px;">${pesanKelulusan}</h2>
            <p style="font-size: 24px; font-weight: bold; margin: 15px 0; color: #333;">Skor Anda: ${totalNilai} / 100</p>
            <p style="color: #666; font-size: 15px;">Mampu menjawab benar sebanyak <strong>${jumlahSkorBenarJS}</strong> dari <strong>${dataSoalKuisJS.length}</strong> pertanyaan.</p>
            
            <button onclick="ulangiKuisJS()" style="background-color: #343a40; color: white; border: none; padding: 12px 20px; border-radius: 8px; font-weight: bold; cursor: pointer; margin-top: 20px; font-size: 14px; width: 48%; margin-right: 2%;">Ulangi Kuis</button>
            
            <button onclick="kembaliKeUtamaJS()" style="background-color: #ff4d6d; color: white; border: none; padding: 12px 20px; border-radius: 8px; font-weight: bold; cursor: pointer; margin-top: 20px; font-size: 14px; width: 48%;">Kembali</button>
        </div>
    `;
}

function kembaliKeUtamaJS() {
  document.getElementById("kuis-js").style.display = "none";
  const halamanUtama =
    document.getElementById("js-intro") ||
    document.getElementById("java-intro");
  if (halamanUtama) {
    halamanUtama.style.display = "block";
  }
  indeksSoalJS = 0;
  jumlahSkorBenarJS = 0;
  ulangiKuisJS();
}

const dataSoalKuisJava = [
  {
    tanya:
      "Bagaimana cara menuliskan sintaks pencetakan teks 'Hello World' yang benar di Java?",
    opsi: {
      A: 'Console.WriteLine("Hello World");',
      B: 'System.out.println("Hello World");',
      C: 'print("Hello World");',
    },
    kunci: "B",
  },
  {
    tanya:
      "Tipe data manakah yang paling tepat digunakan untuk menyimpan satu karakter saja (misal 'A' atau 'B') di Java?",
    opsi: {
      A: "String",
      B: "char",
      C: "boolean",
    },
    kunci: "B",
  },
  {
    tanya:
      "Bagaimana cara membuat sebuah variabel angka bulat (integer) dengan nilai 5 yang benar di Java?",
    opsi: {
      A: "int x = 5;",
      B: "num x = 5;",
      C: "x = 5;",
    },
    kunci: "A",
  },
  {
    tanya:
      "Keyword manakah yang digunakan untuk membuat sebuah Class turunan (inheritance) dari class lain di Java?",
    opsi: {
      A: "implements",
      B: "extends",
      C: "inherits",
    },
    kunci: "B",
  },
  {
    tanya:
      "Apa nama method utama (main method) yang wajib ada agar sebuah program Java dapat dieksekusi atau dijalankan?",
    opsi: {
      A: "public static void main(String[] args)",
      B: "public void main(String args)",
      C: "static void start()",
    },
    kunci: "A",
  },
  {
    tanya:
      "Manakah dari berikut ini yang merupakan cara penulisan komentar satu baris yang benar di Java?",
    opsi: {
      A: "# Ini komentar Java",
      B: "// Ini komentar Java",
      C: "/* Ini komentar Java",
    },
    kunci: "B",
  },
  {
    tanya:
      "Tipe data primitif mana yang digunakan untuk menghasilkan nilai logika benar (true) atau salah (false)?",
    opsi: {
      A: "boolean",
      B: "Boolean",
      C: "logical",
    },
    kunci: "A",
  },
  {
    tanya:
      "Bagaimana cara mendefinisikan sebuah array bertipe String dengan nama 'buah' yang benar di Java?",
    opsi: {
      A: "buah[] String;",
      B: "String[] buah;",
      C: "Array buah = new Array();",
    },
    kunci: "B",
  },
  {
    tanya:
      "Keyword manakah di Java yang digunakan untuk menghentikan putaran loop (perulangan) secara paksa?",
    opsi: {
      A: "stop",
      B: "continue",
      C: "break",
    },
    kunci: "C",
  },
  {
    tanya:
      "Indeks elemen pertama di dalam sebuah struktur Array Java selalu dimulai dari angka berapa?",
    opsi: {
      A: "0",
      B: "1",
      C: "-1",
    },
    kunci: "A",
  },
];

let indeksSoalJava = 0;
let jumlahSkorBenarJava = 0;

const templateAwalKuisJava = document.getElementById("java-quiz-card-container")
  ? document.getElementById("java-quiz-card-container").innerHTML
  : "";

function ulangiKuisJava() {
  const kontainerKartu = document.getElementById("java-quiz-card-container");
  if (templateAwalKuisJava) {
    kontainerKartu.innerHTML = templateAwalKuisJava;
  }
  indeksSoalJava = 0;
  jumlahSkorBenarJava = 0;
  tampilkanSoalMateriJava();
}

function tampilkanSoalMateriJava() {
  const infoProgress = document.getElementById("java-quiz-progress");
  const teksSoal = document.getElementById("java-quiz-question");
  const areaOpsi = document.getElementById("java-quiz-options");
  const teksHasil = document.getElementById("java-hasil-kuis");
  const btnSubmit = document.getElementById("java-btn-submit-quiz");
  const btnNext = document.getElementById("java-btn-next-quiz");

  if (!infoProgress || !teksSoal) return;

  teksHasil.innerText = "";
  btnSubmit.style.display = "inline-block";
  btnNext.style.display = "none";

  if (indeksSoalJava < dataSoalKuisJava.length) {
    let soalSkrg = dataSoalKuisJava[indeksSoalJava];
    infoProgress.innerText = `Soal ${indeksSoalJava + 1} dari ${dataSoalKuisJava.length}`;
    teksSoal.innerHTML = soalSkrg.tanya;
    areaOpsi.innerHTML = "";
    for (let kunciOpsi in soalSkrg.opsi) {
      areaOpsi.innerHTML += `
                <div class="quiz-option-item" onclick="pilihRadioJavaOtomatis('${kunciOpsi}')">
                    <input type="radio" name="pilihanSoalJava" id="java-opt-${kunciOpsi}" value="${kunciOpsi}">
                    <label for="java-opt-${kunciOpsi}" style="cursor:pointer;"><strong>${kunciOpsi}.</strong> ${soalSkrg.opsi[kunciOpsi]}</label>
                </div>`;
    }
  } else {
    tampilkanHasilAkhirKuisJava();
  }
}

function pilihRadioJavaOtomatis(kunciOpsi) {
  const r = document.getElementById(`java-opt-${kunciOpsi}`);
  if (r) r.checked = true;
}

function cekJawabanKuisJava() {
  let opsiTerpilih = document.querySelector(
    'input[name="pilihanSoalJava"]:checked',
  );
  let teksHasil = document.getElementById("java-hasil-kuis");
  if (!opsiTerpilih) {
    teksHasil.innerText = "Pilih salah satu opsi jawaban.";
    return;
  }

  let jawabanUser = opsiTerpilih.value;
  let kunciBenar = dataSoalKuisJava[indeksSoalJava].kunci;
  if (jawabanUser === kunciBenar) {
    teksHasil.innerText = " Betul sekali!";
    teksHasil.style.color = "#2e7d32";
    jumlahSkorBenarJava++;
    putarSuaraFeedback("benar");
  } else {
    teksHasil.innerText = `Kurang tepat. Kunci: (${kunciBenar})`;
    teksHasil.style.color = "#d32f2f";
    putarSuaraFeedback("salah");
  }

  document
    .querySelectorAll('input[name="pilihanSoalJava"]')
    .forEach((radio) => {
      radio.disabled = true;
      const parentDiv = radio.parentElement;

      if (radio.value === kunciBenar) {
        parentDiv.style.backgroundColor = "#e8f5e9";
        parentDiv.style.borderColor = "#a5d6a7";
        parentDiv.style.color = "#1b5e20";
      }

      if (radio.checked && jawabanUser !== kunciBenar) {
        parentDiv.style.backgroundColor = "#ffebee";
        parentDiv.style.borderColor = "#ef9a9a";
        parentDiv.style.color = "#c62828";
      }
    });

  document.getElementById("java-btn-submit-quiz").style.display = "none";
  document.getElementById("java-btn-next-quiz").style.display = "inline-block";
}

function lanjutSoalKuisJava() {
  indeksSoalJava++;
  tampilkanSoalMateriJava();
}

function tampilkanHasilAkhirKuisJava() {
  const totalNilai = (jumlahSkorBenarJava / dataSoalKuisJava.length) * 100;
  const kontainerKartu = document.getElementById("java-quiz-card-container");

  let pesanKelulusan = "";
  let warnaTeks = "";
  if (totalNilai >= 70) {
    pesanKelulusan = "Selamat! Anda Lulus Kuis Java ";
    warnaTeks = "#2e7d32";
    pemicuEfekConfetti();
  } else {
    pesanKelulusan = "Coba Lagi! Anda Belum Lulus Kuis ";
    warnaTeks = "#e65100";
  }

  kontainerKartu.innerHTML = `
        <div style="text-align: center; padding: 20px 0;">
            <i class="fas fa-trophy" style="font-size: 50px; color: #ffbc00; margin-bottom: 15px;"></i>
            <h2 style="color: ${warnaTeks}; margin-bottom: 5px;">${pesanKelulusan}</h2>
            <p style="font-size: 24px; font-weight: bold; margin: 15px 0; color: #333;">Skor Anda: ${totalNilai} / 100</p>
            <p style="color: #666; font-size: 15px;">Mampu menjawab benar sebanyak <strong>${jumlahSkorBenarJava}</strong> dari <strong>${dataSoalKuisJava.length}</strong> pertanyaan.</p>
            
            <button onclick="ulangiKuisJava()" style="background-color: #343a40; color: white; border: none; padding: 12px 20px; border-radius: 8px; font-weight: bold; cursor: pointer; margin-top: 20px; font-size: 14px; width: 48%; margin-right: 2%;">Ulangi Kuis</button>
            
            <button onclick="kembaliKeUtamaJava()" style="background-color: #ff4d6d; color: white; border: none; padding: 12px 20px; border-radius: 8px; font-weight: bold; cursor: pointer; margin-top: 20px; font-size: 14px; width: 48%;">Kembali</button>
        </div>
    `;
}

function kembaliKeUtamaJava() {
  document.getElementById("kuis-java").style.display = "none";
  const halamanUtama = document.getElementById("java-intro");
  if (halamanUtama) {
    halamanUtama.style.display = "block";
  }
  indeksSoalJava = 0;
  jumlahSkorBenarJava = 0;
  ulangiKuisJava();
}

function pemicuEfekConfetti() {
  const daftarWarna = [
    "#ff4d6d",
    "#ff8fa3",
    "#ffb3c1",
    "#ffbc00",
    "#2e7d32",
    "#4ea8de",
    "#560bad",
  ];

  for (let i = 0; i < 60; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("elemen-confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      daftarWarna[Math.floor(Math.random() * daftarWarna.length)];
    confetti.style.width = Math.random() * 8 + 6 + "px";
    confetti.style.height = Math.random() * 14 + 8 + "px";
    confetti.style.animationDelay = Math.random() * 1.5 + "s";
    confetti.style.animationDuration = Math.random() * 2 + 2 + "s";
    document.body.appendChild(confetti);
    setTimeout(() => {
      confetti.remove();
    }, 4000);
  }
}

function putarSuaraFeedback(tipe) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  const ctx = new AudioContext();
  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  if (tipe === "benar") {
    oscillator.type = "sine";

    oscillator.frequency.setValueAtTime(523.25, ctx.currentTime);
    gainNode.gain.setValueAtTime(0.2, ctx.currentTime);

    oscillator.frequency.setValueAtTime(659.25, ctx.currentTime + 0.08);

    oscillator.start(ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
    oscillator.stop(ctx.currentTime + 0.25);
  } else if (tipe === "salah") {
    oscillator.type = "sawtooth";

    oscillator.frequency.setValueAtTime(130.81, ctx.currentTime);
    gainNode.gain.setValueAtTime(0.15, ctx.currentTime);

    oscillator.start(ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
    oscillator.stop(ctx.currentTime + 0.2);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const semuaKotakKode = document.querySelectorAll(".code-example");

  semuaKotakKode.forEach((kotak) => {
    let teksKode = kotak.innerHTML;

    let teksBersih = teksKode.trim();

    kotak.style.textAlign = "left";
    kotak.style.whiteSpace = "pre-wrap";
    kotak.style.fontFamily = "monospace";
    kotak.style.display = "block";

    kotak.innerHTML = teksBersih;
  });
});
