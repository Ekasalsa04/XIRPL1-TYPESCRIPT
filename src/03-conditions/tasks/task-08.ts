/**
 * An airline automatically determines a passenger's check-in status.
 * Business Rules
 * Step 1
 * If the passenger has not checked in online, display:
 * "Please complete online check-in first.""
 * 
 * Otherwise, continue.
 * Step 2
 * If baggage weight exceeds 20 kg:
 * - Business Class → Extra baggage allowed.
 * - Economy Class → Additional baggage fee required.
 * 
 * Otherwise:
 * Proceed to boarding pass printing.
 * 
 * Passenger Information
 * | Information     | Value         |
 * | --------------- | ------------- |
 * | Passenger       | Fajar Nugroho |
 * | Online Check-in | Yes           |
 * | Cabin Class     | Economy       |
 * | Baggage Weight  | 24 kg         |
 * 
 * Student Tasks
 * 1. Declare all variables.
 * 2. Implement the airline decision process.
 * 3. Display the correct message.
 */

const passengerName: string = "Fajar Nugroho"; //Menyimpan data berupa teks nama penumpang
const hasCheckedInOnline: boolean = true; //Menyimpan data berupa boolean apakah penumpang telah melakukan check-in online atau tidak
const cabinClass: string = "Economy"; //Menyimpan data berupa teks kelas kabin penumpang
const baggageWeight: number = 24; //Menyimpan data berupa angka berat bagasi penumpang  

if (!hasCheckedInOnline) { //if akan mengecek apakah penumpang belum melakukan check-in online
    console.log("Please complete online check-in first."); //Jika benar maka menampilkan pesan untuk menyelesaikan check-in online terlebih dahulu
}
if (baggageWeight > 20) { //if akan mengecek apakah berat bagasi lebih besar dari 20 kg
    if (cabinClass === "Business") { //if akan mengecek apakah kelas kabin penumpang adalah Business
        console.log("Extra baggage allowed for " + passengerName); //Jika benar maka menampilkan pesan bagasi tambahan diizinkan untuk penumpang
    } else if (cabinClass === "Economy") { //if akan mengecek apakah kelas kabin penumpang adalah Economy
        console.log("Additional baggage fee required for " + passengerName); //Jika benar maka menampilkan pesan biaya bagasi tambahan diperlukan untuk penumpang
    }
    else { //Jika kelas kabin penumpang bukan Business maupun Economy
        console.log("Invalid cabin class for " + passengerName); //Menampilkan pesan kelas kabin tidak valid untuk penumpang
    }
    if (baggageWeight <= 20) { //if akan mengecek apakah berat bagasi kurang dari atau sama dengan 20 kg
        console.log("Proceed to boarding pass printing for " + passengerName); //Jika benar maka menampilkan pesan untuk melanjutkan pencetakan boarding pass untuk penumpang
    }
    console.log("Proceed to boarding pass printing for " + passengerName); //Menampilkan pesan untuk melanjutkan pencetakan boarding pass untuk penumpang
}
