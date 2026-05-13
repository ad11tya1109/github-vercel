document.getElementById("hitung").onclick = function () {
  const a = parseFloat(document.getElementById("angka1").value);
  const b = parseFloat(document.getElementById("angka2").value);

  const operasi = document.querySelector(
    'input[name="operasi"]:checked'
  ).value;

  let hasil = 0;

  if (operasi === "penjumlahan") hasil = a + b;
  if (operasi === "pengurangan") hasil = a - b;
  if (operasi === "perkalian") hasil = a * b;
  if (operasi === "pembagian") hasil = a / b;

  document.querySelector("h1").innerText =
    "Hasil: " + hasil;
};
