import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Check, X, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResponseViewerProps {
  response: {
    type: "ai" | "api";
    content: string;
    status: "success" | "error" | "info";
    timestamp: string;
  };
}

export const ResponseViewer = ({ response }: ResponseViewerProps) => {
  const statusIcons = {
    success: <Check className="w-5 h-5 text-green-500" />,
    error: <X className="w-5 h-5 text-red-500" />,
    info: <Info className="w-5 h-5 text-blue-500" />
  };

  return (
    <Card className="w-full max-w-3xl mx-auto mb-4 animate-fadeIn">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className={cn(
          "p-2 rounded-full",
          response.type === "ai" ? "bg-purple-100" : "bg-blue-100"
        )}>
          <MessageSquare className={cn(
            "w-5 h-5",
            response.type === "ai" ? "text-purple-500" : "text-blue-500"
          )} />
        </div>
        <CardTitle className="text-lg">
          {response.type === "ai" ? "AI Response" : "API Result"}
        </CardTitle>
        {statusIcons[response.status]}
      </CardHeader>
      <CardContent>
        <div className="prose dark:prose-invert max-w-none">
          {response.content}
        </div>
        <div className="mt-4 text-sm text-muted-foreground">
          {response.timestamp}
        </div>
      </CardContent>
    </Card>
  );
};