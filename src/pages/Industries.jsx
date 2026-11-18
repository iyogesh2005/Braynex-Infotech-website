
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Landmark,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Factory,
  Truck,
  Lightbulb,
  Target,
  TrendingUp,
  CheckCircle2,
  Layers3,
} from 'lucide-react';

import { PageHero } from '../components/Shell';
import './industries.css';

const industries = [
  {
    number: '01',
    title: 'Financial Services',
    description:
      'Build secure, dependable digital experiences that simplify financial operations and improve customer confidence.',
    icon: Landmark,
    focus: ['Digital platforms', 'Process automation', 'Secure experiences'],
  },
  {
    number: '02',
    title: 'Healthcare & Wellness',
    description:
      'Create connected digital solutions that help healthcare teams manage information and deliver smoother experiences.',
    icon: HeartPulse,
    focus: ['Patient experiences', 'Digital workflows', 'Data management'],
  },
  {
    number: '03',
    title: 'Education & Learning',
    description:
      'Make learning more accessible through intuitive platforms, interactive experiences and connected systems.',
    icon: GraduationCap,
    focus: ['Learning platforms', 'Education portals', 'Progress tracking'],
  },
  {
    number: '04',
    title: 'Retail & Commerce',
    description:
      'Support modern commerce with engaging digital storefronts, streamlined operations and customer-focused experiences.',
    icon: ShoppingBag,
    focus: ['E-commerce platforms', 'Customer journeys', 'Order workflows'],
  },
  {
    number: '05',
    title: 'Manufacturing',
    description:
      'Bring greater visibility to operations with practical software, connected workflows and useful business insights.',
    icon: Factory,
    focus: ['Operations systems', 'Workflow automation', 'Business insights'],
  },
  {
    number: '06',
    title: 'Logistics & Supply Chain',
    description:
      'Improve coordination across moving parts with digital tools that support visibility, planning and efficiency.',
    icon: Truck,
    focus: ['Tracking systems', 'Process coordination', 'Data visibility'],
  },
];

const approach = [
  {
    number: '01',
    title: 'Understand the industry',
    description:
      'We learn about your customers, workflows and the challenges that shape your business.',
    icon: Target,
  },
  {
    number: '02',
    title: 'Build the right solution',
    description:
      'We align design and technology around your requirements instead of forcing a one-size-fits-all approach.',
    icon: Lightbulb,
  },
  {
    number: '03',
    title: 'Grow with confidence',
    description:
      'We help refine and evolve digital experiences as your business and customer needs change.',
    icon: TrendingUp,
  },
];

