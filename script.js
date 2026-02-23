console.log("JS is connected!"); 
let moods = [
  { emoji: "😊", message: "Happy and bright!", color: "#FFF9C4" },
  { emoji: "😴", message: "A bit sleepy...", color: "#E1F5FE" },
  { emoji: "🔥", message: "On fire today!", color: "#FFCDD2" },
  { emoji: "🌧️", message: "Feeling cloudy", color: "#CFD8DC" },
  { emoji: "✨", message: "Magical mood", color: "#E1BEE7" }
]; 
let moodIndex = 0;

document.getElementById("mood-btn").addEventListener("click", function() {
  let randomIndex = Math.floor(Math.random() * moods.length);
  let currentMood = moods[randomIndex];

  document.getElementById("mood-message").innerHTML = `${currentMood.emoji} ${currentMood.message}`;
  document.body.style.backgroundColor = currentMood.color;
});
let moodHistory = [];

document.getElementById("mood-btn").addEventListener("click", function() {
  let randomIndex = Math.floor(Math.random() * moods.length);
  let currentMood = moods[randomIndex];

  document.getElementById("mood-message").innerHTML = `${currentMood.emoji} ${currentMood.message}`;
  document.body.style.backgroundColor = currentMood.color;

  moodHistory.push(currentMood.message);
  console.log("Mood history so far:", moodHistory);
});