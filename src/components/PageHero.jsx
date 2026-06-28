import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import styles from './PageHero.module.css';

export default function PageHero({ icon: Icon, eyebrow, title, subtitle, accent = 'red' }) {
  return (
    <section className={`${styles.hero} ${styles[accent]}`}>
      <div className={styles.bg} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link to="/" className={styles.breadcrumbHome}>Home</Link>
          <ChevronRight size={14} className={styles.breadcrumbSep} />
          <span className={styles.breadcrumbCurrent}>{title}</span>
        </nav>

        <div className={styles.content}>
          {Icon && (
            <div className={styles.iconWrap}>
              <Icon size={28} strokeWidth={1.75} />
            </div>
          )}
          <div>
            {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
            <h1 className={styles.title}>{title}</h1>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
