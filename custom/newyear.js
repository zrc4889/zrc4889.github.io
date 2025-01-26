document.addEventListener('DOMContentLoaded', function() {
    // 设置目标日期（例如：2024年新年）
    const targetDate = new Date('2024-01-25');
    const today = new Date();

    // 检查是否是目标日期
    if (today.getFullYear() === targetDate.getFullYear() &&
        today.getMonth() === targetDate.getMonth() &&
        today.getDate() === targetDate.getDate()) {
        
        // 创建烟花画布
        const canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '999999';
        document.body.appendChild(canvas);

        // 设置画布大小
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const ctx = canvas.getContext('2d');
        const particles = [];

        // 烟花粒子类
        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                const angle = Math.random() * Math.PI * 2;
                const velocity = Math.random() * 3 + 2;
                this.dx = Math.cos(angle) * velocity;
                this.dy = Math.sin(angle) * velocity;
                this.alpha = 1;
                this.color = `hsl(${Math.random() * 360}, 50%, 50%)`;
            }

            update() {
                this.x += this.dx;
                this.y += this.dy;
                this.dy += 0.05; // 重力
                this.alpha *= 0.98;
                return this.alpha > 0.1;
            }

            draw() {
                ctx.globalAlpha = this.alpha;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // 创建烟花
        function createFirework(x, y) {
            for (let i = 0; i < 50; i++) {
                particles.push(new Particle(x, y));
            }
        }

        // 动画循环
        function animate() {
            ctx.globalAlpha = 0.1;
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let i = particles.length - 1; i >= 0; i--) {
                if (!particles[i].update()) {
                    particles.splice(i, 1);
                } else {
                    particles[i].draw();
                }
            }

            // 随机创建新烟花
            if (Math.random() < 0.05) {
                createFirework(
                    Math.random() * canvas.width,
                    canvas.height * 0.8
                );
            }

            requestAnimationFrame(animate);
        }

        animate();
    }
});