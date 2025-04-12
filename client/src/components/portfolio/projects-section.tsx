import React from "react";
import { motion } from "framer-motion";
import { Eye, Code, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio-data";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">Các dự án</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Dự án nổi bật</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Card className="overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 rounded-lg">
                <div className="relative overflow-hidden h-60">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 group-hover:scale-110 transition duration-500" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                    <div className="p-6">
                      <div className="flex space-x-3">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-primary p-2 rounded-full hover:bg-primary hover:text-white transition duration-300"
                            aria-label="View project"
                          >
                            <Eye className="h-5 w-5" />
                          </a>
                        )}
                        {project.codeUrl && (
                          <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-primary p-2 rounded-full hover:bg-primary hover:text-white transition duration-300"
                            aria-label="View code"
                          >
                            <Code className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, techIndex) => {
                      // Different color schemes for tags
                      const colorSchemes = [
                        "bg-blue-100 text-blue-700",
                        "bg-green-100 text-green-700",
                        "bg-purple-100 text-purple-700",
                        "bg-yellow-100 text-yellow-700",
                        "bg-red-100 text-red-700",
                        "bg-indigo-100 text-indigo-700",
                      ];
                      
                      return (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className={`text-xs font-medium px-2 py-1 ${
                            colorSchemes[techIndex % colorSchemes.length]
                          }`}
                        >
                          {tech}
                        </Badge>
                      );
                    })}
                  </div>
                  <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {portfolioData.projectsUrl && (
          <div className="text-center mt-12">
            <a
              href={portfolioData.projectsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:text-blue-700 font-medium transition duration-300"
            >
              <span>Xem tất cả dự án</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
