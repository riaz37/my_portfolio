import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaComment,
  FaCheckCircle,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";

const SOCIAL_LINKS = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/riaz37",
    color: "text-gray-800 hover:text-black dark:text-white dark:hover:text-gray-300",
  },
  {
    icon: FaGithub,
    href: "https://github.com/riaz37",
    color:
      "text-gray-800 hover:text-black dark:text-white dark:hover:text-gray-300",
  },
  {
    icon: FaFacebook,
    href: "https://facebook.com/rafi302001",
    color: "text-gray-800 hover:text-black dark:text-white dark:hover:text-gray-300",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
    form: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      message: "",
      form: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setFormStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          ...formData,
        }),
      });
      console.log(response);

      const result = await response.json();

      if (result.success) {
        setFormStatus("success");
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus("error");
        setErrors((prev) => ({
          ...prev,
          form: "Submission failed. Please try again.",
        }));
      }
    } catch (error) {
      setFormStatus("error");
      setErrors((prev) => ({
        ...prev,
        form: "Network error. Please try again.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-4 py-16 bg-background"
    >
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/[0.1] opacity-50 pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl w-full mx-auto grid md:grid-cols-2 gap-12 bg-card rounded-2xl shadow-2xl overflow-hidden">
        {/* Contact Information */}
        <div className="bg-primary/10 p-12 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              Get in Touch
            </h2>
            <p className="text-foreground/80 mb-6">
              Have a project in mind or just want to say hello? Feel free to
              reach out!
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-primary text-2xl" />
              <span className="text-foreground">riaz37.ipe@gmail.com</span>
            </div>
          </div>

          <div className="mt-6 flex space-x-4">
            {SOCIAL_LINKS.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.color} transition-all duration-300`}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon className="text-3xl" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-12">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="contact-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Send a Message
                </h3>

                {errors.form && (
                  <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg">
                    {errors.form}
                  </div>
                )}

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-primary" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full pl-10 p-3 rounded-lg border ${
                      errors.name
                        ? "border-red-500 bg-red-50"
                        : "border-border bg-input"
                    } focus:outline-none focus:ring-2 focus:ring-primary`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-primary" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-10 p-3 rounded-lg border ${
                      errors.email
                        ? "border-red-500 bg-red-50"
                        : "border-border bg-input"
                    } focus:outline-none focus:ring-2 focus:ring-primary`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 pt-3 pointer-events-none">
                    <FaComment className="text-primary" />
                  </div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full pl-10 p-3 rounded-lg border ${
                      errors.message
                        ? "border-red-500 bg-red-50"
                        : "border-border bg-input"
                    } focus:outline-none focus:ring-2 focus:ring-primary resize-none`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full p-3 rounded-lg text-black flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? "bg-primary/50 cursor-not-allowed"
                      : "bg-primary hover:bg-primary/90"
                  } transition-all duration-300`}
                >
                  <FaPaperPlane />
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center space-y-6"
              >
                <FaCheckCircle className="text-6xl text-green-500 mx-auto" />
                <h3 className="text-2xl font-semibold text-foreground">
                  Message Sent Successfully!
                </h3>
                <p className="text-foreground/80">
                  Thank you for reaching out. I&apos;ll get back to you soon.
                </p>
                <motion.button
                  onClick={() => setIsSubmitted(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mx-auto block px-6 py-3 bg-primary text-black rounded-lg"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Contact;
