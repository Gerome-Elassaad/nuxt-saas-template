import { Plus, Search, Settings, HelpCircle, CreditCard, Users, LogOut } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ChatSidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ChatSidebar = ({ open, onOpenChange }: ChatSidebarProps) => {
  const chatHistory = [
    "Setting up Repo-Booster SEO Analytics",
    "Create SaaS Landing Page Component",
    "Update SEO Configuration",
    "Implement OAuth Authentication",
    "Create Landing Page Template",
  ];

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-[300px] p-0">
        <div className="h-full flex flex-col">
          <div className="p-4 border-b">
            <Button className="w-full" variant="outline" onClick={() => window.location.reload()}>
              <Plus className="w-4 h-4 mr-2" />
              New Chat
            </Button>
            <div className="mt-4 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search chats..."
                className="bg-muted/50 pl-9"
              />
            </div>
          </div>
          
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-2">
              {chatHistory.map((chat, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start text-sm font-normal"
                >
                  {chat}
                </Button>
              ))}
            </div>
          </ScrollArea>

          <div className="border-t p-4">
            <div className="flex flex-col gap-2">
              <Button variant="ghost" className="justify-start">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button variant="ghost" className="justify-start">
                <HelpCircle className="w-4 h-4 mr-2" />
                Help Center
              </Button>
              <Button variant="ghost" className="justify-start">
                <CreditCard className="w-4 h-4 mr-2" />
                Subscription
              </Button>
              <Button variant="ghost" className="justify-start">
                <Users className="w-4 h-4 mr-2" />
                Switch Account
              </Button>
              <Button variant="ghost" className="justify-start text-destructive">
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
            
            <div className="mt-4 flex items-center gap-2 px-2">
              <div className="w-8 h-8 rounded-full bg-primary/10" />
              <div className="flex-1">
                <p className="text-sm font-medium">User Name</p>
                <p className="text-xs text-muted-foreground">Personal Plan</p>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};