/**
 * A shopping mall has a parking building with:
 * - 5 floors
 * - Each floor contains 20 parking spaces
 * 
 * The parking management system wants to display every parking location using the following format:
 * ------------------------------
 * Floor 1 - Slot 1
 * Floor 1 - Slot 2
 * ...
 * Floor 1 - Slot 20
 * 
 * Floor 2 - Slot 1
 * Floor 2 - Slot 2
 * ...
 * 
 * Floor 5 - Slot 20
 * ------------------------------
 * 
 * Tasks:
 *  - Use nested for loops.
 *  - Display every parking location.
 *  - Print a blank line after each floor.
 */

for (let floor: number = 1; floor <= 5; floor++) { //for loop akan mengecek setiap lantai dari 1 sampai 5
    for (let slot: number = 1; slot <= 20; slot++) { //for loop akan mengecek setiap slot dari 1 sampai 20
        console.log("Floor " + floor + " - Slot " + slot); //Menampilkan pesan lokasi parkir untuk setiap lantai dan slot
    }
    console.log(""); //Menampilkan baris kosong setelah setiap lantai
}

