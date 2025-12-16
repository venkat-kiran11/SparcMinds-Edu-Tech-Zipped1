import { useState } from 'react';
import styles from './LearningRoadmap.module.css';

interface Milestone {
  id: number;
  title: string;
  description: string;
  color: string;
}

const milestones: Milestone[] = [
  {
    id: 1,
    title: 'Discover Your Direction',
    description: ' Identify your interests and career aspirations while exploring expertly curated learning paths designed for every stage of growth.',
    color: '#3B82F6',
  },
  {
    id: 2,
    title: 'Choose Your Learning Path',
    description: 'Select a program that aligns with your goals, skill level, and future ambitions—crafted to keep learning focused and impactful.',
    color: '#8B5CF6',
  },
  {
    id: 3,
    title: 'Learn from Industry Experts',
    description: 'Engage in interactive sessions led by experienced mentors and professionals who bring real-world insights into every lesson.',
    color: '#EC4899',
  },
  {
    id: 4,
    title: 'Apply Skills Through Projects',
    description: 'Turn knowledge into action by working on hands-on projects and practical case studies that mirror real industry challenges.',
    color: '#F59E0B',
  },
  {
    id: 5,
    title: 'Earn Recognized Certification',
    description: 'Validate your skills with industry-relevant certifications that showcase your expertise and boost professional credibility.',
    color: '#10B981',
  },
];

export default function LearningRoadmap() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className={styles.roadmapSection} aria-labelledby="roadmap-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 id="roadmap-heading" className={styles.title}>
           Design Your Path to Excellence
          </h2>
          <p className={styles.subtitle}>
            From First Step to Future-Ready: Your Learning Journey Starts Here-guided by SparkMinds.
          </p>
        </div>

        <div className={styles.roadmapWrapper}>
          <svg
            className={styles.roadPath}
            viewBox="0 0 1200 300"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M 0 150 Q 300 50, 600 150 T 1200 150"
              fill="none"
              stroke="#000000"
              strokeWidth="60"
              strokeLinecap="round"
            />
            <path
              d="M 0 150 Q 300 50, 600 150 T 1200 150"
              fill="none"
              stroke="#000000"
              strokeWidth="50"
              strokeLinecap="round"
            />
            <path
              d="M 0 150 Q 300 50, 600 150 T 1200 150"
              fill="none"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="20,15"
              className={styles.dashedLine}
            />
          </svg>

          <div className={styles.milestonesContainer}>
            {milestones.map((milestone, index) => {
              const positions = [6, 28, 50, 72, 94];
              const yOffsets = [25, 10, 25, 44, 30];
              const titleBelow = true;

              return (
                <div
                  key={milestone.id}
                  className={styles.milestoneWrapper}
                  style={{
                    left: `${positions[index]}%`,
                    top: `${yOffsets[index]}%`,
                  }}
                  onMouseEnter={() => setHoveredId(milestone.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {titleBelow && (
                    <div className={styles.visibleLabel}>
                      <h4 className={styles.visibleTitle}>{milestone.title}</h4>
                    </div>
                  )}

                  <div
                    className={`${styles.milestone} ${
                      hoveredId === milestone.id ? styles.milestoneHovered : ''
                    }`}
                  >
                    <div
                      className={styles.pinOuter}
                      style={{ borderColor: milestone.color }}
                    >
                      <div
                        className={styles.pinInner}
                        style={{ backgroundColor: milestone.color }}
                      >
                        <span className={styles.pinNumber}>{milestone.id}</span>
                      </div>
                    </div>
                    <div className={styles.pinPoint} style={{ backgroundColor: milestone.color }} />
                  </div>

                  {!titleBelow && (
                    <div className={styles.visibleLabelAbove}>
                      <h4 className={styles.visibleTitle}>{milestone.title}</h4>
                    </div>
                  )}

                  <div className={styles.milestoneContent}>
                    <h3 className={styles.milestoneTitle}>{milestone.title}</h3>
                    <p className={styles.milestoneDescription}>
                      {milestone.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.mobileTimeline}>
          {milestones.map((milestone) => (
            <div key={milestone.id} className={styles.mobileCard}>
              <div className={styles.mobileCardHeader}>
                <div
                  className={styles.mobilePin}
                  style={{ backgroundColor: milestone.color }}
                >
                  <span className={styles.mobilePinNumber}>{milestone.id}</span>
                </div>
                <h3 className={styles.mobileTitle}>{milestone.title}</h3>
              </div>
              <p className={styles.mobileDescription}>{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
