import { motion } from "framer-motion";

const skillsData = [
  {
    svg: "./images/tech/html.png",
    skillName: "HTML",
  },
  {
    svg: "./images/tech/css.png",
    skillName: "CSS",
  },
  {
    svg: "./images/tech/javascript.png",
    skillName: "JavaScript",
  },
  {
    svg: "./images/tech/typescript.png",
    skillName: "TypeScript",
  },
  {
    svg: "./images/tech/reactjs.png",
    skillName: "React",
  },
  {
    svg: "./images/tech/nodejs.png",
    skillName: "Node.js",
  },
  {
    svg: "./images/tech/mongodb.png",
    skillName: "MongoDB",
  },
  {
    svg: "./images/tech/tailwind.png",
    skillName: "Tailwind CSS",
  },
  {
    svg: "./images/tech/redux.png",
    skillName: "Redux",
  },
  {
    svg: "./images/tech/git.png",
    skillName: "Git & GitHub",
  },
];

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

const Skills = () => {
  return (
    <section
      id="skills"
      className="mt-20 sm:mt-0 max-w-[53rem] scroll-mt-28 text-center"
    >
      <h1 className="font-semibold text-3xl sm:text-5xl mb-10 text-tubeLight-effect">
        Technical Expertise
      </h1>

      <ul className="flex flex-wrap justify-center gap-4 text-lg">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <img
              src={skill.svg}
              alt={skill.skillName}
              className="h-14 sm:h-24 w-auto"
              title={skill.skillName}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
