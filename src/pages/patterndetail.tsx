import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Printer, Share2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import { patterns } from "@/data/patterns";

const PatternDetail = () => {
  const { id } = useParams();
  const pattern = patterns.find((p) => p.id === id);

  if (!pattern) {
    return (
      <div className="min-h-screen bg-gradient-soft">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
            Pattern Not Found
          </h1>
          <Link to="/patterns">
            <Button variant="outline" className="rounded-full">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Patterns
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-secondary text-secondary-foreground";
      case "intermediate":
        return "bg-primary text-primary-foreground";
      case "advanced":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-accent text-accent-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link to="/patterns">
          <Button variant="ghost" className="mb-6 hover:bg-primary/10">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Patterns
          </Button>
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="animate-fade-in">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-5xl font-heading font-bold text-foreground mb-2">
                    {pattern.title}
                  </h1>
                  <div className="flex gap-2 flex-wrap">
                    <Badge className={`${getDifficultyColor(pattern.difficulty)} rounded-full`}>
                      {pattern.difficulty}
                    </Badge>
                    <Badge variant="outline" className="rounded-full border-primary/30">
                      {pattern.category}
                    </Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-full shadow-soft">
                    <Printer className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full shadow-soft">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {pattern.description}
              </p>
            </div>

            {/* Instructions */}
            <Card className="border-2 border-border shadow-card rounded-2xl animate-fade-in-delay">
              <CardHeader>
                <CardTitle className="text-3xl font-heading font-semibold text-foreground">
                  Instructions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {pattern.instructions.map((instruction, index) => (
                    <li 
                      key={index}
                      className="flex gap-4 p-3 rounded-xl hover:bg-accent/20 transition-colors"
                    >
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
                        {index + 1}
                      </span>
                      <span className="text-foreground leading-relaxed pt-1">
                        {instruction}
                      </span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Materials */}
            <Card className="border-2 border-border shadow-card rounded-2xl animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-2xl font-heading font-semibold text-foreground">
                  Materials
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">
                    Yarn Weight
                  </p>
                  <p className="text-foreground">{pattern.yarnWeight}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">
                    Hook Size
                  </p>
                  <p className="text-foreground">{pattern.hookSize}</p>
                </div>
              </CardContent>
            </Card>

            {/* Color Suggestions */}
            {pattern.colorSuggestions && (
              <Card className="border-2 border-border shadow-card rounded-2xl animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                <CardHeader>
                  <CardTitle className="text-2xl font-heading font-semibold text-foreground">
                    Color Ideas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {pattern.colorSuggestions.map((color, index) => (
                      <div 
                        key={index}
                        className="p-3 rounded-xl bg-accent/30 text-foreground"
                      >
                        {color}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Tips */}
            <Card className="border-2 border-primary/30 bg-gradient-primary shadow-card rounded-2xl animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <CardContent className="p-6">
                <p className="text-sm text-primary-foreground/90 leading-relaxed">
                  💡 <span className="font-semibold">Pro Tip:</span> Keep your tension consistent throughout for best results. Mark your rounds with a stitch marker!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatternDetail;
