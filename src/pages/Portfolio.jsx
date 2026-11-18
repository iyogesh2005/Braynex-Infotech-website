
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  PanelsTopLeft,
  ShoppingCart,
  ChartNoAxesCombined,
  Layers3,
  Target,
  Lightbulb,
  Code2,
  Rocket,
  MoveRight,
} from 'lucide-react';
import { PageHero } from '../components/Shell';
import './portfolio.css';

const projectThemes = [
  {
    number: '01',
    icon: PanelsTopLeft,
    category: 'DIGITAL EXPERIENCE',
    title: 'Customer Portals',
    description:
      'Connected digital spaces that help customers access information, manage services and interact with businesses effortlessly.',
    tags: ['Web Applications', 'User Experience'],
    visual: 'portal',
  },
  {
    number: '02',
    icon: ShoppingCart,
    category: 'COMMERCE',
    title: 'Commerce Experiences',
    description:
      'Customer-focused shopping experiences designed around usability, smooth journeys and reliable digital transactions.',
    tags: ['E-Commerce', 'Digital Payments'],
    visual: 'commerce',
  },
  {
    number: '03',
    icon: ChartNoAxesCombined,
    category: 'BUSINESS INTELLIGENCE',
    title: 'Operations Dashboards',
    description:
      'Organized business information and interactive dashboards that help teams understand performance and make informed decisions.',
    tags: ['Analytics', 'Data Visualization'],
    visual: 'dashboard',
  },
  {
    number: '04',
    icon: Layers3,
    category: 'DIGITAL PLATFORMS',
    title: 'Digital Platforms',
    description:
      'Flexible software foundations that connect workflows, simplify processes and support evolving business requirements.',
    tags: ['Software Solutions', 'Integration'],
    visual: 'platform',
  },
];

const projectProcess = [
  {
    number: '01',
    icon: Target,
    title: 'Discover the challenge',
    description:
      'We understand the business context, identify user needs and define meaningful project goals.',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Design the experience',
    description:
      'We translate ideas into practical experiences with clear design decisions and thoughtful planning.',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Build with purpose',
    description:
      'We develop dependable technology with attention to quality, performance and scalability.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Evolve continuously',
    description:
      'We refine, improve and support digital solutions as business needs and expectations grow.',
  },
];

