import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const Collections = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [selectedId, setSelectedId] = useState(null);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const handleClickOutside = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      setSelectedId(null);
    }
  };

  const sections = [
    {
      id: 1,
      imgSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
      title: "Desk and Office",
      description: "Work from home accessories",
      largDes:
        "We're New York City-based, so you can shop near, and order from your favorite local stores, or pick up in one of our many online fulfillment centers.",
    },
    {
      id: 2,
      imgSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
      title: "Self-Improvement",
      description: "Journals and note-taking",
      largDes:
        "We're New York City-based, so you can shop near, and order from your favorite local stores, or pick up in one of our many online fulfillment centers.",
    },
    {
      id: 3,
      imgSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
      title: "Travel",
      description: "Daily commute essentials",
      largDes:
        "We're New York City-based, so you can shop near, and order from your favorite local stores, or pick up in one of our many online fulfillment centers.",
    },
  ];

  return (
    <div className="bg-gray-100" id="collections">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
          <motion.div
            className="mt-6 lg:grid lg:grid-cols-3 lg:gap-x-6 "
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={itemVariants}>
            {sections.map((item) => (
              <motion.div
                key={item.id}
                className="group relative cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedId(item.id)}
                transition={{ type: "spring", stiffness: 300 }}>
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <span className="absolute inset-0" />
                    {item.title}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {item.description}
                </p>
              </motion.div>
            ))}

            <AnimatePresence>
              {selectedId && (
                <motion.div
                  layoutId={selectedId}
                  className="fixed inset-0 bg-black/80 flex items-center justify-center z-40 modal-overlay"
                  onClick={handleClickOutside}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}>
                  {sections.map(
                    (project) =>
                      project.id === selectedId && (
                        <motion.div
                          key={project.id}
                          className="relative isolate overflow-hidden bg-gray-900 rounded-lg p-6 w-[90%] md:w-[40vw] text-center shadow-lg"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.3 }}>
                          <svg
                            viewBox="0 0 1024 1024"
                            aria-hidden="true"
                            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0">
                            <circle
                              r={512}
                              cx={512}
                              cy={512}
                              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                              fillOpacity="0.7"
                            />
                            <defs>
                              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                <stop stopColor="#7775D6" />
                                <stop offset={1} stopColor="#E935C1" />
                              </radialGradient>
                            </defs>
                          </svg>
                          <motion.img
                            src={project.imgSrc}
                            alt={project.title}
                            className="w-full rounded-t-lg object-cover h-40 md:h-48 mb-4"
                          />
                          <motion.h5 className="text-white text-lg md:text-2xl font-extrabold tracking-wide mt-2 mb-1">
                            {project.title}
                          </motion.h5>
                          <motion.h2 className="text-gray-100 text-base md:text-lg font-medium italic leading-relaxed">
                            {project.description}
                          </motion.h2>
                          <motion.p className="text-gray-300 text-base md:text-sm font-medium italic leading-relaxed">
                            {project.largDes}
                          </motion.p>
                        </motion.div>
                      )
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
