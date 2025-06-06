import Footer from '@/components/Basics/Footer';
import NavBar from '@/components/Basics/NavBar';

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <main className="min-h-[calc(100vh-463px)] my-14 container mx-auto px-5 lg:px-10">{children}</main>
      <Footer />
    </>
  );
};

export default CommonLayout;
