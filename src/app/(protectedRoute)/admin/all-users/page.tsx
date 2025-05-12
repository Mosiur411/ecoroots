import { LoaderCircle } from "lucide-react";
import { Suspense } from "react";
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
    </Suspense>
  );
};

export default AdminAllUsersPage;
