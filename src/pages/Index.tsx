
import { useState } from "react";
import { 
  ArrowUpRight, 
  Calendar, 
  Cloud, 
  Droplets, 
  Leaf, 
  Palette, 
  SunDim, 
  Thermometer, 
  Wheat 
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import DashboardCard from "@/components/dashboard/DashboardCard";
import MetricCard from "@/components/dashboard/MetricCard";
import AreaChart from "@/components/charts/AreaChart";
import BarChart from "@/components/charts/BarChart";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Sample data for the dashboard
const growthData = [
  { date: "2023-01-01", value: 25 },
  { date: "2023-02-01", value: 32 },
  { date: "2023-03-01", value: 38 },
  { date: "2023-04-01", value: 43 },
  { date: "2023-05-01", value: 47 },
  { date: "2023-06-01", value: 54 },
  { date: "2023-07-01", value: 60 },
  { date: "2023-08-01", value: 65 },
  { date: "2023-09-01", value: 71 },
  { date: "2023-10-01", value: 76 },
  { date: "2023-11-01", value: 80 },
  { date: "2023-12-01", value: 85 },
];

const harvestData = [
  { month: "Jan", yield: 850, target: 900 },
  { month: "Feb", yield: 880, target: 900 },
  { month: "Mar", yield: 920, target: 900 },
  { month: "Apr", yield: 970, target: 1000 },
  { month: "May", yield: 1050, target: 1000 },
  { month: "Jun", yield: 1040, target: 1000 },
];

const weatherData = [
  { date: "2023-07-01", temperature: 29, rainfall: 12 },
  { date: "2023-07-02", temperature: 30, rainfall: 0 },
  { date: "2023-07-03", temperature: 31, rainfall: 0 },
  { date: "2023-07-04", temperature: 32, rainfall: 5 },
  { date: "2023-07-05", temperature: 30, rainfall: 22 },
  { date: "2023-07-06", temperature: 28, rainfall: 8 },
  { date: "2023-07-07", temperature: 29, rainfall: 0 },
];

const Index = () => {
  const [timeRange, setTimeRange] = useState<"week" | "month" | "year">("month");

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">Palm Oil Monitoring Dashboard</h1>
        <p className="text-muted-foreground">
          Monitor your palm oil plantation's growth, weather conditions, and harvest results.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-8">
        <MetricCard
          title="Average Growth"
          value="4.2 cm"
          icon={<Leaf className="h-5 w-5" />}
          trend="up"
          change={8}
          trendText="from last month"
        />
        <MetricCard
          title="Temperature"
          value="32°C"
          icon={<Thermometer className="h-5 w-5" />}
          trend="up"
          change={2}
          trendText="from yesterday"
        />
        <MetricCard
          title="Rainfall"
          value="120 mm"
          icon={<Droplets className="h-5 w-5" />}
          trend="down"
          change={5}
          trendText="from last week"
        />
        <MetricCard
          title="Last Harvest"
          value="1,250 kg"
          icon={<Wheat className="h-5 w-5" />}
          trend="up"
          change={12}
          trendText="from previous"
        />
      </div>

      {/* Growth Monitoring */}
      <DashboardCard 
        title="Palm Growth Monitoring" 
        subtitle="Average growth rate in centimeters"
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            {["week", "month", "year"].map((range) => (
              <Button
                key={range}
                variant="outline"
                size="sm"
                className={cn(
                  timeRange === range && "bg-primary text-white hover:bg-primary/90"
                )}
                onClick={() => setTimeRange(range as "week" | "month" | "year")}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </Button>
            ))}
          </div>
          <Button size="sm" variant="ghost" className="text-palm-600">
            <ArrowUpRight className="h-4 w-4 mr-1" />
            Details
          </Button>
        </div>
        <AreaChart 
          data={growthData} 
          dataKey="value" 
          height={300} 
          yAxisFormatter={(value) => `${value} cm`}
          tooltipFormatter={(value) => [`${value} cm`, "Growth"]}
        />
      </DashboardCard>

      {/* Two-column layout for additional sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Weather Conditions */}
        <DashboardCard title="Weather Conditions" subtitle="Last 7 days temperature and rainfall">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center p-1.5 rounded-md bg-sky-50 text-sky-600">
              <SunDim className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs font-medium text-muted-foreground">Current Weather</div>
              <div className="text-base font-medium">Partly Cloudy, 30°C</div>
            </div>
          </div>
          <BarChart 
            data={weatherData}
            xAxisKey="date"
            bars={[
              { dataKey: "temperature", name: "Temperature (°C)", color: "#f59e0b" },
              { dataKey: "rainfall", name: "Rainfall (mm)", color: "#0ea5e9" }
            ]}
            height={220}
            tooltipFormatter={(value, name) => [value, name]}
            showLegend={true}
          />
        </DashboardCard>

        {/* Harvest Results */}
        <DashboardCard title="Harvest Results" subtitle="Monthly yield compared to targets">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center p-1.5 rounded-md bg-soil-50 text-soil-700">
              <Calendar className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs font-medium text-muted-foreground">Next Harvest</div>
              <div className="text-base font-medium">July 28, 2023</div>
            </div>
          </div>
          <BarChart 
            data={harvestData}
            xAxisKey="month"
            bars={[
              { dataKey: "yield", name: "Actual Yield (kg)", color: "#5ebd00" },
              { dataKey: "target", name: "Target (kg)", color: "#dfe2e5" }
            ]}
            height={220}
            tooltipFormatter={(value, name) => [`${value} kg`, name]}
            showLegend={true}
          />
        </DashboardCard>
      </div>

      {/* Palm Health Overview */}
      <DashboardCard 
        title="Palm Health Overview" 
        subtitle="Current health status of your plantation sections"
        className="mb-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {["Section A", "Section B", "Section C", "Section D"].map((section, index) => (
            <div 
              key={section} 
              className="glass-panel p-4 border border-border rounded-lg flex flex-col items-center"
            >
              <div 
                className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center mb-3",
                  index === 0 ? "bg-green-100 text-green-600" :
                  index === 1 ? "bg-green-100 text-green-600" :
                  index === 2 ? "bg-yellow-100 text-yellow-600" :
                  "bg-red-100 text-red-600"
                )}
              >
                <Palette className="h-8 w-8" />
              </div>
              <h4 className="font-medium">{section}</h4>
              <div 
                className={cn(
                  "text-sm font-medium mt-1",
                  index === 0 ? "text-green-600" :
                  index === 1 ? "text-green-600" :
                  index === 2 ? "text-yellow-600" :
                  "text-red-600"
                )}
              >
                {index === 0 ? "Excellent" :
                 index === 1 ? "Good" :
                 index === 2 ? "Average" :
                 "Needs Attention"}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {index === 0 ? "No issues detected" :
                 index === 1 ? "Minor nutrient deficiency" :
                 index === 2 ? "Requires more water" :
                 "Pest infestation detected"}
              </p>
            </div>
          ))}
        </div>
      </DashboardCard>

      {/* Weather Forecast */}
      <DashboardCard title="Weather Forecast" subtitle="5-day forecast for planning">
        <div className="flex flex-nowrap gap-4 overflow-x-auto py-3 px-2 -mx-2 scrollbar-thin">
          {[
            { day: "Today", temp: "32°", icon: <SunDim className="h-6 w-6" />, condition: "Sunny" },
            { day: "Tue", temp: "30°", icon: <Cloud className="h-6 w-6" />, condition: "Cloudy" },
            { day: "Wed", temp: "31°", icon: <SunDim className="h-6 w-6" />, condition: "Sunny" },
            { day: "Thu", temp: "29°", icon: <Cloud className="h-6 w-6" />, condition: "Cloudy" },
            { day: "Fri", temp: "28°", icon: <Droplets className="h-6 w-6" />, condition: "Rain" },
          ].map((item) => (
            <div key={item.day} className="flex-none w-24 text-center">
              <div className="font-medium">{item.day}</div>
              <div className="text-sky-500 my-2 flex justify-center">{item.icon}</div>
              <div className="text-lg font-semibold">{item.temp}</div>
              <div className="text-xs text-muted-foreground">{item.condition}</div>
            </div>
          ))}
        </div>
      </DashboardCard>
    </Layout>
  );
};

export default Index;
