for (let i = 0; i < 30; i++) {
    let heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 100 + "vh";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animation = "float 6s infinite ease-in-out";
    document.body.appendChild(heart);
}
