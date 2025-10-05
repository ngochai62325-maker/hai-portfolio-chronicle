import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to Supabase
      const { error } = await supabase
        .from("contacts")
        .insert([formData]);

      if (error) throw error;

      // Call edge function to send email
      await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      toast({
        title: "Thành công!",
        description: "Tin nhắn của bạn đã được gửi. Tôi sẽ phản hồi sớm nhất có thể.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Lỗi",
        description: "Có lỗi xảy ra. Vui lòng thử lại sau.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Liên hệ</h2>
            <div className="h-1 w-20 bg-gradient-primary rounded-full mx-auto"></div>
            <p className="mt-4 text-muted-foreground">
              Hãy để lại thông tin, tôi sẽ liên hệ lại với bạn sớm nhất!
            </p>
          </div>

          <div className="space-y-8 animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-gradient-card rounded-2xl p-8 shadow-card space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Họ tên *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nguyễn Văn A"
                    className="transition-all duration-300 focus:shadow-card"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    className="transition-all duration-300 focus:shadow-card"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Nội dung *
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tin nhắn của bạn..."
                    rows={5}
                    className="transition-all duration-300 focus:shadow-card resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-hover transition-all duration-300"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Đang gửi...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Gửi tin nhắn
                    </>
                  )}
                </Button>
              </div>
            </form>

            <div className="flex justify-center">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="hover:bg-secondary transition-all duration-300"
              >
                <a
                  href="https://github.com/ngochai62325-maker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub Profile
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
