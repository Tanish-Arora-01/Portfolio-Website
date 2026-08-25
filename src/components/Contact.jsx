import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import SpotlightButton from "./SpotlightButton";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [flash, setFlash] = useState(null);

  const showFlash = (type, message) => {
    setFlash({ type, message });
    setTimeout(() => setFlash(null), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!WEB3FORMS_KEY) {
      showFlash("error", "Form service unavailable — please try again later.");
      return;
    }

    const form = e.target;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_KEY);

    try {
      setLoading(true);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setLoading(false);

      if (data.success) {
        showFlash("success", "Message sent successfully — I'll get in touch soon.");
        form.reset();
      } else {
        showFlash("error", "Submission failed — please check your details.");
      }
    } catch (err) {
      setLoading(false);
      console.error("Form submit error:", err);
      showFlash("error", "Connection issue — please try once more.");
    }
  };

  return (
    <>
    <section
      name="contact"
      className="w-full min-h-0 lg:min-h-[100svh] text-text py-16 lg:py-24 relative z-10 flex items-center justify-center overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="max-w-6xl w-full mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-[2rem] overflow-hidden bg-white/60 backdrop-blur-xl border border-black/10 shadow-xl"
        >
          <div className="flex flex-col lg:grid lg:grid-cols-5 lg:min-h-[600px]">
            {/* LEFT COLUMN: Contact Info (Hidden on Mobile) */}
            <div className="hidden lg:flex lg:col-span-2 bg-gradient-to-br from-slate-800 to-slate-900 p-10 flex-col justify-between relative overflow-hidden">
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

              <div className="relative z-10 space-y-2">
                <h2 className="text-4xl font-bold text-white tracking-tight">
                  Let's Talk
                </h2>
                <p className="text-slate-300 text-lg">
                  Have a project in mind or just want to say hi? I'm always open
                  to discussing new ideas.
                </p>
              </div>

              <div className="relative z-10 space-y-8 mt-12 lg:mt-0">
                <div className="space-y-6">
                  <ContactRow
                    icon={<FaEnvelope />}
                    label="Email me at"
                    value="tanisharora1105@gmail.com"
                    href="mailto:tanisharora1105@gmail.com"
                  />
                  <ContactRow
                    icon={<FaMapMarkerAlt />}
                    label="Based in"
                    value="Chennai, India"
                  />
                </div>

                <div className="flex gap-4 pt-4 border-t border-white/10">
                  <SocialButton
                    href="https://github.com/Tanish-Arora-01"
                    icon={<FaGithub size={20} />}
                  />
                  <SocialButton
                    href="https://www.linkedin.com/in/tanish-arora-1105ta/"
                    icon={<FaLinkedin size={20} />}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: The Form */}
            <div className="w-full lg:col-span-3 bg-white/30 backdrop-blur-md p-6 md:p-12 relative flex flex-col justify-center">

              {/* Mobile Header (Hidden on Desktop) */}
              <div className="block lg:hidden mb-6 text-center space-y-3">
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Let's Talk</h2>
                <div className="flex justify-center gap-3">
                  <a href="mailto:tanisharora1105@gmail.com" className="p-3 bg-white/20 backdrop-blur-md border border-white/30 text-indigo-700 rounded-full hover:bg-white/40 transition shadow-sm"><FaEnvelope /></a>
                  <a href="https://github.com/Tanish-Arora-01" className="p-3 bg-white/20 backdrop-blur-md border border-white/30 text-slate-800 rounded-full hover:bg-white/40 transition shadow-sm"><FaGithub /></a>
                  <a href="https://www.linkedin.com/in/tanish-arora-1105ta/" className="p-3 bg-white/20 backdrop-blur-md border border-white/30 text-blue-700 rounded-full hover:bg-white/40 transition shadow-sm"><FaLinkedin /></a>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-4 lg:space-y-6 max-w-lg mx-auto lg:mx-0 w-full"
              >

                <div className="grid md:grid-cols-2 gap-6">
                  <InputGroup
                    label="Your Name"
                    name="name"
                    placeholder="John Doe"
                  />
                  <InputGroup
                    label="Your Email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    required
                    placeholder="Tell me about your project..."
                    className="w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:bg-white/80 focus:border-indigo-400/50 focus:ring-1 focus:ring-indigo-400/30 transition-all outline-none resize-none"
                  />
                </div>

                <SpotlightButton
                  type="submit"
                  className="w-full py-4 text-base font-semibold group"
                >
                  <span className="flex items-center justify-center gap-2">
                    {loading ? "Sending..." : "Send Message"}
                    {!loading && (
                      <FaPaperPlane
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        size={14}
                      />
                    )}
                  </span>
                </SpotlightButton>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

      {/* Toast Notification — fixed at bottom of screen */}
      <AnimatePresence>
        {flash && (
          <motion.div
            key="toast"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ type: "spring", damping: 22, stiffness: 300 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md"
          >
            <div
              className={`relative overflow-hidden rounded-2xl border backdrop-blur-xl shadow-2xl ${
                flash.type === "success"
                  ? "bg-slate-900/90 border-sky-400/30"
                  : "bg-slate-900/90 border-red-400/30"
              }`}
            >
              <div className="flex items-center gap-3 px-5 py-4">
                <div
                  className={`flex-shrink-0 p-2 rounded-full ${
                    flash.type === "success"
                      ? "bg-sky-400/15 text-sky-400"
                      : "bg-red-400/15 text-red-400"
                  }`}
                >
                  {flash.type === "success" ? (
                    <FaCheckCircle size={18} />
                  ) : (
                    <FaTimesCircle size={18} />
                  )}
                </div>
                <p
                  className={`text-sm font-medium ${
                    flash.type === "success"
                      ? "text-slate-100"
                      : "text-slate-100"
                  }`}
                >
                  {flash.message}
                </p>
              </div>
              {/* Auto-dismiss progress bar */}
              <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                transition={{ duration: 5, ease: "linear" }}
                className={`absolute bottom-0 left-0 h-[2px] w-full origin-left ${
                  flash.type === "success"
                    ? "bg-sky-400/70"
                    : "bg-red-400/70"
                }`}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// --- Sub-components for cleaner code ---

const ContactRow = ({ icon, label, value, href }) => (
  <div className="flex items-start gap-4">
    <div className="mt-1 p-2 rounded-lg bg-white/5 text-accent">{icon}</div>
    <div>
      <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
        {label}
      </p>
      {href ? (
        <a
          href={href}
          className="text-white hover:text-accent transition-colors font-medium"
        >
          {value}
        </a>
      ) : (
        <p className="text-white font-medium">{value}</p>
      )}
    </div>
  </div>
);

const SocialButton = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
  >
    {icon}
  </a>
);

const InputGroup = ({
  label,
  name,
  type = "text",
  placeholder,
  defaultValue,
}) => (
  <div className="w-full">
    <label className="block text-sm font-medium text-slate-600 mb-2">
      {label}
    </label>
    <input
      name={name}
      type={type}
      required
      defaultValue={defaultValue}
      placeholder={placeholder}
      className="w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:bg-white/80 focus:border-indigo-400/50 focus:ring-1 focus:ring-indigo-400/30 transition-all outline-none"
    />
  </div>
);

export default Contact;
