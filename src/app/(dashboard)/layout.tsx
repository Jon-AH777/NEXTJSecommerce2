import Sidebar from "./dashboard/_components/ui/dashboard/sidebar/sidebar";
import Navbar from "./dashboard/_components/ui/dashboard/navbar/navbar";
import Footer from "./dashboard/_components/ui/dashboard/footer/footer";

const DashboardLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (

    <div className='flex bg-back text-white'>
      <div className='p-5 flex-1 bg-backSoft min-h-screen ;'>
        <Sidebar />
      </div>
      <div className='p-4 flex-[4]'>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>

  );
};

export default DashboardLayout;
