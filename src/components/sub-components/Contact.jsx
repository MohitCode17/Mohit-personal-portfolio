import { motion } from "framer-motion";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { toast } from "react-toastify";
import { BACKEND_URL } from "@/util/service";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/api/v1/message/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderName,
          senderEmail,
          subject,
          message,
        }),
      });
      setLoading(false);
      const data = await res.json();

      if (data.success === true) {
        toast.success("Message sent successfully.");
        setLoading(false);
        setSenderName("");
        setSenderEmail("");
        setSubject("");
        setMessage("");
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <motion.section
      id="contact"
      className="mt-20 sm:mb-24 sm:mt-0 max-w-[54rem] scroll-mt-32 text-center"
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
            type="text"
            placeholder="Your name"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            required
          />

          <Input
            className="h-12 px-4 text-white border-none rounded-lg bg-slate-700 bg-opacity-30 focus:bg-opacity-60 transition-all"
            type="email"
            required
            placeholder="Your email"
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
          />
        </div>
        <Input
          className="h-12 px-4 text-white border-none rounded-lg bg-slate-700 bg-opacity-30 focus:bg-opacity-60 transition-all"
          type="text"
          required
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <Textarea
          className="mt-2 px-4 text-white border-none rounded-lg bg-slate-700 bg-opacity-30 focus:bg-opacity-60 transition-all resize-none"
          name="message"
          type="text"
          required
          maxLength={500}
          placeholder="Write your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="flex items-center justify-center mt-4">
          <button
            type="submit"
            className="group flex items-center justify-center gap-2 h-[3rem] w-3/4 sm:w-1/2 bg-slate-700 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-slate-800 active:scale-105 dark:bg-opacity-40 disabled:scale-100 disabled:bg-opacity-65"
            disabled={loading}
          >
            Send Message
            <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
          </button>
        </div>
      </form>
    </motion.section>
  );
};

export default Contact;
