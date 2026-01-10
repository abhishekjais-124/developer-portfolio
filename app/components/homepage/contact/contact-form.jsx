"use client";
// @flow strict
import { isValidEmail } from "@/utils/check-email";
import { send } from '@emailjs/browser';
import { useState } from "react";
import { FiSend, FiCheckCircle } from "react-icons/fi";
import { toast } from "react-toastify";

function SuccessModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop with blur */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Success Card */}
      <div className="relative z-10 animate-bounce-in">
        <div className="bg-gradient-to-br from-[#16f2b3]/20 to-cyan-500/20 border border-[#16f2b3]/50 rounded-2xl p-8 md:p-12 shadow-2xl max-w-md w-full">
          {/* Animated checkmark circle */}
          <div className="flex justify-center mb-6">
            <div className="relative w-20 h-20">
              {/* Outer rotating circle */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#16f2b3] to-cyan-400 rounded-full opacity-20 animate-spin" />
              
              {/* Inner circle with checkmark */}
              <div className="absolute inset-2 bg-[#0d1224] rounded-full flex items-center justify-center border-2 border-[#16f2b3] animate-pulse">
                <FiCheckCircle className="text-[#16f2b3] text-5xl animate-scale-in" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="text-center space-y-3">
            <h3 className="text-2xl md:text-3xl font-bold text-white animate-fade-in">
              Message Sent!
            </h3>
            <p className="text-[#d3d8e8] text-sm md:text-base animate-fade-in">
              Thank you for reaching out. I'll get back to you as soon as possible.
            </p>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="mt-8 w-full bg-gradient-to-r from-[#16f2b3] to-cyan-400 hover:from-[#16f2b3]/80 hover:to-cyan-400/80 text-[#0d1224] font-bold py-3 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 animate-fade-in"
          >
            Great!
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(50px);
          }
          50% {
            opacity: 1;
          }
          70% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1) translateY(0);
          }
        }

        @keyframes scaleIn {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-bounce-in {
          animation: bounceIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-scale-in {
          animation: scaleIn 0.8s ease-out;
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-fade-in:nth-child(2) {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animate-fade-in:nth-child(3) {
          animation-delay: 0.4s;
          opacity: 0;
        }
      `}</style>
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

    if (!validateForm()) {
      return;
    }

    try {
      setIsLoading(true);

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        toast.error('Email service is not configured.');
        setIsLoading(false);
        return;
      }

      const templateParams = {
        from_name: userInput.name,
        reply_to: userInput.email,
        message: userInput.message,
      };

      await send(serviceId, templateId, templateParams, publicKey);

      setShowSuccess(true);
      setUserInput({
        name: "",
        email: "",
        message: "",
      });
      setErrors({ email: false, general: false });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div>
        <p className="font-semibold mb-6 lg:mb-7 ml-3 text-[#16f2b3] text-sm uppercase tracking-[0.2em]">Contact with me</p>
        <div className="max-w-3xl text-white rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 lg:p-7 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
          <p className="text-sm text-white/80 leading-relaxed">{"If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."}</p>
          <form onSubmit={handleSendMail} className="mt-7 flex flex-col gap-5">
            <div className="flex flex-col gap-2.5">
              <label className="text-sm font-medium text-white/90">Your Name: </label>
              <input
                className="bg-white/5 w-full border rounded-lg border-white/10 focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2 backdrop-blur"
                type="text"
                maxLength="100"
                placeholder="Enter your name"
                onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
                value={userInput.name}
              />
            </div>

            <div className="flex flex-col gap-2.5">
              <label className="text-sm font-medium text-white/90">Your Email: </label>
              <div className="relative">
                <input
                  className={`bg-white/5 w-full border rounded-lg ring-0 outline-0 transition-all duration-300 px-3 py-2 backdrop-blur ${
                      errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#16f2b3] bg-white/5 backdrop-blur'
                  }`}
                  type="email"
                  maxLength="100"
                  placeholder="your-email"
                  onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
                  value={userInput.email}
                />
                {!userInput.email && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#353a52] pointer-events-none text-sm">
                    @gmail.com
                  </span>
                )}
              </div>
              {errors.email && <p className="text-sm text-red-400">Please provide a valid email address</p>}
            </div>

            <div className="flex flex-col gap-2.5">
              <label className="text-sm font-medium text-white/90">Your Message: </label>
              <textarea
                className="bg-white/5 w-full border rounded-lg border-white/10 focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-3 resize-none backdrop-blur"
                maxLength="500"
                placeholder="Enter your message (max 500 characters)"
                onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
                rows="4"
                value={userInput.message}
              />
              <p className="text-xs text-[#8892b0]">{userInput.message.length}/500</p>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              {errors.general && <p className="text-sm text-red-400">
                Please fill in all fields
              </p>}
              <button
                type="submit"
                className="group relative flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-violet-600 to-cyan-500 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 ease-out hover:gap-3 hover:shadow-lg hover:shadow-pink-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:gap-2 disabled:hover:shadow-none overflow-hidden"
                disabled={isLoading}
              >
                {/* Animated background shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                
                <span className="relative flex items-center gap-1">
                  {isLoading ? (
                    <>
                      <span className="inline-block animate-spin">⚡</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FiSend size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      <SuccessModal 
        isOpen={showSuccess} 
        onClose={() => setShowSuccess(false)} 
      />
    </>
  );
}

export default ContactForm;