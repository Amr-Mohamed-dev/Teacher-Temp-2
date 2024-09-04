import ButtonHover from "./ButtonHover";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <>
      <div className="bg-white ">
        <div className="relative isolate px-6 lg:px-8">
          {/* Background Gradient Motion */}
          <motion.div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}>
            <motion.div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              initial={{ scale: 0.8, rotate: 0 }}
              animate={{ scale: 1, rotate: 30 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Content Section */}
          <div className="flex flex-col-reverse pt-16 md:flex-row items-center justify-center gap-10 md:px-10 min-h-screen">
            <motion.div
              className="text-center md:text-left w-1/2 "
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}>
              <h1 className="mb-4 text-4xl font-bold text-gray-800">
                <span className="text-secondary">Hi,</span> I am a Teacher
              </h1>
              <p className="mb-6 text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                excepturi magnam enim officiis facilis numquam corporis quos
                accusantium tempora
              </p>
              <div className="flex justify-center md:justify-start gap-x-3 w-full">
                <motion.button
                  className="flex items-center justify-center gap-2 rounded-2xl bg-transparent p-5 py-3 font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  <ButtonHover />
                </motion.button>
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="flex justify-center md:justify-end"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}>
              <img
                src="https://img.freepik.com/free-photo/view-3d-man-holding-laptop_23-2150709818.jpg"
                alt="Developer"
                className="md:w-96 w-72 rounded-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
