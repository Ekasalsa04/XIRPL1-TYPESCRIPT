/**
 * A school has attendance data below.
 * Tasks:
 * 1. Get all student's names who are present
 * expected array: ["Andi","Citra"]
 * 2. Get all students who are present
 * expected array: ["Budi"]
 * 3. Get students who are late
 * expected array: ["Deni"]
 * 4. Generate array that contains {name, status}
 */

const students = [
    { id: 1, name: "Andi" },
    { id: 2, name: "Budi" },
    { id: 3, name: "Citra" },
    { id: 4, name: "Deni" },
];

const attendance = [
    { studentId: 1, status: "present" },
    { studentId: 2, status: "absent" },
    { studentId: 3, status: "present" },
    { studentId: 4, status: "late" },
];

const presentStudents = attendance    //Nama siswa yang hadir
    .filter(item => item.status === "present")
    .map(item => students.find(student => student.id === item.studentId)?.name);

console.log("Present Students:", presentStudents);

const absentStudents = attendance      //Nama siswa yang tidak hadir
    .filter(item => item.status === "absent")
    .map(item => students.find(student => student.id === item.studentId)?.name);

console.log("Absent Students:", absentStudents);

const lateStudents = attendance     //Nama siswa yang terlambat
    .filter(item => item.status === "late")
    .map(item => students.find(student => student.id === item.studentId)?.name);

console.log("Late Students:", lateStudents);

const studentAttendance = attendance.map(item => ({ //array
    name: students.find(student => student.id === item.studentId)?.name,
    status: item.status
}));

console.log("Student Attendance:", studentAttendance);