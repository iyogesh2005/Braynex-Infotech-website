
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Lightbulb,
  Target,
  Eye,
  Sparkles,
  Award,
  Users,
  ShieldCheck,
  RefreshCw,
  HeartHandshake,
  Search,
  Compass,
  Code2,
  Rocket,
  Zap,
  Layers3,
  Workflow,
  BrainCircuit,
  Palette,
  TrendingUp,
  CheckCircle2,
  MoveUpRight,
} from 'lucide-react';
import { PageHero } from '../components/Shell';
import './about.css';

const values = [
  {
    number: '01',
    label: 'INNOVATION',
    title: 'Think Beyond Boundaries',
    description:
      'We explore new ideas, embrace modern technologies and approach challenges with creative thinking.',
    footer: 'Explore. Experiment. Evolve.',
    Icon: Lightbulb,
  },
  {
    number: '02',
    label: 'EXCELLENCE',
    title: 'Quality in Every Detail',
    description:
      'We focus on thoughtful execution, clean engineering and reliable experiences that users can trust.',
    footer: 'Precision. Quality. Care.',
    Icon: Award,
  },
  {
    number: '03',
    label: 'COLLABORATION',
    title: 'Grow Together',
    description:
      'We value open communication, shared ideas and meaningful partnerships that create better outcomes.',
    footer: 'Connect. Collaborate. Succeed.',
    Icon: Users,
  },
  {
    number: '04',
    label: 'OWNERSHIP',
    title: 'Take Responsibility',
    description:
      'We approach every challenge with accountability and a commitment to delivering meaningful results.',
    footer: 'Commit. Deliver. Improve.',
    Icon: ShieldCheck,
  },
  {
    number: '05',
    label: 'ADAPTABILITY',
    title: "Ready for What's Next",
    description:
      'We continuously learn, adapt to change and build solutions that evolve with business needs.',
    footer: 'Learn. Adapt. Advance.',
    Icon: RefreshCw,
  },
  {
    number: '06',
    label: 'TRUST',
    title: 'Build Lasting Relationships',
    description:
      'We believe transparency, respect and consistent communication are essential to successful partnerships.',
    footer: 'Honesty. Respect. Trust.',
    Icon: HeartHandshake,
  },
];

const process = [
  {
    number: '01',
    label: 'DISCOVER',
    title: 'Understand the challenge',
    description:
      'We listen, explore your requirements and understand the business goals behind your idea.',
    Icon: Search,
  },
  {
    number: '02',
    label: 'STRATEGIZE',
    title: 'Plan with clarity',
    description:
      'We identify the right approach, define priorities and create a clear direction for development.',
    Icon: Compass,
  },
  {
    number: '03',
    label: 'ENGINEER',
    title: 'Build with precision',
    description:
      'We transform ideas into practical digital solutions through thoughtful design and modern engineering.',
    Icon: Code2,
  },
  {
    number: '04',
    label: 'EVOLVE',
    title: 'Improve for tomorrow',
    description:
      'We focus on continuous improvement, adaptability and long-term value as business needs evolve.',
    Icon: Rocket,
  },
];

