import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
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
      form.querySelector('[name="fi-sender-phone"]').value = "+91";
    } catch (err) {
      setLoading(false);
      console.error("Form submit error:", err);
      showFlash("error", "Connection issue — please try once more.");
    }
  };

  return (
    <section
      name="contact"
      className="w-full text-text py-24 relative z-10 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-screen-xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <h2 className="text-5xl font-bold text-white">
            Let's build something amazing.
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <InfoCard
              icon={<FaEnvelope />}
              label="Email"
              value="tanisharora1105@gmail.com"
              href="mailto:tanisharora1105@gmail.com"
            />
            <InfoCard
              icon={<FaPhoneAlt />}
              label="Phone"
              value="+91-9461113664"
            />
            <InfoCard
              icon={<FaMapMarkerAlt />}
              label="Location"
              value="Chennai, India"
            />

            <SpotlightCard className="p-6 backdrop-blur-sm bg-white/5 border-white/15">
              <div className="flex gap-4 mb-6">
                <Social href="https://www.linkedin.com/in/tanish-arora-1105ta/">
                  <FaLinkedin size={22} />
                </Social>
                <Social href="https://github.com/Tanish-Arora-01">
                  <FaGithub size={22} />
                </Social>
              </div>
              <a href="/resume_SDE.pdf" download>
                <SpotlightButton className="px-5 py-3 text-sm">
                  Download Resume <HiDownload />
                </SpotlightButton>
              </a>
            </SpotlightCard>
          </div>
        </motion.div>

        {/* RIGHT — FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative rounded-3xl p-[2px] bg-gradient-to-br from-white/20 via-white/5 to-transparent">
            <form
              onSubmit={handleSubmit}
              className="bg-secondary/60 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl relative space-y-6"
            >
              <h3 className="text-2xl font-bold text-white">Send a Message</h3>

              {flash && (
                <div
                  className={`
                  px-4 py-3 rounded-xl border
                  ${
                    flash.type === "success"
                      ? "bg-accent/15 border-accent/40 text-accent"
                      : "bg-red-500/10 border-red-500/30 text-red-400"
                  }
                `}
                >
                  {flash.message}
                </div>
              )}

              <Input
                name="fi-sender-fullName"
                label="Full Name"
                placeholder="Your name"
              />
              <Input
                name="fi-sender-email"
                type="email"
                label="Email"
                placeholder="you@example.com"
              />
              <Input
                name="fi-sender-phone"
                type="tel"
                label="Mobile Number"
                defaultValue="+91"
                placeholder="+91XXXXXXXXXX"
              />
              <Textarea
                name="fi-text-message"
                label="Message"
                placeholder="Tell me about your project..."
              />

              <SpotlightButton type="submit" className="w-full py-4">
                {loading ? "Sending..." : "Send Message"}
              </SpotlightButton>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* helpers unchanged */

const InfoCard = ({ icon, label, value, href }) => (
  <SpotlightCard className="p-6 backdrop-blur-sm bg-white/5 border-white/15">
    {href ? (
      <a href={href}>
        <Icon icon={icon} />
        <Label>{label}</Label>
        <Value>{value}</Value>
      </a>
    ) : (
      <>
        <Icon icon={icon} />
        <Label>{label}</Label>
        <Value>{value}</Value>
      </>
    )}
  </SpotlightCard>
);

const Icon = ({ icon }) => (
  <div className="h-10 w-10 bg-accent/20 rounded-lg flex items-center justify-center text-accent mb-4">
    {icon}
  </div>
);

const Label = ({ children }) => (
  <h3 className="text-gray-400 text-sm mb-1">{children}</h3>
);

const Value = ({ children }) => (
  <p className="text-white font-semibold text-sm">{children}</p>
);

const Social = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="text-white hover:text-accent"
  >
    {children}
  </a>
);

const Input = ({ name, label, type = "text", placeholder, defaultValue }) => (
  <div>
    <label className="block text-sm text-gray-400 mb-2">{label}</label>
    <input
      name={name}
      type={type}
      required
      defaultValue={defaultValue}
      placeholder={placeholder}
      className="w-full rounded-xl px-5 py-4 bg-white/5 border border-white/15 text-white placeholder-gray-500 focus:border-accent/60 focus:outline-none"
    />
  </div>
);

const Textarea = ({ name, label, placeholder }) => (
  <div>
    <label className="block text-sm text-gray-400 mb-2">{label}</label>
    <textarea
      name={name}
      rows="5"
      required
      placeholder={placeholder}
      className="w-full rounded-xl px-5 py-4 resize-none bg-white/5 border border-white/15 text-white placeholder-gray-500 focus:border-accent/60 focus:outline-none"
    />
  </div>
);

export default Contact;
