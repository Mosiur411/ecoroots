import { LoaderCircle } from 'lucide-react';
import React, { Suspense } from 'react';
import AllIdeasModule from './_components/AllIdeasModule';
export const dynamic = 'force-dynamic';
const AllIdeasPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex size-full min-h-dvh items-center justify-center">
          <LoaderCircle className="animate-spin transition-all duration-300 ease-in-out" />
        </div>
      }
    >
      <AllIdeasModule />
    </Suspense>
  );
};

export default AllIdeasPage;
