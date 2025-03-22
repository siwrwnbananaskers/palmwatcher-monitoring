
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  
  // For mobile devices, default to sidebar closed
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  // Animation for page transitions
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar isOpen={isSidebarOpen} />
      
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'ml-0'}`}>
        <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        
        <main className="container pt-24 pb-10 mx-auto animate-fade-up">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
