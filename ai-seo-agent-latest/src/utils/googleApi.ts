import { toast } from "sonner";

export interface KeywordData {
  keyword: string;
  searchVolume: number;
  position: number;
  clicks: number;
  impressions: number;
  ctr: number;
}

export interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
}

// Mock functions for demonstration - replace with actual Google API calls
export const fetchSearchConsoleData = async (domain: string, keywords: string[]): Promise<KeywordData[]> => {
  console.log("Fetching Search Console data for:", { domain, keywords });
  // Simulated API response
  return keywords.map(keyword => ({
    keyword,
    searchVolume: Math.floor(Math.random() * 10000),
    position: Math.floor(Math.random() * 100),
    clicks: Math.floor(Math.random() * 1000),
    impressions: Math.floor(Math.random() * 5000),
    ctr: Math.random() * 100
  }));
};

export const fetchAnalyticsData = async (domain: string): Promise<AnalyticsData> => {
  console.log("Fetching Analytics data for:", domain);
  // Simulated API response
  return {
    pageViews: Math.floor(Math.random() * 100000),
    uniqueVisitors: Math.floor(Math.random() * 50000),
    bounceRate: Math.random() * 100,
    avgSessionDuration: Math.floor(Math.random() * 300)
  };
};