import React from "react";
import { motion } from "framer-motion";
import { Users, MessageSquare, Lightbulb, Clock } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";
import { Progress } from "@/components/ui/progress";

const softSkillIcons = {
  "Làm việc nhóm": <Users className="h-6 w-6 text-primary" />,
  "Giao tiếp": <MessageSquare className="h-6 w-6 text-primary" />,
  "Giải quyết vấn đề": <Lightbulb className="h-6 w-6 text-primary" />,
  "Quản lý thời gian": <Clock className="h-6 w-6 text-primary" />,
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">Chuyên môn</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Kỹ năng của tôi</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8">Kỹ năng chuyên môn</h3>

            {portfolioData.skills.technical.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="mb-6"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-primary font-medium">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2.5" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-8">Kỹ năng mềm</h3>

            <div className="grid grid-cols-2 gap-6">
              {portfolioData.skills.soft.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    {softSkillIcons[skill.name as keyof typeof softSkillIcons] || 
                      <Users className="h-6 w-6 text-primary" />}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{skill.name}</h4>
                  <p className="text-gray-600 text-sm">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
