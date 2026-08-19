/**
 * A hotel determines room availability using the following rules.
 * Sebuah hotel menentukan ketersediaan kamar menggunakan aturan-aturan berikut.
 * First, the system checks whether rooms are still available.
 * Pertama, sistem memeriksa apakah kamar masih tersedia.
 * If rooms are available:
 * Jika kamar tersedia:
 * - Premium members receive a free room upgrade.
 * - Anggota premium mendapatkan peningkatan kategori kamar secara gratis.
 * - Regular customers receive the reserved room only.
 * - Pelanggan reguler hanya mendapatkan kamar yang telah dipesan.
 * 
 * If no rooms are available:
 * Jika tidak ada kamar yang tersedia:
 * - Premium members are placed on the priority waiting list.
 * - Anggota premium ditempatkan dalam daftar tunggu prioritas.
 * - Regular customers are informed that no rooms are available.
 * - Pelanggan tetap diberitahu bahwa tidak ada kamar yang tersedia.
 * 
 * Today's reservation:
 * | Information    | Value       |
 * | -------------- | ----------- |
 * | Customer Name  | Nadia Putri |
 * | Premium Member | Yes         |
 * | Room Available | No          |
 * 
 * The system should display the appropriate message.
 * Sistem harus menampilkan pesan yang sesuai.
 * Student Tasks: 
 * Tugas Siswa:
 * 1. Declare all variables.
 * 1. Deklarasikan semua variabel.
 * 2. Implement the logic using nested if statements.
 * 2. Implementasikan logika tersebut menggunakan
 *    pernyataan if bersarang (ada pengecekan kondisi di dlm kondisi lain).
 * 3. Display the reservation result.
 * 3. Tampilkan hasil reservasi.
 
 */

const customerName: string = "Nadia Putri";
//anggota premium atau bukan
const isPremiumMember: boolean = false; 
//menentukan apakah pelanggan member VIP
const isVipMember: boolean = true;
//kamar tersedia atau tidak
const isRoomAvailable: boolean = true; 

//if kamar tersedia
if (isRoomAvailable) { 
    if(isVipMember) {
        console.log("Free room upgrade for " + customerName);
        console.log("Free breakfast for " + customerName);
    //if mengecek apakah pelanggan anggota premium  
    } else if (isPremiumMember) { 
        //Jika benar maka menampilkan pesan upgrade kamar gratis
        console.log("Free room upgrade for " + customerName); 
    } else { //Jika pelanggan bukan anggota premium
        //Menampilkan pesan reservasi kamar untuk pelanggan
        console.log("Reserved room for " + customerName); 
    }  

    } else { //kamar tidak tersedia 
    if (isVipMember) {
        //Jika benar maka menampilkan pesan daftar tunggu prioritas
        console.log("Priority waiting list for " + customerName); 
    } else if (isPremiumMember) { 
        //Jika benar maka menampilkan pesan daftar tunggu prioritas
        console.log("Priority waiting list for " + customerName); 
    } else { 
        //Menampilkan pesan tidak ada kamar tersedia untuk pelanggan
        console.log("No rooms available for " + customerName); 
    }
}