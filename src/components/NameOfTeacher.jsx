import { motion } from "framer-motion";

const NameOfTeacher = () => {
  return (
    <motion.a href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
      <motion.img
        alt="Teacher"
        src="https://img.freepik.com/free-photo/view-3d-man-holding-laptop_23-2150709818.jpg"
        className="h-8 w-auto rounded-full"
      />
      <motion.span className="italic font-bold hover:underline hover:underline-offset-4 hover:scale-[1.1] hover:text-primary transition-all duration-300">
        Teacher Name
      </motion.span>
    </motion.a>
  );
};

export default NameOfTeacher;
