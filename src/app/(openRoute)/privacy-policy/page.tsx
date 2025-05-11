import Link from 'next/link';

const PrivacyPolicyPage = () => {
  return (
    <div className="md:mx-20">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-12">
        Privacy Policy
      </h1>
      <p className="text-lg dark:text-white text-justify py-4">
        Welcome to{' '}
        <Link href="/" className="font-semibold text-green-500 hover:underline">
          EcoRoots
        </Link>
        . We value your trust and are committed to safeguarding your personal data.
        This Privacy Policy outlines how we collect, use, and protect your
        information as part of our sustainability community platform.
      </p>

      <div className="space-y-8">
        {/* Section 1 */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold py-4">
            1. Information We Collect
          </h2>
          <p className="dark:text-white text-justify">
            We gather the following types of information:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2 dark:text-white">
            <li><strong>Account Info:</strong> Name, email, and profile details</li>
            <li><strong>User Content:</strong> Ideas, comments, and messages</li>
            <li><strong>Payments:</strong> Processed securely for premium content</li>
            <li><strong>Usage Data:</strong> Site interaction patterns</li>
            <li><strong>Cookies:</strong> To enhance experience and analytics</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold py-4">
            2. How We Use Your Information
          </h2>
          <p className="dark:text-white text-justify">
            We use your data to:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2 dark:text-white">
            <li>Enable community interaction and idea sharing</li>
            <li>Handle payments and premium access</li>
            <li>Moderate and manage platform content</li>
            <li>Personalize your experience</li>
            <li>Improve functionality through usage insights</li>
            <li>Provide service-related communications</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold py-4">
            3. Data Sharing and Disclosure
          </h2>
          <p className="dark:text-white text-justify">
            Your data is only shared when necessary:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2 dark:text-white">
            <li><strong>Public Contributions:</strong> Visible to the community</li>
            <li><strong>Service Providers:</strong> Under confidentiality agreements</li>
            <li><strong>Legal Requirements:</strong> As required by law</li>
            <li><strong>Business Events:</strong> Mergers, acquisitions, or asset transfers</li>
          </ul>
          <p className="dark:text-white text-justify mt-4">
            We never sell your personal information to third-party advertisers.
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold py-4">
            4. Data Security
          </h2>
          <p className="dark:text-white text-justify">
            We use industry-standard safeguards to protect your data:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2 dark:text-white">
            <li>Data encryption (in transit and at rest)</li>
            <li>Routine security testing</li>
            <li>Access controls and authentication</li>
            <li>Secure payment infrastructure</li>
          </ul>
          <p className="dark:text-white text-justify mt-4">
            While no method is foolproof, we urge you to use strong passwords and protect your credentials.
          </p>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold py-4">
            5. Your Privacy Rights
          </h2>
          <p className="dark:text-white text-justify">
            You can manage your data through:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2 dark:text-white">
            <li><strong>Access:</strong> View and update your information</li>
            <li><strong>Deletion:</strong> Request account or data removal</li>
            <li><strong>Communication Preferences:</strong> Unsubscribe as needed</li>
            <li><strong>Data Export:</strong> Request downloadable format</li>
            <li><strong>Cookies:</strong> Adjust via browser settings</li>
          </ul>
          <p className="dark:text-white text-justify mt-4">
            To make requests,{' '}
            <Link
              href="/contact"
              className="text-blue-500 font-semibold hover:underline"
            >
              contact us
            </Link>
            . Verification may be required.
          </p>
        </section>

        {/* Section 6 - New: Third-Party Links */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold py-4">
            6. Third-Party Links
          </h2>
          <p className="dark:text-white text-justify">
            Our platform may contain links to third-party websites or services.
            We are not responsible for their privacy practices. Please review their policies before sharing any data with them.
          </p>
        </section>

        {/* Section 7 - New: Data Retention */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold py-4">
            7. Data Retention
          </h2>
          <p className="dark:text-white text-justify">
            We retain your information only as long as necessary for legal,
            operational, and legitimate business purposes. You can request data
            deletion at any time.
          </p>
        </section>

        {/* Section 8 */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold py-4">
            8. Policy Updates
          </h2>
          <p className="dark:text-white text-justify">
            We may revise this policy periodically. Major changes will be communicated via email or platform notifications. Continued use of EcoRoots indicates acceptance.
          </p>
          <p className="dark:text-white text-justify mt-4">
            <strong>Last Updated:</strong> May 12, 2025
          </p>
        </section>

       
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
