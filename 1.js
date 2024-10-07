//1. Buatlah sebuah function yang bertujuan untuk menghitung harga barang berdasarkan kualitasnya, dengan parameter kualitas barang dan quantity :
// Kentuan :
// ● Kualitas Barang A, Harga 4550, Jika Qty Pembelian diatas 13 
//mendapat potongan 231/qty
// ● Kualitas Barang B, Harga 5330, Jika Qty pembelian diatas 7
// akan mendapatkan potongan 23%
// ● Kualitas Barang C, Harga 8653, Tidak ada promo untuk barang ini
// ○ Clue : maka jika function dijalankan : ■ Hitungbarang(A, 14)
// Output : - Total harga barang : 63700 - Potongan : 3234
// - Total yang harus dibayar : 60466

 function hitungBarang(kualitas, qty) {
    let hargaPerUnit, totalHarga, potongan = 0, totalBayaran;

    if (kualitas === 'A') {
        hargaPerUnit = 4550;
        totalHarga = hargaPerUnit * qty;

        if (qty > 13) {
            potongan = 231 * qty;
        }
    } else if (kualitas === 'B') {
        hargaPerUnit = 5330;
        totalHarga = hargaPerUnit * qty;

        if (qty > 7) {
            potongan = totalHarga * 0.23;
        }
    } else if (kualitas === 'C') {
        hargaPerUnit = 8653;
        totalHarga = hargaPerUnit * qty;

        potongan = 0;
    } else {
        return 'kualitas barang tidak sesuai/valid';
    }

    totalBayaran = totalHarga - potongan;

    console.log(`Total harga barang: ${totalHarga}`);
    console.log(`potongan: ${potongan}`);
    console.log(`Total yang harus di bayar: ${totalBayaran}`);

    return {
        totalHarga: totalHarga,
        total: potongan,
        totalBayaran: totalBayaran
    };
 }

 hitungBarang('A', 14);