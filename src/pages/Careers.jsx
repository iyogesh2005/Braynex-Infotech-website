
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Users,
  Lightbulb,
  GraduationCap,
  Handshake,
  Heart,
  Target,
  Code2,
  Palette,
  Rocket,
  Sparkles,
  Compass,
  MessageCircle,
  CheckCircle2,
  TrendingUp,
  Laptop,
  Workflow,
} from 'lucide-react';
import { PageHero } from '../components/Shell';
import './careers.css';

const cultureItems = [
  {
    number: '01',
    label: 'MEANINGFUL WORK',
    title: 'Solve real challenges',
    description:
      'Work on practical technology challenges and contribute ideas that can make a meaningful difference.',
    Icon: Lightbulb,
  },
  {
    number: '02',
    label: 'COLLABORATION',
    title: 'Build better together',
    description:
      'Share perspectives, learn from others and create better outcomes through open collaboration.',
    Icon: Users,
  },
  {
    number: '03',
    label: 'CONTINUOUS LEARNING',
    title: 'Keep growing',
    description:
      'Stay curious, explore new technologies and keep developing your skills through experience.',
    Icon: GraduationCap,
  },
  {
    number: '04',
    label: 'OWNERSHIP',
    title: 'Make your ideas count',
    description:
      'Take responsibility, contribute with confidence and care about the quality of your work.',
    Icon: Target,
  },
  {
    number: '05',
    label: 'TRUST & RESPECT',
    title: 'Value every perspective',
    description:
      'Create an environment where people feel heard, respected and encouraged to contribute.',
    Icon: Heart,
  },
  {
    number: '06',
    label: 'SHARED SUCCESS',
    title: 'Grow as one team',
    description:
      'Support one another, celebrate progress and work towards shared goals.',
    Icon: Handshake,
  },
];

const journeyItems = [
  {
    number: '01',
    title: 'Start a conversation',
    description:
      'Tell us about yourself, your interests and the kind of work you would love to explore.',
    Icon: MessageCircle,
  },
  {
    number: '02',
    title: 'Share your strengths',
    description:
      'Show us your experience, projects, skills and the ideas that make your perspective unique.',
    Icon: BriefcaseBusiness,
  },
  {
    number: '03',
    title: 'Explore possibilities',
    description:
      'We can discuss relevant opportunities, expectations and how your interests may align.',
    Icon: Compass,
  },
];

