const greetingText = document.getElementById("greeting-text");
const hour = new Date().getHours();

if (hour < 12) {
    greetingText.textContent = "Good Morning, Warrior!";
} else if (hour < 18) {
    greetingText.textContent = "Good Afternoon, Gamer!";
} else {
    greetingText.textContent = "Good Evening, Champion!";
}

const playBtn = document.querySelector(".play-btn");

playBtn.addEventListener("click", function () {
    alert("Game download feature coming soon!");
});


