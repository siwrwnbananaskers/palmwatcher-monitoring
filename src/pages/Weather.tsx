
import { useState } from "react";
import { 
  Cloud, 
  Droplets, 
  SunDim, 
  Thermometer, 
  Wind 
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import DashboardCard from "@/components/dashboard/DashboardCard";
import AreaChart from "@/components/charts/AreaChart";
import BarChart from "@/components/charts/BarChart";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { format } from "date-fns";

// Sample data
const temperatureData = [
  { date: "2023-07-01", value: 29 },
  { date: "2023-07-02", value: 30 },
  { date: "2023-07-03", value: 31 },
  { date: "2023-07-04", value: 32 },
  { date: "2023-07-05", value: 30 },
  { date: "2023-07-06", value: 28 },
  { date: "2023-07-07", value: 29 },
  { date: "2023-07-08", value: 29 },
  { date: "2023-07-09", value: 30 },
  { date: "2023-07-10", value: 30 },
  { date: "2023-07-11", value: 31 },
  { date: "2023-07-12", value: 32 },
  { date: "2023-07-13", value: 31 },
  { date: "2023-07-14", value: 30 },
];

const rainfallData = [
  { date: "2023-07-01", value: 12 },
  { date: "2023-07-02", value: 0 },
  { date: "2023-07-03", value: 0 },
  { date: "2023-07-04", value: 5 },
  { date: "2023-07-05", value: 22 },
  { date: "2023-07-06", value: 8 },
  { date: "2023-07-07", value: 0 },
  { date: "2023-07-08", value: 0 },
  { date: "2023-07-09", value: 15 },
  { date: "2023-07-10", value: 10 },
  { date: "2023-07-11", value: 0 },
  { date: "2023-07-12", value: 0 },
  { date: "2023-07-13", value: 5 },
  { date: "2023-07-14", value: 18 },
];

const monthlyData = [
  { month: "Jan", rainfall: 120, temperature: 28 },
  { month: "Feb", rainfall: 150, temperature: 29 },
  { month: "Mar", rainfall: 180, temperature: 30 },
  { month: "Apr", rainfall: 220, temperature: 31 },
  { month: "May", rainfall: 250, temperature: 32 },
  { month: "Jun", rainfall: 200, temperature: 31 },
  { month: "Jul", rainfall: 180, temperature: 30 },
];

const Weather = () => {
  const [dateRange, setDateRange] = useState<"7days" | "14days" | "30days">("14days");

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">Weather Conditions</h1>
        <p className="text-muted-foreground">
          Monitor temperature, rainfall, and other weather factors affecting your plantation.
        </p>
      </div>

      {/* Current Weather */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <DashboardCard title="Current Weather" className="col-span-2 md:col-span-1 lg:col-span-2">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-1 flex flex-col items-center">
              <div className="text-sky-500">
                <SunDim className="h-16 w-16" />
              </div>
              <div className="text-lg font-medium mt-2">Partly Cloudy</div>
              <div className="text-4xl font-bold mt-1">30°C</div>
              <div className="text-sm text-muted-foreground mt-1">Feels like 32°C</div>
            </div>
            
            <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <div className="bg-blue-50 p-2 rounded-md text-blue-500">
                  <Droplets className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Humidity</div>
                  <div className="text-lg font-medium">75%</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="bg-blue-50 p-2 rounded-md text-blue-500">
                  <Wind className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Wind</div>
                  <div className="text-lg font-medium">12 km/h</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="bg-blue-50 p-2 rounded-md text-blue-500">
                  <SunDim className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">UV Index</div>
                  <div className="text-lg font-medium">High</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="bg-blue-50 p-2 rounded-md text-blue-500">
                  <Cloud className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Cloud Cover</div>
                  <div className="text-lg font-medium">40%</div>
                </div>
              </div>
            </div>
          </div>
        </DashboardCard>

        <DashboardCard title="5-Day Forecast">
          <div className="flex overflow-x-auto gap-3 py-2 -mx-2 px-2">
            {[
              { day: "Today", temp: 32, icon: <SunDim className="h-5 w-5" />, condition: "Sunny" },
              { day: "Tue", temp: 30, icon: <Cloud className="h-5 w-5" />, condition: "Cloudy" },
              { day: "Wed", temp: 31, icon: <SunDim className="h-5 w-5" />, condition: "Sunny" },
              { day: "Thu", temp: 29, icon: <Cloud className="h-5 w-5" />, condition: "Cloudy" },
              { day: "Fri", temp: 28, icon: <Droplets className="h-5 w-5" />, condition: "Rain" },
            ].map((item, i) => (
              <div key={i} className="flex-none text-center">
                <div className="font-medium">{item.day}</div>
                <div className="text-sky-500 my-2">{item.icon}</div>
                <div className="font-semibold">{item.temp}°</div>
                <div className="text-xs text-muted-foreground">{item.condition}</div>
              </div>
            ))}
          </div>
        </DashboardCard>

        <DashboardCard title="Alerts">
          <div className="space-y-3">
            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3">
              <div className="flex items-center gap-2">
                <Thermometer className="h-5 w-5 text-yellow-500" />
                <div className="font-medium text-yellow-700">High Temperature Alert</div>
              </div>
              <p className="text-sm text-yellow-600 mt-1">
                Temperatures expected to exceed 32°C for the next 3 days. Consider additional irrigation.
              </p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
              <div className="flex items-center gap-2">
                <Droplets className="h-5 w-5 text-blue-500" />
                <div className="font-medium text-blue-700">Heavy Rain Expected</div>
              </div>
              <p className="text-sm text-blue-600 mt-1">
                Rain forecast for Friday with potential for 25-30mm precipitation.
              </p>
            </div>
          </div>
        </DashboardCard>
      </div>

      {/* Temperature Trends */}
      <DashboardCard 
        title="Temperature Trends" 
        subtitle="Daily average temperature in Celsius"
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-4">
          <Tabs 
            defaultValue="14days" 
            value={dateRange}
            onValueChange={(v) => setDateRange(v as "7days" | "14days" | "30days")}
          >
            <TabsList>
              <TabsTrigger value="7days">7 Days</TabsTrigger>
              <TabsTrigger value="14days">14 Days</TabsTrigger>
              <TabsTrigger value="30days">30 Days</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <AreaChart 
          data={temperatureData.slice(0, dateRange === "7days" ? 7 : dateRange === "14days" ? 14 : 30)} 
          dataKey="value" 
          color="#f59e0b"
          gradientFrom="rgba(245, 158, 11, 0.4)"
          gradientTo="rgba(245, 158, 11, 0)"
          height={300} 
          yAxisFormatter={(value) => `${value}°C`}
          tooltipFormatter={(value) => [`${value}°C`, "Temperature"]}
        />
      </DashboardCard>

      {/* Rainfall Analysis */}
      <DashboardCard 
        title="Rainfall Analysis" 
        subtitle="Daily precipitation in millimeters"
        className="mb-8"
      >
        <BarChart 
          data={rainfallData.slice(0, dateRange === "7days" ? 7 : dateRange === "14days" ? 14 : 30)} 
          xAxisKey="date"
          bars={[{ dataKey: "value", name: "Rainfall", color: "#0ea5e9" }]}
          height={300}
          yAxisFormatter={(value) => `${value} mm`}
          tooltipFormatter={(value) => [`${value} mm`, "Rainfall"]}
        />
      </DashboardCard>

      {/* Monthly Weather Comparison */}
      <DashboardCard 
        title="Monthly Weather Comparison" 
        subtitle="Average temperature and total rainfall by month"
      >
        <BarChart 
          data={monthlyData} 
          xAxisKey="month"
          bars={[
            { dataKey: "temperature", name: "Temp (°C)", color: "#f59e0b" },
            { dataKey: "rainfall", name: "Rainfall (mm)", color: "#0ea5e9" }
          ]}
          height={300}
          showLegend={true}
        />
      </DashboardCard>
    </Layout>
  );
};

export default Weather;
