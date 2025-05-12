'use client';

import { useUser } from '@/context/UserContext';
import { Leaf, Lightbulb, Sparkles, Globe, HeartHandshake } from 'lucide-react';

const CommonDashboard = () => {
  const { user } = useUser();

  return (
    <div className="my-12 mx-4 md:mx-10">
      {/* Welcome Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2 flex items-center justify-center gap-2">
          <Leaf className="text-green-500" size={32} />
          <span>Welcome back, {user?.name || 'Eco-Champion'}!</span>
          <Sparkles className="text-yellow-400" size={32} />
        </h2>
        <p className="text-lg text-muted-foreground">
          Let’s make today count for a greener tomorrow.
        </p>
      </div>

      {/* Intro Card */}
      <div className="bg-white dark:bg-green-900/10 rounded-2xl shadow-md p-6 border border-green-100 dark:border-green-800 mb-8">
        <div className="flex items-start gap-4">
          <Lightbulb className="text-green-600 dark:text-green-300 mt-1" size={24} />
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-green-800 dark:text-green-200">
              Welcome to EcoRoots! 🌿
            </h3>
            <p className="text-justify text-sm md:text-base text-muted-foreground">
              Join a movement of changemakers building a sustainable future. Whether you're sharing green ideas, collaborating on climate projects, or exploring eco-innovations, this is your place to make an impact.
            </p>
          </div>
        </div>
      </div>

      {/* Dashboard Feature Cards Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
        {/* Quick Start */}
        <div className="bg-white dark:bg-blue-900/10 rounded-2xl shadow-md p-6 border border-blue-100 dark:border-blue-800">
          <div className="flex items-center gap-3 mb-3">
            <Globe className="text-blue-600 dark:text-blue-300" size={20} />
            <h4 className="font-semibold text-blue-800 dark:text-blue-200">Quick Start</h4>
          </div>
          <ul className="space-y-2 pl-1 text-sm">
            <li>🌟 Post your first green idea</li>
            <li>🧭 Discover eco categories</li>
            <li>🤝 Meet fellow changemakers</li>
          </ul>
        </div>

        {/* Community Impact */}
        <div className="bg-white dark:bg-purple-900/10 rounded-2xl shadow-md p-6 border border-purple-100 dark:border-purple-800">
          <div className="flex items-center gap-3 mb-3">
            <HeartHandshake className="text-purple-600 dark:text-purple-300" size={20} />
            <h4 className="font-semibold text-purple-800 dark:text-purple-200">Community Impact</h4>
          </div>
          <p className="text-sm">
            Together we've reduced
            <span className="font-bold text-purple-600 dark:text-purple-300"> 12,450 kg </span>
            of CO₂ this month. Keep going strong!
          </p>
        </div>

        {/* My Contributions */}
        <div className="bg-white dark:bg-orange-900/10 rounded-2xl shadow-md p-6 border border-orange-100 dark:border-orange-800">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="text-orange-500 dark:text-orange-300" size={20} />
            <h4 className="font-semibold text-orange-800 dark:text-orange-200">My Contributions</h4>
          </div>
          <p className="text-sm">
            You've submitted <span className="font-bold">8 green ideas</span> and participated in <span className="font-bold">3 community projects</span> so far. Amazing!
          </p>
        </div>

        {/* Eco Challenges */}
        <div className="bg-white dark:bg-pink-900/10 rounded-2xl shadow-md p-6 border border-pink-100 dark:border-pink-800">
          <div className="flex items-center gap-3 mb-3">
            <Lightbulb className="text-pink-600 dark:text-pink-300" size={20} />
            <h4 className="font-semibold text-pink-800 dark:text-pink-200">Eco Challenges</h4>
          </div>
          <p className="text-sm">
            Take part in our weekly sustainability challenges and earn 🌱 badges while making a real-world impact.
          </p>
        </div>

        {/* Resources */}
        <div className="bg-white dark:bg-yellow-900/10 rounded-2xl shadow-md p-6 border border-yellow-100 dark:border-yellow-800">
          <div className="flex items-center gap-3 mb-3">
            <Leaf className="text-yellow-600 dark:text-yellow-300" size={20} />
            <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">Learning Hub</h4>
          </div>
          <p className="text-sm">
            Explore articles, videos, and tools to deepen your sustainability knowledge and spark new ideas.
          </p>
        </div>

        {/* Notifications or Events */}
        <div className="bg-white dark:bg-cyan-900/10 rounded-2xl shadow-md p-6 border border-cyan-100 dark:border-cyan-800">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="text-cyan-600 dark:text-cyan-300" size={20} />
            <h4 className="font-semibold text-cyan-800 dark:text-cyan-200">Events & Updates</h4>
          </div>
          <p className="text-sm">
            Don’t miss upcoming eco-events, webinars, and news from the community. Stay inspired and informed.
          </p>
        </div>
      </div>

      {/* Footer Quote */}
      <div className="text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          <Leaf size={16} className="text-green-500" />
          Together, we’re growing a greener future
          <Leaf size={16} className="text-green-500" />
        </p>
      </div>
    </div>


  );
};

export default CommonDashboard;