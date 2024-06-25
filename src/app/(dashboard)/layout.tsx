import Sidebar from "./dashboard/_components/ui/dashboard/sidebar/sidebar";
import Navbar from "./dashboard/_components/ui/dashboard/navbar/navbar";
import Footer from "./dashboard/_components/ui/dashboard/footer/footer";

const DashboardLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className='flex'>
      <div className='flex-1 bg-[color:var(--bgSoft)] min-h-screen p-5;'>
        <Sidebar />
      </div>
      <div className='flex-[4] p-5;'>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
