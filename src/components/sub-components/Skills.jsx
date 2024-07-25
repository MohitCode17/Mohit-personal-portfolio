import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * index,
    },
  }),
};

const Skills = ({ skills }) => {
  return (
    <section
      id="skills"
      className="my-16 sm:my-32 max-w-[54rem] scroll-mt-32 text-center"
    >
      <h1 className="font-semibold text-3xl sm:text-4xl mb-9 text-tubeLight-effect">
        Technical Expertise
      </h1>

      <ul className="flex flex-wrap justify-center gap-4 text-lg">
        {skills.map((skill, index) => (
          <motion.li
            key={skill._id}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <img
              src={skill?.svg.url}
              alt={skill?.title}
              className="h-14 sm:h-24 w-auto"
              title={skill?.title}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
