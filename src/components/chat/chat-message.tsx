
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type MessageType = 'user' | 'bot';

export interface ChatMessageProps {
  type: MessageType;
  text: string;
}

export const ChatMessage = ({ type, text }: ChatMessageProps) => {
  return (
    <motion.div
      className={cn(
        "message-bubble mb-4",
        type === 'user' ? 'ml-auto' : 'mr-auto'
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div 
        className={cn(
          "p-3 rounded-lg max-w-[80%]",
          type === 'user' 
            ? 'bg-primary text-white ml-auto' 
            : 'bg-secondary text-primary mr-auto',
          "shadow-subtle hover:shadow-premium transition-shadow"
        )}
      >
        <p className="text-sm">{text}</p>
      </div>
    </motion.div>
  );
};
