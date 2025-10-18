import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const StitchGuide = () => {
  const stitches = [
    {
      name: "Magic Ring",
      difficulty: "beginner",
      description: "An adjustable loop to start projects in the round with no visible hole.",
      steps: [
        "Wrap yarn around your finger twice, forming a ring",
        "Insert hook under both strands",
        "Pull up a loop, chain 1",
        "Work required stitches into the ring",
        "Pull the tail to tighten the ring",
      ],
      tips: "Practice with thicker yarn first. Keep the tail long for easy tightening.",
    },
    {
      name: "Single Crochet (sc)",
      difficulty: "beginner",
      description: "The most basic crochet stitch, creating a tight, dense fabric.",
      steps: [
        "Insert hook into stitch",
        "Yarn over and pull through (2 loops on hook)",
        "Yarn over and pull through both loops",
      ],
      tips: "Keep tension consistent. This stitch is shorter than others.",
    },
    {
      name: "Increase (inc)",
      difficulty: "beginner",
      description: "Work 2 stitches in the same stitch to add width.",
      steps: [
        "Work your stitch type (usually sc) into the designated stitch",
        "Work another stitch of the same type in the same stitch",
        "You now have 2 stitches where there was 1",
      ],
      tips: "Use stitch markers to track increases in amigurumi.",
    },
    {
      name: "Decrease (dec)",
      difficulty: "beginner",
      description: "Combine 2 stitches into 1 to reduce width.",
      steps: [
        "Insert hook in first stitch, pull up a loop",
        "Insert hook in next stitch, pull up a loop (3 loops on hook)",
        "Yarn over and pull through all 3 loops",
      ],
      tips: "This is also called 'invisible decrease' in amigurumi.",
    },
    {
      name: "Half Double Crochet (hdc)",
      difficulty: "intermediate",
      description: "A medium-height stitch between single and double crochet.",
      steps: [
        "Yarn over, insert hook into stitch",
        "Yarn over, pull through (3 loops on hook)",
        "Yarn over, pull through all 3 loops",
      ],
      tips: "Creates a nice drape, less stiff than sc but denser than dc.",
    },
    {
      name: "Double Crochet (dc)",
      difficulty: "intermediate",
      description: "A taller stitch that works up quickly with more drape.",
      steps: [
        "Yarn over, insert hook into stitch",
        "Yarn over, pull through (3 loops on hook)",
        "Yarn over, pull through 2 loops (2 loops remain)",
        "Yarn over, pull through last 2 loops",
      ],
      tips: "Perfect for blankets and scarves. Faster than single crochet.",
    },
    {
      name: "Slip Stitch (sl st)",
      difficulty: "beginner",
      description: "The shortest stitch, used for joining and moving across stitches.",
      steps: [
        "Insert hook into stitch",
        "Yarn over and pull through both the stitch and loop on hook in one motion",
      ],
      tips: "Great for joining rounds or creating invisible seams.",
    },
    {
      name: "Chain Stitch (ch)",
      difficulty: "beginner",
      description: "The foundation of most crochet projects.",
      steps: [
        "Make a slip knot on your hook",
        "Yarn over",
        "Pull through the loop on your hook",
        "Repeat for desired number of chains",
      ],
      tips: "Keep chains loose and even. They should be easy to work into.",
    },
  ];

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
        <div className="mb-12 text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground">
            Stitch Guide
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master the fundamentals with our comprehensive stitch tutorials
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {stitches.map((stitch, index) => (
              <AccordionItem 
                key={index} 
                value={`stitch-${index}`}
                className="border-2 border-border rounded-2xl px-6 shadow-soft hover:shadow-card transition-all animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center justify-between w-full pr-4">
                    <div className="flex items-center gap-4">
                      <h3 className="text-2xl font-heading font-semibold text-foreground text-left">
                        {stitch.name}
                      </h3>
                      <Badge className={`${getDifficultyColor(stitch.difficulty)} rounded-full`}>
                        {stitch.difficulty}
                      </Badge>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-6">
                  <div className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {stitch.description}
                    </p>

                    <div>
                      <h4 className="text-lg font-heading font-semibold text-foreground mb-3">
                        Step-by-Step Instructions
                      </h4>
                      <ol className="space-y-2">
                        {stitch.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex gap-3">
                            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
                              {stepIndex + 1}
                            </span>
                            <span className="text-foreground leading-relaxed pt-1">
                              {step}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    <Card className="border-2 border-secondary/50 bg-secondary/10 rounded-xl">
                      <CardContent className="p-4">
                        <p className="text-sm text-foreground/80 leading-relaxed">
                          💡 <span className="font-semibold">Pro Tips:</span> {stitch.tips}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Card className="mt-12 border-2 border-primary/30 bg-gradient-primary shadow-card rounded-2xl">
            <CardHeader>
              <CardTitle className="text-3xl font-heading font-bold text-primary-foreground text-center">
                Keep Practicing!
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                The best way to master these stitches is through practice. Start with small swatches and gradually work your way up to full patterns. Happy crocheting! 🧶
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StitchGuide;
