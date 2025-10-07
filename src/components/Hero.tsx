import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
            <GraduationCap className="h-5 w-5 text-white" />
            <span className="text-sm font-medium text-white">Welcome to EduLearn</span>
          </div>
          
          <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Transform Your Future
            <br />
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              With Quality Education
            </span>
          </h1>
          
          <p className="mb-10 max-w-2xl text-lg text-white/90 md:text-xl">
            Access world-class courses, learn from expert instructors, and gain the skills you need to succeed in today's competitive world.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-xl">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              Explore Courses
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 text-white md:grid-cols-3 lg:gap-16">
            <div>
              <div className="text-4xl font-bold">10K+</div>
              <div className="text-sm text-white/80">Students Enrolled</div>
            </div>
            <div>
              <div className="text-4xl font-bold">500+</div>
              <div className="text-sm text-white/80">Expert Instructors</div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-4xl font-bold">95%</div>
              <div className="text-sm text-white/80">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
