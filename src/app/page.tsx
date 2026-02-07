import ProgramHeroCards from '@/components/ProgramHeroCards';
import Hero from '@/components/Hero';
import TeamSection from '@/components/TeamSection';
import CourseCard from '@/components/CourseCard';
import WhyFast from '@/components/WhyFast';
import { allTeams } from '@/data/teams';
import { coursesData } from '@/data/courses';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <ProgramHeroCards />
      <Hero />

      {/* Team Sections */}
      {allTeams.map((team, index) => (
        <div key={team.title}>
          <TeamSection team={team} />
          {/* Insert WhyFast section after Commerce/Humanities team */}
          {index === 2 && <WhyFast />}
        </div>
      ))}

      {/* Course Cards Section */}
      <section className={styles.coursesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Programs</h2>
          <div className={styles.coursesGrid}>
            {coursesData.map((course, index) => (
              <CourseCard key={course.title} course={course} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
