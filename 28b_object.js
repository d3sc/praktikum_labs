let ulang = true;

while (ulang) {
    // Menangkap pilihan player 1
    let p = prompt(" Player 1 \n Pilih : gajah, orang, semut.");

    // Menangkap pilihan computer
    // Membangkitkan bilangan random
    let comp = Math.random();

    if (comp < 0.34) {
        comp = "gajah";
    } else if (comp >= 0.34 && comp < 0.64) {
        comp = "orang";
    } else {
        comp = "semut";
    }

    // menentukan rules
    let hasil = "";

    if (p == comp) {
        hasil = "seri!";
    } else if (p == "gajah") {
        hasil = comp == "orang" ? "Menang!" : "Kalah!";
    } else if (p == "orang") {
        hasil = comp == "gajah" ? "Kalah!" : "Menang!";
    } else if (p == "semut") {
        hasil = comp == "orang" ? "Kalah!" : "Menang!";
    } else {
        hasil = "Anda memasukan pilihan yang salah";
    }

    // tampilkan hasil
    alert("kamu memilih " + p + " dan komputer memilih " + comp + "\nMaka hasilnya player 1 " + hasil);

    ulang = confirm("Ulang lagi?");
}

alert("terimakasih telah bermain!");
