import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import styles from './PrivacyPolicy.module.css';

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        icon={ShieldCheck}
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Last updated: July 1, 2026"
        accent="blue"
      />

      <div className={styles.page}>
        <div className="container">
          <div className={styles.content}>

            <p className={styles.intro}>
              This Privacy Policy explains what information CebuCentral ("we," "us," or
              "this site") collects, how it is used, and the choices available to you.
              CebuCentral is free to use and does not require an account.
            </p>

            <section className={styles.section}>
              <h2 className={styles.heading}>1. Information We Collect</h2>
              <p>We do not require registration and do not knowingly collect personal information simply by your browsing the site. Depending on which tools are active, the following may be collected automatically:</p>
              <ul className={styles.list}>
                <li>Standard technical data such as browser type, device type, and general (city-level) location, typically collected through analytics tools like Google Analytics, if enabled.</li>
                <li>Pages visited and time spent on the site, used to understand which features are useful.</li>
                <li>If you email us through the Contact page, we receive whatever you choose to include in that email.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.heading}>2. Weather Data</h2>
              <p>The Weather page and homepage fetch live conditions from a third-party weather API. This request only sends fixed coordinates for Cebu City — it does not send any personal or device-identifying information about you.</p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.heading}>3. Cookies &amp; Advertising</h2>
              <p>
                CebuCentral may display ads served through Google AdSense. Google and its
                partners may use cookies to serve ads based on your prior visits to this
                or other websites. You can opt out of personalized advertising at{' '}
                <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>{' '}
                or{' '}
                <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer">aboutads.info</a>.
                See{' '}
                <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">how Google uses information from partner sites</a>.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.heading}>4. Third-Party Links</h2>
              <p>This site links to external services — ferry, airline, and bus operators, government pages, PAGASA, and news outlets. Once you leave CebuCentral, that site's own privacy policy applies. We are not responsible for external sites' content or privacy practices.</p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.heading}>5. Children's Privacy</h2>
              <p>CebuCentral is a general-audience informational site and is not directed at children under 13. We do not knowingly collect personal information from children.</p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.heading}>6. Data Security</h2>
              <p>We take reasonable measures to protect the site, but no method of transmission over the internet is completely secure. We cannot guarantee absolute security of information sent to us, such as through email.</p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.heading}>7. Your Rights</h2>
              <p>
                If you are in the Philippines, the Data Privacy Act of 2012 (RA 10173)
                gives you rights over your personal data, including the right to be
                informed, to access, to object, and to request correction or erasure.
                Learn more at the{' '}
                <a href="https://www.privacy.gov.ph" target="_blank" rel="noopener noreferrer">National Privacy Commission</a>.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.heading}>8. Changes to This Policy</h2>
              <p>We may update this policy as new features (like ads or analytics) are added. The "Last updated" date above reflects the most recent revision.</p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.heading}>9. Contact Us</h2>
              <p>Questions about this policy can be sent through our <Link to="/contact">Contact page</Link>.</p>
            </section>

            <p className={styles.disclaimer}>
              This page is a general-purpose privacy policy template, not a substitute
              for legal advice. For guaranteed compliance, consider having it reviewed
              by a lawyer familiar with Philippine data privacy law.
            </p>

          </div>
        </div>
      </div>
    </>
  );
                  }
