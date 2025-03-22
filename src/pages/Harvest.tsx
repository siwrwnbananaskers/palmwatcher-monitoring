
import { 
  BarChart4, 
  Calendar, 
  ChevronDown, 
  Download, 
  Filter, 
  Truck, 
  Wheat 
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import DashboardCard from "@/components/dashboard/DashboardCard";
import MetricCard from "@/components/dashboard/MetricCard";
import BarChart from "@/components/charts/BarChart";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Sample data
const monthlyYieldData = [
  { month: "Jan", yield: 850, target: 900 },
  { month: "Feb", yield: 880, target: 900 },
  { month: "Mar", yield: 920, target: 900 },
  { month: "Apr", yield: 970, target: 1000 },
  { month: "May", yield: 1050, target: 1000 },
  { month: "Jun", yield: 1040, target: 1000 },
  { month: "Jul", yield: 950, target: 1000 },
];

const sectionYieldData = [
  { section: "A", yield: 280, target: 300 },
  { section: "B", yield: 310, target: 300 },
  { section: "C", yield: 260, target: 300 },
  { section: "D", yield: 240, target: 300 },
];

const harvestHistory = [
  { date: "2023-07-10", section: "A", quantity: 280, quality: "Good", harvester: "Team 1" },
  { date: "2023-07-08", section: "B", quantity: 310, quality: "Excellent", harvester: "Team 2" },
  { date: "2023-07-05", section: "C", quantity: 260, quality: "Average", harvester: "Team 1" },
  { date: "2023-07-02", section: "D", quantity: 240, quality: "Good", harvester: "Team 3" },
  { date: "2023-06-28", section: "A", quantity: 290, quality: "Good", harvester: "Team 2" },
  { date: "2023-06-25", section: "B", quantity: 300, quality: "Excellent", harvester: "Team 1" },
];

const Harvest = () => {
  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">Harvest Results</h1>
        <p className="text-muted-foreground">
          Track and analyze your palm oil harvests across different plantation sections.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <MetricCard
          title="Total Harvest (2023)"
          value="6,660 kg"
          icon={<Wheat className="h-5 w-5" />}
          trend="up"
          change={12}
          trendText="from last year"
        />
        <MetricCard
          title="Last Month Yield"
          value="1,040 kg"
          icon={<BarChart4 className="h-5 w-5" />}
          trend="up"
          change={4}
          trendText="from target"
        />
        <MetricCard
          title="Next Harvest"
          value="Jul 25, 2023"
          icon={<Calendar className="h-5 w-5" />}
          trendText="Section A & B"
        />
        <MetricCard
          title="Avg. Quality Score"
          value="8.4/10"
          icon={<Truck className="h-5 w-5" />}
          trend="up"
          change={5}
          trendText="from last quarter"
        />
      </div>

      {/* Monthly Yield */}
      <DashboardCard 
        title="Monthly Yield" 
        subtitle="Actual vs target harvest in kilograms"
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  2023 <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>2023</DropdownMenuItem>
                <DropdownMenuItem>2022</DropdownMenuItem>
                <DropdownMenuItem>2021</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
        
        <BarChart 
          data={monthlyYieldData} 
          bars={[
            { dataKey: "yield", name: "Actual (kg)", color: "#5ebd00" },
            { dataKey: "target", name: "Target (kg)", color: "#dfe2e5" }
          ]}
          height={350}
          showLegend={true}
          tooltipFormatter={(value) => [`${value} kg`, ""]}
        />
        
        <div className="mt-4 pt-4 border-t grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-muted-foreground mb-1">Total Yield</div>
            <div className="text-2xl font-bold">6,660 kg</div>
          </div>
          <div className="text-center">
            <div className="text-muted-foreground mb-1">Target</div>
            <div className="text-2xl font-bold">6,700 kg</div>
          </div>
          <div className="text-center">
            <div className="text-muted-foreground mb-1">Achievement</div>
            <div className="text-2xl font-bold text-palm-600">99.4%</div>
          </div>
        </div>
      </DashboardCard>

      {/* Two-column layout for additional sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Section Yield */}
        <DashboardCard title="Section Yield" subtitle="Current month by plantation section">
          <BarChart 
            data={sectionYieldData} 
            xAxisKey="section"
            bars={[
              { dataKey: "yield", name: "Actual (kg)", color: "#5ebd00" },
              { dataKey: "target", name: "Target (kg)", color: "#dfe2e5" }
            ]}
            height={250}
            showLegend={true}
            tooltipFormatter={(value) => [`${value} kg`, ""]}
          />
        </DashboardCard>

        {/* Quality Analysis */}
        <DashboardCard title="Quality Analysis" subtitle="Harvest quality distribution">
          <div className="flex flex-col items-center justify-center h-[250px]">
            <div className="w-40 h-40 rounded-full border-8 border-palm-300 flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full border-t-8 border-r-8 border-palm-600" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }}></div>
              <div className="text-center">
                <div className="text-3xl font-bold">84%</div>
                <div className="text-sm text-muted-foreground">Good Quality</div>
              </div>
            </div>
            
            <div className="flex justify-between w-full mt-6">
              <div className="text-center">
                <div className="text-xs text-muted-foreground mb-1">Excellent</div>
                <div className="text-sm font-medium">32%</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-muted-foreground mb-1">Good</div>
                <div className="text-sm font-medium">52%</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-muted-foreground mb-1">Average</div>
                <div className="text-sm font-medium">12%</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-muted-foreground mb-1">Poor</div>
                <div className="text-sm font-medium">4%</div>
              </div>
            </div>
          </div>
        </DashboardCard>
      </div>

      {/* Harvest History */}
      <DashboardCard 
        title="Recent Harvests" 
        subtitle="History of harvests across plantation sections"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  All Sections <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>All Sections</DropdownMenuItem>
                <DropdownMenuItem>Section A</DropdownMenuItem>
                <DropdownMenuItem>Section B</DropdownMenuItem>
                <DropdownMenuItem>Section C</DropdownMenuItem>
                <DropdownMenuItem>Section D</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>

        <div className="overflow-auto">
          <table className="w-full min-w-[600px] text-sm">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Date</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Section</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Quantity</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Quality</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Harvester</th>
              </tr>
            </thead>
            <tbody>
              {harvestHistory.map((harvest, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-3">
                    {new Date(harvest.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="bg-palm-50 p-1 rounded-md text-palm-600">
                        <Wheat className="h-4 w-4" />
                      </div>
                      Section {harvest.section}
                    </div>
                  </td>
                  <td className="px-4 py-3 font-medium">{harvest.quantity} kg</td>
                  <td className="px-4 py-3">
                    <span 
                      className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        harvest.quality === "Excellent" ? "bg-green-100 text-green-700" :
                        harvest.quality === "Good" ? "bg-blue-100 text-blue-700" :
                        harvest.quality === "Average" ? "bg-yellow-100 text-yellow-700" :
                        "bg-red-100 text-red-700"
                      }`}
                    >
                      {harvest.quality}
                    </span>
                  </td>
                  <td className="px-4 py-3">{harvest.harvester}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 text-center">
          <Button variant="outline">View All Harvests</Button>
        </div>
      </DashboardCard>
    </Layout>
  );
};

export default Harvest;
