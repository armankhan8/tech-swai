import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/918130857008" // Added proper WhatsApp URL format
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-green-500 hover:bg-green-600 hover:scale-110 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
      transition={{ duration: 0.3 }}
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </motion.a>
  );
};

export default WhatsAppButton;