export default function About() {
  useEffect(() => {
    const elements = document.querySelectorAll('.about-reveal');

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => {
        element.classList.add('about-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('about-visible');
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
    <div className="about-page">
      <div className="about-ambient about-ambient-one" aria-hidden="true" />
      <div className="about-ambient about-ambient-two" aria-hidden="true" />
      <div className="about-light-beam" aria-hidden="true" />

      <div className="about-particles" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      {/* PAGE HERO */}
      <PageHero
        eyebrow="ABOUT BRAYNEX / WHO WE ARE"
        title="Technology with purpose. Innovation with impact."
        description="At Braynex Infotech, we bring ideas, technology and engineering together to create meaningful digital experiences. We help businesses simplify complexity, embrace innovation and move confidently towards their goals."
      />

      {/* INTRODUCTION */}
      <section className="section about-intro">
        <div className="container split about-intro-grid">
          <div className="about-intro-content about-reveal">
            <span className="eyebrow about-eyebrow">
              <Sparkles size={15} />
              OUR STORY
            </span>

            <h2 className="section-title">
              Building tomorrow,
              <span className="about-highlight">
                {' '}one solution at a time.
              </span>
            </h2>

            <p className="muted">
              Every great digital transformation starts with an idea.
              At Braynex Infotech, we believe the right technology can
              turn that idea into something valuable, practical and
              impactful.
            </p>

            <p className="muted">
              Our approach combines creative problem-solving,
              thoughtful design and modern engineering. We focus on
              understanding business challenges before creating
              technology solutions that deliver meaningful outcomes.
            </p>

            <p className="muted">
              From developing digital experiences to building
              intelligent business systems, we aim to make technology
              more accessible, efficient and effective.
            </p>

            <div className="about-tags">
              <span className="pill"><Lightbulb size={14} /> Innovation First</span>
              <span className="pill"><Award size={14} /> Quality Driven</span>
              <span className="pill"><Users size={14} /> Customer Focused</span>
              <span className="pill"><TrendingUp size={14} /> Continuous Growth</span>
            </div>

            <Link className="btn about-primary-btn" to="/contact">
              Let's Connect <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="about-visual-wrap about-reveal">
            <div className="about-visual-decoration" />

            <div className="visual page-visual about-visual">
              <div className="about-visual-grid" aria-hidden="true" />
              <img
                src="/assets/team.svg"
                alt="Braynex Infotech team collaboration and technology"
                loading="lazy"
              />
              <span className="about-visual-caption">
                <span className="about-caption-dot" />
                IDEAS INTO IMPACT
              </span>
            </div>

            <div className="about-floating-card">
              <span className="about-floating-icon">
                <Zap size={25} />
              </span>
              <div>
                <strong>Ideas into Impact</strong>
                <small>Technology that moves businesses forward.</small>
              </div>
            </div>

            <span className="about-orbit orbit-one" />
            <span className="about-orbit orbit-two" />
            <span className="about-orbit orbit-three" />
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="section about-purpose">
        <div className="about-section-glow" aria-hidden="true" />

        <div className="container">
          <div className="about-section-heading about-reveal">
            <span className="eyebrow about-eyebrow">
              <Target size={15} />
              OUR PURPOSE
            </span>

            <h2 className="section-title">
              Driven by purpose.
              <span className="about-highlight">
                {' '}Defined by possibilities.
              </span>
            </h2>

            <p className="muted">
              Our mission and vision shape how we think, build and
              create value through technology.
            </p>
          </div>

          <div className="grid2 about-purpose-grid">
            <article className="card about-purpose-card about-reveal">
              <span className="about-card-number">01</span>
              <div className="about-purpose-icon">
                <Target size={27} />
              </div>

              <span className="eyebrow">OUR MISSION</span>
              <h3>Make technology meaningful.</h3>

              <p>
                To create reliable, user-focused and innovative
                digital solutions that help businesses improve
                operations, solve challenges and achieve sustainable
                growth.
              </p>

              <div className="about-card-bottom">
                <span><CheckCircle2 size={15} /> Purpose-driven solutions</span>
                <span className="about-card-line" />
              </div>
            </article>

            <article className="card about-purpose-card about-reveal">
              <span className="about-card-number">02</span>
              <div className="about-purpose-icon">
                <Eye size={27} />
              </div>

              <span className="eyebrow">OUR VISION</span>
              <h3>Shape a smarter digital future.</h3>

              <p>
                To become a trusted technology partner known for
                creative thinking, engineering excellence and
                digital experiences that make a lasting difference.
              </p>

              <div className="about-card-bottom">
                <span><CheckCircle2 size={15} /> Future-ready thinking</span>
                <span className="about-card-line" />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section about-values">
        <div className="container">
          <div className="about-section-heading about-reveal">
            <span className="eyebrow about-eyebrow">
              <Sparkles size={15} />
              WHAT DEFINES US
            </span>

            <h2 className="section-title">
              Strong values.
              <span className="about-highlight">
                {' '}Better possibilities.
              </span>
            </h2>

            <p className="muted">
              The principles behind every decision, every collaboration
              and every solution we create.
            </p>
          </div>

          <div className="grid3 about-values-grid">
            {values.map(({ number, label, title, description, footer, Icon }) => (
              <article
                className="card service-card about-value-card about-reveal"
                key={number}
              >
                <div className="about-value-top">
                  <span className="num">{number} / {label}</span>
                  <span className="about-value-symbol">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                </div>

                <h3>{title}</h3>
                <p>{description}</p>

                <span className="about-value-footer">
                  <MoveUpRight size={14} />
                  {footer}
                </span>
                <span className="about-value-shine" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="section about-approach">
        <div className="about-section-glow approach-glow" aria-hidden="true" />

        <div className="container">
          <div className="about-section-heading about-reveal">
            <span className="eyebrow about-eyebrow">
              <Workflow size={15} />
              HOW WE WORK
            </span>

            <h2 className="section-title">
              From first conversation
              <span className="about-highlight">
                {' '}to lasting impact.
              </span>
            </h2>

            <p className="muted">
              A thoughtful process that connects business understanding
              with technology execution.
            </p>
          </div>

          <div className="about-process">
            {process.map(({ number, label, title, description, Icon }) => (
              <article className="about-process-item about-reveal" key={number}>
                <div className="about-process-number">
                  <Icon size={23} />
                </div>

                <div className="about-process-content">
                  <span className="eyebrow">{label}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>

                <span className="about-process-arrow">
                  <ArrowUpRight size={22} />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY APPROACH */}
      <section className="section about-tech">
        <div className="container about-tech-grid">
          <div className="about-tech-content about-reveal">
            <span className="eyebrow about-eyebrow">
              <BrainCircuit size={15} />
              OUR TECHNOLOGY MINDSET
            </span>

            <h2 className="section-title">
              Technology is powerful.
              <span className="about-highlight">
                {' '}Purpose makes it valuable.
              </span>
            </h2>

            <p className="muted">
              We believe technology should solve real problems,
              simplify everyday work and create better experiences.
              Every solution begins with understanding what matters
              and choosing the right tools for the challenge.
            </p>

            <p className="muted">
              Our focus is on building scalable digital foundations,
              intuitive user experiences and practical systems
              that support business transformation.
            </p>

            <div className="about-tech-points">
              <span><CheckCircle2 size={17} /> Scalable digital foundations</span>
              <span><CheckCircle2 size={17} /> User-focused experiences</span>
              <span><CheckCircle2 size={17} /> Practical business solutions</span>
            </div>

            <Link className="btn about-tech-btn" to="/services">
              Explore Our Services <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="about-tech-visual about-reveal">
            <div className="about-tech-glow" />
            <div className="about-tech-orbit orbit-a" />
            <div className="about-tech-orbit orbit-b" />
            <div className="about-tech-orbit orbit-c" />

            <div className="about-tech-center">
              <span>BX</span>
              <small>INNOVATION</small>
            </div>

            <div className="about-tech-node node-a">
              <Code2 size={17} /> CODE
            </div>
            <div className="about-tech-node node-b">
              <Palette size={17} /> DESIGN
            </div>
            <div className="about-tech-node node-c">
              <Lightbulb size={17} /> IDEAS
            </div>
            <div className="about-tech-node node-d">
              <Rocket size={17} /> FUTURE
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section about-final">
        <div className="container">
          <div className="about-final-card about-reveal">
            <div className="about-final-decoration" />
            <div className="about-final-decoration-two" />
            <div className="about-final-spark">
              <Sparkles size={30} />
            </div>

            <span className="eyebrow">
              <Zap size={15} /> LET'S CREATE WHAT'S NEXT
            </span>

            <h2>
              Your vision deserves
              <span>the right technology partner.</span>
            </h2>

            <p>
              Have an idea, a challenge or a project in mind?
              Let's start a conversation and explore what's possible
              together.
            </p>

            <div className="about-final-actions">
              <Link className="btn about-final-btn" to="/contact">
                Start a Conversation <ArrowUpRight size={18} />
              </Link>

              <Link className="about-final-secondary" to="/services">
                Discover Our Services <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
