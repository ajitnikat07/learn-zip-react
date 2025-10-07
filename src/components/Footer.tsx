import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12 px-6 text-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <GraduationCap className="h-8 w-8" />
              <span className="text-2xl font-bold">EduLearn</span>
            </div>
            <p className="text-sm text-background/70">
              Empowering learners worldwide with quality education and practical skills for the future.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Courses</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Instructors</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Support</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-background transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contact@edulearn.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>123 Education St, Learning City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-background/10 pt-8 text-center text-sm text-background/70">
          <p>&copy; {new Date().getFullYear()} EduLearn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
