/**
 * A student can participate in the graduation ceremony only if all of the following conditions are met:
 * - Final score is at least 75
 * - Attendance is at least 90%
 * - All tuition fees have been paid
 * 
 * Seorang siswa dapat mengikuti upacara kelulusan hanya jika semua syarat berikut terpenuhi:
 * - Nilai akhir minimal 75
 * - Tingkat kehadiran minimal 90%
 * - Semua biaya pendidikan telah dilunasi
 * 
 * Today, the administration receives the following student information.
 *  Hari ini, bagian administrasi menerima informasi siswa berikut.
| Information  | Value |
| ------------ | ----- |
| Final Score  | 82    |
| Attendance   | 94    |
| Tuition Paid | Yes   |

 * Task: Store and display the result in a variable named "isEligible"
Tugas: Simpan dan tampilkan hasilnya dalam variabel bernama "isEligible"
 */

const  finalScore: number = 82;
const attendance: number = 94;
const tuitionPaid: boolean = true;

const isEligible: boolean = finalScore >= 75 && attendance >= 90 && tuitionPaid;

console.log("Is the student eligible for graduation ceremony?", isEligible);  