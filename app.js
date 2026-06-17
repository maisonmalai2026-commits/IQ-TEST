const QUESTIONS = [
  {
    section: "Numerical Reasoning",
    difficulty: "Easy",
    prompt: "3, 6, 12, 24, 48, ?",
    options: ["72", "84", "96", "108"],
  },
  {
    section: "Numerical Reasoning",
    difficulty: "Medium",
    prompt: "4, 9, 19, 39, 79, ?",
    options: ["119", "139", "149", "159"],
  },
  {
    section: "Numerical Reasoning",
    difficulty: "Easy",
    prompt: "1, 4, 9, 16, 25, ?",
    options: ["30", "35", "36", "49"],
  },
  {
    section: "Numerical Reasoning",
    difficulty: "Medium",
    prompt: "2, 5, 11, 23, 47, ?",
    options: ["73", "91", "95", "101"],
  },
  {
    section: "Numerical Reasoning",
    difficulty: "Easy",
    prompt: "81, 27, 9, 3, ?",
    options: ["0", "1", "2", "6"],
  },
  {
    section: "Numerical Reasoning",
    difficulty: "Hard",
    prompt: "7, 10, 16, 28, 52, ?",
    options: ["78", "92", "100", "104"],
  },
  {
    section: "Numerical Reasoning",
    difficulty: "Easy",
    prompt: "1, 1, 2, 3, 5, 8, ?",
    options: ["11", "12", "13", "15"],
  },
  {
    section: "Numerical Reasoning",
    difficulty: "Hard",
    prompt: "11, 22, 20, 40, 38, 76, ?",
    options: ["74", "78", "80", "88"],
  },
  {
    section: "Verbal Reasoning",
    difficulty: "Easy",
    prompt: "Bird is to nest as dog is to ____.",
    options: ["Kennel", "Branch", "Feather", "Pond"],
  },
  {
    section: "Verbal Reasoning",
    difficulty: "Easy",
    prompt: "Author is to book as composer is to ____.",
    options: ["Canvas", "Song", "Stage", "Ink"],
  },
  {
    section: "Verbal Reasoning",
    difficulty: "Medium",
    prompt: "Seed is to tree as egg is to ____.",
    options: ["Nest", "Bird", "Shell", "Wing"],
  },
  {
    section: "Verbal Reasoning",
    difficulty: "Medium",
    prompt: "Thermometer is to temperature as barometer is to ____.",
    options: ["Altitude", "Pressure", "Rain", "Humidity"],
  },
  {
    section: "Verbal Reasoning",
    difficulty: "Easy",
    prompt: "Brief is to concise as timid is to ____.",
    options: ["Loud", "Shy", "Fast", "Angry"],
  },
  {
    section: "Verbal Reasoning",
    difficulty: "Medium",
    prompt: "Ocean is to water as desert is to ____.",
    options: ["Wind", "Heat", "Sand", "Stone"],
  },
  {
    section: "Verbal Reasoning",
    difficulty: "Medium",
    prompt: "Painter is to canvas as sculptor is to ____.",
    options: ["Clay", "Brush", "Gallery", "Frame"],
  },
  {
    section: "Verbal Reasoning",
    difficulty: "Hard",
    prompt: "Library is to books as archive is to ____.",
    options: ["Records", "Shelves", "Readers", "Windows"],
  },
  {
    section: "Logical Reasoning",
    difficulty: "Medium",
    prompt: "All wugs are blue. Some blue things are round. Must some wugs be round?",
    options: ["Yes", "No", "Cannot be determined", "Only if all blue things are round"],
  },
  {
    section: "Logical Reasoning",
    difficulty: "Medium",
    prompt: "No poets are accountants. Some artists are poets. What must be true?",
    options: ["Some artists are not accountants", "All artists are accountants", "No artists are poets", "All accountants are poets"],
  },
  {
    section: "Logical Reasoning",
    difficulty: "Easy",
    prompt: "Every A is B. No B is C. Which conclusion follows?",
    options: ["Some A are C", "No A is C", "Every C is A", "Some B are A only"],
  },
  {
    section: "Logical Reasoning",
    difficulty: "Medium",
    prompt: "Five people stand in line. Dan is first. Ava is before Ben. Cara is after Ben. Eli is after Cara. Who is second?",
    options: ["Ava", "Ben", "Cara", "Eli"],
  },
  {
    section: "Logical Reasoning",
    difficulty: "Easy",
    prompt: "A is taller than B. C is taller than A. D is shorter than B. Who is tallest?",
    options: ["A", "B", "C", "D"],
  },
  {
    section: "Logical Reasoning",
    difficulty: "Medium",
    prompt: "If an item is red, then it is fragile. One item is not fragile. Can it be red?",
    options: ["Yes", "No", "Only sometimes", "Not enough information"],
  },
  {
    section: "Logical Reasoning",
    difficulty: "Medium",
    prompt: "Exactly one of code X or code Y is active. Code X is inactive. What follows?",
    options: ["Y is active", "Y is inactive", "Both are active", "Neither can be known"],
  },
  {
    section: "Logical Reasoning",
    difficulty: "Hard",
    prompt: "Three boxes A, B, and C contain one prize. Exactly one label is true. A says: ‘Prize is not in A.’ B says: ‘Prize is in A.’ C says: ‘Prize is not in C.’ Where is the prize?",
    options: ["A", "B", "C", "Impossible to know"],
  },
  {
    section: "Pattern Recognition",
    difficulty: "Easy",
    prompt: "Complete the pattern: ◼ ◻ ◼ ◻ ◼ ?",
    options: ["◼", "◻", "◆", "◇"],
  },
  {
    section: "Pattern Recognition",
    difficulty: "Easy",
    prompt: "Complete the rotation: ↑ → ↓ ← ↑ ?",
    options: ["↑", "→", "↓", "←"],
  },
  {
    section: "Pattern Recognition",
    difficulty: "Medium",
    prompt: "Triangle, square, pentagon, hexagon, ?",
    options: ["Circle", "Octagon", "Heptagon", "Cube"],
  },
  {
    section: "Pattern Recognition",
    difficulty: "Easy",
    prompt: "Which is the odd one out? ○   ◯   ●   □",
    options: ["○", "◯", "●", "□"],
  },
  {
    section: "Pattern Recognition",
    difficulty: "Medium",
    prompt: "Complete the grid: <small>A B C<br>D E F<br>G H ?</small>",
    options: ["I", "J", "K", "L"],
  },
  {
    section: "Pattern Recognition",
    difficulty: "Hard",
    prompt: "A1, B2, D4, G7, ?",
    options: ["J10", "K11", "L12", "H8"],
  },
  {
    section: "Pattern Recognition",
    difficulty: "Medium",
    prompt: "In each pair, combine the two symbols. If ▲ + ● = ▲●, then ■ + ○ = ?",
    options: ["■○", "○■", "▲○", "■■"],
  },
  {
    section: "Pattern Recognition",
    difficulty: "Hard",
    prompt: "A square is folded once vertically. A hole is punched near the top-left of the folded paper. After unfolding, where are the holes?",
    options: ["Top-left only", "Top-left and top-right", "Bottom-left and bottom-right", "Center only"],
  },
  {
    section: "Pattern Recognition",
    difficulty: "Medium",
    prompt: "◇, ◇◇, ◇◇◇◇, ?",
    options: ["◇◇◇◇◇", "◇◇◇◇◇◇", "◇◇◇◇◇◇◇◇", "◇◇◇◇◇◇◇◇◇◇"],
  },
  {
    section: "Attention & Working Memory",
    difficulty: "Easy",
    prompt: "If A = 2, B = 4, C = 6, what is C-A-B?",
    options: ["6-2-4", "2-4-6", "4-2-6", "6-4-2"],
  },
  {
    section: "Attention & Working Memory",
    difficulty: "Medium",
    prompt: "Which pair sums to 19? <small>5, 7, 9, 12, 16</small>",
    options: ["5 and 12", "7 and 12", "9 and 12", "7 and 16"],
  },
  {
    section: "Attention & Working Memory",
    difficulty: "Easy",
    prompt: "Reverse the number 7395.",
    options: ["5937", "5973", "5739", "7395"],
  },
  {
    section: "Attention & Working Memory",
    difficulty: "Medium",
    prompt: "A clock gains 5 minutes every hour. After 6 hours, how many minutes ahead is it?",
    options: ["11", "20", "30", "60"],
  },
  {
    section: "Attention & Working Memory",
    difficulty: "Hard",
    prompt: "Read this code once: R7-K2-M9. Which option matches it exactly?",
    options: ["R7-K2-M9", "R7-K9-M2", "K7-R2-M9", "R2-K7-M9"],
  },
  {
    section: "Attention & Working Memory",
    difficulty: "Medium",
    prompt: "If every second letter is removed from P L A N E T, which letters remain?",
    options: ["P A E", "L N T", "P L A", "A E T"],
  },
  {
    section: "Attention & Working Memory",
    difficulty: "Hard",
    prompt: "A pattern uses this rule: switch the first and last items, keep the middle. What does 8-3-6 become?",
    options: ["6-3-8", "3-8-6", "8-6-3", "6-8-3"],
  },
  {
    section: "Attention & Working Memory",
    difficulty: "Hard",
    prompt: "Which option is spelled exactly as COGNITIVE?",
    options: ["COGITVINE", "COGNITVEI", "COGNITIVE", "COGNITVEE"],
  }

];

