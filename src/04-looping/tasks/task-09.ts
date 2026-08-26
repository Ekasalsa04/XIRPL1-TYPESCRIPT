/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];
 
const gradeCounts = { A: 0, B: 0, C: 0, D: 0 };
const scores: number[] = [];

for (const student of students) {
    const score = student.score;
    scores.push(score);

    if (score >= 90) {
        gradeCounts.A++;
    } else if (score >= 80) {
        gradeCounts.B++;
    } else if (score >= 70) {
        gradeCounts.C++;
    } else {
        gradeCounts.D++;
    }
}

const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);
const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;

