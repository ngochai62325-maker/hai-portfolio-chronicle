import { Code2, Database, Cpu } from "lucide-react";

const About = () => {
  const skills = [
    { category: "Ngôn ngữ lập trình", items: ["C++", "C#", "Java", "Python"], icon: Code2 },
    { category: "Cơ sở dữ liệu", items: ["SQL", "PostgreSQL"], icon: Database },
    { category: "Phân tích dữ liệu", items: ["R", "Data Analysis"], icon: Cpu },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Giới thiệu</h2>
            <div className="h-1 w-20 bg-gradient-primary rounded-full mx-auto"></div>
          </div>

          <div className="space-y-8 animate-scale-in">
            <div className="bg-gradient-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Xin chào! Tôi là Nguyễn Ngọc Hải, sinh viên chuyên ngành Kỹ thuật dữ liệu với đam mê 
                về Data Engineering. Tôi có nền tảng vững chắc về lập trình với các ngôn ngữ như 
                C++, C#, Java, Python cùng với kiến thức về SQL và R. Mục tiêu của tôi là trở thành 
                một Data Engineer chuyên nghiệp, góp phần xây dựng các hệ thống dữ liệu hiệu quả 
                và đáng tin cậy. Tôi luôn sẵn sàng học hỏi công nghệ mới và áp dụng vào thực tế.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gradient-card rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-secondary rounded-lg">
                      <skill.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
