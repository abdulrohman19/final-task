//2. Diketahui sebuah array seperti berikut : 0123456789
// Susun lah array berikut berdasarkan nilai terkecil dengan membandingkan semua elemen array satu per satu. (Bubble Sort) Dilarang Menggunakan Build in function (HOF)

function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Tukar elemen jika elemen saat ini lebih besar dari elemen berikutnya
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        // mengurangi panjang array yang harus dicek karena elemen terbesar sudah di tempatnya
        n--;
    } while (swapped);

    return arr;
}

let arr = [20, 12, 35, 11, 17, 9, 58, 23, 69, 21];
console.log("Array sebelum diurutkan:", arr);

let sortedArray = bubbleSort(arr);
console.log("Array setelah diurutkan:", sortedArray);
