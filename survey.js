function displayFormData() {
    var nama = document.getElementById("nama").value;
    var tanggal = document.getElementById("tanggal").value;
    var angkatan = document.getElementById("angkatan").value;
    var kenal = document.querySelector('input[name="kenal"]:checked').value;
    var suka = document.getElementById("suka").value;
    var arti = document.getElementById("arti").value;

    var message = "Nama: " + nama + "\n" +
        "Tanggal Pengisian Form: " + tanggal + "\n" +
        "Tahun Berapa Anda Mengenal Boy Pablo: " + angkatan + "\n" +
        "Darimana Anda Mengenalnya: " + kenal + "\n" +
        "Alasan Suka Boy Pablo: " + suka + "\n" +
        "Arti Lagu Sick Feeling Bagi Anda: " + arti;

    alert(message);
}