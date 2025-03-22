
import { useMemo } from "react";
import { AreaChart as RechartsAreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { format } from "date-fns";

interface DataPoint {
  date: string;
  value: number;
  [key: string]: any;
}

interface AreaChartProps {
  data: DataPoint[];
  dataKey: string;
  xAxisKey?: string;
  color?: string;
  gradientFrom?: string;
  gradientTo?: string;
  height?: number;
  yAxisFormatter?: (value: number) => string;
  tooltipFormatter?: (value: number) => string;
  showGrid?: boolean;
  xAxisFormatter?: (value: string) => string;
}

const AreaChart = ({
  data,
  dataKey,
  xAxisKey = "date",
  color = "#5ebd00",
  gradientFrom = "rgba(94, 189, 0, 0.4)",
  gradientTo = "rgba(94, 189, 0, 0)",
  height = 300,
  yAxisFormatter = (value) => `${value}`,
  tooltipFormatter = (value) => `${value}`,
  showGrid = true,
  xAxisFormatter = (date) => format(new Date(date), "MMM d"),
}: AreaChartProps) => {
  // Ensure data is properly formatted and sorted by date
  const formattedData = useMemo(() => {
    return [...data].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [data]);

  return (
    <div className="w-full" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsAreaChart
          data={formattedData}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id={`gradient-${dataKey}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={gradientFrom} stopOpacity={0.8} />
              <stop offset="95%" stopColor={gradientTo} stopOpacity={0} />
            </linearGradient>
          </defs>
          
          {showGrid && (
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
          )}
          
          <XAxis 
            dataKey={xAxisKey} 
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12, fill: '#888' }}
            tickFormatter={xAxisFormatter}
            minTickGap={15}
          />
          
          <YAxis 
            tickFormatter={yAxisFormatter}
            tick={{ fontSize: 12, fill: '#888' }}
            axisLine={false}
            tickLine={false}
            width={40}
          />
          
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              border: 'none',
              fontSize: '12px',
            }}
            formatter={tooltipFormatter}
            labelFormatter={(label) => format(new Date(label), "MMMM d, yyyy")}
          />
          
          <Area 
            type="monotone" 
            dataKey={dataKey} 
            stroke={color} 
            strokeWidth={2}
            fillOpacity={1} 
            fill={`url(#gradient-${dataKey})`} 
            animationDuration={1500}
          />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChart;
