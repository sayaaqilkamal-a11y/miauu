// Floating snack emoji
document.addEventListener("DOMContentLoaded", () => {
  const snackContainer = document.querySelector(".snack-decor");
  const emojis = ["🍔","🍟","🍕","🥤","🍩","🍪","🌭","🥪","🍫","🍿"];

  for (let i = 0; i < 20; i++) {
    let snack = document.createElement("div");
    snack.classList.add("snack");
    snack.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    snack.style.left = `${Math.random() * 100}%`;
    snack.style.animationDuration = `${6 + Math.random() * 6}s`;
    snack.style.fontSize = `${20 + Math.random() * 30}px`;
    snack.style.opacity = Math.random();
    snackContainer.appendChild(snack);
  }
});
