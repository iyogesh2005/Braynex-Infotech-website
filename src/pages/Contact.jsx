
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MessageCircle,
  Send,
  Sparkles,
  Globe,
  MoveUpRight,
  CheckCircle2,
} from 'lucide-react';

import { PageHero } from '../components/Shell';
import './contact.css';

const contactWays = [
  {
    icon: Mail,
    label: 'Email',
    title: 'Start with a conversation',
    description: 'Tell us about your idea, project or business challenge.',
    value: 'hello@brainxinfotech.com',
    link: 'mailto:hello@brainxinfotech.com',
    action: 'Send an email',
  },
  {
    icon: Globe,
    label: 'LinkedIn',
    title: 'Connect professionally',
    description: 'Follow our professional updates and connect with our team.',
    value: 'Braynex Infotech',
    link: 'https://www.linkedin.com/',
    action: 'Visit LinkedIn',
  },
];

const conversationSteps = [
  {
    number: '01',
    title: 'Share your idea',
    description: 'Tell us what you are planning and what you want to achieve.',
  },
  {
    number: '02',
    title: 'Understand the challenge',
    description: 'We discuss your requirements, goals and possible solutions.',
  },
  {
    number: '03',
    title: 'Plan the next step',
    description: 'Together, we identify a practical direction for your project.',
  },
];

function ContactReveal({ children, className = '' }) {
  return (
    <div className={`contact-reveal ${className}`}>
      {children}
    </div>
  );
}

export default function Contact() {
  useEffect(() => {
    const elements = document.querySelectorAll('.contact-reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('contact-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="contact-page">

      <PageHero
        eyebrow="CONTACT / BRAYNEX INFOTECH"
        title="Let’s make your next move count."
        description="Have an idea, a challenge or a vision for your business? Let's start a conversation and explore what we can build together."
      />

      {/* INTRO SECTION */}
      <section className="section contact-intro-section">
        <div className="container contact-intro-grid">

          <ContactReveal className="contact-intro-content">
            <span className="eyebrow">
              <Sparkles size={15} />
              LET'S CONNECT
            </span>

            <h2 className="section-title">
              Every great project starts with
              <span className="contact-highlight"> one conversation.</span>
            </h2>

            <p className="muted">
              Share a little about your goals, your users or the challenge
              you want to solve. We believe in understanding the real need
              before creating the right solution.
            </p>

            <div className="contact-points">
              <div>
                <CheckCircle2 size={18} />
                <span>Understand your business goals</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>Explore practical technology solutions</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>Plan a clear path forward</span>
              </div>
            </div>

            <a
              href="mailto:hello@brainxinfotech.com"
              className="btn contact-primary-btn"
            >
              Start a conversation
              <ArrowUpRight size={18} />
            </a>
          </ContactReveal>

          {/* ANIMATED CONTACT VISUAL */}
          <ContactReveal className="contact-visual-wrap">
            <div className="contact-visual">

              <div className="contact-visual-grid" />

              <div className="contact-orbit contact-orbit-one" />
              <div className="contact-orbit contact-orbit-two" />
              <div className="contact-orbit contact-orbit-three" />

              <div className="contact-signal signal-one" />
              <div className="contact-signal signal-two" />
              <div className="contact-signal signal-three" />

              <div className="contact-center">
                <div className="contact-center-icon">
                  <MessageCircle size={38} strokeWidth={1.5} />
                </div>

                <span>LET'S TALK</span>
                <small>Ideas begin here</small>
              </div>

              <div className="contact-float contact-float-top">
                <Mail size={18} />
                <span>Open communication</span>
              </div>

              <div className="contact-float contact-float-bottom">
                <Sparkles size={17} />
                <span>Better possibilities</span>
              </div>

              <span className="contact-visual-label">
                BRAYNEX / CONNECT
              </span>

              <span className="contact-visual-index">
                01 — 03
              </span>
            </div>
          </ContactReveal>

        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="section contact-options-section">
        <div className="container">

          <ContactReveal className="contact-section-heading">
            <span className="eyebrow">OTHER WAYS TO CONNECT</span>

            <h2 className="section-title">
              Choose how you’d like to connect.
            </h2>

            <p className="muted">
              We’re always open to meaningful conversations and new ideas.
            </p>
          </ContactReveal>

          <div className="contact-method-grid">
            {contactWays.map((item, index) => {
              const Icon = item.icon;

              return (
                <ContactReveal
                  key={item.label}
                  className="contact-method-card"
                >
                  <div className="contact-method-top">
                    <div className="contact-method-icon">
                      <Icon size={23} />
                    </div>

                    <span className="contact-method-number">
                      0{index + 1}
                    </span>
                  </div>

                  <span className="contact-method-label">
                    {item.label}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <span className="contact-method-value">
                    {item.value}
                  </span>

                  <a
                    href={item.link}
                    target={item.label === 'LinkedIn' ? '_blank' : undefined}
                    rel={item.label === 'LinkedIn' ? 'noreferrer' : undefined}
                    className="contact-method-link"
                  >
                    {item.action}
                    <ArrowUpRight size={17} />
                  </a>
                </ContactReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="section contact-process-section">
        <div className="container">

          <ContactReveal className="contact-section-heading">
            <span className="eyebrow">WHAT HAPPENS NEXT</span>

            <h2 className="section-title">
              A simple path from idea to action.
            </h2>

            <p className="muted">
              We keep the first steps clear, collaborative and focused
              on what matters.
            </p>
          </ContactReveal>

          <div className="contact-process-grid">
            {conversationSteps.map((step, index) => (
              <ContactReveal
                key={step.number}
                className="contact-process-card"
              >
                <div className="contact-process-number">
                  {step.number}
                </div>

                <div className="contact-process-line">
                  <span />
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

                {index === 2 && (
                  <span className="contact-process-final">
                    <CheckCircle2 size={16} />
                    Ready to move forward
                  </span>
                )}
              </ContactReveal>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section contact-final-section">
        <div className="container">

          <ContactReveal className="contact-final-card">

            <div className="contact-final-decoration">
              <div className="contact-final-ring" />
              <div className="contact-final-ring contact-final-ring-two" />
            </div>

            <div className="contact-final-content">
              <span className="eyebrow">
                <Globe size={15} />
                YOUR NEXT CHAPTER STARTS HERE
              </span>

              <h2>
                Have something in mind?
                <span> Let’s bring it to life.</span>
              </h2>

              <p>
                Whether you have a clear plan or just the beginning
                of an idea, we’d love to hear from you.
              </p>

              <div className="contact-final-actions">
                <a
                  href="mailto:hello@brainxinfotech.com"
                  className="btn contact-final-btn"
                >
                  Talk to our team
                  <Send size={17} />
                </a>

                <Link to="/services" className="contact-secondary-link">
                  Explore our services
                  <MoveUpRight size={17} />
                </Link>
              </div>
            </div>

            <div className="contact-final-mark">
              <ArrowRight size={42} />
            </div>

          </ContactReveal>

        </div>
      </section>

    </div>
  );
}
