import React, { useRef, useEffect } from 'react';

const LightningBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        let isMobile = width < 768;

        const resizeHandler = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            isMobile = width < 768;
        };

        window.addEventListener('resize', resizeHandler);

        const lightning: { x: number; y: number; x2: number; y2: number; life: number; alpha: number }[] = [];
        const maxLife = 50;

        const createBolt = () => {
            const x = Math.random() < 0.5 ? 0 : width; // Start from top-left or top-right
            const y = 0; // Start from the top
            const endX = Math.random() * width;
            // Bolts don't always go to the very bottom on mobile to keep hero text clear
            const endY = Math.random() * height * (isMobile ? 0.75 : 1); 
            
            lightning.push({ x, y, x2: x, y2: y, life: maxLife, alpha: 1 });

            let currentX = x;
            let currentY = y;
            // Fewer segments for simpler bolts on mobile
            const segments = (isMobile ? 12 : 20) + Math.floor(Math.random() * (isMobile ? 8 : 10));

            for (let i = 0; i < segments; i++) {
                // Smaller random jaggedness on mobile
                const randomOffset = isMobile ? width * 0.25 : 150; 
                const targetX = x + (endX - x) * (i + 1) / segments + (Math.random() - 0.5) * randomOffset;
                const targetY = y + (endY - y) * (i + 1) / segments + (Math.random() - 0.5) * randomOffset;
                
                lightning.push({
                    x: currentX,
                    y: currentY,
                    x2: targetX,
                    y2: targetY,
                    life: maxLife - i * 2,
                    alpha: 1 - (i / segments) * 0.5,
                });

                currentX = targetX;
                currentY = targetY;
            }
        };

        let animationFrameId: number;
        
        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Less frequent strikes on mobile
            const strikeProbability = isMobile ? 0.99 : 0.97;
            if (Math.random() > strikeProbability) {
                createBolt();
            }

            for (let i = lightning.length - 1; i >= 0; i--) {
                const l = lightning[i];
                l.life--;
                
                if (l.life <= 0) {
                    lightning.splice(i, 1);
                    continue;
                }

                l.alpha = l.life / maxLife;

                ctx.beginPath();
                ctx.moveTo(l.x, l.y);
                ctx.lineTo(l.x2, l.y2);
                ctx.strokeStyle = `rgba(252, 252, 252, ${l.alpha * 0.25})`; // Faint white/grey
                // Thinner lines on mobile
                ctx.lineWidth = isMobile ? (Math.random() * 1.0 + 0.2) : (Math.random() * 1.5 + 0.2); 
                ctx.shadowBlur = 15;
                ctx.shadowColor = `rgba(163, 193, 55, ${l.alpha * 0.5})`; // Subtle green glow to match accent
                ctx.stroke();
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeHandler);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full -z-20" />;
};

export default LightningBackground;