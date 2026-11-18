
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Code2,
  Smartphone,
  Palette,
  Settings2,
  ShieldCheck,
  Headset,
  Target,
  Workflow,
  TrendingUp,
  Layers3,
  Sparkles,
  CheckCircle2,
  MoveRight,
} from 'lucide-react';
import { PageHero } from '../components/Shell';
import './services.css';

const services = [
  {
    number: '01',
    icon: Code2,
    title: 'Web & Application Development',
    description:
      'Modern, responsive web applications built around business requirements, user expectations and reliable performance.',
    features: ['Business Websites', 'Web Applications', 'Custom Portals'],
  },
  {
    number: '02',
    icon: Smartphone,
    title: 'Mobile Experiences',
    description:
      'Intuitive mobile experiences that help businesses connect with customers through accessible and easy-to-use applications.',
    features: ['Mobile Applications', 'Responsive Interfaces', 'App Experiences'],
  },
  {
    number: '03',
    icon: Palette,
    title: 'UI/UX & Product Design',
    description:
      'Thoughtful interfaces and user journeys that make digital products easier to understand, navigate and use.',
    features: ['User Research', 'Interface Design', 'Prototyping'],
  },
  {
    number: '04',
    icon: Settings2,
    title: 'Custom Software Engineering',
    description:
      'Purpose-built software solutions designed to simplify workflows and support the way your organization operates.',
    features: ['Custom Solutions', 'API Integration', 'System Architecture'],
  },
  {
    number: '05',
    icon: ShieldCheck,
    title: 'Quality Engineering',
    description:
      'Structured testing and quality practices that help deliver dependable software and consistent digital experiences.',
    features: ['Functional Testing', 'Quality Assurance', 'Performance Checks'],
  },
  {
    number: '06',
    icon: Headset,
    title: 'Maintenance & Evolution',
    description:
      'Ongoing technical support, improvements and optimization to keep digital products useful as business needs evolve.',
    features: ['Technical Support', 'Enhancements', 'Optimization'],
  },
];

const deliverySteps = [
  {
    number: '01',
    icon: Target,
    title: 'Discover',
    description:
      'Understand your goals, users and challenges before deciding on the right direction.',
  },
  {
    number: '02',
    icon: Workflow,
    title: 'Plan & Design',
    description:
      'Create a clear roadmap and shape an experience that fits your business needs.',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Develop',
    description:
      'Build reliable digital solutions with thoughtful engineering and quality practices.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Improve',
    description:
      'Measure, refine and evolve the solution as your organization grows.',
  },
];

