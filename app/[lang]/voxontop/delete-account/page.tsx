export default function DeleteAccount() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#111] text-white">
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <h1 className="text-4xl font-bold mb-4">Delete Your Account</h1>
        
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">How to Delete Your Account</h2>
          <p className="text-lg leading-relaxed">
            We&apos;re sorry to see you go. To delete your account and all associated data, please follow these steps:
          </p>
          <ol className="list-decimal pl-6 space-y-4 text-lg">
            <li>
              Send an email to{' '}
              <a 
                href="mailto:contact@pommef.com" 
                className="text-blue-400 hover:text-blue-300"
              >
                contact@pommef.com
              </a>
              {' '}with the subject line &quot;Account Deletion Request&quot;
            </li>
            <li>
              Include the following information in your email:
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Your username or phone number associated with the account</li>
                <li>The reason for deletion (optional)</li>
                <li>Any specific data you want to be removed (if applicable)</li>
              </ul>
            </li>
            <li>
              We will process your request within 30 days and send you a confirmation email once completed
            </li>
          </ol>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">What Happens After Deletion</h2>
          <p className="text-lg leading-relaxed">
            Once your account is deleted:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>All your personal data will be permanently removed from our systems</li>
            <li>You will no longer be able to access your account</li>
            <li>Any content you created will be anonymized or removed</li>
            <li>You will stop receiving any communications from us</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Need Help?</h2>
          <p className="text-lg leading-relaxed">
            If you have any questions about the account deletion process or need assistance, 
            please don&apos;t hesitate to contact us at{' '}
            <a 
              href="mailto:contact@pommef.com" 
              className="text-blue-400 hover:text-blue-300"
            >
              contact@pommef.com
            </a>
          </p>
        </section>

        <div className="mt-8 p-6 bg-white/5 rounded-lg">
          <p className="text-lg leading-relaxed">
            <strong className="text-white">Note:</strong> If you&apos;re experiencing issues with the app, 
            we&apos;d be happy to help resolve them. Sometimes, a simple fix can improve your experience 
            without needing to delete your account.
          </p>
        </div>
      </div>
    </div>
  );
} 