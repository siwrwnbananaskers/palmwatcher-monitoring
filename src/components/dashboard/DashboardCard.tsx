
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
}

const DashboardCard = ({ title, subtitle, className, children }: DashboardCardProps) => {
  return (
    <div 
      className={cn(
        "glass-panel p-5 overflow-hidden card-hover", 
        className
      )}
    >
      <div className="mb-4">
        <h3 className="text-lg font-medium text-foreground">{title}</h3>
        {subtitle && (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardCard;
