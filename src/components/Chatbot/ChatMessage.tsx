import { motion } from 'framer-motion';
import { Avatar } from './Avatar';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
}

export function ChatMessage({ message, isBot }: ChatMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-start gap-3 ${isBot ? '' : 'flex-row-reverse'}`}
    >
      {isBot && <Avatar />}
      <div
        className={`rounded-lg p-3 max-w-[80%] ${
          isBot
            ? 'bg-white/10 text-white'
            : 'bg-blue-600 text-white ml-auto'
        }`}
      >
        {message}
      </div>
    </motion.div>
  );
}