
import { useState } from "react";
import { 
  Calendar,
  Filter, 
  Leaf, 
  Plus, 
  RefreshCw,  
  TreePine
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import DashboardCard from "@/components/dashboard/DashboardCard";
import AreaChart from "@/components/charts/AreaChart";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

// Sample data
const monthlyGrowthData = [
  { date: "2023-01-01", value: 3.2 },
  { date: "2023-02-01", value: 3.8 },
  { date: "2023-03-01", value: 4.1 },
  { date: "2023-04-01", value: 4.3 },
  { date: "2023-05-01", value: 4.6 },
  { date: "2023-06-01", value: 4.2 },
  { date: "2023-07-01", value: 4.0 },
  { date: "2023-08-01", value: 4.2 },
  { date: "2023-09-01", value: 4.5 },
  { date: "2023-10-01", value: 4.7 },
  { date: "2023-11-01", value: 4.4 },
  { date: "2023-12-01", value: 4.2 },
];

const sectionData = [
  { id: "A", name: "Section A", growth: 4.5, health: "Excellent", lastInspection: "2023-07-10", age: "5 years" },
  { id: "B", name: "Section B", growth: 4.2, health: "Good", lastInspection: "2023-07-12", age: "4 years" },
  { id: "C", name: "Section C", growth: 3.8, health: "Average", lastInspection: "2023-07-08", age: "3 years" },
  { id: "D", name: "Section D", growth: 3.5, health: "Needs Attention", lastInspection: "2023-07-15", age: "6 years" },
  { id: "E", name: "Section E", growth: 4.3, health: "Good", lastInspection: "2023-07-11", age: "5 years" },
  { id: "F", name: "Section F", growth: 4.0, health: "Good", lastInspection: "2023-07-14", age: "4 years" },
];

const Growth = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">Palm Growth Monitoring</h1>
        <p className="text-muted-foreground">
          Track the growth rate of your palm trees across different plantation sections.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mb-8">
        <div className="lg:w-3/4">
          <DashboardCard 
            title="Growth Trends" 
            subtitle="Monthly average growth rate in centimeters"
            className="h-full"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <Tabs 
                defaultValue="monthly" 
                className="w-full sm:w-auto"
                onValueChange={(value) => console.log(value)}
              >
                <TabsList>
                  <TabsTrigger value="weekly">Weekly</TabsTrigger>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="yearly">Yearly</TabsTrigger>
                </TabsList>
              </Tabs>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button variant="ghost" size="icon">
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <AreaChart 
              data={monthlyGrowthData} 
              dataKey="value" 
              height={350} 
              color="#5ebd00"
              yAxisFormatter={(value) => `${value} cm`}
              tooltipFormatter={(value) => [`${value} cm`, "Growth Rate"]}
            />
          </DashboardCard>
        </div>

        <div className="lg:w-1/4">
          <DashboardCard 
            title="Growth Summary" 
            className="h-full"
          >
            <div className="space-y-5">
              <div>
                <div className="text-sm text-muted-foreground">Average Growth Rate</div>
                <div className="text-3xl font-bold flex items-center mt-1">
                  4.2 <span className="text-base font-normal ml-1">cm/month</span>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <div className="text-sm text-muted-foreground">Highest Growth</div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="bg-green-100 text-green-600 p-1 rounded">
                    <Leaf className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium">Section A</div>
                    <div className="text-sm text-muted-foreground">4.7 cm/month</div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <div className="text-sm text-muted-foreground">Lowest Growth</div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="bg-yellow-100 text-yellow-600 p-1 rounded">
                    <Leaf className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium">Section D</div>
                    <div className="text-sm text-muted-foreground">3.5 cm/month</div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <div className="text-sm text-muted-foreground">Last Updated</div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="bg-blue-100 text-blue-600 p-1 rounded">
                    <Calendar className="h-4 w-4" />
                  </div>
                  <div className="font-medium">July 15, 2023</div>
                </div>
              </div>
            </div>
          </DashboardCard>
        </div>
      </div>

      {/* Sections Analysis */}
      <DashboardCard 
        title="Section Analysis" 
        subtitle="Growth data by plantation section"
      >
        <div className="flex items-center justify-between mb-4">
          <Tabs 
            defaultValue="all" 
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList>
              <TabsTrigger value="all">All Sections</TabsTrigger>
              <TabsTrigger value="healthy">Healthy</TabsTrigger>
              <TabsTrigger value="attention">Needs Attention</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <Button variant="outline" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Record
          </Button>
        </div>
        
        <div className="overflow-auto">
          <table className="w-full min-w-[600px] text-sm">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Section</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Growth Rate</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Health Status</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Last Inspection</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Age</th>
              </tr>
            </thead>
            <tbody>
              {sectionData
                .filter(section => {
                  if (activeTab === "all") return true;
                  if (activeTab === "healthy") return section.health === "Excellent" || section.health === "Good";
                  if (activeTab === "attention") return section.health === "Average" || section.health === "Needs Attention";
                  return true;
                })
                .map((section) => (
                  <tr key={section.id} className="border-b">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="bg-palm-50 p-1.5 rounded-md">
                          <TreePine className="h-4 w-4 text-palm-600" />
                        </div>
                        <div className="font-medium">{section.name}</div>
                      </div>
                    </td>
                    <td className="px-4 py-3">{section.growth} cm/month</td>
                    <td className="px-4 py-3">
                      <span 
                        className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                          section.health === "Excellent" ? "bg-green-100 text-green-700" :
                          section.health === "Good" ? "bg-blue-100 text-blue-700" :
                          section.health === "Average" ? "bg-yellow-100 text-yellow-700" :
                          "bg-red-100 text-red-700"
                        }`}
                      >
                        {section.health}
                      </span>
                    </td>
                    <td className="px-4 py-3">{new Date(section.lastInspection).toLocaleDateString()}</td>
                    <td className="px-4 py-3">{section.age}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </DashboardCard>
    </Layout>
  );
};

export default Growth;
