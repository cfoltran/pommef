export function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'fr' },
  ];
}

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#111] text-white">
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <h1 className="text-4xl font-bold mb-4">Terms & Conditions for Voxontop</h1>
        <p className="text-gray-400"><strong>Last Updated: 26/10/2025</strong></p>

        <p className="text-lg leading-relaxed">
          Welcome to <strong className="text-white">Voxontop</strong>.
          By downloading, accessing, or using the Voxontop app, you agree to these Terms & Conditions. 
          Please read them carefully, as they outline your rights and obligations when using our service.
        </p>

        {/* 1. Eligibility */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">1. Eligibility</h2>
          <p className="text-lg leading-relaxed">
            You must be at least 13 years old to use Voxontop. By creating an account, you confirm that you meet this requirement. 
            If you are under 18, you may only use Voxontop with the consent of a parent or guardian.
          </p>
        </section>

        {/* 2. Account Registration */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">2. Account Registration</h2>
          <p className="text-lg leading-relaxed">
            To post affirmations or interact with comments, you must create an account using your email and password (via Supabase Auth). 
            You are responsible for maintaining the confidentiality of your login information and for all activity occurring under your account.
          </p>
        </section>

        {/* 3. Use of the Service */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">3. Use of the Service</h2>
          <p className="text-lg leading-relaxed">
            Voxontop is a social platform where users can purchase the right to display a single affirmation visible to all users, 
            and freely comment on it. You agree to use the app only for lawful purposes and to respect others when posting affirmations 
            or comments. You must not submit illegal, hateful, or infringing content, or attempt to disrupt or exploit the service.
          </p>
        </section>

        {/* 4. Payments & Ownership */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">4. Payments & Ownership</h2>
          <p className="text-lg leading-relaxed">
            To publish an affirmation on Voxontop, you must pay an amount higher than the previous published affirmation. 
            All payments are processed securely via <strong className="text-white">Stripe</strong>. 
            Voxontop does not store any payment card details.  
          </p>
          <p className="text-lg leading-relaxed">
            By paying, you gain temporary ownership of the “Top Affirmation” until another user replaces it by paying more. 
            No refunds are provided once your affirmation is successfully posted. 
            Prices and payment rules may change at our discretion.
          </p>
        </section>

        {/* 5. Content & Intellectual Property */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">5. Content & Intellectual Property</h2>
          <p className="text-lg leading-relaxed">
            You retain ownership of any affirmation or comment you post, but you grant Voxontop a worldwide, royalty-free, 
            non-exclusive license to display, distribute, and promote your content within the app and related marketing materials.  
          </p>
          <p className="text-lg leading-relaxed">
            The Voxontop app, design, branding, and underlying software are the property of Voxontop and its licensors. 
            You may not copy, reproduce, distribute, or create derivative works without written permission.
          </p>
        </section>

        {/* 6. Moderation & User Conduct */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">6. Moderation & User Conduct</h2>
          <p className="text-lg leading-relaxed">
            Voxontop reserves the right to remove or hide any content that violates these Terms or is deemed inappropriate, 
            offensive, or illegal. Users who repeatedly violate our guidelines may have their accounts suspended or terminated.  
          </p>
        </section>

        {/* 7. Disclaimer & Limitation of Liability */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">7. Disclaimer & Limitation of Liability</h2>
          <p className="text-lg leading-relaxed">
            Voxontop is provided “as is,” without warranties of any kind. We do not guarantee that the service will be continuous, 
            error-free, or suitable for every purpose. To the fullest extent permitted by law, Voxontop and its operators 
            shall not be liable for any indirect, incidental, or consequential damages arising from your use of the app.
          </p>
        </section>

        {/* 8. Termination */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">8. Termination</h2>
          <p className="text-lg leading-relaxed">
            You may delete your account at any time. Voxontop reserves the right to suspend or terminate any account that violates 
            these Terms, or that we believe poses a risk to the community or the platform’s integrity. 
            Payments already processed will not be refunded upon termination.
          </p>
        </section>

        {/* 9. Governing Law */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">9. Governing Law & Jurisdiction</h2>
          <p className="text-lg leading-relaxed">
            These Terms are governed by the laws of France, where Voxontop is based. 
            Any disputes shall be subject to the exclusive jurisdiction of the competent courts in France.  
          </p>
        </section>

        {/* 10. Changes to Terms */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">10. Changes to These Terms</h2>
          <p className="text-lg leading-relaxed">
            We may update these Terms & Conditions from time to time. Updates will be posted in the app with a new “Last Updated” date.  
            Continued use of Voxontop after changes means you accept the new Terms.
          </p>
        </section>

        {/* 11. Contact */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">11. Contact Us</h2>
          <p className="text-lg leading-relaxed">
            If you have any questions or concerns about these Terms & Conditions, please contact us at:
          </p>
          <p className="text-lg leading-relaxed">
            <strong className="text-white">Email:</strong> 
            <a href="mailto:contact@pommef.com" className="text-blue-400 hover:text-blue-300"> contact@pommef.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}
