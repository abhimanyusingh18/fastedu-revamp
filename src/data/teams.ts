// Team member data structure
export interface TeamMember {
    name: string;
    subject: string;
    photo: string;
    qualifications: string[];
}

export interface TeamSection {
    title: string;
    members: TeamMember[];
}

// JEE & NEET Team
export const jeeNeetTeam: TeamSection = {
    title: 'JEE & NEET TEAM',
    members: [
        {
            name: 'Kartikey Mishra',
            subject: 'Physics',
            photo: '/images/faculty/kartikey-mishra.png',
            qualifications: [
                'B.Tech I.I.T. Roorkee',
                'Physics: JEE Main, Adv.& NEET',
                'Qualified NTSE, KVPY, NSEP, RMO, 96.7% in PCM 12th Boards',
                '(Also qualified CDS & written UPSC MAINS)',
                '4+ Years of experience',
            ],
        },
        {
            name: 'Paritosh Mishra',
            subject: 'Chemistry',
            photo: '/images/faculty/paritosh-mishra.png',
            qualifications: [
                'B.Tech N.I.T. Jaipur',
                'Qualified JEE Advanced, UPTU, COMEDK, BITS, VIT',
                '96% in Chemistry & 95% in 12th Boards',
                '3+ Years of experience',
            ],
        },
        {
            name: 'Gurleen Singh',
            subject: 'Mathematics',
            photo: '/images/faculty/gurleen-singh.png',
            qualifications: [
                'B.Tech I.I.T. Roorkee',
                'AIR 750 in AIEEE (Now JEE Mains)',
                'Qualified NTSE, 95% 12th Boards',
                'Ex-PACE, Infinity Vision',
                '10+ Years of experience',
            ],
        },
        {
            name: 'Tarun Gupta',
            subject: 'Biology',
            photo: '/images/faculty/tarun-gupta.png',
            qualifications: [
                'M.Sc. Zoology',
                'Ex- Infinity Vision',
                'Ex- Top Coaching',
                'Ex- Rapture Biotech Research Lab',
                '4+ Years of experience',
            ],
        },
    ],
};

// Board & CUET Team
export const boardCuetTeam: TeamSection = {
    title: 'BOARD & CUET TEAM',
    members: [
        {
            name: 'PRAGYAN MISHRA',
            subject: '(MATHEMATICS)',
            photo: '/images/faculty/pragyan-mishra.png',
            qualifications: [
                'B.Tech, AKTU',
                '5+ Years Experience',
                'Ex-SAT Trainer (UK) 10th to 12th Mathematics',
            ],
        },
        {
            name: 'UPENDRA MISHRA',
            subject: '(PHYSICS)',
            photo: '/images/faculty/upendra-mishra.png',
            qualifications: [
                'B.Tech, AKTU',
                '2+ Years of Experience',
            ],
        },
        {
            name: 'SHASHWAT MISHRA',
            subject: '(CHEMISTRY)',
            photo: '/images/faculty/shashwat-mishra.png',
            qualifications: [
                'B.Pharma & M.Pharma, AKTU',
                'PhD Candidate, AKTU',
                '4+ Years Experience',
            ],
        },
        {
            name: 'TANUJ SHUKLA (SST)',
            subject: '',
            photo: '/images/faculty/tanuj-shukla.png',
            qualifications: [
                'BALLB, AU & LLM, DU',
                'NET Qualified',
            ],
        },
    ],
};

// Commerce, Humanities & CUET Team
export const commerceHumanitiesTeam: TeamSection = {
    title: 'COMMERCE, HUMANITIES & CUET TEAM',
    members: [
        {
            name: 'SHIVAM PANDEY',
            subject: 'Accounts & B.St',
            photo: '/images/faculty/shivam-pandey.png',
            qualifications: [
                'B.Com & M.Com, Allahabad University',
                'Accounts Topper, AU',
                'NET Qualified',
            ],
        },
        {
            name: 'AJEET CHAUHAN',
            subject: 'Humanities & Economics',
            photo: '/images/faculty/ajeet-chauhan.png',
            qualifications: [
                'B.Tech, AKTU',
                'Masters in Sociology',
                '2 UPSC Mains & 1 UPSC Interview',
                'NET Qualified',
            ],
        },
    ],
};

export const allTeams: TeamSection[] = [
    jeeNeetTeam,
    boardCuetTeam,
    commerceHumanitiesTeam,
];
