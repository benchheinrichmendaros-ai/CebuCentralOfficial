import {
  CloudSun, MapPin, Clock, Phone, Wallet, CreditCard, WifiOff, Ship,
  CheckCircle2, ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { checklistItems } from '../data/beforeYouGo';
import styles from './BeforeYouGo.module.css';

const ICON_MAP = { CloudSun, MapPin, Clock, Phone, Wallet, CreditCard, WifiOff, Ship };

function CheckItem({ item, index }) {
  const Icon = ICON_MAP[item.icon] || CheckCircle2;

  return (
    <article className={styles.item}>
      <div className={styles.itemNum}>
        {String(index + 1).padStart(2, '0')}
      </div>
      <div className={styles.itemIcon}>
        <Icon size={20} strokeWidth={1.75} />
      </div>
      <div className={styles.itemBody}>
        <h2 className={styles.itemTitle}>{item.title}</h2>
        <p className={styles.itemDesc}>{item.description}</p>
        {item.actionLabel && item.actionHref && (
          <Link to={item.actionHref} className={styles.itemAction}>
            {item.actionLabel}
            <ArrowRight size={14} />
          </Link>
        )}
      </div>
    </article>
  );
}

export default function BeforeYouGo() {
  return (
    <>
      <PageHero
        icon={CheckCircle2}
        eyebrow="Checklist"
        title="Before You Go"
        subtitle="Eight things to check before heading anywhere in Cebu. Quick to scan, easy to follow."
        accent="green"
      />

      <div className={styles.page}>
        <div className="container">

          <div className={styles.grid}>
            {checklistItems.map((item, i) => (
              <CheckItem key={item.id} item={item} index={i} />
            ))}
          </div>

          {/* Done CTA */}
          <div className={styles.doneCta}>
            <div className={styles.doneCheck}>
              <CheckCircle2 size={28} />
            </div>
            <div className={styles.doneText}>
              <p className={styles.doneTitle}>All checked? You're good to go.</p>
              <p className={styles.doneSub}>Bookmark CebuCentral for your next Cebu trip.</p>
            </div>
            <Link to="/" className={styles.doneBtn}>
              Back to Home
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
