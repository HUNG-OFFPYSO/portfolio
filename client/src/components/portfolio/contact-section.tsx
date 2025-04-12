import React, { useState } from "react";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Tin nhắn đã được gửi!",
        description: "Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi sớm nhất có thể.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  const socialIcons = {
    LinkedIn: <Linkedin className="h-5 w-5" />,
    GitHub: <Github className="h-5 w-5" />,
    Twitter: <Twitter className="h-5 w-5" />,
    Instagram: <Instagram className="h-5 w-5" />,
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">Liên hệ</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Kết nối với tôi</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Gửi tin nhắn</h3>
            <p className="text-gray-600 mb-8">
              Bạn có câu hỏi hoặc đề xuất hợp tác? Hãy điền vào mẫu dưới đây và tôi sẽ liên hệ lại sớm nhất có thể.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Họ tên</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Nhập họ tên của bạn"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="px-4 py-6 h-auto"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Nhập địa chỉ email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="px-4 py-6 h-auto"
                  />
                </div>
              </div>

              <div className="mb-6 space-y-2">
                <Label htmlFor="subject">Tiêu đề</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Nhập tiêu đề"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="px-4 py-6 h-auto"
                />
              </div>

              <div className="mb-6 space-y-2">
                <Label htmlFor="message">Nội dung</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Nhập nội dung tin nhắn"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="resize-none px-4 py-3"
                />
              </div>

              <Button
                type="submit"
                className="bg-primary hover:bg-blue-600 text-white font-medium py-6 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg transform hover:translate-y-0.5 h-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Đang gửi..." : "Gửi tin nhắn"}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6">Thông tin liên hệ</h3>
            <p className="text-gray-600 mb-8">
              Bạn cũng có thể liên hệ với tôi qua các phương thức dưới đây. Tôi sẽ phản hồi trong thời gian sớm nhất.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Mail className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <a
                    href={`mailto:${portfolioData.contact.email}`}
                    className="text-gray-600 hover:text-primary transition duration-300"
                  >
                    {portfolioData.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Phone className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">Điện thoại</h4>
                  <a
                    href={`tel:${portfolioData.contact.phone}`}
                    className="text-gray-600 hover:text-primary transition duration-300"
                  >
                    {portfolioData.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <MapPin className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">Địa chỉ</h4>
                  <p className="text-gray-600">{portfolioData.contact.address}</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="font-bold mb-4">Theo dõi tôi</h4>
              <div className="flex space-x-4">
                {portfolioData.socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary/10 hover:bg-primary w-12 h-12 rounded-full flex items-center justify-center text-primary hover:text-white transition duration-300"
                    aria-label={social.name}
                  >
                    {socialIcons[social.name as keyof typeof socialIcons]}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
