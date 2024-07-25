import React from "react";
import { motion } from "framer-motion";

const Timeline = ({ timelines }) => {
  return (
    <section
      id="experience"
      className="mt-36 sm:mt-10 max-w-[54rem] scroll-mt-32"
    >
      <h1 className="font-semibold text-3xl sm:text-4xl mb-14 text-tubeLight-effect text-center">
        Experience Timeline
      </h1>

      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {timelines.map((timeline) => (
          <li className="mb-10 ms-6" key={timeline._id}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {timeline?.title}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Duration: {timeline?.timeline.from} - {timeline?.timeline.to}
              </time>
              {/* <p className="text-base font-normal text-gray-500 dark:text-gray-500 mb-2 flex items-center gap-1">
                <MapPin size={18} />
                {timeline?.location}
              </p> */}
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                {timeline?.description}
              </p>
            </motion.div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Timeline;
