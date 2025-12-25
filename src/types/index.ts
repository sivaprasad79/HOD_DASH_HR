export interface Responsibility {
    id: string;
    year: string;
    semester: string;
    activity: string;
    criteria: string;
    creditPointsFaculty: number;
    documentIndex: string;
    creditPointsAuthority?: number;
    // For Section C & D
    subjectCode?: string;
    subjectName?: string;
    // For Section C
    scheduledClasses?: number;
    classesHeld?: number;
    // For Section D
    avgFeedback?: number;
    // For Section F
    studentsRegistered?: number;
    studentsPassed?: number;
    passPercentage?: number;
    // For Section G
    category?: string;
    limitCount?: number | null;
    count?: number;
    marksPerUnit?: number;
}
