import { BookOpen, Users, Award, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: BookOpen,
    title: "Expert-Led Courses",
    description: "Learn from industry professionals with years of real-world experience in their fields."
  },
  {
    icon: Users,
    title: "Interactive Learning",
    description: "Engage with peers and instructors through discussion forums and live sessions."
  },
  {
    icon: Award,
    title: "Certified Programs",
    description: "Earn recognized certificates upon completion to boost your career prospects."
  },
  {
    icon: Clock,
    title: "Learn at Your Pace",
    description: "Access course materials 24/7 and study whenever it fits your schedule."
  }
];

const Features = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground">Why Choose EduLearn?</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to succeed in your learning journey
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-2 p-6 transition-all hover:shadow-lg hover:border-primary/50"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
