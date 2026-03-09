import React, { useState, useEffect } from "react";
import {
  Send,
  ArrowRight,
  User,
  Mail,
  Briefcase,
  DollarSign,
  Clock,
  MessageCircle,
  CheckCircle,
  ChevronLeft,
  Sparkles
} from "lucide-react";

const ElegantContactForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [isAnimating, setIsAnimating] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const questions = [
    {
      id: "name",
      icon: <User className="w-6 h-6" />,
      title: "Personal Information",
      question: "What's your name?",
      subtitle: "Let's start with a proper introduction",
      placeholder: "Enter your full name",
      type: "text",
      quickReplies: []
    },
    {
      id: "email",
      icon: <Mail className="w-6 h-6" />,
      title: "Contact Details",
      question: "Your professional email?",
      subtitle: "Where I can reach you with updates",
      placeholder: "your.email@company.com",
      type: "email",
      quickReplies: []
    },
    {
      id: "project",
      icon: <Briefcase className="w-6 h-6" />,
      title: "Project Scope",
      question: "What type of project do you need?",
      subtitle: "Define your technical requirements",
      placeholder: "Describe your project type...",
      type: "text",
      quickReplies: [
        { text: "Web Application", value: "Modern Web Application", icon: "💻" },
        { text: "SaaS Platform", value: "SaaS Platform Development", icon: "🚀" },
        { text: "Mobile App", value: "Mobile Application", icon: "📱" },
        { text: "E-commerce", value: "E-commerce Platform", icon: "🛍️" },
        { text: "Data Analytics", value: "Data Analytics Solution", icon: "📊" },
        { text: "Custom Solution", value: "Custom Development", icon: "⚡" }
      ]
    },
    {
      id: "budget",
      icon: <div className="w-6 h-6 flex items-center justify-center text-sm font-bold border rounded">Rp</div>,
      title: "Budget Range",
      question: "What's your project budget?",
      subtitle: "Investment range for your solution",
      placeholder: "Your budget range",
      type: "text",
      quickReplies: [
        { text: "Under Rp 1,000.000", value: "Under Rp 1,000.000", icon: "💚" },
        { text: "Rp 1,000.000 - Rp 5,000.000", value: "RP 1,000.000 - Rp 5,000.000", icon: "💙" },
        { text: "Rp 5,000.000 - Rp 15,000.000", value: "Rp 5,000.000 - Rp 15,000.000", icon: "💜" },
        { text: "Rp 15,000.000+", value: "Rp 15,000.000 or more", icon: "🖤" },
        { text: "Let's Discuss", value: "Flexible Budget", icon: "💬" }
      ]
    },
    {
      id: "timeline",
      icon: <Clock className="w-6 h-6" />,
      title: "Timeline",
      question: "When do you need this completed?",
      subtitle: "Project delivery expectations",
      placeholder: "Your preferred timeline",
      type: "text",
      quickReplies: [
        { text: "2-3 weeks", value: "Rush delivery (2-3 weeks)", icon: "⚡" },
        { text: "1-2 months", value: "Standard timeline (1-2 months)", icon: "⏰" },
        { text: "2-3 months", value: "Extended timeline (2-3 months)", icon: "📅" },
        { text: "3+ months", value: "Long-term project (3+ months)", icon: "🗓️" },
        { text: "Flexible", value: "Quality focused timeline", icon: "💎" }
      ]
    },
    {
      id: "message",
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Project Details",
      question: "Tell me about your vision",
      subtitle: "Detailed requirements and specifications",
      placeholder: "Describe your project goals, required features, target audience, technical specifications, or any other important details...",
      type: "textarea",
      quickReplies: []
    }
  ];

  const handleInputChange = (value) => {
    setFormData(prev => ({
      ...prev,
      [questions[currentStep].id]: value
    }));
  };

  const handleQuickReply = (value) => {
    setFormData(prev => ({
      ...prev,
      [questions[currentStep].id]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
        setIsAnimating(false);
      }, 400);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(prev => prev - 1);
        setIsAnimating(false);
      }, 400);
    }
  };

  const handleSubmit = async () => {
    const message = `🎯 *New Project Inquiry*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
💡 *Project:* ${formData.project}
💰 *Budget:* ${formData.budget}
⏰ *Timeline:* ${formData.timeline}

📝 *Project Details:*
${formData.message}

---
*Sent via Professional Contact Form*`;

    const whatsappURL = `https://wa.me/+6282162054193?text=${encodeURIComponent(message)}`;

    setShowSuccess(true);
    setTimeout(() => {
      window.open(whatsappURL, "_blank");
    }, 1500);
  };

  const isStepValid = () => {
    const currentValue = formData[questions[currentStep].id];
    if (questions[currentStep].type === "email") {
      return currentValue && currentValue.includes("@") && currentValue.includes(".");
    }
    return currentValue && currentValue.trim().length > 0;
  };

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  if (showSuccess) {
    return (
      <section className="py-24 px-6 md:px-12 relative overflow-hidden bg-zinc-950">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-zinc-950 to-black" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px'
            }}
          />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.01] rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/[0.008] rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-2xl relative z-10 flex items-center justify-center min-h-[80vh]">
          <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-3xl p-12 shadow-2xl shadow-black/20 text-center max-w-lg w-full">
            <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>

            <h3 className="text-3xl font-extralight text-white mb-4">
              Message Sent Successfully
            </h3>

            <p className="text-zinc-400 mb-8 leading-relaxed">
              Your project inquiry has been sent. I'll review your requirements and respond within 2-4 hours with a detailed proposal.
            </p>

            <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6 mb-8">
              <div className="text-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></div>
                  <span className="text-zinc-300">Requirements analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></div>
                  <span className="text-zinc-300">Custom proposal preparation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></div>
                  <span className="text-zinc-300">Timeline and pricing details</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => window.location.reload()}
              className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 font-medium"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative overflow-hidden bg-zinc-950">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-zinc-950 to-black" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.01] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/[0.008] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/[0.03] border border-zinc-800 rounded-full mb-8">
            <span className="text-[11px] font-mono text-zinc-600 tracking-[0.2em] uppercase">Connect</span>
          </div>

          <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white leading-none mb-8">
            Let's build
            <br />
            <span className="text-zinc-500">together</span>
          </h2>

          <div className="w-12 h-px bg-zinc-800 mx-auto mb-8" />

          <p className="text-sm md:text-base text-zinc-600 max-w-xl mx-auto leading-relaxed font-light">
            Professional consultation for your next technical venture.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-mono text-zinc-500 tracking-wider">
              STEP {String(currentStep + 1).padStart(2, '0')} / {String(questions.length).padStart(2, '0')}
            </span>
            <span className="text-sm font-mono text-zinc-500 tracking-wider">
              {Math.round(progress)}% COMPLETE
            </span>
          </div>
          <div className="h-px bg-zinc-800 relative overflow-hidden">
            <div
              className="h-full bg-white/20 transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Main Form */}
        <div
          className={`bg-zinc-900/30 border border-zinc-800/50 rounded-3xl p-12 shadow-2xl shadow-black/20 transition-all duration-400 ${isAnimating ? 'opacity-60 scale-[0.98]' : 'opacity-100 scale-100'
            }`}
        >
          {/* Question Header */}
          <div className="flex items-start gap-6 mb-10">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white flex-shrink-0">
              {currentQuestion.icon}
            </div>
            <div className="flex-1">
              <div className="text-sm font-mono text-zinc-500 tracking-wider uppercase mb-2">
                {currentQuestion.title}
              </div>
              <h3 className="text-2xl font-extralight text-white mb-2">
                {currentQuestion.question}
              </h3>
              <p className="text-zinc-400 font-light">
                {currentQuestion.subtitle}
              </p>
            </div>
          </div>

          {/* Input Field */}
          <div className="mb-10">
            {currentQuestion.type === "textarea" ? (
              <textarea
                value={formData[currentQuestion.id]}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder={currentQuestion.placeholder}
                rows={6}
                className="w-full p-6 bg-zinc-900/50 border border-zinc-800/50 rounded-2xl focus:outline-none focus:border-zinc-700 focus:bg-zinc-900/70 transition-all duration-300 text-white placeholder-zinc-500 resize-none font-light"
              />
            ) : (
              <input
                type={currentQuestion.type}
                value={formData[currentQuestion.id]}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder={currentQuestion.placeholder}
                className="w-full p-6 bg-zinc-900/50 border border-zinc-800/50 rounded-2xl focus:outline-none focus:border-zinc-700 focus:bg-zinc-900/70 transition-all duration-300 text-white placeholder-zinc-500 font-light"
              />
            )}
          </div>

          {/* Quick Replies */}
          {currentQuestion.quickReplies.length > 0 && (
            <div className="mb-12">
              <p className="text-sm font-mono text-zinc-500 tracking-wider uppercase mb-6">
                Quick Options
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentQuestion.quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply.value)}
                    className={`p-4 text-left text-sm rounded-xl border transition-all duration-300 ${formData[currentQuestion.id] === reply.value
                        ? "bg-white/10 border-white/20 text-white"
                        : "bg-zinc-900/30 border-zinc-800/50 text-zinc-400 hover:bg-zinc-900/50 hover:border-zinc-700/70 hover:text-zinc-200"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-base opacity-60">{reply.icon}</span>
                      <span className="font-light">{reply.text}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl border transition-all duration-300 ${currentStep === 0
                  ? "border-zinc-800/30 text-zinc-600 cursor-not-allowed"
                  : "border-zinc-800/50 text-zinc-400 hover:border-zinc-700/70 hover:text-zinc-200 hover:bg-zinc-900/30"
                }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-sm font-light">Previous</span>
            </button>

            <div className="flex items-center gap-3">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentStep
                      ? "bg-white/40 scale-125"
                      : index < currentStep
                        ? "bg-white/20"
                        : "bg-zinc-800"
                    }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={!isStepValid()}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl border transition-all duration-300 ${isStepValid()
                  ? "bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/30"
                  : "border-zinc-800/30 text-zinc-600 cursor-not-allowed"
                }`}
            >
              <span className="text-sm font-light">
                {currentStep === questions.length - 1 ? "Send Message" : "Continue"}
              </span>
              {currentStep === questions.length - 1 ? (
                <Send className="w-4 h-4" />
              ) : (
                <ArrowRight className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-sm font-mono text-zinc-600 tracking-wider uppercase">
            Professional Development Services
          </p>
        </div>
      </div>
    </section>
  );
};

export default ElegantContactForm;