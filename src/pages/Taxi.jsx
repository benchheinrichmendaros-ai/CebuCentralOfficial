import { Car, ExternalLink, Smartphone, AlertTriangle } from 'lucide-react';
import PageHero from '../../components/PageHero';
import { rideProviders, yellowTaxiTips } from '../../data/taxi';
import styles from './TransportSub.module.css';

export default function Taxi() {
  return (
    <>
      <PageHero
        icon={Car}
        eyebrow="Transportation › Taxis"
        title="Taxis & Ride-Hailing"
        subtitle="App-based and traditional taxis in Metro Cebu."
        accent="blue"
        parent={{ label: 'Transportation', to: '/transport' }}
      />

      <div className={styles.page}>
        <div className="container">

          <div className={styles.providerGrid}>
            {rideProviders.map((p) => (
              <div key={p.id} className={styles.providerCard}>
                <div className={styles.providerHeader}>
                  <span className={styles.providerDot} style={{ background: p.id === 'grab' ? '#00B14F' : '#E31E24' }} />
                  <div>
                    <p className={styles.providerName}>{p.name}</p>
                    <p className={styles.providerType}>{p.type}</p>
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

                <p className={styles.routeNote} style={{ marginTop: '0.25rem' }}>
                  💡 {p.tip}
                </p>

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

          {/* Yellow taxi tips */}
          <div className={styles.infoBox}>
            <p className={styles.infoBoxTitle}>🚕 Traditional Yellow Taxis</p>
            <div className={styles.tipsList}>
              {yellowTaxiTips.map((tip, i) => (
                <div key={i} className={styles.tip}>
                  <span className={styles.tipDot} aria-hidden="true" />
                  {tip}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.infoBox} style={{ background: 'var(--gold-tint)', borderColor: 'rgba(217,119,6,0.25)' }}>
            <p className={styles.infoBoxTitle} style={{ color: 'var(--gold-dark)' }}>
              <AlertTriangle size={15} style={{ display: 'inline', marginRight: '0.4rem' }} />
              Safety tip for tourists
            </p>
            <div className={styles.tipsList}>
              {[
                'Use Grab whenever possible — the app logs the trip, driver, and plate number',
                'Never get into an unmarked vehicle offering a ride at the airport or port',
                'If using a yellow taxi, take a photo of the plate number before entering',
              ].map((t, i) => (
                <div key={i} className={styles.tip}>
                  <span className={styles.tipDot} style={{ background: 'var(--gold)' }} aria-hidden="true" />
                  {t}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
