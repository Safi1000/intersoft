import React, { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    flickerSpeed: number;
    color: string;
}

export default function ParticlesBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationFrameId: number;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const isLightMode = () => document.documentElement.classList.contains('light');

        const getColors = () => {
            if (isLightMode()) {
                return ['#d2b48c', '#c4a484', '#1f1f1f', '#8b4513']; // Light brown, beige, dark grey, saddle brown
            }
            return ['#24c4c4', '#bc3723', '#ffffff', '#ffffff']; // Teal, Red, White, White
        };

        const initParticles = () => {
            particles = [];
            const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 15000);
            const colors = getColors();

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2 + 0.5,
                    speedX: (Math.random() - 0.5) * 0.5,
                    speedY: (Math.random() - 0.5) * 0.5,
                    opacity: Math.random(),
                    flickerSpeed: (Math.random() - 0.5) * 0.02,
                    color: colors[Math.floor(Math.random() * colors.length)],
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Check theme on every frame to adapt instantly (could be optimized with MutationObserver)
            const colors = getColors();

            particles.forEach((p, index) => {
                // Update opacity for flicker
                p.opacity += p.flickerSpeed;
                if (p.opacity > 1 || p.opacity < 0.2) {
                    p.flickerSpeed *= -1;
                }

                // Update position
                p.x += p.speedX;
                p.y += p.speedY;

                // Wrap around screen
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                // Draw
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

                // Use current theme colors based on index modulo to keep distribution consistent
                ctx.fillStyle = colors[index % colors.length];
                ctx.globalAlpha = p.opacity;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        resizeCanvas();
        animate();

        window.addEventListener('resize', resizeCanvas);

        // Optional: Observe class changes on html for immediate theme switch
        const observer = new MutationObserver(() => {
            // Re-init particles to update colors immediately if we wanted to change static properties
            // But since we check colors in animate loop, this just ensures we catch it if logic changes
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
            observer.disconnect();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
            style={{ opacity: 0.6 }}
        />
    );
}
