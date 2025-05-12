'use client';

import Image from 'next/image';
import { Card } from '../ui/card';
import { useUser } from '@/context/UserContext';

import UpdatePasswordModal from '@/components/modules/Profile/UpdatePasswordModal';
import UpdateProfileModal from '@/components/modules/Profile/UpdateProfileModal';

const ProfileCard = () => {
  const { user, setIsLoading } = useUser();

  return (
    <div className="flex justify-center items-center min-h-[80vh] p-6 bg-gradient-to-tr  dark:from-green-950 dark:to-black">
      <Card className="w-full max-w-4xl mx-auto rounded-3xl p-8 shadow-xl backdrop-blur-sm bg-white/60 dark:bg-green-900/40 border border-green-400 transition-all">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Profile Image Section */}
          <div className="flex justify-center">
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-green-500 shadow-lg">
              <Image
                src={user?.image || '/avatar.png'}
                alt="Profile"
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Profile Info Section */}
          <div className="flex flex-col justify-center text-center md:text-left space-y-4">
            <h2 className="text-3xl font-bold text-green-800 dark:text-green-100">{user?.name}</h2>
            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">{user?.email}</p>

            {user?.role && (
              <span className="inline-block bg-green-500/10 text-green-700 dark:text-green-200 border border-green-500 text-xs font-semibold px-3 py-1 rounded-full w-fit mx-auto md:mx-0">
                {user.role.toUpperCase()}
              </span>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center md:justify-start">
              <UpdateProfileModal user={user} setIsLoading={setIsLoading} />
              <UpdatePasswordModal />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfileCard;
