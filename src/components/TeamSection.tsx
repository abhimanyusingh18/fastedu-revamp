import styles from './TeamSection.module.css';
import TeamCard from './TeamCard';
import { TeamSection as TeamSectionType } from '@/data/teams';

interface TeamSectionProps {
    team: TeamSectionType;
}

export default function TeamSection({ team }: TeamSectionProps) {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>{team.title}</h2>
                <div className={styles.grid}>
                    {team.members.map((member, index) => (
                        <TeamCard key={member.name} member={member} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
