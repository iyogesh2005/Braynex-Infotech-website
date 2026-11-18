
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Layers3,
  Code2,
  Workflow,
  Target,
  Lightbulb,
  ShieldCheck,
  Zap,
  CheckCircle2,
  MoveUpRight,
} from 'lucide-react';

import './home.css';

const capabilities = [
  {
    number: '01',
    icon: Layers3,
    title: 'Digital Products',
    description:
      'From discovery to launch, we shape useful digital products around real customer needs and business goals.',
    tag: 'PRODUCT EXPERIENCE',
  },
  {
    number: '02',
    icon: Code2,
    title: 'Modern Engineering',
    description:
      'Build reliable applications with thoughtful architecture, clean code and technology designed to grow.',
    tag: 'SMART ENGINEERING',
  },
  {
    number: '03',
    icon: Workflow,
    title: 'Business Transformation',
    description:
      'Connect workflows, data and teams through practical technology that makes everyday work better.',
    tag: 'DIGITAL PROGRESS',
  },
];

const approachItems = [
  {
    number: '01',
    icon: Target,
    title: 'Understand',
    description: 'We start by understanding your goals, users and the real challenge.',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Create',
    description: 'We turn clear ideas into thoughtful designs and practical solutions.',
  },
  {
    number: '03',
    icon: Zap,
    title: 'Move Forward',
    description: 'We build, improve and help your digital journey keep moving.',
  },
];

