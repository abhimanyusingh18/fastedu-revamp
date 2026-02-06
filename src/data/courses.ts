// Course categories structure
export interface Course {
    title: string;
    grade: string;
    topics: string[];
    colorScheme: 'cyan' | 'blue' | 'purple' | 'orange';
}

export const coursesData: Course[] = [
    {
        title: 'INTRODUCTORY',
        grade: 'Std.6th',
        topics: ['School Exams', 'NSO, IMO', 'Olympiads'],
        colorScheme: 'cyan',
    },
    {
        title: 'PRE-FOUNDATION',
        grade: 'Std.7th & 8th',
        topics: ['School Exams', 'NSO, IMO', 'Olympiads'],
        colorScheme: 'blue',
    },
    {
        title: 'FOUNDATION',
        grade: 'Std.9th &10th',
        topics: [
            'School Exams, Boards',
            'NSO, IMO, NSEJS, IOQM, RMO',
            'NTSE, Olympiads',
        ],
        colorScheme: 'purple',
    },
    {
        title: 'COMPETITIVE',
        grade: 'Std.11th,12th,13th',
        topics: [
            'PCMB + Commerce + Humanities',
            'Boards, CUET',
            'NSEP, NSEC, RMO',
            'NEET, JEE',
        ],
        colorScheme: 'orange',
    },
];
