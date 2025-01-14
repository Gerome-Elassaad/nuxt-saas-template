import { useState } from "react";
import { ChatInput } from "@/components/ChatInput";
import { ToolIcons } from "@/components/ToolIcons";
import { QuickActions } from "@/components/QuickActions";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SideAnalysis } from "@/components/SideAnalysis";
import { Menu, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LoginModal } from "@/components/modals/LoginModal";
import { ChatSidebar } from "@/components/ChatSidebar";
import { Footer } from "@/components/Footer";
import { ResponseViewer } from "@/components/ResponseViewer";
import { ProfileImport } from "@/components/ProfileImport";
import { HelpInfo } from "@/components/HelpInfo";

const Index = () => {
  const [analysisOpen, setAnalysisOpen] = useState(false);
  const [currentQuery, setCurrentQuery] = useState("");
  const [loginOpen, setLoginOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState<"chat" | "profile" | "help">("chat");

  const handleAnalyze = (message: string) => {
    setCurrentQuery(message);
    setAnalysisOpen(true);
  };

  // Sample response for demonstration
  const sampleResponse = {
    type: "ai" as const,
    content: "This is a sample AI response that demonstrates the styling and layout.",
    status: "success" as const,
    timestamp: new Date().toLocaleString()
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 p-4">
        <div className="absolute top-4 left-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(true)}
            className="hover:bg-primary/10"
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        <div className="absolute top-4 right-4 flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLoginOpen(true)}
            className="hover:bg-primary/10"
          >
            <LogIn className="w-5 h-5" />
          </Button>
          <ThemeToggle />
        </div>
        
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] gap-8">
          <div className="text-center space-y-4 animate-slideUp">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
              {activeView === "chat" ? "Ask Me Anything About SEO" :
               activeView === "profile" ? "Import Your Profile" : "Help Center"}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              {activeView === "chat" ? "On Page, Off Page, SEO Coding, Search Trends, We Do It All The Hard Work For You" :
               activeView === "profile" ? "Import your existing profiles and start working right away" :
               "Get help and learn how to use all features"}
            </p>
          </div>

          {activeView === "chat" && (
            <>
              <ChatInput onAnalyze={handleAnalyze} />
              <ResponseViewer response={sampleResponse} />
              <QuickActions />
              <ToolIcons onViewChange={setActiveView} />
            </>
          )}

          {activeView === "profile" && <ProfileImport />}
          {activeView === "help" && <HelpInfo />}
        </div>
      </div>

      <Footer />
      
      <ChatSidebar 
        open={sidebarOpen}
        onOpenChange={setSidebarOpen}
      />

      <SideAnalysis 
        open={analysisOpen} 
        onOpenChange={setAnalysisOpen}
        query={currentQuery}
      />

      <LoginModal 
        open={loginOpen}
        onOpenChange={setLoginOpen}
      />
    </div>
  );
};

export default Index;