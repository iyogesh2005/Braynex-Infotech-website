
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Building2,
  ShoppingCart,
  BarChart3,
  Workflow,
  Network,
  Database,
  ShieldCheck,
  Zap,
  Target,
  Layers3,
  CheckCircle2,
  MoveRight,
  Sparkles,
} from 'lucide-react';
import { PageHero } from '../components/Shell';
import './solutions.css';

const solutionAreas = [
  {
    number: '01',
    icon: BrainCircuit,
    title: 'AI-Enabled Workflows',
    description:
      'Bring intelligence into everyday operations with practical automation and AI-supported digital experiences.',
    points: ['Workflow assistance', 'Intelligent automation', 'AI integrations'],
  },
  {
    number: '02',
    icon: Cloud,
    title: 'Cloud-Ready Platforms',
    description:
      'Build flexible digital foundations that support accessibility, collaboration and changing business demands.',
    points: ['Cloud integration', 'Scalable architecture', 'Platform modernization'],
  },
  {
    number: '03',
    icon: Building2,
    title: 'Enterprise Applications',
    description:
      'Connect business functions through custom applications that make information and operations easier to manage.',
    points: ['Business applications', 'System integration', 'Digital operations'],
  },
  {
    number: '04',
    icon: ShoppingCart,
    title: 'E-commerce Ecosystems',
    description:
      'Create connected shopping experiences that simplify product discovery, transactions and customer engagement.',
    points: ['Online storefronts', 'Commerce workflows', 'Customer experiences'],
  },
  {
    number: '05',
    icon: BarChart3,
    title: 'Data & Reporting Experiences',
    description:
      'Turn business information into useful insights through clear reporting interfaces and connected data experiences.',
    points: ['Data visualization', 'Business dashboards', 'Reporting systems'],
  },
  {
    number: '06',
    icon: Workflow,
    title: 'Process Automation',
    description:
      'Reduce repetitive work and improve operational consistency by connecting tools, teams and business processes.',
    points: ['Process optimization', 'Task automation', 'System connectivity'],
  },
];

const solutionBenefits = [
  {
    icon: Network,
    title: 'Connected operations',
    description:
      'Bring tools, information and workflows together for smoother collaboration.',
  },
  {
    icon: ShieldCheck,
    title: 'Dependable foundations',
    description:
      'Build with thoughtful architecture, quality practices and maintainability in mind.',
  },
  {
    icon: Zap,
    title: 'Practical efficiency',
    description:
      'Simplify repetitive activities and help teams focus on meaningful work.',
  },
];

const solutionSteps = [
  {
    number: '01',
    title: 'Understand',
    description:
      'Explore your business context, current systems and the problems worth solving.',
  },
  {
    number: '02',
    title: 'Connect',
    description:
      'Identify the right technologies, integrations and experiences for your needs.',
  },
  {
    number: '03',
    title: 'Deliver',
    description:
      'Build, validate and introduce a solution that supports real business workflows.',
  },
  {
    number: '04',
    title: 'Evolve',
    description:
      'Improve the solution as your teams, customers and business requirements change.',
  },
];

