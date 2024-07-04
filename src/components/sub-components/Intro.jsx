import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Intro = () => {
  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] pt-28 sm:pt-36"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <img
              src="https://st.depositphotos.com/2101611/4338/v/600/depositphotos_43381243-stock-illustration-male-avatar-profile-picture.jpg"
              alt="Mohit Portrait"
              width="192"
              height="192"
              className="h-32 w-32 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
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
            className="text-4xl absolute bottom-1 right-0"
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-normal !leading-[1.3] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className="font-bold">Hyy, I'm Mohit,</span> a{" "}
        <span className="font-bold">full-stack developer</span> with passion for
        building <span className="font-bold">dynamic and engaging</span>{" "}
        <span className="italic">sites & applications</span>. My current focus
        is <span className="underline">Next.js.</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        <Link
          to={"#contact"}
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me <BsArrowRight />
        </Link>

        <Link
          to={""}
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
          <Link to={""} title="Github">
            <FaGithub
              size={24}
              className="focus:scale-110 hover:scale-110 active:scale-105 transition text-black"
            />
          </Link>

          <Link to={""} title="Linkedin">
            <FaLinkedinIn
              size={24}
              className="focus:scale-110 hover:scale-110 active:scale-105 transition text-[#0077B5]"
            />
          </Link>

          <Link to={""} title="Twitter">
            <FaXTwitter
              size={24}
              className="focus:scale-110 hover:scale-110 active:scale-105 transition text-black"
            />
          </Link>

          <Link to={""} title="Instagram">
            <FaInstagram
              size={24}
              className="focus:scale-110 hover:scale-110 active:scale-105 transition text-pink-500"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