function ServiceReveal({ children, className = '', delay = 0 }) {
  return (
    <div
      className={`service-reveal ${className}`}
      style={{ '--service-delay': `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function CapabilityVisual() {
  return (
    <div className="services-capability-visual">
      <div className="services-visual-grid" />
      <div className="services-visual-glow" />

      <div className="services-visual-ring services-ring-one" />
      <div className="services-visual-ring services-ring-two" />
      <div className="services-visual-ring services-ring-three" />

      <div className="services-visual-center">
        <div className="services-center-icon">
          <Layers3 size={35} strokeWidth={1.4} />
        </div>
        <span>CONNECTED CAPABILITIES</span>
      </div>

      <div className="services-capability-node services-node-one">
        <Code2 size={21} />
        <span>DEVELOP</span>
      </div>

      <div className="services-capability-node services-node-two">
        <Palette size={21} />
        <span>DESIGN</span>
      </div>

      <div className="services-capability-node services-node-three">
        <ShieldCheck size={21} />
        <span>QUALITY</span>
      </div>

      <div className="services-capability-node services-node-four">
        <TrendingUp size={21} />
        <span>GROWTH</span>
      </div>

      <div className="services-visual-bottom">
        <span className="services-pulse-dot" />
        Strategy / Design / Engineering
      </div>
    </div>
  );
}

export default function Services() {
  useEffect(() => {
    const elements = document.querySelectorAll('.service-reveal');

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) =>
        element.classList.add('service-visible')
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('service-visible');
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
    <div className="services-page">

      {/* HERO */}
      <PageHero
        eyebrow="OUR SERVICES / BRAYNEX INFOTECH"
        title="The expertise to move ideas forward."
        description="A connected set of digital capabilities — shaped around your goals, your customers and the realities of your business."
      />

      {/* INTRODUCTION */}
      <section className="section services-intro-section">
        <div className="container services-intro-grid">

          <ServiceReveal className="services-intro-copy">
            <span className="eyebrow">What we bring</span>

            <h2 className="section-title">
              From first idea
              <br />
              <span className="services-heading-accent">
                to lasting capability.
              </span>
            </h2>

            <p className="muted">
              We combine product strategy, user experience and software
              engineering into a practical delivery partnership.
              Choose a focused capability or bring us in to support
              the complete journey.
            </p>

            <div className="services-tag-list">
              <span className="pill">Web & application development</span>
              <span className="pill">Mobile experiences</span>
              <span className="pill">UI/UX and product design</span>
              <span className="pill">Custom software engineering</span>
              <span className="pill">Quality engineering</span>
              <span className="pill">Maintenance and evolution</span>
            </div>

            <Link className="btn services-intro-btn" to="/contact">
              Find your fit
              <ArrowUpRight size={17} />
            </Link>
          </ServiceReveal>

          <ServiceReveal className="services-visual-wrap" delay={150}>
            <CapabilityVisual />
          </ServiceReveal>

        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section services-list-section">
        <div className="container">

          <ServiceReveal className="services-section-heading">
            <div>
              <span className="eyebrow">Our capabilities</span>

              <h2 className="section-title">
                Technology that
                <br />
                <span className="services-heading-accent">
                  works for your goals.
                </span>
              </h2>
            </div>

            <p className="muted">
              The right combination of skills and technology can turn
              complex requirements into practical digital solutions.
            </p>
          </ServiceReveal>

          <div className="services-card-grid">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;

              return (
                <ServiceReveal
                  key={service.number}
                  delay={index * 85}
                >
                  <article className="services-capability-card">

                    <div className="services-card-top">
                      <span className="services-card-number">
                        {service.number}
                      </span>

                      <div className="services-card-icon">
                        <ServiceIcon size={25} strokeWidth={1.7} />
                      </div>
                    </div>

                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                    <div className="services-card-features">
                      {service.features.map((feature) => (
                        <span key={feature}>
                          <CheckCircle2 size={14} />
                          {feature}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="services-card-link"
                      aria-label={`Discuss ${service.title}`}
                    >
                      Discuss this service
                      <ArrowUpRight size={17} />
                    </Link>

                  </article>
                </ServiceReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* APPROACH */}
      <section className="section services-approach-section">
        <div className="container">

          <ServiceReveal className="services-approach-heading">
            <span className="eyebrow">The Braynex difference</span>

            <h2 className="section-title">
              Clear thinking at
              <br />
              <span className="services-heading-accent">
                every step.
              </span>
            </h2>

            <p className="muted">
              We follow a thoughtful delivery approach that connects
              business understanding, creative decisions and
              dependable engineering.
            </p>
          </ServiceReveal>

          <div className="services-process-grid">
            {deliverySteps.map((step, index) => {
              const StepIcon = step.icon;

              return (
                <ServiceReveal
                  key={step.number}
                  delay={index * 110}
                >
                  <article className="services-process-card">

                    <div className="services-process-top">
                      <span>{step.number}</span>
                      <StepIcon size={23} />
                    </div>

                    <h3>{step.title}</h3>

                    <p>{step.description}</p>

                    <div className="services-process-line">
                      <span />
                    </div>

                  </article>
                </ServiceReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* DELIVERY PARTNERSHIP */}
      <section className="section services-partnership-section">
        <div className="container services-partnership-grid">

          <ServiceReveal className="services-partnership-copy">
            <span className="eyebrow">A connected partnership</span>

            <h2 className="section-title">
              More than a service.
              <br />
              <span className="services-heading-accent">
                A team moving with you.
              </span>
            </h2>

            <p className="muted">
              Good technology is not just about writing code.
              It is about understanding people, solving meaningful
              problems and building solutions that continue to deliver value.
            </p>

            <Link className="btn services-partnership-btn" to="/about">
              Get to know us
              <ArrowUpRight size={17} />
            </Link>
          </ServiceReveal>

          <ServiceReveal className="services-partnership-visual" delay={130}>
            <div className="services-partnership-art">
              <div className="services-partnership-orbit" />
              <div className="services-partnership-orbit orbit-small" />

              <div className="services-partnership-core">
                <Sparkles size={35} />
                <span>IDEAS</span>
              </div>

              <div className="services-partnership-label label-strategy">
                Strategy
              </div>

              <div className="services-partnership-label label-design">
                Design
              </div>

              <div className="services-partnership-label label-engineering">
                Engineering
              </div>
            </div>
          </ServiceReveal>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section services-final-section">
        <div className="container">

          <ServiceReveal>
            <div className="services-final-card">

              <div className="services-final-decoration" />

              <div className="services-final-content">
                <span className="eyebrow">
                  Let's create what's next
                </span>

                <h2>
                  Let's build something
                  <br />
                  that moves you forward.
                </h2>

                <p>
                  Have an idea, a challenge or a project in mind?
                  Let's explore the right technology path together.
                </p>

                <Link className="btn services-final-btn" to="/contact">
                  Talk to our team
                  <ArrowUpRight size={17} />
                </Link>
              </div>

              <div className="services-final-symbol">
                <div className="services-final-symbol-ring" />
                <div className="services-final-symbol-inner">
                  <MoveRight size={42} />
                </div>
              </div>

            </div>
          </ServiceReveal>

        </div>
      </section>

    </div>
  );
}
