import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface DomainInputModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const DomainInputModal = ({ open, onOpenChange }: DomainInputModalProps) => {
  const [domain, setDomain] = useState("");
  const [keywords, setKeywords] = useState("");
  const [competitors, setCompetitors] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Analyzing domain:", { domain, keywords, competitors });
    // Add domain analysis logic here
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Domain Analysis</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="domain" className="text-sm font-medium">Domain Name</label>
            <Input
              id="domain"
              placeholder="example.com"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              pattern="^([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)+[a-zA-Z]{2,}$"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="keywords" className="text-sm font-medium">Target Keywords (optional)</label>
            <Input
              id="keywords"
              placeholder="Enter keywords separated by commas"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="competitors" className="text-sm font-medium">Competitor Domains (optional)</label>
            <Input
              id="competitors"
              placeholder="Enter competitor domains separated by commas"
              value={competitors}
              onChange={(e) => setCompetitors(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full">Analyze Domain</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};