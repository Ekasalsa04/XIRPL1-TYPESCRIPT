/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */

const students = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

function countActiveStudents(students: { name: string; major: string; active: boolean }[]): number {
  return students.filter(student => student.active).length;
}

function countInactiveStudents(students: { name: string; major: string; active: boolean }[]): number {
  return students.filter(student => !student.active).length;
}

function countStudentsByMajor(
  students: { name: string; major: string; active: boolean }[],
  major: string
): number {
  return students.filter(student => student.major === major).length;
}

function printEnrollmentReport(
  totalStudents: number,
  activeStudents: number,
  inactiveStudents: number,
  softwareEngineeringStudents: number,
  networkingStudents: number,
  multimediaStudents: number
): string {
  return `
Enrollment Report
Total Students: ${totalStudents}
Active Students: ${activeStudents}
Inactive Students: ${inactiveStudents}
Software Engineering Students: ${softwareEngineeringStudents}
Networking Students: ${networkingStudents}
Multimedia Students: ${multimediaStudents}
`;
}

const totalStudents = students.length;
const activeStudents = countActiveStudents(students);
const inactiveStudents = countInactiveStudents(students);
const softwareEngineeringStudents = countStudentsByMajor(students, "Software Engineering");
const networkingStudents = countStudentsByMajor(students, "Networking");
const multimediaStudents = countStudentsByMajor(students, "Multimedia");
const enrollmentReport = printEnrollmentReport(
  totalStudents,
  activeStudents,
  inactiveStudents,
  softwareEngineeringStudents,
  networkingStudents,
  multimediaStudents
);

console.log(enrollmentReport);
console.log("Report generation completed.");
console.log("All functions have been executed successfully.");
console.log("End of the program.");
console.log("Thank you for using the Enrollment Report Generator.");
console.log("Have a great day!");
console.log("Goodbye!");