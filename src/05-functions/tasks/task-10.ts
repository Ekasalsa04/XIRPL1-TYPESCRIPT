/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

const enrollments = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];

//Menghitung total enrollment
function getTotalEnrollments(data: typeof enrollments): number {
    return data.length;
}

//Menghitung enrollment yang selesai
function getCompletedEnrollments(data: typeof enrollments): number {
    return data.filter(item => item.completed).length;
}

//Menghitung enrollment yang belum selesai
function getIncompleteEnrollments(data: typeof enrollments): number {
    return data.filter(item => !item.completed).length;
}

//Menghitung persentase completion
function getCompletionPercentage(data: typeof enrollments): number {
    const total = getTotalEnrollments(data);
    const completed = getCompletedEnrollments(data);

    return (completed / total) * 100;
}

// 5. Mencari nilai tertinggi
function getHighestScore(data: typeof enrollments): number {
    return Math.max(...data.map(item => item.score));
}

// 6. Mencari nilai terendah
function getLowestScore(data: typeof enrollments): number {
    return Math.min(...data.map(item => item.score));
}

// 7. Menghitung rata-rata nilai
function getAverageScore(data: typeof enrollments): number {
    const total = data.reduce((sum, item) => sum + item.score, 0);
    return total / data.length;
}

// 8. Mendapatkan siswa yang lulus
function getPassingStudents(data: typeof enrollments): string[] {
    return data
        .filter(item => item.score >= 75)
        .map(item => item.student);
}

// 9. Menghitung jumlah siswa berdasarkan course
function getStudentsPerCourse(
    data: typeof enrollments
): Record<string, number> {
    const result: Record<string, number> = {};

    data.forEach(item => {
        result[item.course] = (result[item.course] || 0) + 1;
    });

    return result;
}

// 10. Menghitung rata-rata nilai setiap course
function getAverageScorePerCourse(
    data: typeof enrollments
): Record<string, number> {
    const scores: Record<string, number[]> = {};

    data.forEach(item => {
        if (!scores[item.course]) {
            scores[item.course] = [];
        }

        scores[item.course].push(item.score);
    });

    const result: Record<string, number> = {};

    Object.keys(scores).forEach(course => {
        const total = scores[course].reduce((sum, score) => sum + score, 0);
        result[course] = total / scores[course].length;
    });

    return result;
}

// 11. Menghitung total learning hours
function getTotalLearningHours(data: typeof enrollments): number {
    const totalMinutes = data.reduce(
        (sum, item) => sum + item.duration,
        0
    );

    return totalMinutes / 60;
}

// 12. Menghitung rata-rata durasi belajar
function getAverageLearningDuration(data: typeof enrollments): number {
    const total = data.reduce(
        (sum, item) => sum + item.duration,
        0
    );

    return total / data.length;
}


// VOID FUNCTION 1
function printCompletionStatistics(data: typeof enrollments): void {
    console.log("=== Completion Statistics ===");
    console.log("Total enrollments:", getTotalEnrollments(data));
    console.log("Completed enrollments:", getCompletedEnrollments(data));
    console.log("Incomplete enrollments:", getIncompleteEnrollments(data));
    console.log(
        "Completion percentage:",
        getCompletionPercentage(data).toFixed(2) + "%"
    );
}

// VOID FUNCTION 2
function printAcademicStatistics(data: typeof enrollments): void {
    console.log("\n=== Academic Statistics ===");
    console.log("Highest score:", getHighestScore(data));
    console.log("Lowest score:", getLowestScore(data));
    console.log(
        "Average score:",
        getAverageScore(data).toFixed(2)
    );
    console.log(
        "Passing students:",
        getPassingStudents(data).join(", ")
    );
}


// Menjalankan dashboard
printCompletionStatistics(enrollments);
printAcademicStatistics(enrollments);

console.log("\n=== Course Statistics ===");

const studentsPerCourse = getStudentsPerCourse(enrollments);
console.log("Students per course:", studentsPerCourse);

const averageScorePerCourse = getAverageScorePerCourse(enrollments);
console.log("Average score per course:", averageScorePerCourse);

console.log("\n=== Learning Statistics ===");
console.log(
    "Total learning hours:",
    getTotalLearningHours(enrollments).toFixed(2)
);
console.log(
    "Average learning duration:",
    getAverageLearningDuration(enrollments).toFixed(2),
    "minutes"
);

