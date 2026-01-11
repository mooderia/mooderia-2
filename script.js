let currentMood = "";
let posts = [];

function login() {
  showScreen("dailyMood");
}

function setMood(mood) {
  currentMood = mood;
  document.getElementById("profileMood").innerText = "Today's Mood: " + mood;
  showScreen("app");
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function addPost() {
  const text = document.getElementById("postText").value;
  if (!text) return;

  const post = { text, liked: false };
  posts.push(post);
  renderPosts();
  document.getElementById("postText").value = "";
}

function renderPosts() {
  const container = document.getElementById("posts");
  const mine = document.getElementById("myPosts");
  container.innerHTML = mine.innerHTML = "";

  posts.forEach(p => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <p>${p.text}</p>
      <button onclick="toggleLike(this)">❤️</button>
    `;
    container.appendChild(div);
    mine.appendChild(div.cloneNode(true));
  });
}

function toggleLike(btn) {
  btn.classList.toggle("liked");
}

function tell() {
  const answers = [
    "Trust yourself.",
    "Give it time.",
    "Rest is productive.",
    "Your feelings are valid."
  ];
  document.getElementById("tellerA").innerText =
    answers[Math.floor(Math.random() * answers.length)];
}

function loveMatch() {
  document.getElementById("loveResult").innerText =
    Math.floor(Math.random() * 40 + 60) + "% compatibility";
}

function toggleDark() {
  document.body.classList.toggle("dark");
}

function logout() {
  location.reload();
}
