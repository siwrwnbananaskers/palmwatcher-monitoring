
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  BarChart3, 
  Cloud, 
  LayoutDashboard, 
  Menu, 
  PanelLeftClose, 
  PanelLeftOpen, 
  Sprout, 
  Sun, 
  Wheat 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  to: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { name: "Dashboard", to: "/", icon: LayoutDashboard },
  { name: "Growth", to: "/growth", icon: Sprout },
  { name: "Weather", to: "/weather", icon: Cloud },
  { name: "Harvest", to: "/harvest", icon: Wheat },
  { name: "Reports", to: "/reports", icon: BarChart3 },
];

const Navbar = ({ isSidebarOpen, toggleSidebar }: { isSidebarOpen: boolean; toggleSidebar: () => void }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-subtle"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex"
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
          >
            {isSidebarOpen ? (
              <PanelLeftClose className="h-5 w-5" />
            ) : (
              <PanelLeftOpen className="h-5 w-5" />
            )}
          </Button>
          
          <Link
            to="/"
            className="flex items-center gap-2 text-foreground transition-opacity hover:opacity-80"
          >
            <div className="bg-gradient-palm p-1.5 rounded-md">
              <Sprout className="h-5 w-5 text-white" />
            </div>
            <span className="font-sf font-semibold text-lg">PalmWatch</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className={cn(
                "nav-link flex items-center gap-2",
                location.pathname === item.to && "active"
              )}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border animate-fade-in md:hidden">
            <nav className="container flex flex-col py-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={cn(
                    "nav-link flex items-center gap-2 my-1 px-2",
                    location.pathname === item.to && "active"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        )}

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Toggle theme">
            <Sun className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
