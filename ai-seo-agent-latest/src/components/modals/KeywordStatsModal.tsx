import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { fetchSearchConsoleData, type KeywordData } from "@/utils/googleApi";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface KeywordStatsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const KeywordStatsModal = ({ open, onOpenChange }: KeywordStatsModalProps) => {
  const [domain, setDomain] = useState("");
  const [keywords, setKeywords] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [keywordData, setKeywordData] = useState<KeywordData[]>([]);

  const handleAnalyze = async () => {
    if (!domain || !keywords) {
      toast.error("Please enter both domain and keywords");
      return;
    }

    setIsLoading(true);
    try {
      const keywordList = keywords.split(",").map(k => k.trim());
      const data = await fetchSearchConsoleData(domain, keywordList);
      setKeywordData(data);
      toast.success("Keyword analysis completed!");
    } catch (error) {
      console.error("Error analyzing keywords:", error);
      toast.error("Failed to analyze keywords. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Keyword Analysis</DialogTitle>
          <DialogDescription>
            Analyze keyword performance using Google Search Console data
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="domain" className="text-sm font-medium">Domain</label>
            <Input
              id="domain"
              placeholder="example.com"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="keywords" className="text-sm font-medium">Keywords</label>
            <Input
              id="keywords"
              placeholder="Enter keywords separated by commas"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
            />
          </div>

          <Button 
            onClick={handleAnalyze} 
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              "Analyze Keywords"
            )}
          </Button>

          {keywordData.length > 0 && (
            <div className="space-y-4">
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={keywordData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="keyword" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="searchVolume" fill="#8884d8" name="Search Volume" />
                    <Bar dataKey="clicks" fill="#82ca9d" name="Clicks" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="grid gap-2">
                {keywordData.map((kw) => (
                  <div key={kw.keyword} className="glass-panel p-4">
                    <h3 className="font-semibold mb-2">{kw.keyword}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Search Volume</p>
                        <p className="font-medium">{kw.searchVolume}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Position</p>
                        <p className="font-medium">{kw.position}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Clicks</p>
                        <p className="font-medium">{kw.clicks}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">CTR</p>
                        <p className="font-medium">{kw.ctr.toFixed(2)}%</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};