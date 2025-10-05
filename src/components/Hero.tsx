import profileImage from "@/assets/profile.jpg";
import { Button } from "@/components/ui/button";
import { Mail, Calendar, Hash, GraduationCap, Target } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-hero pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
          {/* Left: Info */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                Nguyễn Ngọc Hải
              </h1>
              <div className="h-1 w-24 bg-gradient-primary rounded-full"></div>
            </div>

            <div className="space-y-3 text-lg">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Calendar className="w-5 h-5 text-primary" />
                <span>17/05/2005</span>
              </div>
              
              <div className="flex items-center gap-3 text-muted-foreground">
                <Hash className="w-5 h-5 text-primary" />
                <span>MSSV: 23133021</span>
              </div>

              <div className="flex items-center gap-3 text-muted-foreground">
                <GraduationCap className="w-5 h-5 text-primary" />
                <span>Kỹ thuật dữ liệu</span>
              </div>

              <div className="flex items-center gap-3 text-muted-foreground">
                <Target className="w-5 h-5 text-primary" />
                <span>Mục tiêu: Data Engineering</span>
              </div>

              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>ngochai62325@gmail.com</span>
              </div>
            </div>

            <div className="pt-4">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-primary hover:shadow-hover transition-all duration-300"
              >
                Liên hệ với tôi
              </Button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-primary rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <img
                src={profileImage}
                alt="Nguyễn Ngọc Hải"
                className="relative rounded-2xl shadow-elegant w-full max-w-md object-cover aspect-[3/4] hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
