import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Intro = ({ user }) => {
  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] mt-48 sm:mt-36"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <img
              src={user ? `${user.avatar.url}` : "./images/placeholder.jpg"}
              alt="Mohit Gupta"
              width="192"
              height="192"
              className="h-48 w-48 rounded-full object-cover border-[0.35rem] border-white/15 shadow-xl"
              title="Mohit Gupta"
            />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 2.5,
              delay: 0.1,
              stiffness: 125,
            }}
            className="text-4xl absolute bottom-3 right-1"
          >
            👋
          </motion.span>
        </div>
      </div>

      {user ? (
        <motion.h1
          className="mb-10 mt-4 text-2xl font-normal !leading-[1.6] sm:!leading-[1.3] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          dangerouslySetInnerHTML={{ __html: user && user.intro }}
        ></motion.h1>
      ) : (
        <motion.h1
          className="mb-10 mt-4 px-4 text-2xl font-normal !leading-[1.3] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="font-bold">Hello, I'm Mohit,</span> a{" "}
          <span className="font-bold">full-stack developer</span> from{" "}
          <span className="font-bold">India</span>, passionate about building{" "}
          <span className="font-bold">dynamic and engaging</span>{" "}
          <span className="italic">websites & applications</span>
        </motion.h1>
      )}

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        <a
          href={"#contact"}
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me <BsArrowRight />
        </a>

        <Link
          to={user ? user.resume.url : "#"}
          target="_blank"
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
        >
          <HiDownload /> Download Resume
        </Link>
      </motion.div>

      <div className="flex items-center justify-center">
        <motion.div
          className="group bg-white px-7 py-3 mt-5 rounded-full outline-none flex items-center justify-center gap-5"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link to={user ? user.githubUrl : "#"} target="_blank" title="Github">
            <FaGithub
              size={24}
              className="focus:scale-125 hover:scale-125 active:scale-110 transition duration-300 text-black"
            />
          </Link>

          <Link
            to={user ? user.linkedinUrl : "#"}
            target="_blank"
            title="Linkedin"
          >
            <FaLinkedinIn
              size={24}
              className="focus:scale-125 hover:scale-125 active:scale-110 transition duration-300 text-[#0077B5]"
            />
          </Link>

          <Link
            to={user ? user.twitterUrl : "#"}
            target="_blank"
            title="Twitter"
          >
            <FaXTwitter
              size={24}
              className="focus:scale-125 hover:scale-125 active:scale-110 transition duration-300 text-black"
            />
          </Link>

          <Link
            to={user ? user.instagramUrl : "/"}
            target="_blank"
            title="Instagram"
          >
            <FaInstagram
              size={24}
              className="focus:scale-125 hover:scale-125 active:scale-110 transition duration-300 text-pink-500"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
