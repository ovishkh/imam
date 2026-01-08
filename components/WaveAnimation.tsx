import { motion } from "framer-motion";

interface WaveAnimationProps {
  status: string;
  color?: string;
}

const WaveAnimation = ({ status, color = "#3b82f6" }: WaveAnimationProps) => {
  const isActive = ["speaking", "listening"].includes(status.toLowerCase());

  return (
    <div className="flex items-center justify-center gap-1 h-32">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="w-2 h-full rounded-full"
          style={{
            backgroundColor: color,
            originY: 1,
          }}
          animate={
            isActive
              ? {
                  height: [15, 30, 15],
                  opacity: [0.5, 1, 0.5],
                }
              : {
                  height: 15,
                  opacity: 0.3,
                }
          }
          transition={{
            duration: 1,
            repeat: isActive ? Infinity : 0,
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  );
};

export default WaveAnimation;