function PortfolioReveal({ children, className = '', delay = 0 }) {
  return (
    <div
      className={`portfolio-reveal ${className}`}
      style={{ '--portfolio-delay': `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function ProjectVisual({ type, number }) {
  return (
    <div className={`project-visual project-visual-${type}`}>
      <div className="project-visual-frame">
        <div className="project-window-top">
          <span />
          <span />
          <span />
          <small>PROJECT / {number}</small>
        </div>

        <div className="project-visual-content">
          {type === 'portal' && (
            <>
              <div className="portal-sidebar">
                <i />
                <i />
                <i />
                <i />
              </div>

              <div className="portal-main">
                <div className="portal-heading" />
                <div className="portal-heading-short" />

                <div className="portal-panels">
                  <i />
                  <i />
                </div>

                <div className="portal-wide-panel" />
              </div>
            </>
          )}

          {type === 'commerce' && (
            <div className="commerce-layout">
              <div className="commerce-header" />

              <div className="commerce-feature">
                <div className="commerce-product" />

                <div className="commerce-details">
                  <i />
                  <i />
                  <i />
                  <span />
                </div>
              </div>

              <div className="commerce-items">
                <i />
                <i />
                <i />
              </div>
            </div>
          )}

          {type === 'dashboard' && (
            <div className="dashboard-layout">
              <div className="dashboard-stats">
                <i />
                <i />
                <i />
              </div>

              <div className="dashboard-chart">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className="dashboard-bottom">
                <i />
                <i />
              </div>
            </div>
          )}

          {type === 'platform' && (
            <div className="platform-layout">
              <div className="platform-center">
                <Layers3 size={30} />
                <span>PLATFORM</span>
              </div>

              <div className="platform-node platform-node-one">
                <PanelsTopLeft size={18} />
              </div>

              <div className="platform-node platform-node-two">
                <Code2 size={18} />
              </div>

              <div className="platform-node platform-node-three">
                <ChartNoAxesCombined size={18} />
              </div>

              <div className="platform-connector platform-connector-one" />
              <div className="platform-connector platform-connector-two" />
              <div className="platform-connector platform-connector-three" />
            </div>
          )}
        </div>
      </div>

      <span className="project-visual-index">
        {number} — CONCEPT
      </span>
    </div>
  );
}

export default function Portfolio() {
  useEffect(() => {
    const elements = document.querySelectorAll('.portfolio-reveal');

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) =>
        element.classList.add('portfolio-visible')
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('portfolio-visible');
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
    <div className="portfolio-page">

      {/* HERO */}
      <PageHero
        eyebrow="SELECTED WORK / BRAYNEX INFOTECH"
        title="Thoughtful work. Measurable progress."
        description="A selection of digital experiences and technology initiatives built to solve real problems and create lasting value."
      />

      {/* INTRO */}
      <section className="section portfolio-intro-section">
        <div className="container portfolio-intro-grid">

          <PortfolioReveal className="portfolio-intro-copy">
            <span className="eyebrow">Explore project themes</span>

            <h2 className="section-title">
              A closer look at
              <br />
              <span className="portfolio-heading-accent">
                how we think and build.
              </span>
            </h2>

            <p className="muted">
              Our portfolio is a reflection of collaboration: clear goals,
              thoughtful design decisions and engineering that supports
              the people using it every day. The examples below are
              illustrative project categories for this frontend concept.
            </p>

            <div className="portfolio-tag-list">
              <span className="pill">Customer portals</span>
              <span className="pill">Commerce experiences</span>
              <span className="pill">Operations dashboards</span>
              <span className="pill">Digital platforms</span>
            </div>

            <Link className="btn portfolio-intro-btn" to="/contact">
              View our approach
              <ArrowUpRight size={17} />
            </Link>
          </PortfolioReveal>

          <PortfolioReveal className="portfolio-hero-visual" delay={150}>
            <div className="portfolio-image-stage">
              <div className="portfolio-image-grid" />
              <div className="portfolio-image-glow" />

              <div className="portfolio-image-orbit portfolio-image-orbit-one" />
              <div className="portfolio-image-orbit portfolio-image-orbit-two" />

              <img
                src="/assets/portfolio.svg"
                alt="Digital portfolio and creative technology"
              />

              <div className="portfolio-image-label">
                <span className="portfolio-live-dot" />
                Ideas into experiences
              </div>

              <div className="portfolio-image-corner">
                DESIGN / ENGINEERING / IMPACT
              </div>
            </div>
          </PortfolioReveal>

        </div>
      </section>

      {/* PROJECT THEMES */}
      <section className="section portfolio-projects-section">
        <div className="container">

          <PortfolioReveal className="portfolio-section-heading">
            <div>
              <span className="eyebrow">What we create</span>

              <h2 className="section-title">
                Different challenges.
                <br />
                <span className="portfolio-heading-accent">
                  Thoughtful solutions.
                </span>
              </h2>
            </div>

            <p className="muted">
              These illustrative project categories show the kinds
              of digital experiences and technology solutions
              we focus on building.
            </p>
          </PortfolioReveal>

          <div className="portfolio-project-grid">
            {projectThemes.map((project, index) => {
              const ProjectIcon = project.icon;

              return (
                <PortfolioReveal
                  key={project.number}
                  delay={index * 110}
                >
                  <article className="portfolio-project-card">

                    <ProjectVisual
                      type={project.visual}
                      number={project.number}
                    />

                    <div className="portfolio-project-info">

                      <div className="portfolio-project-meta">
                        <span>{project.category}</span>
                        <ProjectIcon size={19} />
                      </div>

                      <h3>{project.title}</h3>

                      <p>{project.description}</p>

                      <div className="portfolio-project-tags">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>

                    </div>

                    <div className="portfolio-project-bottom">
                      <span>Project category</span>
                      <ArrowUpRight size={19} />
                    </div>

                  </article>
                </PortfolioReveal>
              );
            })}
          </div>

          <PortfolioReveal className="portfolio-note" delay={150}>
            <span className="portfolio-note-mark">i</span>

            <p>
              Project visuals and categories on this page are illustrative.
              They are not presented as completed client case studies.
            </p>
          </PortfolioReveal>

        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="section portfolio-process-section">
        <div className="container">

          <PortfolioReveal className="portfolio-process-heading">
            <span className="eyebrow">The Braynex difference</span>

            <h2 className="section-title">
              Clear thinking at
              <br />
              <span className="portfolio-heading-accent">
                every step.
              </span>
            </h2>

            <p className="muted">
              Every meaningful digital solution starts with a clear
              understanding of the problem and grows through
              thoughtful execution.
            </p>
          </PortfolioReveal>

          <div className="portfolio-process-list">
            {projectProcess.map((step, index) => {
              const StepIcon = step.icon;

              return (
                <PortfolioReveal
                  key={step.number}
                  delay={index * 100}
                >
                  <article className="portfolio-process-item">

                    <div className="portfolio-process-number">
                      {step.number}
                    </div>

                    <div className="portfolio-process-icon">
                      <StepIcon size={23} strokeWidth={1.7} />
                    </div>

                    <div className="portfolio-process-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>

                    <MoveRight
                      className="portfolio-process-arrow"
                      size={22}
                    />

                  </article>
                </PortfolioReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section portfolio-final-section">
        <div className="container">

          <PortfolioReveal>
            <div className="portfolio-final-card">

              <div className="portfolio-final-decoration" />

              <div className="portfolio-final-copy">
                <span className="eyebrow">
                  Your idea. Our expertise.
                </span>

                <h2>
                  Let's build something
                  <br />
                  that moves you forward.
                </h2>

                <p>
                  Have a challenge worth solving? Let's discuss your
                  goals and explore what we can create together.
                </p>

                <Link className="btn portfolio-final-btn" to="/contact">
                  Talk to our team
                  <ArrowUpRight size={17} />
                </Link>
              </div>

              <div className="portfolio-final-art">
                <div className="portfolio-final-ring portfolio-final-ring-one" />
                <div className="portfolio-final-ring portfolio-final-ring-two" />

                <div className="portfolio-final-center">
                  <Rocket size={42} strokeWidth={1.3} />
                </div>
              </div>

            </div>
          </PortfolioReveal>

        </div>
      </section>

    </div>
  );
}
