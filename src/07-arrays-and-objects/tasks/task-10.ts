/**
 * An online exam has students and questions.
 * Tasks:
 * 1. Calculate each student's score (each correct answer get 25 points)
 * 2. Determine each student's correct answer, exp: [{student:"Andi", correct:0, wrong: 4}]
 * 3. Calculate the average score for each category.
 * 4. Generate final exam analytics
 * expeced result: {
        totalStudents: 3,
        averageScore: 66.67,
        highestScore: 100,
        lowestScore: 50,
        passedStudents: 1,
        failedStudents: 2,
        passRate: 33.33
    }
 */
const questions = [
    {
        id: 1,
        question: "What is TypeScript?",
        correctAnswer: "A",
        category: "TypeScript",
    },
    {
        id: 2,
        question: "Which method transforms an array?",
        correctAnswer: "B",
        category: "Array",
    },
    {
        id: 3,
        question: "Which method filters an array?",
        correctAnswer: "C",
        category: "Array",
    },
    {
        id: 4,
        question: "What does reduce() do?",
        correctAnswer: "D",
        category: "Array",
    },
];

const submissions = [
    {
        student: "Andi",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Budi",
        answers: [
            { questionId: 1, answer: "B" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "A" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Citra",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "C" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "B" },
        ],
    },
];

const studentResults = submissions.map(submission => {
    let correct = 0;

    submission.answers.forEach(answer => {
        const question = questions.find(
            question => question.id === answer.questionId
        );

        if (question?.correctAnswer === answer.answer) {
            correct++;
        }
    });

    const wrong = questions.length - correct;
    const score = correct * 25;

    return {
        student: submission.student,
        correct,
        wrong,
        score
    };
});

console.log("1. Student Scores:", studentResults);


// 2. Correct dan Wrong
const answerResults = studentResults.map(student => ({
    student: student.student,
    correct: student.correct,
    wrong: student.wrong
}));

console.log("2. Correct & Wrong:", answerResults);


// 3. Average score for each category
const categoryResults = questions.map(question => {
    const categoryQuestions = questions.filter(
        q => q.category === question.category
    );

    const scores = submissions.map(submission => {
        let correct = 0;

        categoryQuestions.forEach(q => {
            const answer = submission.answers.find(
                answer => answer.questionId === q.id
            );

            if (answer?.answer === q.correctAnswer) {
                correct++;
            }
        });

        return (correct / categoryQuestions.length) * 100;
    });

    const average =
        scores.reduce((sum, score) => sum + score, 0) /
        scores.length;

    return {
        category: question.category,
        averageScore: average
    };
});

const uniqueCategoryResults = categoryResults.filter(
    (category, index, array) =>
        index === array.findIndex(
            item => item.category === category.category
        )
);

console.log("3. Average by Category:", uniqueCategoryResults);


// 4. Final exam analytics
const totalStudents = studentResults.length;

const averageScore =
    studentResults.reduce(
        (sum, student) => sum + student.score,
        0
    ) / totalStudents;

const highestScore = Math.max(
    ...studentResults.map(student => student.score)
);

const lowestScore = Math.min(
    ...studentResults.map(student => student.score)
);

const passedStudents = studentResults.filter(
    student => student.score >= 75
).length;

const failedStudents = totalStudents - passedStudents;

const passRate = (passedStudents / totalStudents) * 100;

const finalAnalytics = {
    totalStudents,
    averageScore: Number(averageScore.toFixed(2)),
    highestScore,
    lowestScore,
    passedStudents,
    failedStudents,
    passRate: Number(passRate.toFixed(2))
};

console.log("4. Final Analytics:", finalAnalytics);
