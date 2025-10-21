import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
}

const ToolCard = ({ title, description, icon: Icon, path }: ToolCardProps) => {
  return (
    <Link to={path} className="group">
      <Card className="h-full p-6 shadow-card hover:shadow-glow transition-smooth glow-effect border-border hover:border-primary/50 bg-card">
        <div className="flex flex-col items-start space-y-4">
          <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-smooth">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-smooth">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ToolCard;
