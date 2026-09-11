/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */

type Submission = {
    student: string;
    submitted: boolean;
    score: number;
};
const submissions: Submission[] = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];

function countTotalStudents(data: Submission[]): number {
    return data.length;
}

function countSubmittedAssignments(data: Submission[]): number {
    return data.filter(submission => submission.submitted).length;
}

function countMissingAssignments(data: Submission[]): number {
    return data.filter(submission => !submission.submitted).length;
}

function countPassedStudents(data: Submission[]): number {
    return data.filter(
        submission => submission.submitted && submission.score >= 75
    ).length;
}

function countStudentsRequiringRevision(data: Submission[]): number {
    return data.filter(
        submission => submission.submitted && submission.score < 75
    ).length;
}

function calculateAverageScore(data: Submission[]): number {
    const totalScore = data.reduce(
        (total, submission) => total + submission.score,
        0
    );

    return totalScore / data.length;
}

function findHighestScore(data: Submission[]): number {
    return Math.max(...data.map(submission => submission.score));
}

function findLowestScore(data: Submission[]): number {
    return Math.min(...data.map(submission => submission.score));
}

function displayReport(
    totalStudents: number,
    submittedAssignments: number,
    missingAssignments: number,
    passedStudents: number,
    revisionStudents: number,
    averageScore: number,
    highestScore: number,
    lowestScore: number
): void {
    console.log("===== LMS SUBMISSION REPORT =====");
    console.log("Total students:", totalStudents);
    console.log("Submitted assignments:", submittedAssignments);
    console.log("Missing assignments:", missingAssignments);
    console.log("Passed students:", passedStudents);
    console.log("Students requiring revision:", revisionStudents);
    console.log("Average score:", averageScore);
    console.log("Highest score:", highestScore);
    console.log("Lowest score:", lowestScore);
}

const totalStudents = countTotalStudents(submissions);
const submittedAssignments = countSubmittedAssignments(submissions);
const missingAssignments = countMissingAssignments(submissions);
const passedStudents = countPassedStudents(submissions);
const revisionStudents = countStudentsRequiringRevision(submissions);
const averageScore = calculateAverageScore(submissions);
const highestScore = findHighestScore(submissions);
const lowestScore = findLowestScore(submissions);

displayReport(
    totalStudents,
    submittedAssignments,
    missingAssignments,
    passedStudents,
    revisionStudents,
    averageScore,
    highestScore,
    lowestScore
);