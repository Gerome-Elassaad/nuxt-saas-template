import { Search } from "lucide-react";

const actions = [
  "Scan My Websites For Keywords",
  "Update keywords based off googles current trends",
  "Update my SEO in my code",
  "What keywords is [competitor's domain] ranking for that I am not?",
  "How can I improve the on-page SEO for this URL?",
  "What strategies are [competitor's domain] using to rank for [keyword]",
];

export const QuickActions = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl">
      {actions.map((action, index) => (
        <button
          key={index}
          className="quick-action-button flex items-center gap-2"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <Search className="w-4 h-4" />
          {action}
        </button>
      ))}
    </div>
  );
};