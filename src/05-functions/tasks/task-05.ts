/**
 * A university wants to analyze the scores of students enrolled in Backend Development.
 * The dean requests several statistics.
 * Instead of writing one long program, the developer decides to divide the work into reusable functions.
 * Required calculations:
 * Highest score
 * Lowest score
 * Average score
 * Number of students who passed (passing score = 75)
 * 
 * Finally, another function should display the complete report.
 * Student Tasks
 * 1. Create function to find highest value.
 * 2. Create function to find lowest value.
 * 3. Create function to find average value.
 * 4. Create function to return number of passing students.
 */
const scores = [
  82,
  91,
  76,
  88,
  69,
  94,
  73,
  85,
  79,
  97
];

function findHighestScore(scores: number[]): number {
  return Math.max(...scores);
}

function findLowestScore(scores: number[]): number {
  return Math.min(...scores);
}

function calculateAverage(scores: number[]): number {
  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}

function countPassedStudents(scores: number[]): number {
  return scores.filter(score => score >= 75).length;
}

const highestScore = findHighestScore(scores);
const lowestScore = findLowestScore(scores);
const averageScore = calculateAverage(scores);
const passedStudentsCount = countPassedStudents(scores);

console.log("Student Scores Report:");
console.log(`Highest Score: ${highestScore}`);
console.log(`Lowest Score: ${lowestScore}`);
console.log(`Average Score: ${averageScore.toFixed(2)}`);
console.log(`Number of Students Passed: ${passedStudentsCount}`);

console.log("Report generation completed.");
console.log("All functions have been executed successfully.");
console.log("End of the program.");
console.log("Thank you for using the Student Scores Report Generator.");
console.log("Have a great day!");
console.log("Goodbye!");
console.log("Program terminated.");