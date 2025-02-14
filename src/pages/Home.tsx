import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowDown, MessageCircle, Clock, Gift, Sparkles, CheckCircle, 
  FileCode, Laptop2, RocketIcon, Users2, Globe2, ShieldCheck, 
  Star, Zap, Trophy, Heart, Award, ThumbsUp, Code2, Palette, Database
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";
import SocialIcons from "@/components/SocialIcons";
import PhoneButton from "@/components/PhoneButton";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const scrollToNextSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const testimonials = [
    {
      name: "Sarah Khan",
      role: "Startup Founder Of Modulus Tutor",
      content: "Working with this freelancer was a game-changer for our startup. They delivered exceptional quality and were always responsive to our needs.",
      rating: 5
    },
    {
      name: "Michael",
      role: "E-commerce Owner",
      content: "Outstanding work on our e-commerce platform. Sales increased by 40% after the website redesign!",
      rating: 5
    },
    {
      name: "Emma Williams",
      role: "Profile Website Owner",
      content: "The attention to detail and creative solutions provided were exactly what we needed. Highly recommended!",
      rating: 5
    }
  ];

  const services = [
    {
      icon: <Code2 className="w-8 h-8 text-purple-500" />,
      title: "Web Development",
      description: "Custom websites built with modern technologies | 14 Page Website",
      duration: "4-8 weeks",
      price: "Starting from $100"
    },
    {
      icon: <Palette className="w-8 h-8 text-blue-500" />,
      title: "UI/UX Design",
      description: "User-centered design that converts | 6 Page Website",
      duration: "2-4 weeks",
      price: "Starting from $50"
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: "Full-Stack Solutions",
      description: "End-to-end web applications",
      duration: "8-12 weeks",
      price: "Starting from $200"
    }
  ];

  const trustFactors = [
    {
      icon: <Award className="w-12 h-12 text-yellow-500" />,
      title: "2+ Years Experience",
      description: "Proven track record of success"
    },
    {
      icon: <Heart className="w-12 h-12 text-red-500" />,
      title: "100% Client Satisfaction",
      description: "Always delivering beyond expectations"
    },
    {
      icon: <ThumbsUp className="w-12 h-12 text-green-500" />,
      title: "Quality Guaranteed",
      description: "Top-notch code and design standards"
    }
  ];

  const specialOffers = [
    {
      icon: <Gift className="w-12 h-12 text-purple-500" />,
      title: "First Project Discount",
      description: "Get 15% off on your first project"
    },
    {
      icon: <Sparkles className="w-12 h-12 text-blue-500" />,
      title: "Maintenance Package",
      description: "3 months free maintenance with every project"
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-green-500" />,
      title: "Starter Package",
      description: "Basic website setup at competitive rates"
    }
  ];

  const processSteps = [
    {
      icon: <FileCode className="w-8 h-8 text-purple-500" />,
      title: "Planning & Analysis",
      description: "Detailed project scoping and requirements gathering",
      duration: "1-2 weeks",
      price: "Included in project cost"
    },
    {
      icon: <Laptop2 className="w-8 h-8 text-blue-500" />,
      title: "Development",
      description: "Clean, efficient code with modern technologies",
      duration: "2-6 weeks",
      price: "Based on project scope"
    },
    {
      icon: <RocketIcon className="w-8 h-8 text-green-500" />,
      title: "Launch & Support",
      description: "Thorough testing and deployment process",
      duration: "1-2 weeks",
      price: "Included in project cost"
    }
  ];

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

  const cardHoverVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative">
      <WhatsAppButton />
      <PhoneButton />

      {/* Hero Section with Advanced Background */}
      <motion.section 
        style={{ opacity, scale }}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 animated-gradient z-0" />
        
        {/* Morphing Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 morph-blob opacity-50" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 morph-blob opacity-30 delay-1000" />
        </div>

        {/* Bubble Effects */}
        <div className="absolute inset-0 bubble-effect">
          <div className="absolute top-1/3 left-1/3 w-48 h-48 rounded-full bg-emerald-400/20 floating-animation" />
          <div className="absolute top-2/3 right-1/3 w-32 h-32 rounded-full bg-cyan-400/20 floating-animation delay-1000" />
          <div className="absolute bottom-1/4 left-1/2 w-40 h-40 rounded-full bg-purple-400/20 floating-animation delay-2000" />
        </div>

        {/* Main Content */}
        <div className="container mx-auto relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-600 cursor-default hover:scale-105 transition-transform duration-300"
            >
              Expert Web Development & Design
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto backdrop-blur-sm"
            >
              Transforming ideas into stunning digital experiences with modern technologies and creative solutions
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg"
                >
                  <Link to="https://armankhan8.github.io/armankhanweb/">View Portfolio</Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 hover:bg-primary/5 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link to="/contact">Get Free Quote</Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-16"
            >
              <SocialIcons />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToNextSection("services")}
          whileHover={{ y: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowDown className="animate-bounce w-8 h-8" />
        </motion.div>
      </motion.section>

      {/* Services Section with Glass Effect */}
      <section id="services" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-50" />
        <div className="absolute inset-0 bubble-effect" />
        
        <div className="container mx-auto relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Professional Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive web solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">{service.duration}</p>
                  <p className="text-lg font-semibold text-primary">{service.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Trust Factors Section */}
      <motion.section 
        id="trust" 
        className="py-20 bg-gradient-to-b from-background via-purple-900/5 to-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Why Choose Us
            </h2>
            <p className="text-xl text-muted-foreground">
              Building trust through excellence and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustFactors.map((factor, index) => (
              <motion.div
                key={index}
                variants={cardHoverVariants}
                initial="rest"
                whileHover="hover"
                className="p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 text-center group cursor-pointer"
              >
                <motion.div 
                  className="mb-6 transform group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {factor.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4">{factor.title}</h3>
                <p className="text-muted-foreground">{factor.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-background via-purple-900/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Premium Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Delivering excellence in every aspect of web development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-primary/20" />
                )}
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-purple-900/10 via-background to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Client Testimonials
            </h2>
            <p className="text-xl text-muted-foreground">
              What our clients say about us
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic text-muted-foreground">"{testimonial.content}"</p>
                <div className="text-center">
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-b from-background via-purple-900/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Project Timeline & Pricing
              </h2>
              <p className="text-xl text-muted-foreground">
                Efficient delivery without compromising quality
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Clock className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  <div className="flex flex-col gap-2">
                    <span className="text-lg font-semibold text-primary">
                      {step.duration}
                    </span>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                      {step.price}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-20 bg-gradient-to-b from-background via-purple-900/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Special Offers
              </h2>
              <p className="text-xl text-muted-foreground">
                Exclusive deals to kickstart your digital journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specialOffers.map((offer, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="mb-6">{offer.icon}</div>
                  <h3 className="text-2xl font-semibold mb-2">{offer.title}</h3>
                  <p className="text-muted-foreground">{offer.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-purple-900/10 to-pink-900/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
              Ready to Transform Your Web Presence?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 px-4">
              Let's create something extraordinary together. Your success story starts here.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-base sm:text-lg px-6 sm:px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <Link to="/contact">Start Your Journey</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
