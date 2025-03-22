
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface BarChartProps {
  data: any[];
  bars: {
    dataKey: string;
    name?: string;
    color: string;
  }[];
  xAxisKey?: string;
  height?: number;
  yAxisFormatter?: (value: number) => string;
  tooltipFormatter?: (value: number) => string;
  showGrid?: boolean;
  showLegend?: boolean;
  stackable?: boolean;
  layout?: "vertical" | "horizontal";
}

const BarChart = ({
  data,
  bars,
  xAxisKey = "name",
  height = 300,
  yAxisFormatter = (value) => `${value}`,
  tooltipFormatter,
  showGrid = true,
  showLegend = true,
  stackable = false,
  layout = "horizontal",
}: BarChartProps) => {
  return (
    <div className="w-full" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          layout={layout}
        >
          {showGrid && (
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
          )}
          
          <XAxis 
            dataKey={xAxisKey} 
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12, fill: '#888' }}
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
          />
          
          {showLegend && <Legend wrapperStyle={{ fontSize: '12px' }} />}
          
          {bars.map((bar, index) => (
            <Bar 
              key={bar.dataKey}
              dataKey={bar.dataKey} 
              name={bar.name || bar.dataKey}
              fill={bar.color}
              radius={[4, 4, 0, 0]}
              stackId={stackable ? "stack" : undefined}
              animationDuration={1000 + index * 200}
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;
