const p = document.querySelector(".data")

const dataBarang = [
    {
        nama: "susu",
        harga: 2000
    },
    {
        nama: "bakso",
        harga: 5000
    },
    {
        nama: "mi",
        harga: 3000
    }
]

const belanjaan = prompt("susu ,bakso ,mi").split(",");
const bayar = parseInt(prompt("duit nya"));

let hargaBarang = []
belanjaan.forEach((item) => {
    dataBarang.forEach(data => {
        switch (item) {
            case data.nama:
                hargaBarang.push(data.harga)
                break
            default:
                break;
        }
    })
})
const totalBelanjaan = hargaBarang.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

if (bayar < totalBelanjaan || bayar - totalBelanjaan < 0) {
    p.innerText = `uang tidak cukup, uang kurang  ${bayar - totalBelanjaan}`
}
else {
    p.innerText = `barang yang dibeli : ${belanjaan.join(",")}
                   duit :                 Rp.${bayar}
                   total belanjaan :      Rp.${totalBelanjaan}
                   kembalian :            Rp.${bayar - totalBelanjaan}`
}