import {
  ShieldAlert, Siren, HeartHandshake, AlertTriangle, Gavel, CloudRain, Banknote,
  ExternalLink, Newspaper,
} from 'lucide-react';
import { newsItems } from '../data/news';
import styles from './NewsSection.module.css';

const ICONS = { ShieldAlert, Siren, HeartHandshake, AlertTriangle, Gavel, CloudRain, Banknote };

function NewsCard({ item }) {
  const Icon = ICONS[item.icon] || Newspaper;
  const isCebu = item.category === 'Cebu';

  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer" className={styles.card}>
      <div className={`${styles.tile} ${isCebu ? styles.tileCebu : styles.tilePh}`}>
        <Icon size={28} strokeWidth={1.75} />
      </div>
      <div className={styles.body}>
        <span className={`${styles.tag} ${isCebu ? styles.tagCebu : styles.tagPh}`}>
          {item.category}
        </span>
        <h3 className={styles.headline}>{item.headline}</h3>
        <div className={styles.meta}>
          <span>{item.source}</span>
          <span className={styles.dot}>·</span>
          <span>{item.date}</span>
          <ExternalLink size={12} className={styles.extIcon} />
        </div>
      </div>
    </a>
  );
}

export default function NewsSection() {
  return (
    <section className={styles.newsSection}>
      <div className="container">
        <div className={styles.sectionHead}>
          <p className={styles.eyebrow}>Stay Informed</p>
          <h2 className={styles.sectionTitle}>Cebu & Philippines News</h2>
        </div>
        <div className={styles.scrollArea}>
          {newsItems.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
