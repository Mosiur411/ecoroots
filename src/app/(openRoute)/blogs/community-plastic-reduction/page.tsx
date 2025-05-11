import Image from 'next/image';
import Link from 'next/link';
import plasticWaste from '@/assets/plasticWaste.jpg';

const CommunityPlasticReduction = () => {
  return (
    <div className="container mx-auto px-4 md:px-20 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="py-4 text-sm text-gray-600 dark:text-gray-400">
        <ol className="inline-flex items-center space-x-2">
          <li className="inline-flex items-center">
            <Link href="/" className="hover:text-blue-500 font-medium">
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center space-x-2">
              <svg
                className="w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <Link href="/blogs" className="hover:text-blue-500 font-medium">
                Blogs
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center space-x-2">
              <svg
                className="w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-400">Plastic Reduction</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Article Header */}
      <header className="mb-12">
        <span className="inline-block px-4 py-2 text-sm font-semibold text-green-800 bg-green-100 dark:bg-green-900 dark:text-green-200 rounded-full mb-4">
          Community Action
        </span>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
          How Our Neighborhood Cut Plastic Waste by 80%
        </h1>
        <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-400">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span>By Maria Rodriguez</span>
          </div>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>March 12, 2023</span>
          </div>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>8 min read</span>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-none">
        <figure className="mb-8">
          <Image
            src={plasticWaste}
            alt="Community members participating in plastic waste cleanup"
            className="w-full rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          />
          <figcaption className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
            Oakwood residents sorting collected plastic waste for recycling
          </figcaption>
        </figure>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
          When our neighborhood association first discussed plastic waste at our
          monthly meeting, we never imagined we'd become a model for
          community-led sustainability. Within one year, we reduced our
          collective plastic waste by 80% through simple, replicable strategies.
          Here’s how we did it.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          The Wake-Up Call
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          It started with a shocking discovery during our annual neighborhood
          cleanup. Of the 320 pounds of trash collected from just 12 blocks, 73%
          was single-use plastics. Water bottles, grocery bags, food packaging -
          the sheer volume was overwhelming. That’s when we decided to take
          action.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg shadow-md my-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-200">
            Key Statistics Before Intervention
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-blue-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              <span>Average household: 23 plastic items discarded weekly</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-blue-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              <span>Only 12% of residents regularly recycled plastic</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-blue-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              <span>1 ton of plastic waste generated monthly by the community</span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          Our Strategy: Reduce, Reuse, Recycle
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          We launched a series of initiatives designed to reduce plastic usage
          while encouraging residents to recycle responsibly. Below are some
          actions that had a significant impact:
        </p>

        <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300 mb-6">
          <li>
            <span className="font-semibold text-gray-800 dark:text-white">
              Education Campaigns:
            </span>
            We hosted workshops on plastic alternatives and recycling best practices.
          </li>
          <li>
            <span className="font-semibold text-gray-800 dark:text-white">
              Recycling Bins & Pickup:
            </span>
            Additional recycling bins were added, and weekly plastic pickup was
            instituted.
          </li>
          <li>
            <span className="font-semibold text-gray-800 dark:text-white">
              Sustainable Alternatives:
            </span>
            Local businesses switched to compostable packaging and offered discounts
            for reusable containers.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Results and Future Plans
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          After just one year, our neighborhood cut plastic waste by 80%. As we
          move forward, we aim to continue our progress with new initiatives and
          partnerships with eco-friendly brands.
        </p>
      </article>
    </div>

  );
};

export default CommunityPlasticReduction;
