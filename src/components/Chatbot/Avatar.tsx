import { motion } from 'framer-motion';

export function Avatar() {
  return (
    <div className="w-12 h-12 rounded-full overflow-hidden">
      <motion.img
        src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=150&h=150"
        alt="Assistant Avatar"
        className="w-full h-full object-cover"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}