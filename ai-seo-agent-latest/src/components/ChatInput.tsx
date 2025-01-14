import { BarChart, Globe, Search, FileText, Code, Link2, Settings, Zap } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { KeywordStatsModal } from "./modals/KeywordStatsModal";
import { DomainInputModal } from "./modals/DomainInputModal";
import { TooltipWrapper } from "@/components/TooltipWrapper";
import { togetherai } from "@ai-sdk/togetherai";
import { generateText } from "ai";
import { fetchAnalyticsData } from "@/utils/googleApi";

interface ChatInputProps {
  onAnalyze: (message: string) => void;
}

export const ChatInput = ({ onAnalyze }: ChatInputProps) => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [keywordStatsOpen, setKeywordStatsOpen] = useState(false);
  const [domainInputOpen, setDomainInputOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsLoading(true);
    try {
      console.log("Sending SEO query:", message);

      const { text } = await generateText({
        model: togetherai("meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo"),
        prompt: message,
      });

      console.log("AI-generated text:", text);
      onAnalyze(text);
      toast.success("Analysis completed!");
    } catch (error) {
      console.error("Error processing query:", error);
      toast.error("Failed to process your query. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEnhance = () => {
    if (!message.trim()) return;
    setMessage(message + " [Include detailed metrics and competitor analysis]");
    toast.success("Prompt enhanced with analytical parameters!");
  };

  const handleAnalytics = async () => {
    try {
      const domain = window.prompt("Enter domain to analyze:");
      if (!domain) return;

      const data = await fetchAnalyticsData(domain);
      toast.success("Analytics data fetched successfully!");
      onAnalyze(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error("Error fetching analytics:", error);
      toast.error("Failed to fetch analytics data");
    }
  };

  return (
    <div className="w-full max-w-3xl space-y-2">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="glass-panel p-2 flex items-center gap-2">
          <Search className="w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask about SEO, analyze websites, or get keyword suggestions..."
            className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
            disabled={isLoading}
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handleEnhance}
            className="hover:bg-primary/10"
            disabled={!message.trim()}
          >
            <Zap className="w-5 h-5 text-yellow-500" />
          </Button>
          <Link2 className="w-5 h-5 text-muted-foreground" />
          <Settings className="w-5 h-5 text-muted-foreground" />
        </div>
      </form>

      <div className="flex justify-center gap-2">
        <TooltipWrapper content="Keyword Statistics">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setKeywordStatsOpen(true)}
            className="hover:bg-primary/10"
          >
            <BarChart className="w-5 h-5" />
          </Button>
        </TooltipWrapper>

        <TooltipWrapper content="Domain Analysis">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDomainInputOpen(true)}
            className="hover:bg-primary/10"
          >
            <Globe className="w-5 h-5" />
          </Button>
        </TooltipWrapper>

        <TooltipWrapper content="Analytics Data">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleAnalytics}
            className="hover:bg-primary/10"
          >
            <FileText className="w-5 h-5" />
          </Button>
        </TooltipWrapper>

        <TooltipWrapper content="SEO Editor">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-primary/10"
          >
            <Code className="w-5 h-5" />
          </Button>
        </TooltipWrapper>
      </div>

      <KeywordStatsModal open={keywordStatsOpen} onOpenChange={setKeywordStatsOpen} />
      <DomainInputModal open={domainInputOpen} onOpenChange={setDomainInputOpen} />
    </div>
  );
};