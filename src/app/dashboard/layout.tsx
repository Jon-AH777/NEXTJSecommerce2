import Sidebar from "./ui/dashboard/sidebar/sidebar";
import Navbar from "./ui/dashboard/navbar/navbar";
import Footer from "./ui/dashboard/footer/footer";

const Layout = ({
  children,
}: {
  children: React.ReactNode;

}) => {
  return (
    <div className="flex">
      <div className="flex-1 bg-[color:var(--bgSoft)] min-h-screen p-5;">
        <Sidebar />
      </div>
      <div className="flex-[4] p-5;">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout;