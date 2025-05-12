import Link from 'next/link';

const TermsPage = () => {
  return (
    <div className="md:mx-20">
      <h1 className="text-3xl font-bold text-center mb-8">
        EcoRoots Terms of Service
      </h1>
      <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
        Last Updated: May 3, 2025
      </p>

      <div className="prose dark:prose-invert max-w-none">
        {/* 1. Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Welcome to EcoRoots (we, our, or us). These Terms of Service (Terms) govern
            your access to and use of our sustainability idea hub platform,
            including any content, functionality, and services offered on or
            through EcoRoots.com (the Site).
          </p>
          <p className="mt-4">
            By accessing or using the Site, you agree to be bound by these
            Terms. If you do not agree to these Terms, you may not access or use
            the Site.
          </p>
        </section>

        {/* 2. User Accounts */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">2. User Accounts</h2>
          <div className="pl-5">
            <h3 className="text-xl font-medium mb-2">2.1 Account Creation</h3>
            <p>
              To access certain features, you must register for an account. You
              agree to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security of your credentials</li>
              <li>Accept all risks of unauthorized access</li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-2">
              2.2 Account Responsibilities
            </h3>
            <p>
              You are responsible for all activities that occur under your
              account. You must notify us immediately of any breach of security
              or unauthorized use of your account.
            </p>
          </div>
        </section>

        {/* 3. Content and Conduct */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">3. Content and Conduct</h2>
          <div className="pl-5">
            <h3 className="text-xl font-medium mb-2">
              3.1 User-Generated Content
            </h3>
            <p>
              Users may submit sustainability ideas, comments, and other content
              (User Content). You retain ownership of your User
              Content but grant EcoRoots a worldwide, non-exclusive,
              royalty-free license to use, display, and distribute your User
              Content.
            </p>

            <h3 className="text-xl font-medium mt-6 mb-2">
              3.2 Prohibited Content
            </h3>
            <p>You agree not to post User Content that:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Violates any third-party rights, including intellectual property or privacy rights</li>
              <li>Contains false or misleading information</li>
              <li>Is unlawful, threatening, abusive, or harassing</li>
              <li>Contains viruses or malicious code</li>
              <li>Promotes illegal activities or harmful environmental practices</li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-2">
              3.3 Content Moderation
            </h3>
            <p>
              We reserve the right to review, edit, or remove any User Content
              at our sole discretion. All sustainability ideas are subject to
              approval by our admin team before publication.
            </p>
          </div>
        </section>

        {/* 4. Community Guidelines (New Section) */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">4. Community Guidelines</h2>
          <p>
            Our community values respectful interaction and constructive feedback.
            Users are expected to:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Engage respectfully with other members</li>
            <li>Give credit where due for collaborative ideas</li>
            <li>Refrain from spamming or self-promotion unrelated to sustainability</li>
            <li>Report any abusive or inappropriate content</li>
          </ul>
        </section>

        {/* 5. Idea Verification Process (New Section) */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">5. Idea Verification Process</h2>
          <p>
            Submitted sustainability ideas go through a verification process to ensure quality and
            practicality. This includes:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Review by subject matter experts</li>
            <li>Community voting and feedback</li>
            <li>Periodic re-evaluation for accuracy</li>
          </ul>
        </section>

        {/* 6. Intellectual Property */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
          <p>
            The Site and its original content, features, and functionality are
            owned by EcoRoots and are protected by international copyright,
            trademark, and other intellectual property laws.
          </p>
          <p className="mt-4">
            You may not modify, reproduce, distribute, or create derivative
            works based on our proprietary content without express permission.
          </p>
        </section>

        {/* 7. Privacy */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">7. Privacy</h2>
          <p>
            Your privacy is important to us. Our{' '}
            <Link href="/privacy" className="text-blue-500 hover:underline">
              Privacy Policy
            </Link>{' '}
            explains how we collect, use, and protect your personal information.
            By using the Site, you consent to our collection and use of personal
            data as outlined in the Privacy Policy.
          </p>
        </section>

        {/* 8. Modifications */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">8. Modifications</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will
            provide notice of significant changes through the Site or via email.
            Your continued use of the Site after changes constitutes acceptance
            of the new Terms.
          </p>
        </section>

        {/* 9. Termination */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
          <p>
            We may suspend or terminate your account and access to the Site at
            our sole discretion, without notice, for conduct that we believe
            violates these Terms or is harmful to other users or EcoRoots.
          </p>
        </section>

        {/* 10. Governing Law */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
          <p>
            These Terms shall be governed by the laws of the State of Delaware,
            USA, without regard to its conflict of law provisions.
          </p>
        </section>

      </div>
    </div>
  );
};

export default TermsPage;
