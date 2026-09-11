/**
 * An LMS stores student performance data below.
 * The school wants to analyze students using different criteria.
 * A student is considered academically successful if:
 * - Score ≥ 75
 * - Attendance ≥ 90%
 * 
 * 
 * The teacher wants to generate:
 *  - Pass/fail status.
 *  - Academic performance category.
 *  - Attendance status.
 *  - Final recommendation.
 * 
 * Recommendation Rules:
 * ----------------------------------------------------------------|
 * | Condition                      | Recommendation               |
 * | ------------------------------ | ---------------------------- |
 * | Score ≥ 90 AND attendance ≥ 90 | Excellent                    |
 * | Score ≥ 75 AND attendance ≥ 90 | Good                         |
 * | Score ≥ 75 BUT attendance < 90 | Improve Attendance           |
 * | Score < 75                     | Improve Academic Performance |
 * ----------------------------------------------------------------|
 * 
 * Challenge:
 * - processStudents() should know nothing about these rules.
 * - It should only process the students and execute the callback.
 */

const students = [
    { name: "Alya", score: 92, attendance: 96 },
    { name: "Budi", score: 68, attendance: 88 },
    { name: "Citra", score: 84, attendance: 91 },
    { name: "Dimas", score: 73, attendance: 95 },
    { name: "Eka", score: 95, attendance: 82 },
    { name: "Fajar", score: 79, attendance: 97 }
];

type Student = {
    name: string;
    score: number;
    attendance: number;
};

function getPassFailStatus(student: Student): string {
    if (student.score >= 75 && student.attendance >= 90) {
        return "Pass";
    } else {
        return "Fail";
    }
}

function getPerformanceCategory(student: Student): string {
    if (student.score >= 90) {
        return "Excellent";
    } else if (student.score >= 75) {
        return "Good";
    } else {
        return "Needs Improvement";
    }
}

function getAttendanceStatus(student: Student): string {
    if (student.attendance >= 90) {
        return "Good Attendance";
    } else {
        return "Poor Attendance";
    }
}

function getRecommendation(student: Student): string {
    if (student.score >= 90 && student.attendance >= 90) {
        return "Excellent";
    } else if (student.score >= 75 && student.attendance >= 90) {
        return "Good";
    } else if (student.score >= 75 && student.attendance < 90) {
        return "Improve Attendance";
    } else {
        return "Improve Academic Performance";
    }
}

function processStudents<T>(
    students: Student[],
    callback: (student: Student) => T
): T[] {
    return students.map(student => callback(student));
}

const passFailResults = processStudents(
    students,
    getPassFailStatus
);

const performanceResults = processStudents(
    students,
    getPerformanceCategory
);

const attendanceResults = processStudents(
    students,
    getAttendanceStatus
);

const recommendationResults = processStudents(
    students,
    getRecommendation
);

console.log("===== PASS/FAIL STATUS =====");
console.log(passFailResults);

console.log("===== PERFORMANCE CATEGORY =====");
console.log(performanceResults);

console.log("===== ATTENDANCE STATUS =====");
console.log(attendanceResults);

console.log("===== FINAL RECOMMENDATION =====");
console.log(recommendationResults);