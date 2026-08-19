/**
 * A university is selecting students for a full scholarship.
 * The first screening requires:
 *  - GPA ≥ 3.75
 *  - Family income < Rp5,000,000
 * 
 * If the student passes the first screening, the university performs a second screening.
 * The second screening requires:
 *  - Competition participation ≥ 3
 *  - No disciplinary violations
 *  - Administrative documents are complete
 * 
 * Only students who pass both screening stages receive the scholarship.
 * Student information:
 * | Information             | Value         |
 * | ----------------------- | ------------- |
 * | Student Name            | Fajar Hidayat |
 * | GPA                     | 3.86          |
 * | Family Income           | 4200000       |
 * | Competition Count       | 4             |
 * | Has Disciplinary Record | No            |
 * | Documents Complete      | Yes           |
 * 
 * Display one of the following messages:
 *  - Scholarship Approved
 *  - Passed First Screening, but Failed Second Screening
 *  - Passed First Screening, but Failed Second Screening
 * 
 * Student Tasks
 *  - Declare all variables.
 *  - Implement the first screening.
 *  - Implement the second screening only if the first screening is passed.
 *  - Display the correct result.
 */

const studentName: string = "Fajar Hidayat"; //Menyimpan data berupa teks nama mahasiswa
const gpa: number = 3.86; //Menyimpan data berupa angka IPK mahasiswa
const familyIncome: number = 4200000; //Menyimpan data berupa angka penghasilan keluarga mahasiswa
const competitionCount: number = 4; //Menyimpan data berupa angka jumlah kompetisi yang diikuti mahasiswa
const hasDisciplinaryRecord: boolean = false; //Menyimpan data berupa boolean apakah mahasiswa memiliki catatan disiplin atau tidak
const documentsComplete: boolean = true; //Menyimpan data berupa boolean apakah dokumen administrasi mahasiswa lengkap atau tidak

if (gpa >= 3.75 && familyIncome < 5000000) { //if akan mengecek apakah IPK lebih besar atau sama dengan 3.75 dan penghasilan keluarga kurang dari 5 juta
    if (competitionCount >= 3 && !hasDisciplinaryRecord && documentsComplete) { //if akan mengecek apakah jumlah kompetisi lebih besar atau sama dengan 3, tidak memiliki catatan disiplin, dan dokumen administrasi lengkap
        console.log("Scholarship Approved"); //Jika semua kondisi terpenuhi maka menampilkan pesan beasiswa disetujui
    } else { //Jika kondisi kedua tidak terpenuhi
        console.log("Passed First Screening, but Failed Second Screening"); //Menampilkan pesan lulus seleksi pertama, tetapi gagal seleksi kedua
    }
} else { //Jika kondisi pertama tidak terpenuhi
    console.log("Failed First Screening"); //Menampilkan pesan gagal seleksi pertama
}   