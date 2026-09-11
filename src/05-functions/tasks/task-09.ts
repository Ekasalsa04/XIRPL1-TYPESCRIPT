/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */
const patients = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];
type Patient = {
    id: string;
    name: string;
    age: number;
    department: string;
    admitted: boolean;
    bill: number;
};

function countTotalPatients(patients: Patient[]): number {
    return patients.length;
}

function countAdmittedPatients(patients: Patient[]): number {
    return patients.filter(patient => patient.admitted).length;
}

function countDischargedPatients(patients: Patient[]): number {
    return patients.filter(patient => !patient.admitted).length;
}

function countPatientsByDepartment(
    patients: Patient[],
    department: string
): number {
    return patients.filter(
        patient => patient.department === department
    ).length;
}

function findHighestBill(patients: Patient[]): number {
    return Math.max(...patients.map(patient => patient.bill));
}

function findLowestBill(patients: Patient[]): number {
    return Math.min(...patients.map(patient => patient.bill));
}

function calculateAverageBill(patients: Patient[]): number {
    const total = patients.reduce(
        (sum, patient) => sum + patient.bill,
        0
    );

    return total / patients.length;
}

function calculateTotalRevenue(patients: Patient[]): number {
    return patients.reduce(
        (total, patient) => total + patient.bill,
        0
    );
}

function getAdmittedPatientNames(patients: Patient[]): string[] {
    return patients
        .filter(patient => patient.admitted)
        .map(patient => patient.name);
}

function printHospitalReport(
    totalPatients: number,
    admittedPatients: number,
    dischargedPatients: number,
    pediatricsPatients: number,
    cardiologyPatients: number,
    orthopedicsPatients: number,
    highestBill: number,
    lowestBill: number,
    averageBill: number,
    totalRevenue: number,
    admittedNames: string[]
): void {
    console.log("===== HOSPITAL DAILY REPORT =====");
    console.log("Total patients:", totalPatients);
    console.log("Total admitted patients:", admittedPatients);
    console.log("Total discharged patients:", dischargedPatients);
    console.log("Pediatrics patients:", pediatricsPatients);
    console.log("Cardiology patients:", cardiologyPatients);
    console.log("Orthopedics patients:", orthopedicsPatients);
    console.log("Highest hospital bill:", highestBill);
    console.log("Lowest hospital bill:", lowestBill);
    console.log("Average hospital bill:", averageBill);
    console.log("Total hospital revenue:", totalRevenue);
    console.log("Admitted patients:", admittedNames);
}

const totalPatients = countTotalPatients(patients);

const admittedPatients = countAdmittedPatients(patients);

const dischargedPatients = countDischargedPatients(patients);

const pediatricsPatients = countPatientsByDepartment(
    patients,
    "Pediatrics"
);

const cardiologyPatients = countPatientsByDepartment(
    patients,
    "Cardiology"
);

const orthopedicsPatients = countPatientsByDepartment(
    patients,
    "Orthopedics"
);

const highestBill = findHighestBill(patients);

const lowestBill = findLowestBill(patients);

const averageBill = calculateAverageBill(patients);

const totalRevenue = calculateTotalRevenue(patients);

const admittedNames = getAdmittedPatientNames(patients);

printHospitalReport(
    totalPatients,
    admittedPatients,
    dischargedPatients,
    pediatricsPatients,
    cardiologyPatients,
    orthopedicsPatients,
    highestBill,
    lowestBill,
    averageBill,
    totalRevenue,
    admittedNames
);