import { LoaderCircle } from "lucide-react";
import { Suspense } from "react";
import AllIdeasModule from "../all-ideas/_components/AllIdeasModule";
export const dynamic = 'force-dynamic';

const AdminAllUsersPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex size-full min-h-dvh items-center justify-center">
          <LoaderCircle className="animate-spin transition-all duration-300 ease-in-out" />
        </div>
      }
    >
      <AllIdeasModule/>
    </Suspense>
  );
};

export default AdminAllUsersPage;
