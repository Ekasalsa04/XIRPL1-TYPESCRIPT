/**  Mengavaluasi Kinerja Karyawan apakah berhak mendapatkan bonus atau tidak
 * A company evaluates employees every month.
 * Sebuah perusahaan mengevaluasi karyawan setiap bulan.
 * 
 * If an employee's performance score is 80 or above, they receive a performance bonus.
 * Jika nilai kinerja karyawan mencapai 80 atau lebih, mereka menerima bonus kinerja.
 * 
 * Otherwise, they do not receive a bonus.
 * Jika tidak, mereka tidak akan menerima bonus.
 * 
 * Employee information:
 * Informasi karyawan:
 * | Information       | Value         |
 * | ----------------- | ------------- |
 * | Employee Name     | Dimas Pratama |
 * | Performance Score | 78            |
 * 
 * Tasks:
 * Tugas:
 * 
 * 1. Declare the variables.
 * 1. Deklarasikan variabel-variabelnya.

 * 2. Use an if...else statement.
 * 2. Gunakan pernyataan if...else.
 * 
 * 3. Display the evaluation result. If eligible will display "Bonus Approved", 
 * 3. Tampilkan hasil evaluasi. Jika memenuhi syarat akan menampilkan "Bonus Approved",  
 * 
 * otherwise display "Bonus not approved"
 * jika tidak, akan menampilkan "Bonus not approved"
 */

const employeeName: string = "Dimas Pratama"; //Menyimpan data berupa tekst nama karyawan
const performanceScore: number = 78; //Menyimpan data berupa angka 

if (performanceScore >= 80) {          //if akan mebngecek apakah nilai lebih besar atau sama dengan 80
    console.log("Bonus Approved");      
} else {
    console.log("Bonus not approved");  //else berfungi menampilkan pesan alternatif terkait if nya 
}

         
