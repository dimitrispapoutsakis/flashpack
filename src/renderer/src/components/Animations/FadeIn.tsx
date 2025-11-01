import { IChildren } from "@/typings";
import { motion } from "framer-motion";

const FadeIn = ({ children }: IChildren) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.25 }}>
      {children}
    </motion.div>
  );
};

export default FadeIn;