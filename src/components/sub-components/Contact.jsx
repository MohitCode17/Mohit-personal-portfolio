import { motion } from "framer-motion";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  const [loading, setLoading] = useState(false);

  return (
    <motion.section
      id="contact"
      className="mt-20 sm:mb-24 sm:mt-0 max-w-[53rem] scroll-mt-28 text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <h1 className="font-semibold text-3xl sm:text-4xl mb-10 text-tubeLight-effect text-center">
        Let's Talk
      </h1>

      <p className="text-gray-700 -mt-6 dark:text-white/40 text-[15px]">
        Connect with me directly at{" "}
        <a
          className="underline dark:text-white/55"
          href="mailto:mohit.codes17@gmail.com"
        >
          mohit.codes17@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        onSubmit={handleFormSubmit}
        className="mt-10 flex flex-col dark:text-black"
      >
        <div className="flex flex-col sm:flex-row items-center gap-2 mb-2">
          <Input
            className="h-12 px-4 text-white border-none rounded-lg bg-slate-700 bg-opacity-30 focus:bg-opacity-60 transition-all"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your name"
          />

          <Input
            className="h-12 px-4 text-white border-none rounded-lg bg-slate-700 bg-opacity-30 focus:bg-opacity-60 transition-all"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
        </div>
        <Input
          className="h-12 px-4 text-white border-none rounded-lg bg-slate-700 bg-opacity-30 focus:bg-opacity-60 transition-all"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Subject"
        />
        <Textarea
          className="mt-2 px-4 text-white border-none rounded-lg bg-slate-700 bg-opacity-30 focus:bg-opacity-60 transition-all resize-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Write your message here..."
        />
        <div className="flex items-center justify-center mt-4">
          <button
            type="submit"
            className="group flex items-center justify-center gap-2 h-[3rem] w-3/4 sm:w-1/2 bg-slate-700 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-slate-800 active:scale-105 dark:bg-opacity-40 disabled:scale-100 disabled:bg-opacity-65"
            disabled={loading}
          >
            {loading ? (
              <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
            ) : (
              <>
                Submit
                <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
              </>
            )}
          </button>
        </div>
      </form>
    </motion.section>
  );
};

export default Contact;
