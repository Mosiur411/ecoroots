import Link from 'next/link';

const BlogsPage = () => {
  return (
    <div className="mx-auto">
      <h1 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-16">
        EcoRoots Blog
      </h1>

      <p className="text-xl text-gray-700 dark:text-gray-300 text-justify mb-8">
        Welcome to the{' '}
        <Link href="/" className="font-semibold text-green-600 hover:underline">
          EcoRoots
        </Link>{' '}
        blog – your source for insightful articles, success stories, and expert tips on sustainability. Explore
        our collection of thought-provoking content to deepen your environmental knowledge and get inspired for
        your next green project.
      </p>

      <div className="space-y-16">
        {/* Featured Articles Section */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white border-b-2 pb-4 mb-8">
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Article 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3">
                  <Link href="/blogs/zero-waste-communities" className="text-gray-800 dark:text-white hover:text-green-600">
                    How Zero-Waste Communities Are Changing Urban Living
                  </Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Discover how cities worldwide are implementing innovative waste reduction strategies and how you can
                  bring these ideas to your neighborhood.
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-300">
                  <span>By Sarah Johnson</span>
                  <span className="mx-2">•</span>
                  <span>May 15, 2023</span>
                </div>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3">
                  <Link href="/blogs/diy-solar" className="text-gray-800 dark:text-white hover:text-green-600">
                    DIY Solar: Affordable Home Energy Solutions
                  </Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A step-by-step guide to setting up small-scale solar solutions that won t break the bank but will reduce your
                  carbon footprint.
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-300">
                  <span>By Michael Chen</span>
                  <span className="mx-2">•</span>
                  <span>April 28, 2023</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Posts Section */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white border-b-2 pb-4 mb-8">
            Recent Posts
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Post 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="p-8">
                <span className="inline-block px-4 py-2 text-xs font-semibold text-green-800 bg-green-100 dark:bg-green-900 dark:text-green-200 rounded-full mb-4">
                  Waste Reduction
                </span>
                <h3 className="text-xl font-semibold mb-3">
                  <Link href="/blogs/composting-101" className="text-gray-800 dark:text-white hover:text-green-600">
                    Composting 101: Turning Waste Into Garden Gold
                  </Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Everything you need to know to start composting at home, even in small spaces.
                </p>
              </div>
            </div>

            {/* Post 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="p-8">
                <span className="inline-block px-4 py-2 text-xs font-semibold text-blue-800 bg-blue-100 dark:bg-blue-900 dark:text-blue-200 rounded-full mb-4">
                  Transportation
                </span>
                <h3 className="text-xl font-semibold mb-3">
                  <Link href="/blogs/bike-commuting" className="text-gray-800 dark:text-white hover:text-green-600">
                    The Complete Guide to Bike Commuting
                  </Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  How to make the switch to bicycle commuting safely and comfortably in any weather.
                </p>
              </div>
            </div>

            {/* Post 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="p-8">
                <span className="inline-block px-4 py-2 text-xs font-semibold text-yellow-800 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200 rounded-full mb-4">
                  Energy
                </span>
                <h3 className="text-xl font-semibold mb-3">
                  <Link href="/blogs/energy-audit" className="text-gray-800 dark:text-white hover:text-green-600">
                    Home Energy Audit: Finding Your Hidden Savings
                  </Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Identify where your home is wasting energy and how to fix it with our DIY audit checklist.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Community Spotlight Section */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white border-b-2 pb-4 mb-8">
            Community Spotlight
          </h2>
          <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              How Our Neighborhood Cut Plastic Waste by 80%
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Read the inspiring story of how one EcoRoots member mobilized their community to dramatically reduce
              single-use plastics through simple, collective actions.
            </p>
            <Link href="/blogs/community-plastic-reduction" className="text-blue-500 hover:underline font-semibold flex items-center">
              Read the full story
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogsPage;