function HomeReveal({ children, className = '', delay = 0 }) {
  return (
    <div
      className={`home-reveal ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll('.home-reveal');

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('home-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('home-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -45px 0px',
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="home-hero">
        <div className="home-hero-glow home-glow-one" />
        <div className="home-hero-glow home-glow-two" />
        <div className="home-hero-grid-pattern" />

        <div className="container home-grid">

          <div className="home-copy">
            <div className="home-eyebrow home-hero-reveal">
              <span className="home-eyebrow-dot" />
              DIGITAL ENGINEERING
              <span className="home-eyebrow-divider">·</span>
              PRODUCT THINKING
            </div>

            <h1 className="home-title home-hero-reveal home-title-delay">
              Technology with
              <em> purpose.</em>
              <br />
              Progress with
              <em> clarity.</em>
            </h1>

            <p className="home-description home-hero-reveal home-description-delay">
              We partner with ambitious teams to turn complex ideas into
              dependable digital products. From first sketch to launch and
              beyond, we bring strategy, engineering and thoughtful design
              together.
            </p>

            <div className="hero-actions home-hero-reveal home-actions-delay">
              <Link className="btn home-main-btn" to="/contact">
                Start a conversation
                <ArrowUpRight size={18} />
              </Link>

              <Link className="text-link home-text-link" to="/services">
                Explore capabilities
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="hero-proof home-hero-reveal home-proof-delay">
              <span>STRATEGY</span>
              <i />
              <span>DESIGN</span>
              <i />
              <span>ENGINEERING</span>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="home-art-wrap">
            <div className="home-art-glow" />

            <div className="home-art-orbit home-art-orbit-one" />
            <div className="home-art-orbit home-art-orbit-two" />
            <div className="home-art-orbit home-art-orbit-three" />

            <div className="home-art">
              <img
                src="/assets/innovation.svg"
                alt="Digital innovation and technology"
              />
            </div>

            <div className="orbit-note home-note-top">
              <span className="home-note-icon">
                <Sparkles size={17} />
              </span>
              <span>
                Ideas into impact
                <b>↗</b>
              </span>
            </div>

            <div className="home-floating-card home-floating-card-one">
              <span className="home-floating-icon">
                <ShieldCheck size={17} />
              </span>
              <span>
                <strong>Built with purpose</strong>
                <small>Thoughtful technology</small>
              </span>
            </div>

            <div className="home-floating-card home-floating-card-two">
              <span className="home-floating-icon">
                <Zap size={17} />
              </span>
              <span>
                <strong>Made to move</strong>
                <small>Progress through ideas</small>
              </span>
            </div>

            <div className="home-art-index">BRAYNEX / 001</div>
          </div>

        </div>

        <div className="home-scroll-indicator">
          <span />
          <small>SCROLL TO EXPLORE</small>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="section home-capabilities-section">
        <div className="container">

          <HomeReveal className="home-section-heading">
            <span className="eyebrow">
              <Sparkles size={15} />
              WHAT WE DO
            </span>

            <h2 className="section-title">
              A connected team for every
              <br />
              stage of your digital journey.
            </h2>

            <p className="muted home-section-description">
              We combine creative thinking and technical expertise to turn
              business challenges into meaningful digital experiences.
            </p>
          </HomeReveal>

          <div className="grid3 home-capability-grid">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <HomeReveal
                  key={item.number}
                  className="card service-card home-capability-card"
                  delay={index * 130}
                >
                  <div className="home-card-top">
                    <div className="home-capability-icon">
                      <Icon size={25} strokeWidth={1.7} />
                    </div>

                    <span className="num">
                      {item.number} / CAPABILITY
                    </span>
                  </div>

                  <span className="home-card-tag">{item.tag}</span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <Link to="/services" className="home-card-link">
                    Discover more
                    <ArrowUpRight size={17} />
                  </Link>

                  <span className="home-card-decoration" />
                </HomeReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURE / APPROACH */}
      <section className="section home-feature">
        <div className="container split home-feature-grid">

          <HomeReveal className="home-feature-content">
            <span className="eyebrow">
              <Target size={15} />
              A THOUGHTFUL APPROACH
            </span>

            <h2 className="section-title">
              Good technology
              <span className="home-feature-highlight"> should feel simple.</span>
            </h2>

            <p className="muted">
              We align business goals, user needs and technical choices
              before we build. That means fewer surprises, clearer decisions
              and digital experiences that work beautifully in the real world.
            </p>

            <div className="home-feature-points">
              <div>
                <CheckCircle2 size={18} />
                <span>Clear thinking before development</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>Technology chosen with purpose</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>Experiences designed around people</span>
              </div>
            </div>

            <Link className="btn btn-ghost home-feature-btn" to="/about">
              How we work
              <ArrowUpRight size={18} />
            </Link>
          </HomeReveal>

          <HomeReveal className="visual feature-visual home-feature-visual">
            <img
              src="/assets/team.svg"
              alt="Team collaboration and thoughtful technology"
            />

            <div className="home-feature-visual-overlay">
              <span className="home-feature-visual-icon">
                <Sparkles size={20} />
              </span>
              <span>
                <strong>People first.</strong>
                <small>Technology with purpose.</small>
              </span>
            </div>

            <div className="home-feature-visual-corner">
              02 — OUR APPROACH
            </div>
          </HomeReveal>

        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="section home-approach-section">
        <div className="container">

          <HomeReveal className="home-section-heading">
            <span className="eyebrow">HOW WE MOVE FORWARD</span>

            <h2 className="section-title">
              From a first thought
              <br />
              to something meaningful.
            </h2>

            <p className="muted home-section-description">
              A simple, collaborative approach keeps every step focused
              on the outcome that matters.
            </p>
          </HomeReveal>

          <div className="home-approach-grid">
            {approachItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <HomeReveal
                  key={item.number}
                  className="home-approach-card"
                  delay={index * 150}
                >
                  <div className="home-approach-top">
                    <span className="home-approach-number">
                      {item.number}
                    </span>

                    <div className="home-approach-icon">
                      <Icon size={23} />
                    </div>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <div className="home-approach-line">
                    <span />
                  </div>
                </HomeReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="section home-work-section">
        <div className="container">

          <HomeReveal className="home-section-heading">
            <span className="eyebrow">SELECTED WORK</span>

            <h2 className="section-title">
              Built around meaningful outcomes.
            </h2>

            <p className="muted home-section-description">
              Explore how clear thinking and considered engineering can
              turn complex challenges into practical digital experiences.
            </p>
          </HomeReveal>

          <div className="split home-work-grid">

            <HomeReveal className="visual home-work-visual">
              <img
                src="/assets/portfolio.svg"
                alt="Digital portfolio and project showcase"
              />

              <div className="home-work-visual-label">
                <span>IDEAS</span>
                <ArrowRight size={16} />
                <span>IMPACT</span>
              </div>
            </HomeReveal>

            <HomeReveal className="home-work-content">
              <span className="home-work-index">BRAYNEX / OUR WORK</span>

              <h3>From ambitious brief to everyday value.</h3>

              <p className="muted">
                Every project begins with a challenge and an opportunity.
                We bring the right ideas, design and engineering together
                to create experiences that make a difference.
              </p>

              <div className="home-work-points">
                <span><CheckCircle2 size={16} /> Thoughtful solutions</span>
                <span><CheckCircle2 size={16} /> Practical experiences</span>
                <span><CheckCircle2 size={16} /> Purposeful engineering</span>
              </div>

              <Link to="/portfolio" className="btn home-work-btn">
                View our work
                <ArrowUpRight size={18} />
              </Link>
            </HomeReveal>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="closing-cta home-closing-cta">
        <div className="home-cta-orbit home-cta-orbit-one" />
        <div className="home-cta-orbit home-cta-orbit-two" />
        <div className="home-cta-glow" />

        <div className="container home-cta-container">

          <HomeReveal className="home-cta-content">
            <span className="eyebrow">
              <Sparkles size={15} />
              YOUR NEXT CHAPTER STARTS HERE
            </span>

            <h2>Have a challenge worth solving?</h2>

            <p>
              Let's turn your next big idea into a thoughtful digital
              experience. We’re ready to explore it with you.
            </p>

            <div className="home-cta-actions">
              <Link className="btn home-cta-btn" to="/contact">
                Let’s talk
                <MoveUpRight size={18} />
              </Link>

              <Link to="/services" className="home-cta-secondary">
                Explore our capabilities
                <ArrowRight size={17} />
              </Link>
            </div>
          </HomeReveal>

          <div className="home-cta-decoration">
            <div className="home-cta-decoration-ring">
              <div className="home-cta-decoration-center">
                <Sparkles size={34} />
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
