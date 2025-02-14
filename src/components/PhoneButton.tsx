import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const PhoneButton = () => {
  return (
    <motion.a
      href="tel:+919718668809" // Added proper tel: protocol for phone calls
      className="fixed bottom-24 right-8 z-50 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-blue-500 hover:bg-blue-600 hover:scale-110 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
      transition={{ duration: 0.3 }}
    >
      <Phone className="w-6 h-6 text-white" />
    </motion.a>
  );
};

export default PhoneButton;