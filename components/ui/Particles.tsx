import React, { useEffect, useRef } from 'react';

interface ParticlesProps {
  className?: string;
  quantity?: number;
  ease?: number;
  color?: string;
}

const Particles: React.FC<ParticlesProps> = ({
  className = '',
  quantity = 50,
  ease = 50,
  color = '#6366f1'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    let animationFrameId: number;
    const particles: Particle[] = [];

    class Particle {
      x: number;
      y: number;
      radius: number;
      color: string;
      velocityX: number;
      velocityY: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 2 + 1;
        this.color = color;
        this.velocityX = (Math.random() - 0.5) * 2;
        this.velocityY = (Math.random() - 0.5) * 2;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.5;
        ctx.fill();
      }

      update(width: number, height: number) {
        this.x += this.velocityX;
        this.y += this.velocityY;

        if (this.x < 0 || this.x > width) this.velocityX *= -1;
        if (this.y < 0 || this.y > height) this.velocityY *= -1;
      }
    }

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < quantity; i++) {
        particles.push(new Particle(
          Math.random() * canvas.width, 
          Math.random() * canvas.height
        ));
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.draw(context);
        particle.update(canvas.width, canvas.height);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [quantity, color]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`fixed top-0 left-0 w-full h-full pointer-events-none ${className}`}
    />
  );
};

export default Particles;
