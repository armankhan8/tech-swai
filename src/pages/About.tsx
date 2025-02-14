import { motion } from "framer-motion";
import { Code, Layout, Palette, Users, Trophy, Star } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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

  const skills = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Development",
      description: "Expert in modern web technologies including React, Node.js, and TypeScript",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300&h=200"
    },
    {
      icon: <Layout className="h-6 w-6" />,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with attention to detail",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=300&h=200"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Creative Direction",
      description: "Guiding projects from concept to completion with a focus on quality",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&h=200"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Client Success",
      description: "Dedicated to ensuring client satisfaction and project success",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=300&h=200"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Award-Winning",
      description: "Recognized for excellence in web development and design",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=300&h=200"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Innovation",
      description: "Staying ahead with the latest technologies and trends",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=300&h=200"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-b from-purple-900/10 via-background to-background">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] tracking-tight leading-none">
              Crafting Digital Excellence
            </h1>
            <p className="text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 font-medium">
              Where Innovation Meets Design
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="prose prose-lg max-w-none mb-16 text-center"
          >
            <p className="text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-violet-500 leading-relaxed font-medium mx-auto max-w-3xl">
              With over a decade of experience in web development and design, we transform ideas into 
              captivating digital experiences. Our passion for innovation drives us to create solutions 
              that not only meet but exceed expectations.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-white/20 group"
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={skill.image} 
                    alt={skill.title}
                    className="w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="mb-4 text-primary/80 group-hover:text-primary transition-colors duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#7E69AB]">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground/90 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default About;