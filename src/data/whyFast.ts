export interface WhyFastItem {
    id: number;
    icon: 'question' | 'graduation' | 'medal' | 'database';
    title: string;
    description: string;
}

export const whyFastItems: WhyFastItem[] = [
    {
        id: 1,
        icon: 'question',
        title: 'Why FAST?',
        description: 'Now Crossing Republik will witness revolution in results!!! No need to go far distances or take online courses when the best is at your doorstep.',
    },
    {
        id: 2,
        icon: 'graduation',
        title: 'The FACILITIES',
        description: 'Weekly Personalized Mentorship Program, 24*7 Online/Offline doubt solution, In-house library, Special attention on meritorious/weak students, CCTV, Digital Board, Spacious Infrastructure.',
    },
    {
        id: 3,
        icon: 'medal',
        title: 'The MENTORSHIP',
        description: 'Study from those who have achieved International Rank under 200 in NSO/IMO, RMO Rank 16th, Qualified NSEP, KVPY, NTSE, NSEC, 99 Percentile in JEE Mains, AIR 1500 in JEE Advanced.',
    },
    {
        id: 4,
        icon: 'database',
        title: 'Our QUALITY',
        description: 'We are committed to providing the highest quality education with a focus on conceptual clarity and rigorous practice, ensuring every student reaches their full potential.',
    }
];
