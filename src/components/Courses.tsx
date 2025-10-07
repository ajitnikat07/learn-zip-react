import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, TrendingUp, Brain } from "lucide-react";

const courses = [
  {
    icon: Code,
    title: "Web Development",
    description: "Master HTML, CSS, JavaScript, and modern frameworks like React",
    level: "Beginner",
    students: "2,450",
    color: "bg-blue-500"
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Learn design principles, Adobe Creative Suite, and UI/UX",
    level: "Intermediate",
    students: "1,820",
    color: "bg-purple-500"
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "SEO, social media marketing, content strategy, and analytics",
    level: "Beginner",
    students: "3,120",
    color: "bg-green-500"
  },
  {
    icon: Brain,
    title: "Data Science",
    description: "Python, statistics, machine learning, and data visualization",
    level: "Advanced",
    students: "1,540",
    color: "bg-orange-500"
  }
];

const Courses = () => {
  return (
    <section className="bg-muted/30 py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground">Popular Courses</h2>
          <p className="text-lg text-muted-foreground">
            Explore our most sought-after learning programs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <Card key={index} className="group overflow-hidden border-2 transition-all hover:shadow-xl hover:border-primary/30">
                <div className={`${course.color} h-2 w-full`}></div>
                <div className="p-6">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  
                  <div className="mb-3 flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {course.level}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{course.students} students</span>
                  </div>
                  
                  <h3 className="mb-2 text-xl font-semibold">{course.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{course.description}</p>
                  
                  <Button className="w-full" variant="outline">
                    Learn More
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
