import { Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Scissors className="h-8 w-8 text-primary" />
          <span className="text-2xl font-heading font-semibold text-foreground">
            ThreadCraft
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/patterns" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
            Patterns
          </Link>
          <Link to="/builder" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
            Builder
          </Link>
          <Link to="/guide" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
            Stitch Guide
          </Link>
        </nav>
        
        <Button variant="default" className="rounded-full shadow-soft hover:shadow-card transition-all">
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;
