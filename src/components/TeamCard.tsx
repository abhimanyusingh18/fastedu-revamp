import styles from './TeamCard.module.css';
import { TeamMember } from '@/data/teams';
import Image from 'next/image';

interface TeamCardProps {
    member: TeamMember;
    index: number;
}

export default function TeamCard({ member, index }: TeamCardProps) {
    return (
        <div
            className={styles.card}
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className={styles.imageWrapper}>
                <div className={styles.imagePlaceholder}>
                    <Image
                        src={member.photo}
                        alt={member.name}
                        width={150}
                        height={150}
                        className={styles.profileImage}
                    />
                </div>
            </div>
            <div className={styles.content}>
                <h3 className={styles.name}>{member.name}</h3>
                {member.subject && (
                    <p className={styles.subject}>{member.subject}</p>
                )}
                <ul className={styles.qualifications}>
                    {member.qualifications.map((qual, idx) => (
                        <li key={idx}>{qual}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
