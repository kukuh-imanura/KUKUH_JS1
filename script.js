// Js Program by Kukuh Imanura
// untuk program dinamis, buka di browser >> console

function getNama(nama){

    try {
        // Input nama
        nama = prompt("Masukkan Nama Anda")

        // Kondisi jika kosong
        if (nama == ""){
            nama = "World!"
            return alert("Hello " + nama);
        }else{
            return alert("Hello " + nama);
        }
    } catch (error) {    
        console.log("");
        console.log("-".repeat(50));
        console.log("Hello " + nama);
        console.log("-".repeat(50));
    }
}

function kerangAjaib(umur, jk) {
    console.log("Kerang Ajaib");
    console.log("-".repeat(50));

    try {
        umur    = prompt("Masukkan Umur          : ");
        jk      = prompt("Masukkan Jenis Kelamin : ");
    } catch (error) {
        console.log("Masukkan Umur          : " + umur);
        console.log("Masukkan Jenis Kelamin : " + jk);
    }

    console.log("");
    console.log("Pesan Kerang Ajaib     : ");

    if (jk == "L") {
        // console.log("Halo Pria Sukses")
        if (umur < 0){
            console.log("Jangan Nge-Cheat")
        }else if (umur == 0 ){
            console.log("Selamat datang ke dunia")
        }else if (umur > 0 && umur <= 13){
            console.log("Hey, jangan khawatir jika kamu masih bermain game. Ingat, kamu sedang mempersiapkan diri untuk masa depan yang cerah di dunia esports!")
        }else if (umur > 14 && umur <= 19){
            console.log("Kamu adalah generasi masa depan yang akan mengubah dunia. Jangan pernah meragukan kekuatanmu")
        }else if (umur > 20 && umur <= 64){
            console.log("Quarter-life crisis bukan akhir dari segalanya. Ini hanya awal dari petualangan hidup yang besar. Nikmati perjalananmu!")
        }else if (umur > 65 && umur <= 122){
            console.log("Pensiun bukan akhir dari produktivitasmu. Sekarang waktunya untuk mengejar hobi dan mimpi yang selama ini tertunda!")
        }else if (umur > 123 && umur <= 129){
            console.log("Selamat, Kamu memecahkan rekor sebagai orang tertua di bumi")
        }else if (umur > 130 && umur <= 199){
            console.log("Apakah kamu menggunakan cheat kebal")
        }else{
            console.log("Apakah kamu vampir? atau hantu?")
        }
    }else if (jk == "P") {
        // console.log("Hallo Wanita Hebat")
        if (umur < 0){
            console.log("Jangan Nge-Cheat")
        }else if (umur == 0 ){
            console.log("Selamat datang ke dunia")
        }else if (umur > 0 && umur <= 13){
            console.log("Hallo putri kecil, satu hari nanti kamu akan menjadi pahlawan dalam kisahmu sendiri, tidak hanya menunggu pangeran dalam dongeng.")
        }else if (umur > 14 && umur <= 19){
            console.log("Saat ini mungkin kamu sedang menghadapi banyak drama remaja. Ingatlah, drama itu hanya bagian dari latihan untuk menghadapi kehidupan nyata yang lebih besar.")
        }else if (umur > 20 && umur <= 64){
            console.log("Sering ditanya 'Kapan nikah?' Ingat, yang paling penting adalah menemukan seseorang yang benar-benar spesial, bukan sekadar menjawab pertanyaan orang lain.")
        }else if (umur > 65 && umur <= 122){
            console.log("Hidup yang panjang adalah anugerah. Teruslah menciptakan kenangan indah dan menginspirasi generasi yang lebih muda.")
        }else if (umur > 123 && umur <= 129){
            console.log("Selamat, Kamu memecahkan rekor sebagai orang tertua di bumi")
        }else if (umur > 130 && umur <= 199){
            console.log("Apakah kamu menggunakan cheat kebal")
        }else{
            console.log("Apakah kamu vampir? atau hantu?")
        }
    }else{
        if (umur < 0){
            console.log("Jangan Nge-Cheat")
        }else if (umur == 0 ){
            console.log("Selamat datang ke dunia")
        }else if (umur > 0 && umur <= 122){
            console.log("Hi There")
        }else if (umur > 123 && umur <= 129){
            console.log("Selamat, Kamu memecahkan rekor sebagai orang tertua di bumi")
        }else if (umur > 130 && umur <= 199){
            console.log("Apakah kamu menggunakan cheat kebal")
        }else{
            console.log("Apakah kamu vampir? atau hantu?")
        }
    }

    console.log("-".repeat(50));
}

