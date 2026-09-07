const tulipButton = document.getElementById("tulipButton");
const mainContainer = document.getElementById("mainContainer");
const letterScene = document.getElementById("letterScene");
const backgroundMusic = document.getElementById("backgroundMusic");

let opened = false;

tulipButton.addEventListener("click", () => {
    if (opened) return;
    opened = true;

    // Start the music from the user's click.
    backgroundMusic.play().catch(error => {
        console.log("Music could not start:", error);
    });

    // Fade out the starting screen.
    mainContainer.classList.add("hide-start");

    // Prepare the letter scene while the fade is happening.
    setTimeout(() => {
        mainContainer.style.display = "none";
        letterScene.classList.add("show-letter");
        createHearts();
    }, 500);
});

function createHearts() {
    const heartTypes = ["💜", "💗", "💖", "💕"];

    for (let i = 0; i < 25; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML =
            heartTypes[Math.floor(Math.random() * heartTypes.length)];

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (12 + Math.random() * 18) + "px";
        heart.style.animationDuration = (5 + Math.random() * 6) + "s";
        heart.style.animationDelay = Math.random() * 4 + "s";

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 12000);
    }
}

setInterval(() => {
    if (letterScene.classList.contains("show-letter")) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💜";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (12 + Math.random() * 15) + "px";
        heart.style.animationDuration = (6 + Math.random() * 5) + "s";

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 12000);
    }
}, 1000);
