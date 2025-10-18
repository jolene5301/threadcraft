import { ArrowRight, Sparkles, BookOpen, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/header";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-crochet.jpg";

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Pattern Library",
      description: "Access a curated collection of pre-built crochet patterns for every skill level.",
    },
    {
      icon: Palette,
      title: "Pattern Builder",
      description: "Create custom patterns by combining elements with our intuitive builder.",
    },
    {
      icon: Sparkles,
      title: "Stitch Guide",
      description: "Learn with step-by-step tutorials and visual guides for every stitch.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground leading-tight">
                Design. Stitch. Create.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                Your cozy crochet companion for building beautiful patterns, one stitch at a time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/patterns">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto rounded-full shadow-soft hover:shadow-card transition-all bg-gradient-primary border-0 text-primary-foreground font-semibold"
                  >
                    Explore Patterns
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/builder">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full sm:w-auto rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all font-semibold"
                  >
                    Start Building
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative animate-fade-in-delay">
              <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full"></div>
              <img 
                src={heroImage} 
                alt="Cozy crochet crafting scene with colorful yarn" 
                className="relative rounded-3xl shadow-card w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From beginner basics to advanced techniques, ThreadCraft has all the tools to bring your crochet visions to life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-2 border-border hover:border-primary/50 transition-all shadow-soft hover:shadow-card rounded-2xl group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="border-2 border-primary/30 shadow-card rounded-3xl overflow-hidden bg-gradient-primary">
          <CardContent className="p-12 md:p-16 text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">
              Ready to Start Crafting?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Join crafters worldwide in creating beautiful crochet patterns with ease and joy.
            </p>
            <Link to="/patterns">
              <Button 
                size="lg" 
                className="rounded-full bg-background text-foreground hover:bg-background/90 shadow-soft font-semibold"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p className="font-heading text-lg">
            Made with <span className="text-primary">♥</span> for crochet lovers everywhere
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