export default function Careers() {
  useEffect(() => {
    const elements = document.querySelectorAll('.careers-reveal');

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => {
        element.classList.add('careers-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('careers-visible');
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
    <div className="careers-page">
      {/* CAREER BACKGROUND EFFECTS */}
      <div className="careers-background-grid" aria-hidden="true" />
      <div className="careers-glow careers-glow-one" aria-hidden="true" />
      <div className="careers-glow careers-glow-two" aria-hidden="true" />

      <div className="careers-signal-lines" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      {/* PAGE HERO */}
      <PageHero
        eyebrow="CAREERS / GROW WITH BRAYNEX"
        title="Do meaningful work with good people."
        description="Join a team that values curiosity, craft and ownership. Bring your perspective, keep learning and help build useful technology that moves businesses forward."
      />

      {/* INTRODUCTION */}
      <section className="section careers-intro">
        <div className="container split careers-intro-grid">
          <div className="careers-intro-content careers-reveal">
            <span className="eyebrow careers-eyebrow">
              <Sparkles size={15} />
              LIFE AT BRAYNEX
            </span>

            <h2 className="section-title">
              Bring your ideas.
              <span className="careers-highlight">
                {' '}Grow your craft.
              </span>
            </h2>

            <p className="muted">
              We value thoughtful problem-solvers, generous collaborators
              and people who care about the details. At Braynex Infotech,
              curiosity is welcome and learning is part of the work.
            </p>

            <p className="muted">
              We believe good technology comes from people who ask
              questions, share ideas and take pride in what they create.
              Every perspective can bring a fresh way to solve a challenge.
            </p>

            <div className="careers-tags">
              <span className="pill"><Lightbulb size={14} /> Meaningful challenges</span>
              <span className="pill"><Users size={14} /> Collaborative teams</span>
              <span className="pill"><GraduationCap size={14} /> Room to learn</span>
              <span className="pill"><Target size={14} /> Ownership and trust</span>
            </div>

            <Link className="btn careers-primary-btn" to="/contact">
              Explore Opportunities <ArrowUpRight size={18} />
            </Link>
          </div>

          {/* CAREER GROWTH VISUAL */}
          <div className="careers-visual-wrap careers-reveal">
            <div className="careers-visual-frame">
              <div className="careers-visual-top">
                <span className="careers-live-dot" />
                <span>YOUR NEXT CHAPTER</span>
                <span className="careers-visual-index">BX / 01</span>
              </div>

              <div className="careers-growth-scene">
                <div className="careers-growth-lines" />

                <div className="careers-growth-orbit careers-growth-orbit-one" />
                <div className="careers-growth-orbit careers-growth-orbit-two" />

                <div className="careers-growth-core">
                  <div className="careers-core-icon">
                    <TrendingUp size={39} />
                  </div>
                  <strong>GROW</strong>
                  <small>WITH PURPOSE</small>
                </div>

                <div className="careers-skill-node skill-node-one">
                  <Code2 size={21} />
                  <span>BUILD</span>
                </div>

                <div className="careers-skill-node skill-node-two">
                  <Palette size={21} />
                  <span>CREATE</span>
                </div>

                <div className="careers-skill-node skill-node-three">
                  <BrainCircuitIcon />
                  <span>LEARN</span>
                </div>

                <div className="careers-skill-node skill-node-four">
                  <Rocket size={21} />
                  <span>EVOLVE</span>
                </div>

                <div className="careers-growth-step step-one" />
                <div className="careers-growth-step step-two" />
                <div className="careers-growth-step step-three" />
                <div className="careers-growth-step step-four" />
              </div>

              <div className="careers-visual-bottom">
                <span>CURIOUS MINDS</span>
                <span className="careers-visual-bottom-line" />
                <span>BUILD THE FUTURE</span>
              </div>
            </div>

            <div className="careers-floating-note">
              <span className="careers-note-icon">
                <Sparkles size={22} />
              </span>
              <div>
                <strong>Keep Moving Forward</strong>
                <small>Every new skill starts with curiosity.</small>
              </div>
            </div>

            <span className="careers-decoration-dot careers-dot-one" />
            <span className="careers-decoration-dot careers-dot-two" />
          </div>
        </div>
      </section>

      {/* CULTURE */}
      <section className="section careers-culture">
        <div className="careers-culture-glow" aria-hidden="true" />

        <div className="container">
          <div className="careers-section-heading careers-reveal">
            <span className="eyebrow careers-eyebrow">
              <Heart size={15} />
              THE BRAYNEX EXPERIENCE
            </span>

            <h2 className="section-title">
              A culture built on
              <span className="careers-highlight">
                {' '}people and possibilities.
              </span>
            </h2>

            <p className="muted">
              The values that shape how we work, collaborate and grow
              together every day.
            </p>
          </div>

          <div className="grid3 careers-culture-grid">
            {cultureItems.map(({ number, label, title, description, Icon }) => (
              <article
                className="card careers-culture-card careers-reveal"
                key={number}
              >
                <div className="careers-culture-top">
                  <span className="num">{number} / {label}</span>
                  <span className="careers-culture-icon">
                    <Icon size={23} strokeWidth={1.8} />
                  </span>
                </div>

                <h3>{title}</h3>
                <p>{description}</p>

                <div className="careers-culture-footer">
                  <span>BRAYNEX VALUES</span>
                  <ArrowUpRight size={16} />
                </div>

                <span className="careers-card-shine" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUR WORKING MINDSET */}
      <section className="section careers-mindset">
        <div className="container careers-mindset-grid">
          <div className="careers-mindset-visual careers-reveal">
            <div className="careers-mindset-panel">
              <div className="careers-panel-header">
                <span className="careers-panel-dot" />
                <span>HOW WE THINK</span>
              </div>

              <div className="careers-mindset-symbol">
                <Workflow size={46} />
              </div>

              <div className="careers-mindset-word">
                <span>THINK.</span>
                <span>CREATE.</span>
                <span className="careers-mindset-accent">GROW.</span>
              </div>

              <div className="careers-mindset-bottom">
                <span>IDEAS IN MOTION</span>
                <span>BX / 02</span>
              </div>
            </div>

            <div className="careers-mindset-floating">
              <Laptop size={23} />
              <span>Technology with purpose</span>
            </div>
          </div>

          <div className="careers-mindset-content careers-reveal">
            <span className="eyebrow careers-eyebrow">
              <Code2 size={15} />
              OUR WORKING MINDSET
            </span>

            <h2 className="section-title">
              Good work begins
              <span className="careers-highlight">
                {' '}with a curious mind.
              </span>
            </h2>

            <p className="muted">
              We appreciate people who enjoy learning, solving problems
              and turning ideas into practical outcomes. Whether you are
              exploring software development, design or business
              technology, your willingness to grow matters.
            </p>

            <div className="careers-mindset-points">
              <div>
                <CheckCircle2 size={19} />
                <span>
                  <strong>Stay curious</strong>
                  <small>Ask questions and explore new approaches.</small>
                </span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>
                  <strong>Build with care</strong>
                  <small>Focus on quality, usefulness and detail.</small>
                </span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>
                  <strong>Keep improving</strong>
                  <small>Learn from experience and move forward.</small>
                </span>
              </div>
            </div>

            <Link className="btn careers-mindset-btn" to="/about">
              Get to Know Us <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CAREER JOURNEY */}
      <section className="section careers-journey">
        <div className="container">
          <div className="careers-section-heading careers-reveal">
            <span className="eyebrow careers-eyebrow">
              <Compass size={15} />
              START YOUR CONVERSATION
            </span>

            <h2 className="section-title">
              Your journey could
              <span className="careers-highlight">
                {' '}start right here.
              </span>
            </h2>

            <p className="muted">
              Interested in being part of Braynex Infotech?
              Here is a simple way to introduce yourself.
            </p>
          </div>

          <div className="careers-journey-list">
            {journeyItems.map(({ number, title, description, Icon }) => (
              <article className="careers-journey-item careers-reveal" key={number}>
                <div className="careers-journey-number">{number}</div>

                <div className="careers-journey-icon">
                  <Icon size={22} />
                </div>

                <div className="careers-journey-content">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>

                <ArrowUpRight className="careers-journey-arrow" size={21} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section careers-final">
        <div className="container">
          <div className="careers-final-card careers-reveal">
            <div className="careers-final-grid" aria-hidden="true" />
            <div className="careers-final-glow" aria-hidden="true" />

            <div className="careers-final-icon">
              <BriefcaseBusiness size={28} />
            </div>

            <span className="eyebrow">
              <Sparkles size={15} />
              YOUR NEXT CHAPTER STARTS HERE
            </span>

            <h2>
              Bring your talent.
              <span>Let's create what's next.</span>
            </h2>

            <p>
              Have the curiosity to learn and the passion to build?
              Introduce yourself to our team and let's explore
              possibilities together.
            </p>

            <div className="careers-final-actions">
              <Link className="btn careers-final-btn" to="/contact">
                Talk to Our Team <ArrowUpRight size={18} />
              </Link>

              <Link className="careers-final-secondary" to="/about">
                Discover Braynex <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function BrainCircuitIcon() {
  return <Workflow size={21} />;
}
