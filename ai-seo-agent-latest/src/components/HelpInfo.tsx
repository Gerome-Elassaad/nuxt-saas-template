import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const HelpInfo = () => {
  const helpTopics = [
    {
      title: "Getting Started",
      description: "Learn the basics of setting up your environment",
      icon: <HelpCircle className="w-5 h-5" />
    },
    {
      title: "API Integration",
      description: "How to connect and use various APIs",
      icon: <HelpCircle className="w-5 h-5" />
    },
    {
      title: "Profile Management",
      description: "Managing your profiles and settings",
      icon: <HelpCircle className="w-5 h-5" />
    }
  ];

  const showHelp = (topic: string) => {
    toast.info(`Opening help for: ${topic}`);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto animate-fadeIn">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HelpCircle className="w-6 h-6" />
          Help & Documentation
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {helpTopics.map((topic) => (
          <Button
            key={topic.title}
            variant="outline"
            className="flex items-center justify-between p-4 h-auto"
            onClick={() => showHelp(topic.title)}
          >
            <div className="flex items-center gap-3">
              {topic.icon}
              <div className="text-left">
                <div className="font-semibold">{topic.title}</div>
                <div className="text-sm text-muted-foreground">
                  {topic.description}
                </div>
              </div>
            </div>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};