function IndustryReveal({ children, className = '', delay = 0 }) {
  return (
    <div
      className={`industry-reveal ${className}`}
      style={{ '--industry-delay': `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Industries() {
  useEffect(() => {
    const elements = document.querySelectorAll('.industry-reveal');

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) =>
        element.classList.add('industry-visible')
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('industry-visible');
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
    <div className="industries-page">

      <PageHero
        eyebrow="INDUSTRIES / BRAYNEX INFOTECH"
        title="Built for the way your world works."
        description="Every industry has its own challenges. We bring thoughtful design and adaptable technology together to help businesses move forward."
      />

      {/* INTRO SECTION */}
      <section className="section industries-intro">
        <div className="container industries-intro-grid">

          <IndustryReveal className="industries-intro-content">
            <span className="eyebrow">
              <span className="industry-eyebrow-dot" />
              AREAS WE UNDERSTAND
            </span>

            <h2 className="section-title">
              Context matters.
              <span className="industry-heading-highlight">
                {' '}So does the right technology.
              </span>
            </h2>

            <p className="muted">
              Different industries work in different ways. Their customers,
              processes and priorities are never exactly the same. We take
              time to understand that context before shaping a digital
              solution that fits.
            </p>

            <div className="industry-intro-points">
              <div>
                <CheckCircle2 size={19} />
                <span>Solutions shaped around real business needs</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>Technology designed for practical use</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>Flexible foundations for future growth</span>
              </div>
            </div>

            <Link to="/contact" className="btn industry-intro-btn">
              Discuss your requirements
              <ArrowUpRight size={18} />
            </Link>
          </IndustryReveal>

          <IndustryReveal className="industry-visual-wrap" delay={150}>
            <div className="industry-visual">

              <div className="industry-visual-grid" />
              <div className="industry-visual-glow" />

              <div className="industry-visual-orbit industry-orbit-one" />
              <div className="industry-visual-orbit industry-orbit-two" />
              <div className="industry-visual-orbit industry-orbit-three" />

              <div className="industry-visual-center">
                <div className="industry-center-icon">
                  <Layers3 size={37} strokeWidth={1.5} />
                </div>
                <span>CONNECTED THINKING</span>
                <small>Technology with context</small>
              </div>

              <div className="industry-node industry-node-one">
                <Landmark size={19} />
              </div>

              <div className="industry-node industry-node-two">
                <HeartPulse size={19} />
              </div>

              <div className="industry-node industry-node-three">
                <Factory size={19} />
              </div>

              <div className="industry-node industry-node-four">
                <GraduationCap size={19} />
              </div>

              <span className="industry-visual-caption">
                BUILT AROUND YOUR WORLD
              </span>

              <span className="industry-visual-index">01 / 06</span>
            </div>
          </IndustryReveal>

        </div>
      </section>

      {/* INDUSTRY CARDS */}
      <section className="section industries-list-section">
        <div className="container">

          <IndustryReveal className="industries-section-heading">
            <span className="eyebrow">INDUSTRIES WE SUPPORT</span>

            <h2 className="section-title">
              Different sectors. One thoughtful approach.
            </h2>

            <p className="muted">
              Explore the industries where adaptable digital solutions
              can make everyday work simpler and more effective.
            </p>
          </IndustryReveal>

          <div className="industries-card-grid">
            {industries.map((industry, index) => {
              const Icon = industry.icon;

              return (
                <IndustryReveal
                  key={industry.number}
                  className="industry-card"
                  delay={(index % 3) * 110}
                >
                  <div className="industry-card-top">
                    <div className="industry-card-icon">
                      <Icon size={25} strokeWidth={1.7} />
                    </div>

                    <span className="industry-card-number">
                      {industry.number}
                    </span>
                  </div>

                  <span className="industry-card-label">
                    INDUSTRY FOCUS
                  </span>

                  <h3>{industry.title}</h3>

                  <p>{industry.description}</p>

                  <div className="industry-card-focus">
                    {industry.focus.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="industry-card-link"
                    aria-label={`Discuss ${industry.title} solutions`}
                  >
                    Discuss your needs
                    <ArrowUpRight size={17} />
                  </Link>

                  <div className="industry-card-decoration" />
                </IndustryReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* APPROACH SECTION */}
      <section className="section industries-approach-section">
        <div className="container">

          <IndustryReveal className="industries-section-heading">
            <span className="eyebrow">HOW WE APPROACH EVERY INDUSTRY</span>

            <h2 className="section-title">
              Clear thinking at every step.
            </h2>

            <p className="muted">
              We keep the process practical, collaborative and focused
              on outcomes that matter to your business.
            </p>
          </IndustryReveal>

          <div className="industry-approach-grid">
            {approach.map((step, index) => {
              const Icon = step.icon;

              return (
                <IndustryReveal
                  key={step.number}
                  className="industry-approach-card"
                  delay={index * 130}
                >
                  <div className="industry-approach-top">
                    <span>{step.number} / APPROACH</span>

                    <div className="industry-approach-icon">
                      <Icon size={23} />
                    </div>
                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>

                  <div className="industry-approach-progress">
                    <span />
                  </div>
                </IndustryReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section industries-cta-section">
        <div className="container">

          <IndustryReveal className="industries-cta-card">

            <div className="industries-cta-orbit industries-cta-orbit-one" />
            <div className="industries-cta-orbit industries-cta-orbit-two" />

            <div className="industries-cta-content">
              <span className="eyebrow">
                YOUR INDUSTRY. YOUR NEXT OPPORTUNITY.
              </span>

              <h2>
                Let's solve the right
                <span> challenge together.</span>
              </h2>

              <p>
                Tell us about your business and what you want to improve.
                We’ll explore a practical way to move forward.
              </p>

              <Link to="/contact" className="btn industries-cta-btn">
                Start a conversation
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="industries-cta-symbol">
              <Layers3 size={48} strokeWidth={1.2} />
            </div>

          </IndustryReveal>

        </div>
      </section>

    </div>
  );
}
