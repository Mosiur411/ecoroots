'use client';

import Image from 'next/image';
import skill from '../../assets/skill-thumb.png';
import { Leaf } from 'lucide-react';
import { Progress } from '../ui/progress';

const OurSkillsSection = () => {
  return (
    <section className="bg-[#8cf588c5] dark:bg-black py-20 px-6 md:px-12 lg:px-20 rounded-2xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Section */}
        <div>
          {/* Section Title */}
          <div className="flex items-center gap-2 text-green-700 dark:text-green-300 uppercase text-sm font-semibold tracking-widest mb-4">
            <Leaf size={18} />
            <span>Our Expertise</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-black dark:text-green-500 mb-6">
            Building a Greener Tomorrow <br /> Through Real Action
          </h2>

          {/* Description */}
          <p className="text-gray-700 dark:text-gray-400 text-base md:text-lg font-medium mb-8">
            We are committed to creating a cleaner and more sustainable world by focusing on impactful environmental initiatives. 
            From community recycling programs to large-scale ocean cleanup efforts, our work empowers both people and the planet. 
            Together, we can build a future where nature and innovation thrive side by side.
          </p>

          {/* Skill Progress Bars */}
          <div className="space-y-6">
            {/* Recycling */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-base font-semibold dark:text-gray-200">♻️ Community Recycling</p>
                <span className="text-sm text-gray-600 dark:text-gray-400">77%</span>
              </div>
              <Progress value={77} className="h-3" />
            </div>

            {/* Ocean Cleaning */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-base font-semibold dark:text-gray-200">🌊 Ocean Cleanup</p>
                <span className="text-sm text-gray-600 dark:text-gray-400">88%</span>
              </div>
              <Progress value={88} className="h-3" />
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src={skill}
            alt="Sustainable Actions Illustration"
            height={500}
            width={500}
            className="rounded-xl shadow-xl transition duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default OurSkillsSection;
