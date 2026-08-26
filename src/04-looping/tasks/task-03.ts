/**
 * A lecturer wants to summarize examination results for 20 students.
 * The examination scores are stored in the following array:
 * ---------------------------------------
 * const scores = [
 * 82, 75, 91, 64, 88, 73, 95, 80, 69, 77, 84, 92, 58, 79, 86, 71, 90, 67, 83, 76
 * ]
 * ---------------------------------------
 * 
 * Business Rules
 * - Passing score is 75.
 * - Count how many students passed.
 * - Count how many students failed.
 * - Calculate the total score.
 * - Calculate the average score.
 * 
 * Tasks: 
 * 1. Iterate through every score using a loop.
 * 2. Use conditional statements to determine pass/fail.
 * 3. Calculate:
 * - Total score
 * - Average score
 * - Number of passing students
 * - Number of failing students
 */

const scores: number[] = [
  82, 75, 91, 64, 88, 73, 95, 80, 69, 77,
  84, 92, 58, 79, 86, 71, 90, 67, 83, 76
];

let totalScore: number = 0;
let passingCount: number = 0;
let failingCount: number = 0;

for (let i: number = 0; i < scores.length; i++) { //for loop akan mengecek setiap skor dari array scores
  totalScore += scores[i]; //Menambahkan skor saat ini ke total skor

  if (scores[i] >= 75) { //Jika skor saat ini lebih besar atau sama dengan 75, maka siswa lulus
    passingCount++; //Menambahkan jumlah siswa yang lulus
  }
  else { //Jika skor saat ini kurang dari 75, maka siswa gagal
    failingCount++; //Menambahkan jumlah siswa yang gagal
  }

}

