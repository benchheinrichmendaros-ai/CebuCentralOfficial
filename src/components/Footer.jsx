import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const PAGES = [
  { label: 'Home', to: '/' },
  { label: 'Transportation', to: '/transport' },
  { label: 'Weather', to: '/weather' },
  { label: 'Emergency', to: '/emergency' },
  { label: 'Before You Go', to: '/before-you-go' },
];

const EXTERNAL = [
  { label: 'PAGASA', href: 'https://bagong.pagasa.dost.gov.ph' },
  { label: 'NDRRMC', href: 'https://ndrrmc.gov.ph' },
  { label: 'Cebu City Gov', href: 'https://www.cebucity.gov.ph' },
  { label: 'MCIA Airport', href: 'https://mactan-cebuairport.com.ph' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <Link to="/" className={styles.brandLink}>
            <img
  src="/logo.png"
  alt="CebuCentral"
  style={{ width: '28px', height: '28px', objectFit: 'contain' }}
/>
            <span className={styles.brandName}>
              Cebu<span className={styles.accent}>Central</span>
            </span>
          </Link>
          <p className={styles.tagline}>
            Your local resource hub for Cebu — transport, weather,
            emergency contacts, and local guides in one place.
          </p>
          <p className={styles.disclaimer}>
            Always verify critical information with official sources.
            CebuCentral is a community resource, not an official government site.
          </p>
        </div>

        <div className={styles.linkCol}>
          <p className={styles.colLabel}>Pages</p>
          <ul className={styles.linkList}>
            {PAGES.map((p) => (
              <li key={p.to}>
                <Link to={p.to} className={styles.footerLink}>{p.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.linkCol}>
          <p className={styles.colLabel}>Official Sources</p>
          <ul className={styles.linkList}>
            {EXTERNAL.map((e) => (
              <li key={e.href}>
                <a href={e.href} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                  {e.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copy}>© {new Date().getFullYear()} CebuCentral · Version 2.0</p>
            <p className={styles.copy}>Built for Cebu, Philippines 🇵🇭</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
