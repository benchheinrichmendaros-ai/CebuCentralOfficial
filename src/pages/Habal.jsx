import { Bike, ExternalLink, Smartphone } from 'lucide-react';
import PageHero from '../../components/PageHero';
import { habalApps, traditionalHabalTips } from '../../data/habal';
import styles from './TransportSub.module.css';

export default function Habal() {
  return (
    <>
      <PageHero
        icon={Bike}
        eyebrow="Transportation › Habal-Habal"
        title="Habal-Habal & Moto-Taxis"
        subtitle="App-based and roadside motorcycle taxis across Cebu."
        accent="blue"
        parent={{ label: 'Transportation', to: '/transport' }}
      />

      <div className={styles.page}>
        <div className="container">

          <div className={styles.providerGrid}>
            {habalApps.map((p) => (
              <div key={p.id} className={styles.providerCard}>
                <div className={styles.providerHeader}>
                  <span className={styles.providerDot} style={{ background: p.color }} />
                  <div>
                    <p className={styles.providerName}>{p.name}</p>
                    <p className={styles.providerType}>{p.tagline}</p>
                  </div>
                </div>

                <p className={styles.providerCoverage}>📍 {p.coverage}</p>
                <p className={styles.providerDesc}>{p.description}</p>

                <div className={styles.prosList}>
                  {p.pros.map((pro) => (
                    <div key={pro} className={styles.prosItem}>
                      <span className={styles.prosCheck}>✓</span>
                      {pro}
                    </div>
                  ))}
                </div>

                <div className={styles.providerAppLinks}>
                  <a href={p.websiteUrl} target="_blank" rel="noopener noreferrer" className={`${styles.appLinkBtn} ${styles.appLinkBtnPrimary}`}>
                    Open {p.name} <ExternalLink size={13} />
                  </a>
                  <a href={p.appStore} target="_blank" rel="noopener noreferrer" className={styles.appLinkBtn}>
                    <Smartphone size={13} /> App Store
                  </a>
                  <a href={p.playStore} target="_blank" rel="noopener noreferrer" className={styles.appLinkBtn}>
                    <Smartphone size={13} /> Google Play
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.infoBox}>
            <p className={styles.infoBoxTitle}>🏍 Roadside / Traditional Habal-Habal</p>
            <div className={styles.tipsList}>
              {traditionalHabalTips.map((tip, i) => (
                <div key={i} className={styles.tip}>
                  <span className={styles.tipDot} aria-hidden="true" />
                  {tip}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
