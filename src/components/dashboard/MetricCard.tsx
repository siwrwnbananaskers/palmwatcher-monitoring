
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const metricCardVariants = cva(
  "glass-panel p-5 flex flex-col card-hover",
  {
    variants: {
      size: {
        default: "",
        sm: "p-4",
        lg: "p-6",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface MetricCardProps extends VariantProps<typeof metricCardVariants> {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  change?: number;
  trend?: "up" | "down" | "neutral";
  trendText?: string;
  className?: string;
}

const MetricCard = ({
  title,
  value,
  icon,
  change,
  trend,
  trendText,
  className,
  size,
}: MetricCardProps) => {
  return (
    <div className={cn(metricCardVariants({ size }), className)}>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        {icon && <div className="text-palm-600">{icon}</div>}
      </div>
      
      <div className="mt-1">
        <div className="text-2xl font-bold">{value}</div>
        
        {(trend || trendText) && (
          <div className="flex items-center mt-1.5 text-sm">
            {trend && (
              <div 
                className={cn(
                  "flex items-center mr-2 font-medium",
                  trend === "up" ? "text-green-600" : trend === "down" ? "text-red-600" : "text-muted-foreground"
                )}
              >
                {trend === "up" ? (
                  <ArrowUpIcon className="h-4 w-4 mr-1" />
                ) : trend === "down" ? (
                  <ArrowDownIcon className="h-4 w-4 mr-1" />
                ) : null}
                {change && `${change}%`}
              </div>
            )}
            {trendText && <span className="text-muted-foreground">{trendText}</span>}
          </div>
        )}
      </div>
    </div>
  );
};

export default MetricCard;
