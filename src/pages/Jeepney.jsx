import { Truck } from 'lucide-react';
import PageHero from '../../components/PageHero';
import styles from './TransportSub.module.css';

const ROUTES = [
  { code: '01',  route: 'Carbon Market → SM City Cebu', via: 'via Colon St, Osmena Blvd', fare: '₱15–₱18' },
  { code: '04B', route: 'Ayala Center → Carbon Market', via: 'via Colon, Plaridel', fare: '₱15–₱18' },
  { code: '10C', route: 'Talamban → Colon / Carbon', via: 'via Gorordo, Osmena Blvd', fare: '₱15–₱20' },
  { code: '17K', route: 'Tisa → SM City Cebu', via: 'via N. Bacalso, Urgello', fare: '₱15–₱20' },
  { code: '20B', route: 'Bulacao → Ayala Center', via: 'via SRP Coastal Road', fare: '₱15–₱20' },
  { code: '14L', route: 'Labangon → Punta Princesa', via: 'via Leon Kilat, Don Gil Garcia', fare: '₱15–₱18' },
];

const TIPS = [
  'Look for the route code and destination on the windshield or signboard on the roof',
  'Minimum fare is ₱15–₱18 for the first 4km, then ₱1.50 per additional km',
  'Hand your fare to the driver or pass it forward if seated far back',
  'Call "Bayad po!" when paying and "Para po!" when you want to get off',
  'E-jeepneys (electric) are the modernized version — same routes, air-conditioned',
  'Jeepneys run from around 5 AM until 9–10 PM on most routes',
  'During rush hour (7–9 AM, 5–7 PM) expect full jeepneys and slower travel',
  'Always have small change — ₱5, ₱10, and ₱20 coins are easiest',
];

export default function Jeepney() {
  return (
    <>
      <PageHero
        icon={Truck}
        eyebrow="Transportation › Jeepney"
        title="Jeepneys in Cebu"
        subtitle="The backbone of public transport in Cebu City — cheap, colorful, practical."
        accent="blue"
        parent={{ label: 'Transportation', to: '/transport' }}
      />

      <div className={styles.page}>
        <div className="container">

          {/* Common routes */}
          <div className={styles.busRouteList}>
            {ROUTES.map((r) => (
              <div key={r.code} className={styles.busRoute}>
                <div>
                  <p className={styles.busRouteDest}>{r.route}</p>
                  <div className={styles.busRouteMeta}>
                    <span className={styles.busMetaItem}>Code: {r.code}</span>
                    <span className={styles.busMetaItem}>· {r.via}</span>
                  </div>
                </div>
                <p className={styles.busFare}>{r.fare}</p>
              </div>
            ))}
          </div>

          <div className={styles.infoBox}>
            <p className={styles.infoBoxTitle}>How to ride a jeepney</p>
            <div className={styles.tipsList}>
              {TIPS.map((tip, i) => (
                <div key={i} className={styles.tip}>
                  <span className={styles.tipDot} aria-hidden="true" />
                  {tip}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.infoBox} style={{ background: 'var(--gold-tint)', borderColor: 'rgba(217,119,6,0.2)' }}>
            <p className={styles.infoBoxTitle} style={{ color: 'var(--gold-dark)' }}>
              Note on route coverage
            </p>
            <p className={styles.routeNote} style={{ borderTop: 'none', paddingTop: 0, marginTop: 0, fontStyle: 'normal', color: 'var(--gold-dark)', fontSize: '0.875rem' }}>
              Cebu City has over 100 jeepney routes. The routes above are the most common for
              getting between major points. For a full route map, ask at your hotel or check
              with LTFRB Region 7.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
