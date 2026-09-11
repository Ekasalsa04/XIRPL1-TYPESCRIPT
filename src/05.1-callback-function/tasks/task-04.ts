/**
 * An LMS stores assignment scores:
 */
const scores = [92, 68, 84, 73, 95, 61, 88];
/**
 * The LMS needs to perform different analyses:
 * 1. Determine whether each student passed. Passing grade is 70.
 * 2. Convert each score into a grade.
 * | Score | Grade |
 * | ----- | ----- |
 * | ≥ 90  | A     |
 * | ≥ 80  | B     |
 * | ≥ 70  | C     |
 * | < 70  | D     |
 * 
 * 3. Calculate a score after adding 5 bonus points.
 * 4. Determine whether the score is considered excellent. 
 * Score with more than 90 will be "Excellent", otherwise "Reguler".
 * 
 * 
 * Instead of creating four separate loops, create a reusable function that receives a callback responsible for transforming a score.
 */

const score = [92, 68, 84, 73, 95, 61, 88];

function processScores(
    scores: number[],
    callback: (score: number) => string | number | boolean
) {
    for (const score of scores) {
        console.log(callback(score));
    }
}

// Menentukan lulus atau tidak
processScores(scores, (score) => score >= 70);

// Mengubah score menjadi grade
processScores(scores, (score) => {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    return "D";
});

// Menambahkan bonus 5 poin
processScores(scores, (score) => score + 5);

// Menentukan Excellent atau Reguler
processScores(scores, (score) => score > 90 ? "Excellent" : "Reguler");