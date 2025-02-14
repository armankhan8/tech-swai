import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import WhatsAppButton from "@/components/WhatsAppButton";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const projects = [
    {
      title: "E-Commerece Website",
      description: "A modern E-Commerce platform built with React and Node.js",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Portfolio Website",
      description: "A minimalist portfolio website for creative professionals",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      demoLink: "https://armankhan8.github.io/armankhanweb/",
      githubLink: "#",
    },
    {
      title: "Modulus Tutor Website",
      description: "A modern Tutor platform built with React and Node.js",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      tags: ["React", "Firebase", "Material-UI"],
      demoLink: "http://modulustutor.in/",
      githubLink: "#",
    },
    {
      title: "Freelancing Work Website",
      description: "Real-time analytics and monitoring platform",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      tags: ["React", "Redux", "D3.js"],
      demoLink: "https://armankhan8.github.io/ai-Builder/",
      githubLink: "#",
    },
  ];

  const categories = ["all", "web", "mobile", "design"];

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-b from-purple-900/10 via-background to-background">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
          >
            Our Work
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Explore our latest projects and creative works
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "bg-primary/10 hover:bg-primary/20 text-primary"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Portfolio;
