import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";

const Contact = () => {
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

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "swaitech@gmail.com",
      link: "mailto:swaitech@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "+919718668809",
      link: "tel:+919718668809",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      details: "Message us directly",
      link: "https://wa.me/918130857008",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      details: "Delhi, Noida",
      link: "Delhi, Noida",
    },
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Let's Create Something Amazing
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to transform your digital presence? Get in touch with us today.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="p-6 rounded-lg bg-card shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:bg-primary/5"
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                <p className="text-muted-foreground">{info.details}</p>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-card shadow-lg rounded-lg p-8 border border-primary/10"
          >
            <h2 className="text-2xl font-semibold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Send Us a Message
            </h2>
            <ContactForm />
          </motion.div>
        </motion.div>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
