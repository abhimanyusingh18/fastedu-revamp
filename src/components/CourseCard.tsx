import styles from './CourseCard.module.css';
import { Course } from '@/data/courses';

interface CourseCardProps {
    course: Course;
    index: number;
    onBookDemo: () => void;
}

export default function CourseCard({ course, index, onBookDemo }: CourseCardProps) {
    const colorClasses = {
        cyan: styles.cyan,
        blue: styles.blue,
        purple: styles.purple,
        orange: styles.orange,
    };

    return (
        <div
            className={`${styles.card} ${colorClasses[course.colorScheme]}`}
            style={{ animationDelay: `${index * 0.15}s` }}
        >
            <div className={styles.header}>
                <h3 className={styles.title}>{course.title}</h3>
                <p className={styles.grade}>{course.grade}</p>
            </div>
            <div className={styles.content}>
                {course.topics.map((topic, idx) => (
                    <p key={idx} className={styles.topic}>
                        {topic}
                    </p>
                ))}
            </div>
            <button className={styles.button} onClick={onBookDemo}>
                <span>Book Demo</span>
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7 3L14 10L7 17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </div>
    );
}
