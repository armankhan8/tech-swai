import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const SocialIcons = () => {
  const socialLinks = [
    // { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/swai_tech?igsh=Z3dpNjh1b3l5YWsx", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    // { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="flex gap-4 justify-center"
    >
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
          aria-label={label}
        >
          <Icon className="w-5 h-5 text-primary" />
        </a>
      ))}
    </motion.div>
  );
};

export default SocialIcons;