// Course categories structure
export interface Course {
    title: string;
    grade: string;
    topics: string[];
    colorScheme: 'cyan' | 'blue' | 'purple' | 'orange';
}

export const coursesData: Course[] = [
    {
        title: 'JEE Advanced',
        grade: 'Class 11, 12 & Droppers',
        topics: ['Target IITs', 'Advanced Problem Solving', 'In-depth Concepts'],
        colorScheme: 'blue',
    },
    {
        title: 'JEE Mains',
        grade: 'Class 11, 12 & Droppers',
        topics: ['Target NITs & IIITs', 'Speed & Accuracy', 'NCERT Focus'],
        colorScheme: 'cyan',
    },
    {
        title: 'NEET',
        grade: 'Class 11, 12 & Droppers',
        topics: ['Target AIIMS & Gov. Colleges', 'Biology Mastery', 'Rigorous Testing'],
        colorScheme: 'purple',
    },
    {
        title: 'CUET',
        grade: 'Class 12',
        topics: ['Central Universities', 'Domain Subjects', 'General Test Prep'],
        colorScheme: 'orange',
    },
    {
        title: 'NTSE',
        grade: 'Class 10',
        topics: ['National Talent Search', 'Scholarship Prep', 'MAT & SAT'],
        colorScheme: 'blue',
    },
    {
        title: 'KVPY',
        grade: 'Class 11, 12',
        topics: ['Fellowship Program', 'Research Aptitude', 'Basic Sciences'],
        colorScheme: 'cyan',
    },
    {
        title: 'RMO',
        grade: 'Class 8 to 11',
        topics: ['Math Olympiad', 'Combinatorics', 'Geometry & Number Theory'],
        colorScheme: 'purple',
    },
    {
        title: 'NSEP',
        grade: 'Class 11, 12',
        topics: ['Physics Olympiad', 'National Standard Exam', 'Core Physics'],
        colorScheme: 'orange',
    },
    {
        title: 'NSEC',
        grade: 'Class 11, 12',
        topics: ['Chemistry Olympiad', 'National Standard Exam', 'Core Chemistry'],
        colorScheme: 'blue',
    },
    {
        title: 'Olympiads',
        grade: 'Class 6 to 10',
        topics: ['NSO, IMO, IEO', 'Foundation Building', 'Competitive Edge'],
        colorScheme: 'cyan',
    },
];
