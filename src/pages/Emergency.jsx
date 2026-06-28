import {
  Shield, Flame, HeartPulse, Building2, CloudLightning, Anchor,
  Phone, AlertCircle, ArrowRight,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { emergencyCategories } from '../data/emergency';
import styles from './Emergency.module.css';

const ICON_MAP = { Shield, Flame, HeartPulse, Building2, CloudLightning, Anchor };

const ICON_STYLES = {
  '--blue':   { bg: '#EFF6FF', color: '#1D4ED8' },
  '--red':    { bg: '#FEF2F2', color: '#DC2626' },
  '--green':  { bg: '#ECFDF5', color: '#059669' },
  '--purple': { bg: '#F5F3FF', color: '#7C3AED' },
  '--gold':   { bg: '#FEF3C7', color: '#B45309' },
  '--orange': { bg: '#FFF7ED', color: '#EA580C' },
};

function EmergencyCard({ cat }) {
  const Icon = ICON_MAP[cat.icon] || Phone;
  const s = ICON_STYLES[cat.colorVar] || ICON_STYLES['--blue'];

  return (
    <article className={styles.card}>
      <div className={styles.cardHead}>
        <div className={styles.iconWrap} style={{ background: s.bg, color: s.color }}>
          <Icon size={20} strokeWidth={1.75} />
        </div>
        <h2 className={styles.cardTitle}>{cat.category}</h2>
      </div>

      <ul className={styles.contacts}>
        {cat.contacts.map((c) => (
          <li key={c.name} className={styles.contact}>
            <span className={styles.contactName}>{c.name}</span>
            {c.isTapToCall ? (
              <a
                href={`tel:${c.number.replace(/[\s()+-]/g, '')}`}
                className={styles.number}
                aria-label={`Call ${c.name}: ${c.number}`}
              >
                <Phone size={12} className={styles.callIcon} />
                {c.number}
              </a>
            ) : (
              <span className={styles.numberStatic}>{c.number}</span>
            )}
          </li>
        ))}
      </ul>
    </article>
  );
}

const QUICK_DIALS = [
  { number: '911', label: 'All emergencies', color: 'red' },
  { number: '117', label: 'PNP Hotline', color: 'blue' },
  { number: '02-527-0000', label: 'Red Cross', color: 'green' },
];

export default function Emergency() {
  return (
    <>
      <PageHero
        icon={Phone}
        eyebrow="Emergency"
        title="Emergency Contacts"
        subtitle="Cebu emergency numbers — organized, readable, and tap-to-call on mobile."
        accent="red"
      />

      <div className={styles.page}>
        <div className="container">

          {/* 911 banner */}
          <div className={styles.banner} role="alert">
            <AlertCircle size={22} className={styles.bannerIcon} />
            <div className={styles.bannerText}>
              <strong>Life-threatening emergency?</strong> Call{' '}
              <a href="tel:911" className={styles.bannerNum}>911</a> immediately.
              All numbers below are tap-to-call on mobile devices.
            </div>
          </div>

          {/* Quick dial row */}
          <div className={styles.quickDials}>
            {QUICK_DIALS.map((q) => (
              <a
                key={q.number}
                href={`tel:${q.number.replace(/[-\s]/g, '')}`}
                className={`${styles.quickDial} ${styles[`dial_${q.color}`]}`}
              >
                <Phone size={16} />
                <span className={styles.dialNumber}>{q.number}</span>
                <span className={styles.dialLabel}>{q.label}</span>
              </a>
            ))}
          </div>

          {/* Category grid */}
          <div className={styles.grid}>
            {emergencyCategories.map((cat) => (
              <EmergencyCard key={cat.id} cat={cat} />
            ))}
          </div>

          {/* Bottom note */}
          <div className={styles.bottomNote}>
            <div className={styles.noteIcon}><ArrowRight size={16} /></div>
            <p>
              Save these numbers on your phone before you need them. Signal can
              be unreliable in remote areas — know your nearest hospital in advance.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
