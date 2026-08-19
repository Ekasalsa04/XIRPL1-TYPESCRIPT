/**
 * SMK Telkom Malang is preparing the graduation list for Grade 12 students. A student is eligible to graduate only if all of the following requirements are satisfied:
 * SMK Telkom Malang sedang menyusun daftar kelulusan untuk siswa kelas 12. Seorang siswa dinyatakan lulus hanya jika seluruh persyaratan berikut terpenuhi:
 * 
 * - Final score is at least 75
 * - Attendance is at least 90%
 * - All tuition fees have been paid
 * 
 * - Nilai akhir minimal 75
 * - Tingkat kehadiran minimal 90%
 * - Seluruh biaya pendidikan telah dilunasi
 * 
 * The administration received the following student information.
 * Pihak administrasi menerima informasi siswa berikut.
 * 
 * | Information  | Value      |
 * | ------------ | ---------- |
 * | Student Name | Alya Putri |
 * | Final Score  | 82         |
 * | Attendance   | 94         |
 * | Tuition Paid | Yes        |
 * 
 * Tasks:
 * 1. Declare all required variables.
 * 2. Implement the decision using an if statement.
 * 3. Display the appropriate message. if student meets all requirement, 
 * will be display "Congratulations! You are eligible to graduate.", 
 * otherwise display "You are not eligible to graduate."
 * 
 * Tugas:
 * 1. Deklarasikan semua variabel yang diperlukan.
 * 2. Implementasikan pengambilan keputusan menggunakan pernyataan `if`.
 * 3. Tampilkan pesan yang sesuai: jika mahasiswa memenuhi semua persyaratan, 
 * tampilkan "Congratulations! You are eligible to graduate.", 
 * jika tidak, tampilkan "You are not eligible to graduate."
 */

const studentName: string = "Alya Putri";
const finalScore: number = 82;
const attendance: number = 94;
const tuitionPaid: boolean = true;

if (finalScore >= 75 && attendance >= 90 && tuitionPaid) {
    console.log("Congratulations! You are eligible to graduate.");
}