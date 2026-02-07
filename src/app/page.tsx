'use client';

import { useState, useEffect } from 'react';
import ProgramHeroCards from '@/components/ProgramHeroCards';
import Hero from '@/components/Hero';
import TeamSection from '@/components/TeamSection';
import CourseCard from '@/components/CourseCard';
import WhyFast from '@/components/WhyFast';
import { allTeams } from '@/data/teams';
import { coursesData } from '@/data/courses';
import styles from './page.module.css';
import LeadFormPopup from '@/components/LeadFormPopup';
import UrgencyBand from '@/components/UrgencyBand';
import TrustSection from '@/components/TrustSection';
import ContextualCTA from '@/components/ContextualCTA';
import DemoPopup from '@/components/DemoPopup';

export default function Home() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  useEffect(() => {
    // Check if already submitted
    const submitted = localStorage.getItem('hasSubmittedLeadForm');
    if (submitted) return;

    const timer = setTimeout(() => {
      setIsLeadFormOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const openLeadForm = () => setIsLeadFormOpen(true);
  const openDemoForm = () => setIsDemoOpen(true);

  return (
    <main className={styles.main}>
      <UrgencyBand />

      <LeadFormPopup isOpen={isLeadFormOpen} onClose={() => setIsLeadFormOpen(false)} />
      <DemoPopup isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} onSuccess={() => setIsDemoOpen(false)} />

      <ProgramHeroCards />
      <Hero />

      <ContextualCTA onBookDemo={openDemoForm} onEnrol={openLeadForm} />

      <TrustSection />

      <ContextualCTA onBookDemo={openDemoForm} onEnrol={openLeadForm} bgStyle="dark" />

      {/* Team Sections */}
      {allTeams.map((team, index) => (
        <div key={team.title}>
          <TeamSection team={team} />
          {/* Insert Contextual CTA after first team section */}
          {index === 0 && <ContextualCTA onBookDemo={openDemoForm} onEnrol={openLeadForm} />}

          {/* Insert WhyFast section after Commerce/Humanities team */}
          {index === 2 && (
            <>
              <WhyFast />
              <ContextualCTA onBookDemo={openDemoForm} onEnrol={openLeadForm} bgStyle="dark" />
            </>
          )}
        </div>
      ))}

      {/* Course Cards Section */}
      <section className={styles.coursesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Programs</h2>
          <div className={styles.coursesGrid}>
            {coursesData.map((course, index) => (
              <CourseCard
                key={course.title}
                course={course}
                index={index}
                onBookDemo={openDemoForm}
              />
            ))}
          </div>
          <div style={{ marginTop: '3rem' }}>
            <ContextualCTA onBookDemo={openDemoForm} onEnrol={openLeadForm} />
          </div>
        </div>
      </section>
    </main>
  );
}
