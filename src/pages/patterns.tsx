import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import { patterns, categories } from "@/data/patterns";
import { Link } from "react-router-dom";

const Patterns = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPatterns = patterns.filter((pattern) => {
    const matchesCategory = selectedCategory === "All" || pattern.category === selectedCategory;
    const matchesSearch = pattern.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pattern.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
        {/* Header Section */}
        <div className="mb-12 text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground">
            Pattern Library
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of crochet patterns for every skill level
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search patterns..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 rounded-full shadow-soft border-2 border-border focus:border-primary transition-all"
            />
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center items-center">
            <Filter className="h-4 w-4 text-muted-foreground" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="rounded-full shadow-soft transition-all"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Pattern Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPatterns.map((pattern, index) => (
            <Link key={pattern.id} to={`/patterns/${pattern.id}`}>
              <Card 
                className="border-2 border-border hover:border-primary/50 transition-all shadow-soft hover:shadow-card rounded-2xl h-full group animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-2xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                      {pattern.title}
                    </CardTitle>
                    <Badge className={`${getDifficultyColor(pattern.difficulty)} rounded-full`}>
                      {pattern.difficulty}
                    </Badge>
                  </div>
                  <Badge variant="outline" className="w-fit rounded-full border-primary/30">
                    {pattern.category}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {pattern.description}
                  </p>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <div>
                      <span className="font-semibold">Yarn:</span> {pattern.yarnWeight}
                    </div>
                    <div>
                      <span className="font-semibold">Hook:</span> {pattern.hookSize}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredPatterns.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              No patterns found. Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Patterns;
