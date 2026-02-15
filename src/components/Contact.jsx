import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";
import SpotlightButton from "./SpotlightButton";

const FORM_ID = "wz3lznovti3";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [flash, setFlash] = useState(null);

  useEffect(() => {
    if (window.Forminit) {
      window.forminit = new window.Forminit();
      return;
    }
    const script = document.createElement("script");
    script.src = "https://forminit.com/sdk/v1/forminit.js";
    script.onload = () => (window.forminit = new window.Forminit());
    document.body.appendChild(script);
  }, []);

  const showFlash = (type, message) => {
    setFlash({ type, message });
    setTimeout(() => setFlash(null), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!window.forminit) {
      showFlash("error", "Form service unavailable — please refresh.");
      return;
    }

    const form = e.target;
    const formData = new FormData(form);

    const phone = formData.get("fi-sender-phone") || "";

    // Basic validation logic preserved
    if (!phone.startsWith("+") || phone.length < 11) {
      showFlash("error", "Please enter mobile in +91XXXXXXXXXX format.");
      return;
    }

    try {
      setLoading(true);
      const res = await window.forminit.submit(FORM_ID, formData);
      setLoading(false);

      if (!res) {
        showFlash("error", "Unexpected response — please try again.");
        return;
      }

      if (res.error) {
        showFlash("error", "Submission failed — please check your details.");
        return;
      }

      showFlash("success", "✅ Message sent — I’ll get in touch soon.");
      form.reset();
      // Reset phone default value
      const phoneInput = form.querySelector('[name="fi-sender-phone"]');
      if (phoneInput) phoneInput.value = "+91";
    } catch (err) {
      setLoading(false);
      console.error("Form submit error:", err);
      showFlash("error", "Connection issue — please try once more.");
    }
  };

  return (
    <section
      name="contact"
      className="w-full min-h-[100dvh] text-text py-24 relative z-10 flex items-center justify-center overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="max-w-6xl w-full mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2rem] overflow-hidden bg-[#0a0a0a] border border-white/10 shadow-2xl"
        >
          <div className="grid lg:grid-cols-5 min-h-[600px]">
            {/* LEFT COLUMN: Contact Info */}
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-900 to-black p-10 flex flex-col justify-between relative overflow-hidden">
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

              <div className="relative z-10 space-y-2">
                <h2 className="text-4xl font-bold text-white tracking-tight">
                  Let's Talk
                </h2>
                <p className="text-gray-400 text-lg">
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
                    icon={<FaPhoneAlt />}
                    label="Call me at"
                    value="+91-9461113664"
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
                    href="/resume_SDE.pdf"
                    download
                    className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-accent transition-colors ml-auto"
                  >
                    Resume <HiDownload size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: The Form */}
            <div className="lg:col-span-3 bg-white/[0.02] p-8 md:p-12 relative">
              <form
                onSubmit={handleSubmit}
                className="space-y-6 max-w-lg mx-auto lg:mx-0"
              >
                {/* Flash Message */}
                {flash && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`px-4 py-3 rounded-xl text-sm font-medium ${
                      flash.type === "success"
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
                    name="fi-sender-fullName"
                    placeholder="John Doe"
                  />
                  <InputGroup
                    label="Your Email"
                    name="fi-sender-email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>

                <InputGroup
                  label="Phone Number"
                  name="fi-sender-phone"
                  type="tel"
                  defaultValue="+91"
                  placeholder="+91XXXXXXXXXX"
                />

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    name="fi-text-message"
                    rows="4"
                    required
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/5 border border-transparent rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:bg-white/10 focus:border-accent/30 focus:ring-1 focus:ring-accent/30 transition-all outline-none resize-none"
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
    <label className="block text-sm font-medium text-gray-400 mb-2">
      {label}
    </label>
    <input
      name={name}
      type={type}
      required
      defaultValue={defaultValue}
      placeholder={placeholder}
      className="w-full bg-white/5 border border-transparent rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:bg-white/10 focus:border-accent/30 focus:ring-1 focus:ring-accent/30 transition-all outline-none"
    />
  </div>
);

export default Contact;
