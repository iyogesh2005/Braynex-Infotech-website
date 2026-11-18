
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Lightbulb,
  Code2,
  Palette,
  Cpu,
  ArrowUpRight,
  BookOpen,
  Sparkles,
  Compass,
} from 'lucide-react';
import { PageHero } from '../components/Shell';
import './insights.css';

const insightTopics = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Product Strategy',
    description:
      'Discover how thoughtful planning, clear priorities and user-focused decisions shape successful digital products.',
    tags: ['Product thinking', 'Digital strategy'],
  },
  {
    number: '02',
    icon: Code2,
    title: 'Software Engineering',
    description:
      'Explore development practices, scalable architecture and the engineering principles behind dependable software.',
    tags: ['Development', 'Architecture'],
  },
  {
    number: '03',
    icon: Palette,
    title: 'User Experience',
    description:
      'Understand how intuitive interfaces, accessible design and meaningful interactions improve digital experiences.',
    tags: ['UI / UX', 'Accessibility'],
  },
  {
    number: '04',
    icon: Cpu,
    title: 'Emerging Technology',
    description:
      'Explore new technologies and understand how innovation can create practical value for modern businesses.',
    tags: ['Innovation', 'Technology'],
  },
];

const approachSteps = [
  {
    number: '01',
    title: 'Understand the context',
    description:
      'We explore the challenge, ask meaningful questions and identify what really matters.',
    icon: Compass,
  },
  {
    number: '02',
    title: 'Share useful thinking',
    description:
      'We turn ideas and experience into clear perspectives that support better decisions.',
    icon: BookOpen,
  },
  {
    number: '03',
    title: 'Put ideas into action',
    description:
      'We connect thoughtful insights with practical solutions that create lasting value.',
    icon: Sparkles,
  },
];

function InsightReveal({ children, className = '', delay = 0 }) {
  return (
    <div
      className={`insights-reveal ${className}`}
      style={{ '--insight-delay': `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Insights() {
  useEffect(() => {
    const elements = document.querySelectorAll('.insights-reveal');

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) =>
        element.classList.add('insights-visible')
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('insights-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -35px 0px',
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="insights-page">
      <PageHero
        eyebrow="INSIGHTS / BRAYNEX INFOTECH"
        title="Ideas for a changing digital world."
        description="Perspectives on product strategy, software engineering, design and the technology choices shaping tomorrow."
      />

      {/* INTRO SECTION */}
      <section className="section insights-intro-section">
        <div className="container insights-intro-grid">
          <InsightReveal className="insights-intro-copy">
            <span className="eyebrow">Topics to explore</span>

            <h2 className="section-title">
              Better questions.
              <br />
              <span className="insights-heading-accent">
                Smarter perspectives.
              </span>
            </h2>

            <p className="muted">
              Explore practical thinking on digital product strategy,
              software engineering, experience design and the decisions
              that help technology create lasting value.
            </p>

            <div className="insights-tag-list">
              <span className="pill">Product strategy</span>
              <span className="pill">Engineering practices</span>
              <span className="pill">User experience</span>
              <span className="pill">Emerging technology</span>
            </div>

            <Link className="btn insights-main-btn" to="/contact">
              Explore ideas with us <ArrowUpRight size={17} />
            </Link>
          </InsightReveal>

          <InsightReveal className="insights-visual-wrap" delay={150}>
            <div className="insights-visual">
              <div className="insights-visual-grid" />
              <div className="insights-visual-glow" />

              <div className="insights-orbit insights-orbit-one">
                <span />
              </div>

              <div className="insights-orbit insights-orbit-two">
                <span />
              </div>

              <div className="insights-visual-image">
                <img
                  src="/assets/cloud.svg"
                  alt="Connected digital technology concept"
                />
              </div>

              <div className="insights-floating-card insights-card-top">
                <Lightbulb size={17} />
                <span>Ideas that inspire</span>
              </div>

              <div className="insights-floating-card insights-card-bottom">
                <span className="insights-status-dot" />
                <span>Knowledge into action</span>
                <ArrowUpRight size={16} />
              </div>

              <div className="insights-visual-index">THINK / CREATE / EVOLVE</div>
            </div>
          </InsightReveal>
        </div>
      </section>

      {/* TOPIC CARDS */}
      <section className="section insights-topics-section">
        <div className="container">
          <InsightReveal className="insights-section-heading">
            <div>
              <span className="eyebrow">Explore our interests</span>
              <h2 className="section-title">
                Technology has many stories.
                <br />
                <span className="insights-heading-accent">
                  Let's explore them.
                </span>
              </h2>
            </div>

            <p className="muted insights-heading-description">
              A closer look at the ideas, disciplines and innovations
              shaping the digital world.
            </p>
          </InsightReveal>

          <div className="insights-topic-grid">
            {insightTopics.map((topic, index) => {
              const TopicIcon = topic.icon;

              return (
                <InsightReveal
                  key={topic.number}
                  delay={index * 100}
                  className="insights-topic-reveal"
                >
                  <article className="insights-topic-card">
                    <div className="insights-topic-top">
                      <span className="insights-topic-number">
                        {topic.number} / TOPIC
                      </span>

                      <span className="insights-topic-icon">
                        <TopicIcon size={23} strokeWidth={1.7} />
                      </span>
                    </div>

                    <h3>{topic.title}</h3>

                    <p>{topic.description}</p>

                    <div className="insights-topic-tags">
                      {topic.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <div className="insights-topic-bottom">
                      <span>Explore this area</span>
                      <ArrowUpRight size={19} />
                    </div>
                  </article>
                </InsightReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* APPROACH SECTION */}
      <section className="section insights-approach-section">
        <div className="container">
          <InsightReveal className="insights-approach-heading">
            <span className="eyebrow">The Braynex perspective</span>
            <h2 className="section-title">
              Clear thinking at
              <br />
              <span className="insights-heading-accent">
                every step.
              </span>
            </h2>
            <p className="muted">
              Meaningful technology starts with understanding.
              We connect knowledge, creativity and engineering
              to move ideas forward.
            </p>
          </InsightReveal>

          <div className="insights-approach-grid">
            {approachSteps.map((step, index) => {
              const StepIcon = step.icon;

              return (
                <InsightReveal
                  key={step.number}
                  delay={index * 130}
                  className="insights-approach-reveal"
                >
                  <article className="insights-approach-card">
                    <div className="insights-approach-card-top">
                      <span>{step.number}</span>
                      <StepIcon size={23} strokeWidth={1.6} />
                    </div>

                    <h3>{step.title}</h3>
                    <p>{step.description}</p>

                    <div className="insights-approach-line" />
                  </article>
                </InsightReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section insights-final-section">
        <div className="container">
          <InsightReveal>
            <div className="insights-final-card">
              <div className="insights-final-decoration" />

              <div className="insights-final-content">
                <span className="eyebrow">Ideas start with a conversation</span>

                <h2>
                  Let's turn thoughtful ideas
                  <br />
                  into meaningful progress.
                </h2>

                <p>
                  Have a technology challenge or an idea worth exploring?
                  Let's think it through together.
                </p>

                <Link className="btn insights-final-btn" to="/contact">
                  Talk to our team <ArrowUpRight size={17} />
                </Link>
              </div>

              <div className="insights-final-symbol">
                <Lightbulb size={65} strokeWidth={1} />
                <span />
              </div>
            </div>
          </InsightReveal>
        </div>
      </section>
    </div>
  );
}
