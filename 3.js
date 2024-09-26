// 3. Buatlah function untuk mencetak pattern persegi dari karakter “#” dan “*” yang mempunyai sebuah parameter sebagai nilai panjang dengan nilai parameter harus ganjil.
// Jika function itu dijalankan:
// drawImage(5); | drawImage(7);
// akan dicetak di layar: | akan dicetak di layar:
// *#*#*|*##*##* ##*##|###*### **#**|###*### ##*##|***#*** *#*#*|###*### |###*###
// |*##*##* |

function drawImage(n) {
    if (n % 2 === 0) {
        console.log("Parameter harus ganjil!");
        return;
    }

    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            // Cetak * jika indeks baris dan kolom sama (diagonal utama) atau jika i + j sama dengan n - 1 (diagonal lainnya)
            if (i === j || i + j === n - 1) {
                row += "* ";
            } else {
                row += "# ";
            }
        }
        console.log(row);
    }
}

// Contoh penggunaan
drawImage(5);
drawImage(7);
