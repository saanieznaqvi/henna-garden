
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PremiumButton } from '@/components/ui/premium-button';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput = ({ onSendMessage, disabled = false }: ChatInputProps) => {
  const [inputValue, setInputValue] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };
  
  return (
    <form 
      onSubmit={handleSubmit}
      className="flex items-center gap-2 border-t border-secondary-light p-3"
    >
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type your message..."
        disabled={disabled}
        className="flex-1 p-2 border border-secondary-light rounded focus:outline-none focus:ring-1 focus:ring-primary transition-all"
      />
      <PremiumButton 
        type="submit" 
        variant="primary" 
        size="sm" 
        disabled={inputValue.trim() === '' || disabled}
      >
        <Send size={18} />
      </PremiumButton>
    </form>
  );
};
