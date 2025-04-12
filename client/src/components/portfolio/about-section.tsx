import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">Giới thiệu</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Về bản thân tôi</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-2xl font-bold mb-5">Câu chuyện của tôi</h3>
            {portfolioData.about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-600 mb-4">
                {paragraph}
              </p>
            ))}

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="p-5 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <div className="text-primary mb-2">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-lg mb-1">Học vấn</h4>
                <p className="text-gray-600">
                  {portfolioData.about.education.degree} <br />
                  {portfolioData.about.education.university} <br />
                  {portfolioData.about.education.year}
                </p>
              </div>
              <div className="p-5 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <div className="text-primary mb-2">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-lg mb-1">Kinh nghiệm</h4>
                <p className="text-gray-600">
                  {portfolioData.about.experience.years}+ năm kinh nghiệm <br />
                  {portfolioData.about.experience.projects}+ dự án hoàn thành
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-96 md:h-96 bg-primary/10 rounded-lg relative">
                <div className="absolute -top-4 -right-4 w-full h-full rounded-lg overflow-hidden border-8 border-white shadow-lg">
                  {portfolioData.aboutImage ? (
                    <img
                      src={portfolioData.aboutImage}
                      alt="About me"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600"></div>
                  )}
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-lg p-4 w-40"
              >
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-primary font-bold text-3xl">
                    {portfolioData.about.experience.years}+
                  </span>
                  <span className="text-gray-600 leading-tight">
                    Năm
                    <br />
                    kinh nghiệm
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