function SolutionReveal({ children, className = '', delay = 0 }) {
  return (
    <div
      className={`solution-reveal ${className}`}
      style={{ '--solution-delay': `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function EcosystemVisual() {
  return (
    <div className="solutions-ecosystem-visual">
      <div className="solutions-ecosystem-grid" />
      <div className="solutions-ecosystem-glow" />

      <div className="solutions-connection connection-one" />
      <div className="solutions-connection connection-two" />
      <div className="solutions-connection connection-three" />
      <div className="solutions-connection connection-four" />

      <div className="solutions-ecosystem-center">
        <div className="solutions-center-orbit">
          <span />
        </div>
        <div className="solutions-center-icon">
          <Network size={36} strokeWidth={1.5} />
        </div>
        <span className="solutions-center-label">YOUR BUSINESS</span>
        <small>Connected ecosystem</small>
      </div>

      <div className="solutions-ecosystem-node solutions-node-ai">
        <BrainCircuit size={22} />
        <span>AI & DATA</span>
      </div>

      <div className="solutions-ecosystem-node solutions-node-cloud">
        <Cloud size={22} />
        <span>CLOUD</span>
      </div>

      <div className="solutions-ecosystem-node solutions-node-app">
        <Layers3 size={22} />
        <span>APPLICATIONS</span>
      </div>

      <div className="solutions-ecosystem-node solutions-node-flow">
        <Workflow size={22} />
        <span>WORKFLOWS</span>
      </div>

      <div className="solutions-visual-caption">
        <span />
        CONNECT / SIMPLIFY / GROW
      </div>
    </div>
  );
}

export default function Solutions() {
  useEffect(() => {
    const elements = document.querySelectorAll('.solution-reveal');

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) =>
        element.classList.add('solution-visible')
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('solution-visible');
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
    <div className="solutions-page">

      {/* HERO */}
      <PageHero
        eyebrow="SOLUTIONS / BRAYNEX INFOTECH"
        title="Technology shaped around your business."
        description="Practical platforms and connected systems that help teams work smarter, serve customers better and adapt with confidence."
      />

      {/* INTRODUCTION */}
      <section className="section solutions-intro-section">
        <div className="container solutions-intro-grid">

          <SolutionReveal className="solutions-intro-copy">
            <span className="eyebrow">Solution areas</span>

            <h2 className="section-title">
              Connected systems.
              <br />
              <span className="solutions-heading-accent">
                Better ways of working.
              </span>
            </h2>

            <p className="muted">
              Every business has its own constraints. We design
              solutions around the way your teams operate,
              integrating the tools, data and experiences that help
              work flow more naturally.
            </p>

            <div className="solutions-tag-list">
              <span className="pill">AI-enabled workflows</span>
              <span className="pill">Cloud-ready platforms</span>
              <span className="pill">Enterprise applications</span>
              <span className="pill">E-commerce ecosystems</span>
              <span className="pill">Data and reporting experiences</span>
              <span className="pill">Process automation</span>
            </div>

            <Link className="btn solutions-intro-btn" to="/contact">
              Explore solutions
              <ArrowUpRight size={17} />
            </Link>
          </SolutionReveal>

          <SolutionReveal className="solutions-visual-wrap" delay={150}>
            <EcosystemVisual />
          </SolutionReveal>

        </div>
      </section>

      {/* SOLUTION AREAS */}
      <section className="section solutions-areas-section">
        <div className="container">

          <SolutionReveal className="solutions-section-heading">
            <div>
              <span className="eyebrow">What we can create</span>

              <h2 className="section-title">
                Solutions for
                <br />
                <span className="solutions-heading-accent">
                  real business challenges.
                </span>
              </h2>
            </div>

            <p className="muted">
              Explore the solution areas that can help simplify
              operations, connect experiences and support your next
              stage of growth.
            </p>
          </SolutionReveal>

          <div className="solutions-area-grid">
            {solutionAreas.map((solution, index) => {
              const SolutionIcon = solution.icon;

              return (
                <SolutionReveal
                  key={solution.number}
                  delay={index * 80}
                >
                  <article className="solutions-area-card">

                    <div className="solutions-area-top">
                      <span className="solutions-area-number">
                        {solution.number}
                      </span>

                      <div className="solutions-area-icon">
                        <SolutionIcon size={25} strokeWidth={1.6} />
                      </div>
                    </div>

                    <h3>{solution.title}</h3>

                    <p>{solution.description}</p>

                    <div className="solutions-area-points">
                      {solution.points.map((point) => (
                        <span key={point}>
                          <CheckCircle2 size={14} />
                          {point}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="solutions-area-link"
                      aria-label={`Discuss ${solution.title}`}
                    >
                      Discuss this solution
                      <ArrowUpRight size={17} />
                    </Link>

                  </article>
                </SolutionReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="section solutions-benefits-section">
        <div className="container">

          <SolutionReveal className="solutions-benefits-heading">
            <span className="eyebrow">Why connected solutions</span>

            <h2 className="section-title">
              Make technology
              <br />
              <span className="solutions-heading-accent">
                work better together.
              </span>
            </h2>

            <p className="muted">
              The value of a solution comes from how well it supports
              the people and processes behind your business.
            </p>
          </SolutionReveal>

          <div className="solutions-benefits-grid">
            {solutionBenefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;

              return (
                <SolutionReveal
                  key={benefit.title}
                  delay={index * 120}
                >
                  <article className="solutions-benefit-card">

                    <div className="solutions-benefit-icon">
                      <BenefitIcon size={27} strokeWidth={1.6} />
                    </div>

                    <h3>{benefit.title}</h3>

                    <p>{benefit.description}</p>

                    <span className="solutions-benefit-decoration" />
                  </article>
                </SolutionReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* DELIVERY APPROACH */}
      <section className="section solutions-approach-section">
        <div className="container">

          <SolutionReveal className="solutions-approach-heading">
            <span className="eyebrow">How we approach solutions</span>

            <h2 className="section-title">
              From business challenge
              <br />
              <span className="solutions-heading-accent">
                to practical progress.
              </span>
            </h2>
          </SolutionReveal>

          <div className="solutions-timeline">
            {solutionSteps.map((step, index) => (
              <SolutionReveal
                key={step.number}
                delay={index * 100}
              >
                <article className="solutions-timeline-item">

                  <div className="solutions-timeline-marker">
                    {step.number}
                  </div>

                  <div className="solutions-timeline-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>

                  {index !== solutionSteps.length - 1 && (
                    <div className="solutions-timeline-arrow">
                      <MoveRight size={18} />
                    </div>
                  )}

                </article>
              </SolutionReveal>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section solutions-final-section">
        <div className="container">

          <SolutionReveal>
            <div className="solutions-final-card">

              <div className="solutions-final-pattern" />

              <div className="solutions-final-copy">
                <span className="eyebrow">
                  Let's find the right direction
                </span>

                <h2>
                  Your business has a challenge.
                  <br />
                  Let's create the solution.
                </h2>

                <p>
                  Tell us what you want to improve, simplify or
                  build. We can explore the right technology
                  approach together.
                </p>

                <Link className="btn solutions-final-btn" to="/contact">
                  Start a conversation
                  <ArrowUpRight size={17} />
                </Link>
              </div>

              <div className="solutions-final-art">
                <div className="solutions-final-orbit">
                  <span />
                </div>

                <div className="solutions-final-core">
                  <Sparkles size={38} />
                </div>
              </div>

            </div>
          </SolutionReveal>

        </div>
      </section>

    </div>
  );
}
