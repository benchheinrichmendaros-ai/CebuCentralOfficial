import { Plane, Ship, Car, Bus, Truck, Bike, ExternalLink, Info, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import { transportOptions } from '../data/transport';
import styles from './Transport.module.css';

const ICON_MAP = { Plane, Ship, Car, Bus, Truck, Bike };

const TAG_COLORS = {
  'Air Travel':  { bg: 'var(--blue-light)',    color: 'var(--blue)' },
  'Sea Travel':  { bg: 'var(--blue-light)',    color: 'var(--blue)' },
  'On-Demand':   { bg: 'var(--green-light)',   color: 'var(--green)' },
  'Provincial':  { bg: 'var(--gold-tint)',     color: 'var(--gold-dark)' },
  'City Routes': { bg: 'var(--purple-light)',  color: 'var(--purple)' },
  'Motorbike':   { bg: 'var(--orange-light)',  color: 'var(--orange)' },
};

function TransportCard({ option }) {
  const Icon = ICON_MAP[option.icon] || Plane;
  const tag = TAG_COLORS[option.tag] || { bg: 'var(--bg)', color: 'var(--text-muted)' };

  return (
    <article className={styles.card}>
      <div className={styles.cardHead}>
        <div className={styles.iconWrap}>
          <Icon size={22} strokeWidth={1.75} />
        </div>
        <div>
          <span className={styles.tag} style={{ background: tag.bg, color: tag.color }}>
            {option.tag}
          </span>
          <h2 className={styles.cardTitle}>{option.title}</h2>
        </div>
      </div>

      <p className={styles.cardDesc}>{option.description}</p>

      {option.tips.length > 0 && (
        <div className={styles.tipsBlock}>
          <p className={styles.tipsLabel}>Tips</p>
          <ul className={styles.tipsList}>
            {option.tips.map((tip, i) => (
              <li key={i} className={styles.tip}>
                <span className={styles.tipBullet} aria-hidden="true" />
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}

      {option.providers.length > 0 && (
        <div className={styles.providers}>
          <p className={styles.providersLabel}>Book online</p>
          <div className={styles.providerLinks}>
            {option.providers.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.providerLink}
              >
                {p.name}
                <ExternalLink size={12} />
              </a>
            ))}
          </div>
        </div>
      )}

      {option.providers.length === 0 && (
        <p className={styles.noBook}>No online booking — pay at terminal or roadside.</p>
      )}
    </article>
  );
}

export default function Transport() {
  return (
    <>
      <PageHero
        icon={Plane}
        eyebrow="Getting Around"
        title="Transportation in Cebu"
        subtitle="Every way to move around — from the airport to the last barangay."
        accent="blue"
      />

      <div className={styles.page}>
        <div className="container">

          {/* Notice */}
          <div className={styles.notice}>
            <Info size={15} />
            <p>
              This is a travel guide, not a booking platform. All provider links open official
              third-party websites. Schedules and fares change — always confirm before you travel.
            </p>
          </div>

          <div className={styles.grid}>
            {transportOptions.map((option) => (
              <TransportCard key={option.id} option={option} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className={styles.bottomCta}>
            <div>
              <p className={styles.ctaTitle}>Planning your route?</p>
              <p className={styles.ctaSub}>Check the Before You Go checklist before you head out.</p>
            </div>
            <a href="/before-you-go" className={styles.ctaBtn}>
              View checklist <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
