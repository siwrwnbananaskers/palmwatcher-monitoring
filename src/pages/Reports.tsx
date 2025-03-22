
import { 
  ArrowRight, 
  BarChart4, 
  Calendar, 
  FileText, 
  PieChart, 
  Plus, 
  Users 
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import DashboardCard from "@/components/dashboard/DashboardCard";
import MetricCard from "@/components/dashboard/MetricCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

// Sample data
const recentReports = [
  { 
    id: 1, 
    title: "Monthly Productivity Analysis", 
    date: "2023-07-15", 
    author: "John Doe", 
    type: "Performance",
    status: "Published"
  },
  { 
    id: 2, 
    title: "Harvest Quality Assessment", 
    date: "2023-07-12", 
    author: "Jane Smith", 
    type: "Quality",
    status: "Published"
  },
  { 
    id: 3, 
    title: "Plantation Expansion Proposal", 
    date: "2023-07-10", 
    author: "Michael Johnson", 
    type: "Planning",
    status: "Draft"
  },
  { 
    id: 4, 
    title: "Q2 Financial Summary", 
    date: "2023-07-05", 
    author: "Sarah Wilson", 
    type: "Financial",
    status: "Published"
  },
  { 
    id: 5, 
    title: "Pest Control Effectiveness", 
    date: "2023-07-01", 
    author: "Robert Brown", 
    type: "Maintenance",
    status: "Published"
  },
];

const reportTypes = [
  { 
    title: "Performance",
    description: "Productivity and efficiency metrics",
    icon: <BarChart4 className="h-5 w-5" />,
    color: "bg-blue-100 text-blue-600"
  },
  { 
    title: "Quality",
    description: "Product quality assessments",
    icon: <PieChart className="h-5 w-5" />,
    color: "bg-green-100 text-green-600"
  },
  { 
    title: "Financial",
    description: "Revenue and cost analysis",
    icon: <FileText className="h-5 w-5" />,
    color: "bg-purple-100 text-purple-600"
  },
  { 
    title: "Planning",
    description: "Future strategies and projections",
    icon: <Calendar className="h-5 w-5" />,
    color: "bg-amber-100 text-amber-600"
  },
];

const contributors = [
  { id: 1, name: "John Doe", role: "Plantation Manager", reports: 12, avatar: "JD" },
  { id: 2, name: "Jane Smith", role: "Quality Assurance", reports: 8, avatar: "JS" },
  { id: 3, name: "Michael Johnson", role: "Agricultural Consultant", reports: 6, avatar: "MJ" },
];

const Reports = () => {
  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">Productivity Reports</h1>
        <p className="text-muted-foreground">
          Access and manage reports on plantation productivity and performance.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <MetricCard
          title="Total Reports"
          value="24"
          icon={<FileText className="h-5 w-5" />}
          trend="up"
          change={20}
          trendText="from last quarter"
        />
        <MetricCard
          title="Published"
          value="18"
          icon={<FileText className="h-5 w-5" />}
          trendText="75% of total"
        />
        <MetricCard
          title="Draft"
          value="6"
          icon={<FileText className="h-5 w-5" />}
          trendText="25% of total"
        />
        <MetricCard
          title="Contributors"
          value="5"
          icon={<Users className="h-5 w-5" />}
          trend="up"
          change={1}
          trendText="from last month"
        />
      </div>

      {/* Report Types */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {reportTypes.map((type) => (
          <Card key={type.title} className="border rounded-lg hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className={`p-2 rounded-md ${type.color}`}>
                  {type.icon}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg mb-1">{type.title} Reports</CardTitle>
              <CardDescription className="mb-3">{type.description}</CardDescription>
              <Button variant="outline" size="sm" className="w-full mt-2">
                View Reports
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Reports & Contributors */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <DashboardCard 
          title="Recent Reports" 
          subtitle="Latest reports from your team"
          className="lg:col-span-2"
        >
          <div className="flex justify-between items-center mb-4">
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              All Time
            </Button>
            <Button variant="default" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              New Report
            </Button>
          </div>
          
          <div className="space-y-4">
            {recentReports.map((report) => (
              <div key={report.id} className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/20 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="bg-palm-50 p-2 rounded-md text-palm-600">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">{report.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {new Date(report.date).toLocaleDateString()} • {report.author}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <span 
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      report.type === "Performance" ? "bg-blue-100 text-blue-700" :
                      report.type === "Quality" ? "bg-green-100 text-green-700" :
                      report.type === "Financial" ? "bg-purple-100 text-purple-700" :
                      "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {report.type}
                  </span>
                  
                  <span 
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      report.status === "Published" ? "bg-emerald-100 text-emerald-700" :
                      "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {report.status}
                  </span>
                  
                  <Button variant="ghost" size="icon">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 text-center">
            <Button variant="outline">View All Reports</Button>
          </div>
        </DashboardCard>

        <DashboardCard 
          title="Top Contributors" 
          subtitle="Most active report authors"
        >
          <div className="space-y-4">
            {contributors.map((user) => (
              <div key={user.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="" alt={user.name} />
                    <AvatarFallback>{user.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-sm text-muted-foreground">{user.role}</div>
                  </div>
                </div>
                
                <div className="bg-muted/30 px-2 py-1 rounded text-sm">
                  {user.reports} reports
                </div>
              </div>
            ))}
          </div>
          
          <Separator className="my-4" />
          
          <Button variant="outline" className="w-full">
            <Users className="h-4 w-4 mr-2" />
            View All Users
          </Button>
        </DashboardCard>
      </div>

      {/* Report Templates */}
      <DashboardCard 
        title="Report Templates" 
        subtitle="Pre-designed formats for common reports"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { title: "Monthly Performance", icon: <BarChart4 className="h-5 w-5" />, color: "bg-blue-100 text-blue-600" },
            { title: "Harvest Summary", icon: <FileText className="h-5 w-5" />, color: "bg-green-100 text-green-600" },
            { title: "Quality Assessment", icon: <PieChart className="h-5 w-5" />, color: "bg-purple-100 text-purple-600" },
            { title: "Financial Report", icon: <FileText className="h-5 w-5" />, color: "bg-amber-100 text-amber-600" },
          ].map((template, index) => (
            <Card key={index} className="border hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className={`p-3 rounded-full ${template.color} mb-3`}>
                    {template.icon}
                  </div>
                  <CardTitle className="text-base mb-2">{template.title}</CardTitle>
                  <Button variant="outline" size="sm" className="mt-2 w-full">
                    Use Template
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </DashboardCard>
    </Layout>
  );
};

export default Reports;
