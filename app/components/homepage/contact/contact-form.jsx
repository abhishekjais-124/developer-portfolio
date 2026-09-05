"use client";

import { isValidEmail } from "@/utils/check-email";
import { send } from "@emailjs/browser";
import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { toast } from "react-toastify";

function SuccessModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-md border border-[#c9a962]/25 bg-[#0c0c0d] p-7 text-center sm:p-10">
        <p className="font-display text-5xl italic text-[#c9a962]">Sent.</p>
        <p className="mt-4 text-sm leading-7 text-[#c8c0b2]">
          Thank you. I will write back as soon as I can.
        </p>
        <button onClick={onClose} className="btn-gold mt-8 w-full">
          Close
        </button>
      </div>
    </div>
  );
}

function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({ email: false, general: false });
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    const newErrors = { email: false, general: false };
    if (!userInput.name || !userInput.email || !userInput.message) {
      newErrors.general = true;
    }
    if (userInput.email && !isValidEmail(userInput.email)) {
      newErrors.email = true;
    }
    setErrors(newErrors);
    return !newErrors.general && !newErrors.email;
  };

  const handleSendMail = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setIsLoading(true);
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        toast.error("Email service is not configured.");
        setIsLoading(false);
        return;
      }

      await send(serviceId, templateId, {
        from_name: userInput.name,
        reply_to: userInput.email,
        message: userInput.message,
      }, publicKey);

      setShowSuccess(true);
      setUserInput({ name: "", email: "", message: "" });
      setErrors({ email: false, general: false });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full min-w-0">
      <form
        onSubmit={handleSendMail}
        className="atelier-card flex h-full flex-col p-5 text-left sm:p-8"
      >
        <p className="m-0 text-[0.62rem] uppercase leading-none tracking-[0.16em] text-[#e8d5a3]">
          A private note
        </p>
        <label className="mt-8 m-0 block w-full">
          <span className="block text-[0.62rem] uppercase leading-none tracking-[0.16em] text-[#8d867b]">Name</span>
          <input
            className="luxury-input"
            type="text"
            maxLength="100"
            placeholder="Your name"
            onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
            value={userInput.name}
          />
        </label>
        <label className="mt-6 m-0 block w-full">
          <span className="block text-[0.62rem] uppercase leading-none tracking-[0.16em] text-[#8d867b]">Email</span>
          <input
            className={`luxury-input ${errors.email ? "border-[#d46a6a]" : ""}`}
            type="email"
            maxLength="100"
            placeholder="you@studio.com"
            onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
            value={userInput.email}
          />
          {errors.email && <p className="mt-2 text-xs text-[#d46a6a]">Please provide a valid email</p>}
        </label>
        <label className="mt-6 m-0 block w-full">
          <span className="block text-[0.62rem] uppercase leading-none tracking-[0.16em] text-[#8d867b]">Message</span>
          <textarea
            className="luxury-input min-h-32 resize-none"
            maxLength="500"
            placeholder="What shall we build?"
            onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
            rows="4"
            value={userInput.message}
          />
          <p className="mt-2 text-[0.62rem] uppercase tracking-[0.16em] text-[#8d867b]">
            {userInput.message.length}/500
          </p>
        </label>
        {errors.general && <p className="mt-4 text-xs text-[#d46a6a]">Please complete every line</p>}
        <button type="submit" className="btn-gold mt-6 w-full sm:w-fit" disabled={isLoading}>
          {isLoading ? "Sending" : "Send the note"}
          <FiSend size={14} />
        </button>
      </form>
      <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
    </div>
  );
}

export default ContactForm;
