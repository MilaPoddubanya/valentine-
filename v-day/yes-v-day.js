const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];
const heartEmojis = ["💕", "💖", "🌸"]; 
const heartCount = 150; 

class Heart {
    constructor() {
        this.x = Math.random() * canvas.width; 
        this.y = 0; 
        this.size = Math.random() * 40 + 20; 
        this.emoji = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        this.speedY = (Math.random() * 10 + 5); 
        this.speedX = (Math.random() - 0.5) * 4; 
    }

    draw() {
        ctx.save();
        ctx.font = `${this.size}px Arial`; 
        ctx.fillText(this.emoji, this.x, this.y); 
        ctx.restore();
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY; 
    }
}

function createHeartConfetti() {
    for (let i = 0; i < heartCount; i++) {
        hearts.push(new Heart());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach((heart, index) => {
        heart.update();
        heart.draw();
        
        if (heart.y > canvas.height) hearts.splice(index, 1);
    });

    
    if (hearts.length > 0) {
        requestAnimationFrame(animate);
    }
}


window.onload = function () {
    createHeartConfetti(); 
    animate(); 
};
