'use client';
import { useRouter } from 'next/navigation';
import { Leaf, ArrowLeft, Home, Compass } from 'lucide-react';

const NotFound = () => {
  const router = useRouter();

  return (
    <section className="bg-green-50 dark:bg-gray-900">
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">

          <div className="flex items-center gap-2 mb-4">
            <Leaf className="text-green-500" size={28} />
            <h4 className="text-2xl font-semibold text-gray-800 dark:text-green-400 md:text-3xl">
              Looks like we took a wrong turn!
            </h4>
            <Leaf className="text-green-500" size={28} />
          </div>

          <p className="mt-2 text-gray-600 dark:text-gray-300">
            The page you’re looking for is not here. Let’s get you back on track.
          </p>

          <div className="flex flex-col w-full mt-8 gap-4 sm:flex-row sm:w-auto">
            <button
              onClick={() => router.back()}
              className="flex items-center justify-center gap-2 px-6 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              <ArrowLeft className="w-5 h-5 text-green-500" />
              <span>Go Back</span>
            </button>

            <button
              onClick={() => router.push('/')}
              className="flex items-center justify-center gap-2 px-6 py-2 text-sm font-medium text-white transition-colors duration-200 bg-green-600 rounded-lg shadow-sm hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
            >
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </button>
          </div>

          <div className="mt-8">
            <button
              onClick={() => router.push('/ideas')}
              className="flex items-center gap-2 text-sm text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
            >
              <Compass className="w-4 h-4" />
              <span>Discover Sustainability Ideas</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