const ANSWER_KEY = JSON.parse(atob("WzIsIDMsIDIsIDIsIDEsIDIsIDIsIDAsIDAsIDEsIDEsIDEsIDEsIDIsIDAsIDAsIDIsIDAsIDEsIDAsIDIsIDEsIDAsIDIsIDEsIDEsIDIsIDMsIDAsIDEsIDAsIDEsIDIsIDAsIDEsIDAsIDIsIDAsIDAsIDAsIDJd"));
const TEST_DURATION_SECONDS = 25 * 60;

const state = {
  started: false,
  submitted: false,
  current: 0,
  answers: Array(QUESTIONS.length).fill(null),
  remaining: TEST_DURATION_SECONDS,
  timerId: null,
  pendingAutoSubmit: false,
  latestResults: null,
  signedInUser: JSON.parse(localStorage.getItem("cogniscale_user") || "null")
};

const el = {
  year: document.getElementById("year"),
  timer: document.getElementById("timer"),
  timerBar: document.getElementById("timerBar"),
  answeredCount: document.getElementById("answeredCount"),
  totalCount: document.getElementById("totalCount"),
  progressBar: document.getElementById("progressBar"),
  sectionList: document.getElementById("sectionList"),
  startScreen: document.getElementById("startScreen"),
  quizScreen: document.getElementById("quizScreen"),
  startButton: document.getElementById("startButton"),
  questionNumber: document.getElementById("questionNumber"),
  questionSection: document.getElementById("questionSection"),
  questionDifficulty: document.getElementById("questionDifficulty"),
  questionPrompt: document.getElementById("questionPrompt"),
  options: document.getElementById("options"),
  prevButton: document.getElementById("prevButton"),
  clearButton: document.getElementById("clearButton"),
  nextButton: document.getElementById("nextButton"),
  submitButton: document.getElementById("submitButton"),
  resultsContent: document.getElementById("resultsContent"),
  loginModal: document.getElementById("loginModal"),
  loginForm: document.getElementById("loginForm"),
  loginName: document.getElementById("loginName"),
  loginEmail: document.getElementById("loginEmail"),
  closeLogin: document.getElementById("closeLogin")
};

