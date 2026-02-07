// Navigation menu structure
export interface NavigationItem {
    label: string;
    href: string;
    isExternal?: boolean;
    dropdown?: NavigationItem[];
}

export const navigationData: NavigationItem[] = [
    {
        label: 'WELCOME',
        href: '/',
    },
    {
        label: 'About',
        href: '#',
        dropdown: [
            { label: 'FOUNDERS', href: '/about/founders' },
            { label: 'What we WANT', href: '/vision-and-mission' },
            { label: "Founders' message, with love", href: '/founder-message' },
            { label: 'Career at FAST', href: '/career-at-fast' },
            { label: 'Policies and other information', href: '/policies-and-other-information' },
        ],
    },
    {
        label: 'Courses',
        href: '/courses',
    },
    {
        label: 'Exams',
        href: '#',
        dropdown: [
            { label: 'JEE Advanced', href: '/jee-advance' },
            { label: 'JEE Mains', href: '/jee-mains' },
            { label: 'NEET', href: '/neet' },
            { label: 'CUET', href: '/future-admission-test-dates' },
            { label: 'NTSE', href: '/ntse' },
            { label: 'KVPY', href: '/courses/kvpy' },
            { label: 'RMO', href: '/olympiad/rmo' },
            { label: 'NSEP', href: '/courses/basic-program/nsep' },
            { label: 'NSEC', href: '/courses/nsec' },
            { label: 'Olympiads', href: '/olympiad' },
        ],
    },
    {
        label: 'Why us',
        href: '#',
        dropdown: [
            { label: 'The MENTORSHIP', href: '/pattern-proof-teaching' },
            { label: 'The FACILITIES', href: '/personalised-coaching' },
            { label: 'The QUALITY', href: '/study-resource' },
        ],
    },
    {
        label: 'CONTACT',
        href: '/contact-us',
    },
    {
        label: 'KYS-FORM',
        href: 'https://docs.google.com/forms/d/18fapy2VcvqGgoqP9bCAGB249n3XSz1ugBqZCXBhCGEY/edit',
        isExternal: true,
    },
    {
        label: 'FAST OLYMPIAD',
        href: 'https://forms.gle/3onpbuAECwmqh5g4A',
        isExternal: true,
    },
];
