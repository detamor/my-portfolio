import React, { useState } from "react";
import { Send, User, Mail, MessageSquare, Briefcase, CheckCircle } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `🎯 *New Portfolio Inquiry*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
💡 *Subject:* ${formData.subject}

📝 *Message:*
${formData.message}

---
*Sent via Portfolio Form*`;

    const whatsappURL = `https://wa.me/6281376485766?text=${encodeURIComponent(message)}`;

    // Simulate small delay
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      window.open(whatsappURL, "_blank");
    }, 1000);
  };

  if (showSuccess) {
    return (
      <section className="py-32 px-6 md:px-12 relative overflow-hidden bg-[#020617]">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="w-20 h-20 bg-indigo-500/10 border border-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <CheckCircle className="w-10 h-10 text-indigo-400" />
          </div>
          <h3 className="text-3xl font-light text-white mb-4">Message Sent</h3>
          <p className="text-zinc-500 mb-8 font-light">
            Thank you for reaching out. I'll get back to you as soon as possible.
          </p>
          <button
            onClick={() => setShowSuccess(false)}
            className="text-[11px] font-mono text-indigo-400 uppercase tracking-widest border-b border-indigo-500/20 pb-1 hover:text-white transition-colors"
          >
            Send another message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-32 px-6 md:px-12 relative overflow-hidden bg-[#020617]">
      {/* Background Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <span className="text-indigo-400/40 font-mono text-[10px] tracking-[0.3em] uppercase block mb-4">
                Get in touch
              </span>
              <h2 className="text-4xl md:text-6xl font-light text-white tracking-tighter leading-tight mb-8">
                Tanya <br />
                <span className="text-zinc-500 italic">Apapun</span>
              </h2>
              <p className="text-zinc-400 text-base font-light leading-relaxed max-w-sm">
                Punya ide proyek, butuh bantuan teknis, atau sekadar ingin menyapa? Hubungi saya kapan saja.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-zinc-500 group-hover:text-indigo-400 transition-all duration-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase mb-1">Email</div>
                  <div className="text-white font-light">natanaeldetamorkarokaro@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-zinc-500 group-hover:text-indigo-400 transition-all duration-500">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase mb-1">Availability</div>
                  <div className="text-white font-light">Open for Full-time Roles</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="relative">
            <div className="absolute -inset-4 bg-white/[0.01] border border-white/[0.05] rounded-3xl -z-10 blur-sm"></div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase ml-1">Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500/50 transition-all duration-500 placeholder-zinc-700 font-light"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase ml-1">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500/50 transition-all duration-500 placeholder-zinc-700 font-light"
                    placeholder="Email Address"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase ml-1">Subject</label>
                <input
                  required
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500/50 transition-all duration-500 placeholder-zinc-700 font-light"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase ml-1">Message</label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500/50 transition-all duration-500 placeholder-zinc-700 font-light resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white py-5 rounded-xl transition-all duration-500 font-mono text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-indigo-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;