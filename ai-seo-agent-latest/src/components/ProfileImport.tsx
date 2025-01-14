import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, FolderPlus, Import, Upload } from "lucide-react";
import { toast } from "sonner";

export const ProfileImport = () => {
  const handleImport = (type: string) => {
    // This would be connected to actual import logic later
    toast.success(`Started ${type} import`);
  };

  return (
    <div className="space-y-4 animate-slideUp">
      <Card>
        <CardHeader>
          <CardTitle>Import Profile</CardTitle>
          <CardDescription>Import your existing profiles and projects</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Button 
            variant="outline" 
            className="flex items-center gap-2 h-16"
            onClick={() => handleImport("GitHub")}
          >
            <UserPlus className="w-5 h-5" />
            <div className="text-left">
              <div className="font-semibold">GitHub Profile</div>
              <div className="text-sm text-muted-foreground">Import repositories and settings</div>
            </div>
          </Button>
          
          <Button 
            variant="outline" 
            className="flex items-center gap-2 h-16"
            onClick={() => handleImport("project")}
          >
            <FolderPlus className="w-5 h-5" />
            <div className="text-left">
              <div className="font-semibold">Project Setup</div>
              <div className="text-sm text-muted-foreground">Import existing project configuration</div>
            </div>
          </Button>
          
          <Button 
            variant="outline" 
            className="flex items-center gap-2 h-16"
            onClick={() => handleImport("backup")}
          >
            <Import className="w-5 h-5" />
            <div className="text-left">
              <div className="font-semibold">Backup Import</div>
              <div className="text-sm text-muted-foreground">Restore from backup file</div>
            </div>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};