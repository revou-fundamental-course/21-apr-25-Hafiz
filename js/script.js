// Simpan Data Sebelumnya
let previousInput = "";
let previousOutput = "";
let previousDetail = "";

function celsius() {
    // Ambil input, output, dan detail saat ini sebelum update
    previousInput = document.getElementById('konversi-input').value;
    previousOutput = document.getElementById('result-input').value;
    previousDetail = document.getElementById('calculate-detail').value;

    // Mulai proses konversi
    let inputCelsius = parseFloat(previousInput);

    if (isNaN(inputCelsius)) {
        alert("Tolong masukkan angka yang valid!");
        return;
    }

    let fahrenheit = (inputCelsius * 9/5) + 32;

    // Batasi hasilnya hingga 2 angka di belakang koma
    fahrenheit = fahrenheit.toFixed(2);

    document.getElementById('result-input').value = fahrenheit;
    document.getElementById('calculate-detail').value = `(${inputCelsius} × 9/5) + 32 = ${fahrenheit}°F`;
}

function balik() {
    if (previousInput === "" && previousOutput === "" && previousDetail === "") {
        alert("Belum ada data untuk dikembalikan!");
        return;
    }

    // Mengambil nilai fahrenheit yang disimpan sebelumnya
    let fahrenheit = parseFloat(previousOutput);

    if (isNaN(fahrenheit)) {
        alert("Tidak ada data fahrenheit untuk dikembalikan!");
        return;
    }

    let balikKeCelsius = (fahrenheit - 32) * 5/9;

    // Batasi hasilnya hingga 2 angka di belakang koma
    balikKeCelsius = balikKeCelsius.toFixed(2);

    document.getElementById('konversi-input').value = balikKeCelsius;
    document.getElementById('result-input').value = previousOutput;
    document.getElementById('calculate-detail').value = previousDetail;
}

function reset() {
    document.getElementById('konversi-input').value = "";
    document.getElementById('result-input').value = "";
    document.getElementById('calculate-detail').value = "";

    // Jangan lupa reset juga previous datanya biar nggak salah balik
    previousInput = "";
    previousOutput = "";
    previousDetail = "";
}
