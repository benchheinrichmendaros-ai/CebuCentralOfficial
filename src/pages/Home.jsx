import { Link } from 'react-router-dom';
import { Plane, Cloud, Phone, CheckSquare, ArrowRight, Map, AlertTriangle, ExternalLink } from 'lucide-react';
import Hero from '../components/Hero';
import NewsSection from '../components/NewsSection';
import styles from './Home.module.css';

const NAV_TILES = [
  { to: '/transport', icon: Plane, accent: 'blue', label: 'Transportation', desc: 'Flights, ferries, buses, taxis, jeepneys — every way to get around Cebu.', cta: 'View transport guide' },
  { to: '/weather', icon: Cloud, accent: 'sky', label: 'Weather', desc: 'Current conditions, 7-day forecast, and seasonal tips for Cebu.', cta: 'Check weather' },
  { to: '/emergency', icon: Phone, accent: 'red', label: 'Emergency', desc: 'Police, fire, hospitals, NDRRMC — contacts when it matters most.', cta: 'View contacts' },
  { to: '/before-you-go', icon: CheckSquare, accent: 'gold', label: 'Before You Go', desc: 'A quick checklist to prepare before heading anywhere in Cebu.', cta: 'See checklist' },
];

const QUICK_LINKS = [
  { label: 'PAGASA Forecasts', href: 'https://bagong.pagasa.dost.gov.ph', icon: AlertTriangle },
  { label: 'Cebu on Google Maps', href: 'https://maps.google.com/?q=Cebu+City+Philippines', icon: Map },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className={styles.navSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>Explore</p>
            <h2 className={styles.sectionTitle}>What do you need today?</h2>
          </div>
          <div className={styles.navGrid}>
            {NAV_TILES.map((tile) => {
              const Icon = tile.icon;
              return (
                <Link key={tile.to} to={tile.to} className={`${styles.tile} ${styles[`tile_${tile.accent}`]}`}>
                  <div className={`${styles.tileIcon} ${styles[`icon_${tile.accent}`]}`}>
                    <Icon size={26} strokeWidth={1.75} />
                  </div>
                  <div className={styles.tileBody}>
                    <h3 className={styles.tileLabel}>{tile.label}</h3>
                    <p className={styles.tileDesc}>{tile.desc}</p>
                  </div>
                  <div className={styles.tileCta}>
                    <span>{tile.cta}</span>
                    <ArrowRight size={16} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <NewsSection />

      <section className={styles.quickSection}>
        <div className="container">
          <div className={styles.quickInner}>
            <p className={styles.quickLabel}>Official external resources</p>
            <div className={styles.quickLinks}>
              {QUICK_LINKS.map((q) => {
                const Icon = q.icon;
                return (
                  <a key={q.href} href={q.href} target="_blank" rel="noopener noreferrer" className={styles.quickLink}>
                    <Icon size={15} />
                    {q.label}
                    <ExternalLink size={13} className={styles.extIcon} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
    }
