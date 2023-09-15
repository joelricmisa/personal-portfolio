import { motion } from "framer-motion";
const SectionDivider = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: [0, -25, 0], opacity: 1 }}
      transition={{ delay: 0.75 }}
      className="mx-auto my-20 block  h-14 w-1 rounded-full bg-gray-200 dark:bg-gray-200/20"
    >
      <br />
    </motion.div>
  );
};

export default SectionDivider;
