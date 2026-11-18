
import React, { useEffect, useState } from 'react';
import {
  NavLink,
  Link,
  useLocation,
} from 'react-router-dom';

import {
  Menu,
  X,
  ArrowUpRight,
  Mail,
  Phone,
  MessageCircle,
  Network,
  MapPin,
  Send,
  Sparkles,
} from 'lucide-react';

import './Shell.css';

const COMPANY_EMAIL = 'iyogesh@gmail.com';
const COMPANY_PHONE = '+918861183388';
const WHATSAPP_NUMBER = '918861183388';

const navigation = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Industries', path: '/industries' },
  { label: 'Careers', path: '/careers' },
  { label: 'Insights', path: '/insights' },
  { label: 'Contact', path: '/contact' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-is-open', menuOpen);

    return () => {
      document.body.classList.remove('menu-is-open');
    };
  }, [menuOpen]);

  return (
    <header className={`shell-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="shell-header-glow" />

      <div className="container shell-nav">
        <Link
          to="/"
          className="shell-brand"
          aria-label="Braynex Infotech Home"
        >
          <span className="shell-brand-logo">
            <img
              src="/assets/brainx-logo.png"
              alt="Braynex Infotech"
            />
            <span className="shell-logo-ring" />
          </span>

          <span className="shell-brand-text">
            <strong>BRAYNEX</strong>
            <small>INFOTECH</small>
          </span>
        </Link>

        <nav
          className={`shell-navlinks ${menuOpen ? 'open' : ''}`}
          id="main-navigation"
          aria-label="Main navigation"
        >
          <span className="shell-mobile-nav-label">
            EXPLORE BRAYNEX
          </span>

          {navigation.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              style={{
                '--nav-index': index,
              }}
              className={({ isActive }) =>
                `shell-nav-link ${isActive ? 'active' : ''}`
              }
              onClick={() => setMenuOpen(false)}
            >
              <span>{item.label}</span>
              <span className="shell-nav-arrow">
                <ArrowUpRight size={13} />
              </span>
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="shell-mobile-contact"
            onClick={() => setMenuOpen(false)}
          >
            Let's Talk <ArrowUpRight size={16} />
          </Link>
        </nav>

        <div className="shell-header-actions">
          <Link to="/contact" className="shell-header-cta">
            <span>Let's Talk</span>
            <ArrowUpRight size={16} />
          </Link>

          <button
            type="button"
            className={`shell-menu-btn ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
          >
            <span className="shell-menu-icon">
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </span>
          </button>
        </div>
      </div>

      <div
        className={`shell-mobile-backdrop ${menuOpen ? 'visible' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
    </header>
  );
}

export function SocialRail() {
  const socialLinks = [
    {
      label: 'LinkedIn',
      icon: <Network size={17} />,
      href: 'https://www.linkedin.com/',
      external: true,
    },
    {
      label: 'Email Us',
      icon: <Mail size={17} />,
      href: `mailto:${COMPANY_EMAIL}`,
    },
    {
      label: 'WhatsApp',
      icon: <MessageCircle size={17} />,
      href: `https://wa.me/${WHATSAPP_NUMBER}`,
      external: true,
    },
    {
      label: 'Call Us',
      icon: <Phone size={17} />,
      href: `tel:${COMPANY_PHONE}`,
    },
  ];

  return (
    <aside className="shell-social-rail" aria-label="Quick contact links">
      <span className="shell-social-caption">CONNECT</span>

      {socialLinks.map((item, index) => (
        <a
          key={item.label}
          href={item.href}
          target={item.external ? '_blank' : undefined}
          rel={item.external ? 'noreferrer' : undefined}
          aria-label={item.label}
          data-tooltip={item.label}
          style={{ '--social-index': index }}
        >
          {item.icon}
        </a>
      ))}

      <span className="shell-social-line" />
    </aside>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  const footerLinks = {
    Explore: [
      { label: 'Home', path: '/' },
      { label: 'About Us', path: '/about' },
      { label: 'Our Services', path: '/services' },
      { label: 'Solutions', path: '/solutions' },
      { label: 'Portfolio', path: '/portfolio' },
    ],
    Company: [
      { label: 'Industries', path: '/industries' },
      { label: 'Careers', path: '/careers' },
      { label: 'Insights', path: '/insights' },
      { label: 'Contact', path: '/contact' },
    ],
  };

  return (
    <footer className="shell-footer">
      <div className="shell-footer-decoration shell-footer-decoration-one" />
      <div className="shell-footer-decoration shell-footer-decoration-two" />
      <div className="shell-footer-grid-pattern" />

      <div className="container shell-footer-container">
        <section className="shell-footer-top">
          <div className="shell-footer-intro">
            <span className="shell-footer-eyebrow">
              <Sparkles size={14} />
              BUILD WHAT'S NEXT
            </span>

            <h2>
              Have an idea?
              <br />
              <span>Let's make it real.</span>
            </h2>

            <p>
              Thoughtful technology. Meaningful experiences.
              Digital solutions designed to move your business forward.
            </p>

            <Link to="/contact" className="shell-footer-main-cta">
              Start a Conversation
              <span>
                <ArrowUpRight size={19} />
              </span>
            </Link>
          </div>

          <div className="shell-footer-brand-panel">
            <div className="shell-footer-logo-wrap">
              <img
                src="/assets/brainx-logo.png"
                alt="Braynex Infotech logo"
              />
              <span className="shell-footer-logo-orbit" />
            </div>

            <h3>BRAYNEX <span>INFOTECH</span></h3>

            <p>
              Engineering possibilities.
              <br />
              Creating digital progress.
            </p>

            <div className="shell-footer-brand-line">
              <span />
              <span />
              <span />
            </div>
          </div>
        </section>

        <div className="shell-footer-divider">
          <span />
        </div>

        <section className="shell-footer-links">
          <div className="shell-footer-about">
            <h3>Let's create something meaningful.</h3>
            <p>
              We bring strategy, design and engineering together
              to build dependable digital experiences.
            </p>

            <div className="shell-footer-socials">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Network size={17} />
              </a>

              <a
                href={`mailto:${COMPANY_EMAIL}`}
                aria-label="Email"
              >
                <Mail size={17} />
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <MessageCircle size={17} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div className="shell-footer-column" key={heading}>
              <h4>{heading}</h4>

              <ul>
                {links.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path}>
                      <span>{item.label}</span>
                      <ArrowUpRight size={13} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="shell-footer-contact">
            <h4>Get in touch</h4>

            <a href={`mailto:${COMPANY_EMAIL}`}>
              <span className="shell-contact-icon">
                <Mail size={16} />
              </span>
              <span>{COMPANY_EMAIL}</span>
            </a>

            <a href={`tel:${COMPANY_PHONE}`}>
              <span className="shell-contact-icon">
                <Phone size={16} />
              </span>
              <span>{COMPANY_PHONE}</span>
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="shell-contact-icon">
                <MessageCircle size={16} />
              </span>
              <span>Chat on WhatsApp</span>
            </a>

            <Link to="/contact" className="shell-footer-contact-link">
              Contact our team <ArrowUpRight size={15} />
            </Link>
          </div>
        </section>

        <div className="shell-footer-bottom">
          <p>
            © {year} <strong>Braynex Infotech.</strong> All rights reserved.
          </p>

          <p className="shell-footer-made">
            Built with purpose <span>✦</span>
          </p>

          <Link to="/" className="shell-back-top">
            Back to top <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, description }) {
  return (
    <section className="page-hero">
      <div className="container">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
}

export function Layout({ children }) {
  return (
    <>
      <Header />
      <SocialRail />
      <main>{children}</main>
      <Footer />
    </>
  );
}
