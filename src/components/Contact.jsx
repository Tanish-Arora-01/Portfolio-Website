import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";
import SpotlightButton from "./SpotlightButton";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [flash, setFlash] = useState(null);

  const showFlash = (type, message) => {
    setFlash({ type, message });
    setTimeout(() => setFlash(null), 4000);
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
        showFlash("success", "✅ Message sent — I'll get in touch soon.");
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
                  />
                  <a
                    href="/Tanish_Arora_Resume.pdf"
                    download
                    className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-accent transition-colors ml-auto"
                  >
                    Resume <HiDownload size={18} />
                  </a>
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
                  <a href="/resume_SDE.pdf" download className="p-3 bg-white/20 backdrop-blur-md border border-white/30 text-indigo-700 rounded-full hover:bg-white/40 transition shadow-sm"><HiDownload /></a>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-4 lg:space-y-6 max-w-lg mx-auto lg:mx-0 w-full"
              >
                {/* Flash Message */}
                {flash && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`px-4 py-3 rounded-xl text-sm font-medium ${flash.type === "success"
                      ? "bg-green-500/10 text-green-400 border border-green-500/20"
                      : "bg-red-500/10 text-red-400 border border-red-500/20"
                      }`}
                  >
                    {flash.message}
                  </motion.div>
                )}

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