function kalkulator(bil1, bil2, operator) {
    console.log("Selamat Datang di Program Perhitungan Sederhana");
    console.log("-".repeat(50));

    try {
        operator    = prompt("Silahkan Masukkan Operator (+) (-) (*) (/) (^) : ")
        bil1        = Number(prompt("Silahkan Masukkan Bilangan 1                   : "))
        bil2        = Number(prompt("Silahkan Masukkan Bilangan 2                   : "))
    } catch (error) {
        console.log("Silahkan Masukkan Operator (+) (-) (*) (/) (^) : " + operator)
        console.log("Silahkan Masukkan Bilangan 1                   : " + bil1)
        console.log("Silahkan Masukkan Bilangan 2                   : " + bil2)
    }

    console.log("")

    switch (operator) {
        case "+":
            hasil = bil1 + bil2
            console.log("Hasil dari " + bil1 + " " + operator + " " + bil2 + " = " + hasil)
            break;
        case "-":
            hasil = bil1 - bil2
            console.log("Hasil dari " + bil1 + " " + operator + " " + bil2 + " = " + hasil)
            break;
        case "*":
            hasil = bil1 * bil2
            console.log("Hasil dari " + bil1 + " " + operator + " " + bil2 + " = " + hasil)
            break;
        case "/":
            hasil = bil1 / bil2
            console.log("Hasil dari " + bil1 + " " + operator + " " + bil2 + " = " + hasil)
            break;
        case "^":
            hasil = 1
            for (let i = 0; i < bil2; i++) {
                hasil = bil1 * hasil
            }
            console.log("Hasil dari " + bil1 + " " + operator + " " + bil2 + " = " + hasil)
            break;
        default:
            console.log("Masukkan Operator/Bilangan 1/Bilangan 2")
            break;
    }

    console.log("-".repeat(50));
}

function kelipatan (bil1, bil2) {
    console.log("Selamat Datang di Program Kelipatan Bilangan");
    console.log("-".repeat(50));

    let i = 0
    let hasil = 0

    try {
        bil1        = Number(prompt("Masukkan Bilangan  : "))
        bil2        = Number(prompt("Masukkan Kelipatan : "))
    } catch (error) {
        console.log("Masukkan Bilangan  : " + bil1);
        console.log("Masukkan Kelipatan : " + bil2);
    }

    console.log("");

    while (i < bil2) {
        hasil += bil1
        console.log(hasil);
        i++
    }

    console.log("-".repeat(50));
}

function tebakAngka(angka) {
    console.log("Selamat Datang di Game Tebak Angka");
    console.log("-".repeat(50));

    try {
        do {
            angka = Number(prompt("Masukkan Tebakan Angka : "))
            console.log("Kamu menebak   : " + angka)
        } while (angka != 88);
    } catch (error) {
        do {
            console.log("Masukkan Tebakan Angka : " + angka)
        } while (angka != 8);
    }

    console.log("Selamat tebakanmu benar")

    console.log("-".repeat(50));
}

function chooseProgram(program) {
    console.log("List Program");
    console.log("1. Kerang Ajaib");
    console.log("2. Kalkulator");
    console.log("3. Kelipatan Bilangan");
    console.log("4. Tebak Angka");

    try {
        program = Number(prompt("Silahkan Pilih Program : "))
    } catch (error) {
        console.log("Silahkan Pilih Program : " + program);
    }
    
    console.log("-".repeat(50));

    switch (program) {
        case 1:
            kerangAjaib(21, "L")
            break;
        case 2:
            kalkulator(4, 2, "+")
            break;
        case 3:
            kelipatan(4, 2)
            break;
        case 4:
            tebakAngka(8)
            break;
        default:
            console.log("Maaf, pilihan anda tidak tersedia.")
            break;
    }
}

function main(nama, program) {

    getNama(nama)
    chooseProgram(program)
}

main("World", 1)