import { motion } from 'framer-motion';

interface GeometricShapesProps {
  className?: string;
}

export default function GeometricShapes({ className }: GeometricShapesProps) {
  const shapes = [
    {
      id: 1,
      type: 'square',
      size: 80,
      color: '#a259ff',
      position: { x: '10%', y: '20%' },
      delay: 0,
    },
    {
      id: 2,
      type: 'circle',
      size: 60,
      color: '#ffffff',
      position: { x: '85%', y: '15%' },
      delay: 0.5,
    },
    {
      id: 3,
      type: 'triangle',
      size: 70,
      color: '#a259ff',
      position: { x: '20%', y: '80%' },
      delay: 1,
    },
    {
      id: 4,
      type: 'square',
      size: 50,
      color: '#ffffff',
      position: { x: '90%', y: '70%' },
      delay: 1.5,
    },
    {
      id: 5,
      type: 'circle',
      size: 40,
      color: '#a259ff',
      position: { x: '70%', y: '50%' },
      delay: 2,
    },
  ];

  const renderShape = (shape: typeof shapes[0]) => {
    const baseClasses = "absolute border-4 border-neo-black";
    
    if (shape.type === 'square') {
      return (
        <motion.div
          key={shape.id}
          className={baseClasses}
          style={{
            width: shape.size,
            height: shape.size,
            backgroundColor: shape.color,
            left: shape.position.x,
            top: shape.position.y,
          }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            rotate: [0, 90, 180, 270, 360] 
          }}
          transition={{
            duration: 2,
            delay: shape.delay,
            rotate: {
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        />
      );
    }

    if (shape.type === 'circle') {
      return (
        <motion.div
          key={shape.id}
          className={`${baseClasses} rounded-full`}
          style={{
            width: shape.size,
            height: shape.size,
            backgroundColor: shape.color,
            left: shape.position.x,
            top: shape.position.y,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: [1, 1.2, 1],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 2,
            delay: shape.delay,
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            },
            scale: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      );
    }

    if (shape.type === 'triangle') {
      return (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: shape.position.x,
            top: shape.position.y,
          }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotate: [0, 120, 240, 360]
          }}
          transition={{
            duration: 2,
            delay: shape.delay,
            rotate: {
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        >
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: `${shape.size / 2}px solid transparent`,
              borderRight: `${shape.size / 2}px solid transparent`,
              borderBottom: `${shape.size}px solid ${shape.color}`,
              filter: `drop-shadow(0 0 0 4px #000000)`,
            }}
          />
        </motion.div>
      );
    }

    return null;
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {shapes.map(renderShape)}
    </div>
  );
} 