import { useState } from "react";
import { Plus, Save, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/header";
import { patterns } from "@/data/patterns";
import { toast } from "sonner";

const Builder = () => {
  const [selectedPatterns, setSelectedPatterns] = useState<string[]>([]);

  const togglePattern = (id: string) => {
    if (selectedPatterns.includes(id)) {
      setSelectedPatterns(selectedPatterns.filter((p) => p !== id));
    } else {
      setSelectedPatterns([...selectedPatterns, id]);
    }
  };

  const handleSave = () => {
    toast.success("Pattern saved successfully!", {
      description: "Your custom pattern has been saved to your collection.",
    });
  };

  const handleExport = () => {
    toast.success("Pattern exported!", {
      description: "Your pattern has been downloaded as a PDF.",
    });
  };

  const selectedItems = patterns.filter((p) => selectedPatterns.includes(p.id));

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground">
            Pattern Builder
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create your own custom patterns by combining elements
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Available Patterns */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-3xl font-heading font-semibold text-foreground mb-4">
              Available Elements
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {patterns.map((pattern) => (
                <Card 
                  key={pattern.id}
                  className={`border-2 transition-all shadow-soft hover:shadow-card rounded-2xl cursor-pointer ${
                    selectedPatterns.includes(pattern.id)
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => togglePattern(pattern.id)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl font-heading font-semibold text-foreground">
                        {pattern.title}
                      </CardTitle>
                      {selectedPatterns.includes(pattern.id) && (
                        <Badge className="bg-primary text-primary-foreground rounded-full">
                          <Plus className="h-3 w-3" />
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      {pattern.description}
                    </p>
                    <Badge variant="outline" className="rounded-full text-xs">
                      {pattern.category}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Builder Workspace */}
          <div className="space-y-4">
            <div className="sticky top-24">
              <Card className="border-2 border-primary/30 shadow-card rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading font-semibold text-foreground">
                    Your Pattern
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {selectedItems.length} element{selectedItems.length !== 1 ? "s" : ""} selected
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedItems.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      <p className="text-sm">
                        Click on elements to add them to your pattern
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2 max-h-96 overflow-y-auto">
                      {selectedItems.map((pattern, index) => (
                        <div 
                          key={pattern.id}
                          className="p-3 rounded-xl bg-accent/20 border border-border"
                        >
                          <div className="flex items-center gap-2">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold text-xs">
                              {index + 1}
                            </span>
                            <span className="text-sm font-semibold text-foreground">
                              {pattern.title}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {selectedItems.length > 0 && (
                    <div className="space-y-2 pt-4 border-t border-border">
                      <Button 
                        className="w-full rounded-full shadow-soft hover:shadow-card transition-all bg-gradient-primary border-0 text-primary-foreground font-semibold"
                        onClick={handleSave}
                      >
                        <Save className="mr-2 h-4 w-4" />
                        Save Pattern
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all font-semibold"
                        onClick={handleExport}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Export as PDF
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {selectedItems.length > 0 && (
                <Card className="mt-4 border-2 border-secondary/50 bg-secondary/10 shadow-soft rounded-2xl">
                  <CardContent className="p-4">
                    <p className="text-xs text-foreground/80 leading-relaxed">
                      💡 <span className="font-semibold">Tip:</span> Build from bottom to top - start with base shapes, add limbs, then features and textures!
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;
