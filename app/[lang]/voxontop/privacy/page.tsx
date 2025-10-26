export function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'fr' },
  ];
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#111] text-white">
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy for Voxontop</h1>
        <p className="text-gray-400"><strong>Last Updated: 26/10/2025</strong></p>

        <p className="text-lg leading-relaxed">
          At <strong className="text-white">Voxontop</strong>, we are committed to protecting your personal data and respecting your privacy. 
          This Privacy Policy explains how and why we process your data when you use our app, in compliance with the General Data Protection Regulation (GDPR) and other applicable laws.
        </p>

        {/* 1. Information We Collect */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">1. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li><strong className="text-white">Email</strong>: For authentication and account management.</li>
            <li><strong className="text-white">Device Information</strong>: Pseudonymous identifiers (e.g., device ID) for app functionality and analytics.</li>
            <li><strong className="text-white">Payment Information</strong>: When you make a purchase, payment details (e.g., card number, billing information) are processed securely by <strong>Stripe</strong>. We do not store or have access to your full payment card details.</li>
          </ul>
        </section>

        {/* 2. How We Use Your Data */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">2. How We Use Your Data</h2>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li><strong className="text-white">Authentication</strong>: To log you into the app.</li>
            <li><strong className="text-white">Payments</strong>: To process subscriptions or purchases securely through Stripe.</li>
            <li><strong className="text-white">Analytics</strong>: To improve the app (Google Analytics, pseudonymous only).</li>
            <li><strong className="text-white">Notifications</strong>: To send push notifications, if enabled.</li>
          </ul>
        </section>

        {/* 3. Third-Party Services */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">3. Third-Party Services</h2>
          <p className="text-lg leading-relaxed">We work with trusted processors who help us deliver our services:</p>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li><strong className="text-white">Stripe</strong>: Handles payment processing securely. Stripe may collect identifiers (e.g., card details, billing address) to process transactions. Voxontop does not store this data. You can read more at <a href="https://stripe.com/privacy" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">Stripe’s Privacy Policy</a>.</li>
            <li><strong className="text-white">Google Analytics</strong>: For app usage analytics (pseudonymous identifiers only).</li>
            <li><strong className="text-white">Supabase Auth</strong>: For secure authentication and account management.</li>
          </ul>
          <p className="text-lg leading-relaxed">
            These providers act on our behalf and <strong className="text-white">do not use your data for advertising or profiling</strong>.
          </p>
        </section>

        {/* 4. Legal Basis */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">4. Legal Basis for Processing</h2>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li><strong>Contract</strong>: To provide core services (account access, payments).</li>
            <li><strong>Consent</strong>: For optional features like push notifications.</li>
            <li><strong>Legitimate Interests</strong>: To improve security and performance (pseudonymous analytics).</li>
          </ul>
        </section>

        {/* 5. Data Retention */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">5. Data Retention</h2>
          <p className="text-lg leading-relaxed">
            - Account data is retained while your account is active. <br/>
            - Analytics data is retained in aggregated or pseudonymous form. <br/>
            - Payment records are retained as required by financial regulations and tax law (typically up to 7 years). <br/>
            You may request deletion of your account data at any time.
          </p>
        </section>

        {/* 6. International Transfers */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">6. International Data Transfers</h2>
          <p className="text-lg leading-relaxed">
            Some providers (e.g., Stripe, Google Analytics) may process data outside the European Economic Area (EEA). 
            Where this occurs, we ensure adequate safeguards such as the European Commission’s Standard Contractual Clauses.
          </p>
        </section>

        {/* 7. Your Rights */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">7. Your Rights</h2>
          <p className="text-lg leading-relaxed">Under GDPR, you have the following rights:</p>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>Access – to know what data we hold about you.</li>
            <li>Rectification – to correct inaccurate information.</li>
            <li>Erasure – to request deletion of your data.</li>
            <li>Restriction – to limit certain processing.</li>
            <li>Data Portability – to receive a copy of your data in a machine-readable format.</li>
            <li>Objection – to object to processing based on legitimate interests.</li>
            <li>Withdrawal of Consent – at any time, for consent-based processing.</li>
          </ul>
          <p className="text-lg leading-relaxed">
            To exercise your rights, contact us at 
            <a href="mailto:contact@pommef.com" className="text-blue-400 hover:text-blue-300"> contact@pommef.com</a>.
            You also have the right to lodge a complaint with your local Data Protection Authority.
          </p>
        </section>

        {/* 8. International Data Transfers */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">8. International Data Transfers</h2>
          <p className="text-lg leading-relaxed">
            Some of our third-party providers (e.g., Google Analytics) may process data outside the European Economic Area (EEA). 
            Where this occurs, we ensure appropriate safeguards (such as Standard Contractual Clauses) are in place to protect your data.
          </p>
        </section>

        {/* 9. Security */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">9. Security</h2>
          <p className="text-lg leading-relaxed">
            We implement technical and organizational measures to protect your personal data, including encryption, access controls, and secure authentication via Supabase Auth.
          </p>
        </section>

        {/* 10. Children's Privacy */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">10. Children’s Privacy</h2>
          <p className="text-lg leading-relaxed">
            Our app is not intended for children under 13. We do not knowingly collect data from children. 
            If you believe we have collected data from a child, please contact us and we will delete it promptly.
          </p>
        </section>

        {/* 11. Push Notifications */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">11. Push Notifications</h2>
          <p className="text-lg leading-relaxed">
            With your consent, we may send push notifications. 
            You can manage or disable these at any time in your device settings.
          </p>
        </section>

        {/* 12. Changes */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">12. Changes to This Policy</h2>
          <p className="text-lg leading-relaxed">
            We may update this Privacy Policy when necessary. 
            Any updates will be posted here with a revised “Last Updated” date. 
            Where required, we will notify you of significant changes and obtain renewed consent.
          </p>
        </section>

        {/* 13. Contact */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">13. Contact Us</h2>
          <p className="text-lg leading-relaxed">
            If you have any questions about this Privacy Policy or your data rights, please contact us:
          </p>
          <p className="text-lg leading-relaxed">
            <strong className="text-white">Email</strong>: 
            <a href="mailto:contact@pommef.com" className="text-blue-400 hover:text-blue-300"> contact@pommef.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}