function init() {
  el.year.textContent = new Date().getFullYear();
  el.totalCount.textContent = QUESTIONS.length;
  renderSections();
  updateStatus();
  attachEvents();
}

function attachEvents() {
  el.startButton.addEventListener("click", startTest);
  el.prevButton.addEventListener("click", () => goToQuestion(state.current - 1));
  el.nextButton.addEventListener("click", () => goToQuestion(state.current + 1));
  el.clearButton.addEventListener("click", clearAnswer);
  el.submitButton.addEventListener("click", () => submitTest(false));
  el.loginForm.addEventListener("submit", handleLogin);
  el.closeLogin.addEventListener("click", () => {
    if (state.submitted && !state.signedInUser) return;
    closeLoginModal();
  });
}

function startTest() {
  if (state.started) return;
  state.started = true;
  el.startScreen.classList.add("hidden");
  el.quizScreen.classList.remove("hidden");
  renderQuestion();
  state.timerId = window.setInterval(tick, 1000);
}

function tick() {
  state.remaining -= 1;
  if (state.remaining <= 0) {
    state.remaining = 0;
    updateStatus();
    submitTest(true);
    return;
  }
  updateStatus();
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${secs}`;
}

function renderSections() {
  const grouped = QUESTIONS.reduce((acc, q) => {
    acc[q.section] = (acc[q.section] || 0) + 1;
    return acc;
  }, {});

  el.sectionList.innerHTML = Object.entries(grouped)
    .map(([section, count]) => `<div class="section-pill"><span>${section}</span><strong>${count}</strong></div>`)
    .join("");
}

function updateStatus() {
  const answered = state.answers.filter(answer => answer !== null).length;
  const progress = (answered / QUESTIONS.length) * 100;
  const timeUsed = ((TEST_DURATION_SECONDS - state.remaining) / TEST_DURATION_SECONDS) * 100;
  el.timer.textContent = formatTime(state.remaining);
  el.timerBar.style.width = `${Math.min(timeUsed, 100)}%`;
  el.answeredCount.textContent = answered;
  el.progressBar.style.width = `${progress}%`;
}

function renderQuestion() {
  const question = QUESTIONS[state.current];
  el.questionNumber.textContent = `Question ${state.current + 1} of ${QUESTIONS.length}`;
  el.questionSection.textContent = question.section;
  el.questionDifficulty.textContent = question.difficulty;
  el.questionPrompt.innerHTML = question.prompt;
  el.options.innerHTML = question.options.map((option, index) => {
    const selected = state.answers[state.current] === index ? " selected" : "";
    return `
      <button class="option${selected}" type="button" data-index="${index}">
        <span class="option-key">${String.fromCharCode(65 + index)}</span>
        <span>${option}</span>
      </button>
    `;
  }).join("");

  el.options.querySelectorAll(".option").forEach(button => {
    button.addEventListener("click", () => selectAnswer(Number(button.dataset.index)));
  });

  el.prevButton.disabled = state.current === 0;
  el.nextButton.disabled = state.current === QUESTIONS.length - 1;
}

function selectAnswer(index) {
  state.answers[state.current] = index;
  updateStatus();
  renderQuestion();
}

function clearAnswer() {
  state.answers[state.current] = null;
  updateStatus();
  renderQuestion();
}

function goToQuestion(index) {
  if (index < 0 || index >= QUESTIONS.length) return;
  state.current = index;
  renderQuestion();
}

function calculateResults() {
  const correct = state.answers.reduce((sum, answer, index) => sum + (answer === ANSWER_KEY[index] ? 1 : 0), 0);
  const rawRatio = correct / QUESTIONS.length;
  const percentage = Math.round(rawRatio * 100);
  const iqScore = clamp(Math.round(70 + rawRatio * 60), 70, 130);
  const percentile = getPercentileEstimate(iqScore);
  const timeUsed = TEST_DURATION_SECONDS - state.remaining;
  const domains = QUESTIONS.reduce((acc, question, index) => {
    if (!acc[question.section]) acc[question.section] = { correct: 0, total: 0 };
    acc[question.section].total += 1;
    if (state.answers[index] === ANSWER_KEY[index]) acc[question.section].correct += 1;
    return acc;
  }, {});
  return { correct, percentage, iqScore, percentile, timeUsed, domains };
}

function getPercentileEstimate(iq) {
  if (iq >= 130) return "98th+";
  if (iq >= 125) return "95th";
  if (iq >= 120) return "91st";
  if (iq >= 115) return "84th";
  if (iq >= 110) return "75th";
  if (iq >= 105) return "63rd";
  if (iq >= 100) return "50th";
  if (iq >= 95) return "37th";
  if (iq >= 90) return "25th";
  if (iq >= 85) return "16th";
  return "below 16th";
}

function getBand(iqScore) {
  if (iqScore >= 125) return { title: "Very high range", note: "Your responses showed strong speed and accuracy across the item set." };
  if (iqScore >= 115) return { title: "High average range", note: "Your score suggests solid reasoning performance across multiple domains." };
  if (iqScore >= 100) return { title: "Average to high average range", note: "You answered many items correctly and showed balanced performance." };
  if (iqScore >= 85) return { title: "Average range", note: "Your score shows a workable foundation with room to improve on tougher items." };
  return { title: "Developing range", note: "Focus on sequence rules, visual patterns, and careful reading before retaking." };
}

function submitTest(auto = false) {
  if (state.submitted) return;
  if (!auto) {
    const unanswered = state.answers.filter(answer => answer === null).length;
    if (unanswered > 0) {
      const ok = window.confirm(`You have ${unanswered} unanswered question${unanswered === 1 ? "" : "s"}. Submit anyway?`);
      if (!ok) return;
    }
  }
  state.submitted = true;
  state.pendingAutoSubmit = auto;
  window.clearInterval(state.timerId);
  state.latestResults = calculateResults();
  document.getElementById("results").scrollIntoView({ behavior: "smooth" });

  if (state.signedInUser) {
    renderResults(auto);
  } else {
    renderLockedResults();
    openLoginModal();
  }
}

function renderLockedResults() {
  el.resultsContent.className = "empty-results";
  el.resultsContent.innerHTML = `
    <p><strong>Your test has been submitted.</strong></p>
    <p>Sign in to unlock your IQ score estimate and performance report.</p>
    <button class="button primary" type="button" id="unlockButton">Sign in to view result</button>
  `;
  document.getElementById("unlockButton").addEventListener("click", openLoginModal);
}

function openLoginModal() {
  el.loginModal.classList.remove("hidden");
  setTimeout(() => el.loginName.focus(), 60);
}

function closeLoginModal() {
  el.loginModal.classList.add("hidden");
}

function handleLogin(event) {
  event.preventDefault();
  const name = el.loginName.value.trim();
  const email = el.loginEmail.value.trim();
  if (!name || !email) return;
  state.signedInUser = { name, email, signedInAt: new Date().toISOString() };
  localStorage.setItem("cogniscale_user", JSON.stringify(state.signedInUser));
  closeLoginModal();
  renderResults(state.pendingAutoSubmit);
}

function renderResults(auto = false) {
  const results = state.latestResults || calculateResults();
  const band = getBand(results.iqScore);
  const angle = Math.round(((results.iqScore - 70) / 60) * 360);
  const previousBest = Number(localStorage.getItem("cogniscale_best_iq") || 0);
  if (results.iqScore > previousBest) localStorage.setItem("cogniscale_best_iq", String(results.iqScore));
  const bestNow = Math.max(previousBest, results.iqScore);
  const user = state.signedInUser || { name: "Test taker" };

  el.resultsContent.className = "results-content";
  el.resultsContent.innerHTML = `
    <div class="score-card">
      <div class="score-circle" style="--score-angle: ${angle}deg">
        <span><strong>${results.iqScore}</strong>IQ estimate</span>
      </div>
      <div class="score-copy">
        <p class="eyebrow">${auto ? "Time ended" : "Submitted"}</p>
        <h3>${band.title}</h3>
        <p>${user.name}, ${band.note}</p>
        <div class="score-metrics">
          <div class="metric"><span>Estimated IQ score</span><strong>${results.iqScore}</strong></div>
          <div class="metric"><span>Estimated percentile</span><strong>${results.percentile}</strong></div>
          <div class="metric"><span>Accuracy</span><strong>${results.correct}/${QUESTIONS.length}</strong></div>
        </div>
        <p><strong>Time used:</strong> ${formatTime(results.timeUsed)} · <strong>Best saved score:</strong> ${bestNow}</p>
        <p class="lock-note">Answer keys are not displayed in the report.</p>
        <button class="button secondary" type="button" onclick="window.location.reload()">Retake test</button>
      </div>
    </div>
    <div class="domain-grid">
      ${Object.entries(results.domains).map(([domain, score]) => `
        <div class="domain-card">
          <strong>${domain}<span>${score.correct}/${score.total}</span></strong>
          <p>${Math.round((score.correct / score.total) * 100)}% accuracy in this domain.</p>
        </div>
      `).join("")}
    </div>
  `;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

init();
