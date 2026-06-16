import { MessageSquare, Phone, Sparkles, X, Send, ChevronDown, Clock, User, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import { socket } from '../lib/socket';

type Message = {
  id: string;
  type: 'bot' | 'user';
  text?: string;
  isQuickActions?: boolean;
};

const quickActions = [
  "Book Appointment",
  "Dental Implants",
  "Smile Designing",
  "Root Canal Treatment",
  "Clinic Timings",
  "WhatsApp Support",
  "Contact Doctor"
];

const clinicTimings = "Our clinic is open Monday to Saturday from 10:00 AM to 8:30 PM. Sunday is holiday.";
const clinicAddress = "Balakrishna Complex, 4/30, Opposite Women's College, Maria Puram, Nagarajupeta, Kadapa, Annamayya, Andhra Pradesh 516001";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'greeting',
      type: 'bot',
      text: "Hello 👋 Welcome to Kartheek's Dental & Maxillofacial. How can I help you today?"
    },
    {
      id: 'actions',
      type: 'bot',
      isQuickActions: true
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [bookingMode, setBookingMode] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleActionClick = (action: string) => {
    const newMessages = [...messages.filter(m => !m.isQuickActions), {
      id: Date.now().toString(),
      type: 'user' as const,
      text: action
    }];
    setMessages(newMessages);

    setTimeout(() => {
      let botResponse = "I can definitely help you with that.";
      
      switch(action) {
        case "Clinic Timings":
          botResponse = clinicTimings;
          break;
        case "WhatsApp Support":
          window.open("https://wa.me/919052311281", "_blank");
          botResponse = "I'm redirecting you to our WhatsApp support.";
          break;
        case "Contact Doctor":
          window.location.href = "tel:+919052311281";
          botResponse = "I'm connecting you to the doctor's line.";
          break;
        case "Book Appointment":
          botResponse = "Excellent! Please reply with your Name and Phone Number to confirm your slot.";
          setBookingMode(true);
          break;
        case "Dental Implants":
          botResponse = "Dental implants are artificial tooth roots placed into the jaw to hold a replacement tooth. They look and function like natural teeth. Would you like to schedule a consultation?";
          break;
        case "Smile Designing":
          botResponse = "Smile designing is a cosmetic treatment that improves the appearance of your smile through procedures like veneers, whitening, and alignment. Shall we book an initial evaluation?";
          break;
        case "Root Canal Treatment":
          botResponse = "Root Canal Treatment (RCT) is a painless procedure used to repair and save a tooth that is badly decayed or infected. It relieves dental pain quickly.";
          break;
      }

      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          text: botResponse
        },
        {
          id: (Date.now() + 2).toString(),
          type: 'bot',
          isQuickActions: true
        }
      ]);
    }, 600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    setInputValue("");

    const newMessages = [...messages.filter(m => !m.isQuickActions), {
      id: Date.now().toString(),
      type: 'user' as const,
      text: userText
    }];
    setMessages(newMessages);

    setTimeout(() => {
      let responseText = "Thank you for sharing! One of our specialists will get back to you shortly. You can also reach us immediately at +91 90523 11281.";
      
      if (bookingMode) {
        // Simple extraction: assume whatever they typed is their "name and phone"
        socket.emit("book_appointment", {
          name: userText,
          phone: userText, // Full string sent for demo
          type: "Consultation booked via AI"
        });
        responseText = "Thank you! I've placed your appointment request into our real-time system. Our staff will see it immediately and confirm shortly.";
        setBookingMode(false);
      }

      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          text: responseText
        },
        {
          id: (Date.now() + 2).toString(),
          type: 'bot',
          isQuickActions: true
        }
      ]);
    }, 1000);
  };

  return (
    <div className="fixed right-4 bottom-4 md:right-8 md:bottom-8 z-50 flex flex-col items-end">
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-[calc(100vw-2rem)] sm:w-[380px] bg-white rounded-2xl shadow-2xl overflow-hidden mb-4 border border-gray-100 flex flex-col"
            style={{ height: 'calc(100vh - 120px)', maxHeight: '600px' }}
          >
            {/* Header */}
            <div className="bg-primary px-5 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-white/20 p-0.5">
                    <img src="/Screenshot%202026-06-16%20142755-1.png" alt="Dr Profil" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-primary"></div>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm leading-tight" style={{ fontFamily: "Poppins, sans-serif" }}>Dr. Kartheek's AI Assistant</h3>
                  <p className="text-blue-100 text-[10px] uppercase tracking-wider font-medium">Online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close chat"
              >
                <ChevronDown size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-slate-50 relative flex flex-col gap-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.isQuickActions ? (
                    <div className="flex flex-wrap gap-2 mt-1 w-full sm:w-[90%]">
                      {quickActions.map(action => (
                        <button
                          key={action}
                          onClick={() => handleActionClick(action)}
                          className="bg-white border border-blue-100 text-primary text-xs px-3 py-1.5 rounded-full hover:bg-blue-50 transition-colors shadow-sm whitespace-nowrap text-left flex items-center gap-1.5"
                        >
                          {action === 'WhatsApp Support' && <MessageSquare size={12} className="text-green-500" />}
                          {action === 'Contact Doctor' && <Phone size={12} className="text-primary" />}
                          {action === 'Book Appointment' && <Calendar size={12} className="text-teal-600" />}
                          {action === 'Clinic Timings' && <Clock size={12} className="text-orange-500" />}
                          {action}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${msg.type === 'user' ? 'bg-[#22D3EE] text-white rounded-br-sm' : 'bg-white text-gray-700 shadow-sm border border-gray-100 rounded-bl-sm'} shadow-sm`}>
                      <span className="leading-relaxed">{msg.text}</span>
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-gray-100 shrink-0">
              <form onSubmit={handleSubmit} className="flex items-center gap-2 relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full bg-slate-50 border border-gray-200 rounded-full pl-4 pr-12 py-2.5 outline-none focus:border-[#22D3EE] focus:ring-2 focus:ring-[#22D3EE]/20 transition-all text-sm"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="absolute right-1 w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={14} className="ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isOpen && (
          <motion.div
             initial={{ opacity: 0, scale: 0.5 }}
             animate={{ opacity: 1, scale: 1 }}
             exit={{ opacity: 0, scale: 0.5 }}
          >
            <button 
              onClick={() => setIsOpen(true)}
              className="group relative w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(10,25,47,0.4)] hover:scale-105 transition-transform"
              aria-label="Open AI Assistant"
            >
              <div className="absolute inset-0 bg-primary rounded-full animate-pulse opacity-20"></div>
              <div className="absolute inset-0 bg-primary rounded-full overflow-hidden border-2 border-white">
                <img src="/Screenshot%202026-06-16%20142755-1.png" alt="Dr Profil" className="w-full h-full rounded-full object-cover" />
              </div>
              <div className="absolute -top-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white shadow-sm z-10 animate-pulse"></div>
              
              {/* Badge */}
              <div className="absolute bottom-12 right-12 bg-white px-3 py-2 rounded-xl rounded-br-sm shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                <p className="text-xs font-medium text-gray-800">Hi! I'm your AI Assistant. 👋</p>
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

