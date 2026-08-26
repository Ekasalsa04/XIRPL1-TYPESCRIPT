/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];

const attendanceCounts = { present: 0, absent: 0 };
const absentStudents: string[] = [];

for (const attendance of attendances) {
  if (attendance.present) {
    attendanceCounts.present++;
  } else {
    attendanceCounts.absent++;
    absentStudents.push(attendance.name);
  }
}

const totalStudents = attendances.length;
const attendancePercentage = (attendanceCounts.present / totalStudents) * 100;

console.log(`Present Students: ${attendanceCounts.present}`);
console.log(`Absent Students: ${attendanceCounts.absent}`);
console.log(`Absent Students Names: ${absentStudents.join(", ")}`);
console.log(`Attendance Percentage: ${attendancePercentage.toFixed(2)}%`);

