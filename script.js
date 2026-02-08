function showResult() {
  const answers = [
    {A: 3, B: 2, C: 1}, 
    {A: 1, B: 3, C: 2}, 
    {A: 2, B: 1, C: 3}, 
    {A: 3, B: 1, C: 2}  
  ];

  let totalScore = 0;
  for (let i = 1; i <= 4; i++) {
    const checked = document.querySelector(`input[name="q${i}"]:checked`);
    if (!checked) {
      alert("まだ答えていない質問があるみたいです🤔");
      return;
    }
    totalScore += answers[i - 1][checked.value];
  }

  const results = [
    {min: 4, max: 5, title: "Aタイプ", description: "のんびりタイプ", images: ["https://i.redd.it/wthjhx8t5nvc1.png","https://tse1.mm.bing.net/th/id/OIP.1EZYZqQRCcTtjdTu67aNrQHaEo?w=1440&h=900&rs=1&pid=ImgDetMain&o=7&rm=3","https://assets.st-note.com/production/uploads/images/212885214/picture_pc_378988e5dcfe12f29be2c58219bd54d2.png?width=1200"]},
    {min: 6, max: 6, title: "Bタイプ", description: "元気タイプ", images: ["img1B.png","img2B.png","img3B.png"]},
    {min: 7, max: 7, title: "Cタイプ", description: "クリエイティブタイプ", images: ["img1C.png","img2C.png","img3C.png"]},
    {min: 8, max: 8, title: "Dタイプ", description: "論理派タイプ", images: ["img1D.png","img2D.png","img3D.png"]},
    {min: 9, max: 9, title: "Eタイプ", description: "社交派タイプ", images: ["img1E.png","img2E.png","img3E.png"]},
    // …15種類まで同じ感じで追加
  ];

 const result = results.find(r => totalScore >= r.min && totalScore <= r.max);
  currentImages = result.images;
currentImageIndex = 0;
showPopup(`
    <h2>${result.title}</h2>
    <p>${result.description}</p>
    <img id="resultImage" src="${currentImages[0]}" alt="" onclick="nextImage()" style="cursor:pointer;">
  <p style="font-size:12px; opacity:0.7;">画像をクリック/タップして切り替えてみましょう</p>
`);
}
function launchConfetti() {
  for (let i = 0; i < 90; i++) { 
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
    confetti.style.animationDelay = Math.random() + "s";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 10000);
  }
}

function showPopup(html) {
   alert("あなたにぴったりなのは…");

  const overlay = document.getElementById("overlay");
  const content = document.getElementById("popupContent");

  content.innerHTML = html;
  overlay.style.display = "flex";
  requestAnimationFrame(() => {
    overlay.classList.add("active");});
  launchConfetti();
}

function closePopup() {
  document.getElementById("overlay").style.display = "none";
}

let currentImages = [];
let currentImageIndex = 0;

function nextImage() {
  if (currentImages.length === 0) return;

  currentImageIndex =
    (currentImageIndex + 1) % currentImages.length;

  const img = document.getElementById("resultImage");
  img.src = currentImages[currentImageIndex];
}
