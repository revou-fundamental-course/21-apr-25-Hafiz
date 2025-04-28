// Simpan Data Sebelumnya
let previousInput = "";
let previousOutput = "";
let previousDetail = "";

function celcius() {
    // Ambil input, output, dan detail saat ini sebelum update
    previousInput = document.getElementById('konversi-input').value;
    previousOutput = document.getElementById('result-input').value;
    previousDetail = document.getElementById('calculate-detail').value;

    // Mulai proses konversi
    let celsius = parseFloat(previousInput);

    if (isNaN(celsius)) {
        alert("Tolong masukkan angka yang valid!");
        return;
    }

    let fahrenheit = (celsius * 9/5) + 32;

    document.getElementById('result-input').value = fahrenheit;
    document.getElementById('calculate-detail').value = `(${celsius} × 9/5) + 32 = ${fahrenheit}°F`;
}

function balik() {
    document.getElementById('konversi-input').value = previousInput;
    document.getElementById('result-input').value = previousOutput;
    document.getElementById('calculate-detail').value = previousDetail;
}