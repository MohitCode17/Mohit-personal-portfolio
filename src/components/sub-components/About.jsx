import { motion } from "framer-motion";

const About = ({ user }) => {
  return (
    <>
      {user ? (
        <motion.section
          className="mt-10 mb-16 sm:my-48 max-w-[50rem] text-center leading-8 scroll-mt-32"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.175 }}
          id="about"
        >
          <h1 className="font-semibold text-3xl sm:text-4xl mb-16 text-tubeLight-effect">
            A Snapshot of My Journey
          </h1>
          <p
            className="text-xl sm:text-2xl"
            dangerouslySetInnerHTML={{ __html: user && user.aboutMe }}
          ></p>
        </motion.section>
      ) : (
        <motion.section
          className="sm:my-40 max-w-[48rem] text-center leading-8 scroll-mt-28"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.175 }}
          id="about"
        >
          <h1 className="font-semibold text-3xl sm:text-4xl mb-6 text-tubeLight-effect">
            A Snapshot of My Journey
          </h1>
          <p className="text-xl sm:text-2xl">
            A full-stack web developer with a unique journey from the world of{" "}
            <span className="font-medium">Commerce</span> background to{" "}
            <span className="font-medium">web development</span>. After earning
            my Bachelor's degree, I found my passion in prgogramming. I started
            learning <span className="font-medium">front-end development</span>,
            through online platforms and BootCamps and quickly fell in love with
            it. My curiosity led me to{" "}
            <span className="font-medium">backend development</span>, where I
            mastered{" "}
            <span className="italic underline">
              Node.js, Express.js, and MongoDB
            </span>
            , enabling me to build full-stack app.
          </p>

          <p>
            My main tech stack includes{" "}
            <span className="italic underline">
              React.js, Node.js, Express.js, and MongoDB
            </span>
            , I've also explored TypeScript & Next.js. I'm always learning and
            eager to take on new challenges. I am currently looking for a{" "}
            <span className="font-medium">full-time position</span> as a
            software developer.
          </p>
        </motion.section>
      )}
    </>
  );
};

export default About;
