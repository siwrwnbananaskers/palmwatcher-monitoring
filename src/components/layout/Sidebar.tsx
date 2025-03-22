
import { Link, useLocation } from "react-router-dom";
import { 
  BarChart3, 
  Cloud, 
  LayoutDashboard, 
  Settings, 
  Sprout, 
  User, 
  Wheat 
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface SidebarItem {
  title: string;
  icon: React.ElementType;
  href: string;
}

const mainNavItems: SidebarItem[] = [
  { title: "Dashboard", icon: LayoutDashboard, href: "/" },
  { title: "Growth Monitor", icon: Sprout, href: "/growth" },
  { title: "Weather Conditions", icon: Cloud, href: "/weather" },
  { title: "Harvest Results", icon: Wheat, href: "/harvest" },
  { title: "Reports", icon: BarChart3, href: "/reports" },
];

const userNavItems: SidebarItem[] = [
  { title: "Settings", icon: Settings, href: "/settings" },
  { title: "Profile", icon: User, href: "/profile" },
];

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const location = useLocation();
  
  if (!isOpen) return null;
  
  return (
    <aside className="fixed left-0 top-0 z-30 h-screen w-64 border-r border-border bg-sidebar overflow-hidden transition-transform duration-300 md:translate-x-0 -translate-x-full data-[state=open]:translate-x-0">
      <div className="flex h-16 items-center border-b border-border px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-gradient-palm p-1.5 rounded-md">
            <Sprout className="h-5 w-5 text-white" />
          </div>
          <span className="font-sf font-semibold text-lg">PalmWatch</span>
        </Link>
      </div>
      
      <ScrollArea className="h-[calc(100vh-4rem)]">
        <div className="px-3 py-4">
          <div className="mb-6">
            <h4 className="section-title px-4 mb-2">Monitoring</h4>
            <nav className="flex flex-col gap-1">
              {mainNavItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-4 py-2.5 text-sm font-medium transition-colors",
                    location.pathname === item.href
                      ? "bg-sidebar-accent text-sidebar-primary"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
          
          <Separator className="my-4" />
          
          <div>
            <h4 className="section-title px-4 mb-2">Account</h4>
            <nav className="flex flex-col gap-1">
              {userNavItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-4 py-2.5 text-sm font-medium transition-colors",
                    location.pathname === item.href
                      ? "bg-sidebar-accent text-sidebar-primary"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </ScrollArea>
    </aside>
  );
};

export default Sidebar;
