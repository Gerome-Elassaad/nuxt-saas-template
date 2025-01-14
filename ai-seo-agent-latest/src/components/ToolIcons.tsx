import { MessageSquare, UserCircle2, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";

interface ToolIconsProps {
  onViewChange: Dispatch<SetStateAction<"chat" | "profile" | "help">>;
}

export const ToolIcons = ({ onViewChange }: ToolIconsProps) => {
  return (
    <div className="flex gap-4 mt-8">
      <Button
        variant="outline"
        size="icon"
        onClick={() => onViewChange("chat")}
        className="w-12 h-12"
      >
        <MessageSquare className="w-6 h-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => onViewChange("profile")}
        className="w-12 h-12"
      >
        <UserCircle2 className="w-6 h-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => onViewChange("help")}
        className="w-12 h-12"
      >
        <HelpCircle className="w-6 h-6" />
      </Button>
    </div>
  );
};