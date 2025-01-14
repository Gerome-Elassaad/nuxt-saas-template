import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { BarChart, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Line, ResponsiveContainer } from "recharts";
import { Info } from "lucide-react";

const sampleData = [
  { name: "Jan", value: 400, engagement: 240 },
  { name: "Feb", value: 300, engagement: 139 },
  { name: "Mar", value: 200, engagement: 980 },
  { name: "Apr", value: 278, engagement: 390 },
  { name: "May", value: 189, engagement: 480 },
];

interface SideAnalysisProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  analysisData?: typeof sampleData;
  query?: string;
}

export const SideAnalysis = ({ open, onOpenChange, query = "", analysisData = sampleData }: SideAnalysisProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[90%] sm:w-[540px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Analysis for: {query}</SheetTitle>
          <SheetDescription>
            Detailed metrics and visualization of your SEO data
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-8">
          <div className="glass-panel p-4">
            <h3 className="text-lg font-semibold mb-4">Trend Analysis</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={analysisData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
                <Line type="monotone" dataKey="engagement" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-4 flex items-start gap-2">
              <Info className="w-5 h-5 text-blue-500 mt-1" />
              <p className="text-sm text-muted-foreground">
                This chart shows the trend of your key metrics over time. The purple line represents overall value, while the green line shows engagement levels.
              </p>
            </div>
          </div>

          <div className="glass-panel p-4">
            <h3 className="text-lg font-semibold mb-4">Metric Comparison</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={analysisData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
                <Bar dataKey="engagement" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 flex items-start gap-2">
              <Info className="w-5 h-5 text-blue-500 mt-1" />
              <p className="text-sm text-muted-foreground">
                The bar chart provides a clear comparison between different metrics for each time period. This helps identify patterns and relationships in your data.
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};