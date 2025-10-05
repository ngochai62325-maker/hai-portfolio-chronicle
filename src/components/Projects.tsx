import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  name: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  technologies: string[];
}

const Projects = () => {
  const projects: Project[] = [
    {
      name: "User Admin Application",
      description: "Ứng dụng quản lý người dùng với giao diện admin toàn diện, hỗ trợ CRUD operations và phân quyền.",
      liveUrl: "https://ch13-ex2-q6lk.onrender.com",
      githubUrl: "https://github.com/ngochai62325-maker/ch13_ex2.git",
      technologies: ["Java", "SQL", "Web"],
    },
    {
      name: "Email List Application",
      description: "Hệ thống quản lý danh sách email với khả năng gửi và theo dõi email hiệu quả.",
      liveUrl: "https://c13-ex1.onrender.com",
      githubUrl: "https://github.com/ngochai62325-maker/c13_ex1.git",
      technologies: ["Java", "Email API"],
    },
    {
      name: "Connection Pooling",
      description: "Triển khai connection pooling để tối ưu hóa hiệu suất kết nối database trong ứng dụng web.",
      liveUrl: "https://ch12-ex1.onrender.com",
      githubUrl: "https://github.com/ngochai62325-maker/ch12_ex1.git",
      technologies: ["Java", "SQL", "Performance"],
    },
    {
      name: "Shopping Cart",
      description: "Ứng dụng giỏ hàng với đầy đủ chức năng thêm, xóa, cập nhật sản phẩm và tính toán tổng tiền.",
      liveUrl: "https://ch7-cart.onrender.com",
      githubUrl: "https://github.com/ngochai62325-maker/ch7_cart.git",
      technologies: ["Java", "Web", "E-commerce"],
    },
    {
      name: "List of Albums",
      description: "Ứng dụng hiển thị và quản lý danh sách album với khả năng download và tìm kiếm.",
      liveUrl: "https://ch07-ex2-download-p80l.onrender.com/",
      githubUrl: "https://github.com/ngochai62325-maker/ch07_ex2_download.git",
      technologies: ["Java", "File Management"],
    },
    {
      name: "Survey Application",
      description: "Hệ thống khảo sát trực tuyến cho phép tạo và quản lý các câu hỏi khảo sát.",
      liveUrl: "https://ch6-ex2-k61m.onrender.com",
      githubUrl: "https://github.com/ngochai62325-maker/ch6_ex2.git",
      technologies: ["Java", "Web Forms"],
    },
    {
      name: "Survey Version 2",
      description: "Phiên bản cải tiến của ứng dụng khảo sát với giao diện người dùng tốt hơn và nhiều tính năng mới.",
      liveUrl: "https://buoi4.onrender.com/",
      githubUrl: "https://github.com/ngochai62325-maker/buoi4.git",
      technologies: ["Java", "Enhanced UI"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Dự án</h2>
          <div className="h-1 w-20 bg-gradient-primary rounded-full mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Các dự án mà tôi đã thực hiện trong quá trình học tập và phát triển kỹ năng
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-scale-in">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-card rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 group"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    asChild
                    size="sm"
                    className="flex-1 bg-gradient-primary hover:shadow-hover transition-all"
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-secondary transition-all"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
