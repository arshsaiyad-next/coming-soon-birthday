import React, { useEffect, useRef } from 'react';

interface FairySpark {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  fadeSpeed: number;
  color: string;
  isPetal: boolean;
  angle: number;
  rotationSpeed: number;
}

export const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const particleCount = Math.min(50, Math.floor(width / 24));
    const sparks: FairySpark[] = [];

    // Romantic dreamy color tones (Rose, Blush, Champagne Rose, Warm Gold)
    const romanticColors = [
      'rgba(255, 158, 187,', // Soft rose pink
      'rgba(255, 202, 212,', // Blush pink
      'rgba(244, 167, 185,', // Rose gold
      'rgba(252, 231, 178,', // Champagne stardust
    ];

    for (let i = 0; i < particleCount; i++) {
      const isPetal = i % 4 === 0;
      sparks.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: isPetal ? Math.random() * 2.5 + 1.8 : Math.random() * 1.6 + 0.6,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: -Math.random() * 0.4 - 0.15,
        opacity: Math.random() * 0.7 + 0.25,
        fadeSpeed: (Math.random() * 0.007 + 0.003) * (Math.random() > 0.5 ? 1 : -1),
        color: romanticColors[Math.floor(Math.random() * romanticColors.length)],
        isPetal,
        angle: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < sparks.length; i++) {
        const s = sparks[i];

        s.x += s.speedX;
        s.y += s.speedY;
        s.opacity += s.fadeSpeed;
        s.angle += s.rotationSpeed;

        if (s.opacity > 0.85 || s.opacity < 0.2) {
          s.fadeSpeed = -s.fadeSpeed;
        }

        if (s.y < -15) s.y = height + 15;
        if (s.x < -15) s.x = width + 15;
        if (s.x > width + 15) s.x = -15;

        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.angle);

        ctx.beginPath();
        if (s.isPetal) {
          // Soft petal ellipse
          ctx.ellipse(0, 0, s.size * 1.6, s.size * 0.9, 0, 0, Math.PI * 2);
        } else {
          // Fairy dust circle
          ctx.arc(0, 0, s.size, 0, Math.PI * 2);
        }

        ctx.fillStyle = `${s.color} ${Math.max(0, Math.min(1, s.opacity))})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#ff9ebb';
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
      aria-hidden="true"
    />
  );
};
