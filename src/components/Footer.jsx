import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import styles from './Footer.module.css';

const EXPLORE_LINKS = [
  { to: '/transport', label: 'Transportation' },
  { to: '/weather', label: 'Weather' },
  { to: '/emergency', label: 'Emergency' },
  { to: '/before-you-go', label: 'Before You Go' },
];

const COMPANY_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/privacy-policy', label: 'Privacy Policy' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <img src="/logoframe.png" alt="CebuCentral" className={styles.logo} />
            <p className={styles.tagline}>
              Your Cebu, all in one place — transport, weather, emergency contacts, and local news.
            </p>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Explore</h3>
            {EXPLORE_LINKS.map((l) => (
              <Link key={l.to} to={l.to} className={styles.link}>{l.label}</Link>
            ))}
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Company</h3>
            {COMPANY_LINKS.map((l) => (
              <Link key={l.to} to={l.to} className={styles.link}>{l.label}</Link>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>© {year} CebuCentral. Not affiliated with any government agency.</p>
          <a href="mailto:hello@cebucentral.example" className={styles.bottomEmail}>
            <Mail size={13} /> hello@cebucentral.example
          </a>
        </div>
      </div>
    </footer>
  );
    }
