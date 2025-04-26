import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X } from 'lucide-react';
import { ChatMessage, ChatMessageProps } from './chat-message';
import { useToast } from "@/hooks/use-toast";

export const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<ChatMessageProps[]>([
    { type: 'bot', text: "Hello! Welcome to Saanie's Henna Garden. How can I assist you today?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;
    
    // Add user message
    const userMessage = { type: 'user' as const, text: inputValue.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate API response for now
    setTimeout(() => {
      const defaultMessage = {
        text: 'Thank you for your message! For now, this is a simulated response. Please contact me directly through my contact page for immediate assistance.',
        timestamp: new Date().toISOString(),
        type: 'bot' as const,
        status: {
          type: 'info' as const,
          description: "I'll get back to you shortly.",
        },
      };
      setMessages(prev => [...prev, defaultMessage]);
      setIsTyping(false);
      toast({
        title: "Message sent",
        description: "Our team will get back to you shortly.",
      });
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg"
            whileHover={{ scale: 1.1, boxShadow: "0 10px 25px rgba(37, 55, 55, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.3 }}
            transition={{ duration: 0.2 }}
          >
            <MessageSquare className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-0 right-0 w-[350px] bg-white rounded-lg shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.3, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.3, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="bg-primary text-white p-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3">
                  <span className="text-white font-heading text-sm">SH</span>
                </div>
                <h3 className="font-heading tracking-wide">Saanie's Henna Garden</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-[350px] p-4 overflow-y-auto bg-gray-50">
              {messages.map((message, index) => (
                <ChatMessage key={index} {...message} />
              ))}
              {isTyping && (
                <div className="flex space-x-2 p-2 bg-secondary/30 w-16 rounded-lg">
                  <motion.div
                    className="w-2 h-2 bg-primary rounded-full"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-primary rounded-full"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: 0.1 }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-primary rounded-full"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
                  />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="p-2 bg-primary text-white rounded-r-lg disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
