/**
 * A teacher wants to verify student attendance before starting class. 
 * There are 30 students in the classroom. Instead of writing the attendance message 30 times, 
 * the teacher wants the system to display an attendance check for every student.
 * The expected output is:
 * Seorang guru ingin memeriksa kehadiran siswa sebelum memulai pelajaran.
 * Terdapat 30 siswa di dalam kelas. Alih-alih menulis pesan kehadiran sebanyak 30 kali,
 * guru tersebut ingin sistem menampilkan pemeriksaan kehadiran untuk setiap siswa.
 * Hasil keluaran yang diharapkan adalah:
 * -------------------------------------
 * Checking attendance for Student #1
 * Checking attendance for Student #2
 * Memeriksa kehadiran Siswa #1
 * Memeriksa kehadiran Siswa #2
 * ...
 * Checking attendance for Student #30
 * Attendance verification completed.
 * Memeriksa kehadiran Siswa #30
 * Verifikasi kehadiran selesai.
 * -------------------------------------
 * 
 * Tasks: 
 * 1. Create a program using a for loop.
 * 1. Buatlah program menggunakan perulangan for.
 * 2. Display the attendance message for every student.
 * 2. Tampilkan pesan kehadiran untuk setiap siswa.
 * 3. After the loop finishes, display: "Attendance verification completed"
 * 3. Setelah perulangan selesai, tampilkan: "Verifikasi kehadiran selesai"

 */


for (let studentNumber: number = 1; studentNumber <= 30; studentNumber++) { //for loop akan mengecek setiap nomor siswa dari 1 sampai 30
    console.log("Checking attendance for Student #" + studentNumber); //Menampilkan pesan pemeriksaan kehadiran untuk setiap siswa
}

console.log("Attendance verification completed."); //Menampilkan pesan bahwa verifikasi kehadiran telah selesai