const QUESTIONS = [
  {
    section: "Numerical Reasoning",
    difficulty: "Easy",
    prompt: "3, 6, 12, 24, 48, ?",
    options: ["72", "84", "96", "108"],
    answer: 2,
    explanation: "Each number doubles, so 48 × 2 = 96."
  },
  {
    section: "Numerical Reasoning",
    difficulty: "Medium",
    prompt: "4, 9, 19, 39, 79, ?",
    options: ["119", "139", "149", "159"],
    answer: 3,
    explanation: "Each term is doubled and increased by 1: 79 × 2 + 1 = 159."
  },
  {
    section: "Numerical Reasoning",
    difficulty: "Easy",
    prompt: "1, 4, 9, 16, 25, ?",
    options: ["30", "35", "36", "49"],
    answer: 2,
    explanation: "These are square numbers: 1², 2², 3², 4², 5², so next is 6² = 36."
  },
  {
    section: "Numerical Reasoning",
    difficulty: "Medium",
    prompt: "2, 5, 11, 23, 47, ?",
    options: ["73", "91", "95", "101"],
    answer: 2,
    explanation: "Each term is doubled and increased by 1: 47 × 2 + 1 = 95."
  },
  {
    section: "Numerical Reasoning",
    difficulty: "Easy",
    prompt: "81, 27, 9, 3, ?",
    options: ["0", "1", "2", "6"],
    answer: 1,
    explanation: "Each number is divided by 3, so 3 ÷ 3 = 1."
  },
  {
    section: "Numerical Reasoning",
    difficulty: "Hard",
    prompt: "7, 10, 16, 28, 52, ?",
    options: ["78", "92", "100", "104"],
    answer: 2,
    explanation: "The increases double: +3, +6, +12, +24, so the next increase is +48."
  },
  {
    section: "Numerical Reasoning",
    difficulty: "Easy",
    prompt: "1, 1, 2, 3, 5, 8, ?",
    options: ["11", "12", "13", "15"],
    answer: 2,
    explanation: "Each term is the sum of the two before it: 5 + 8 = 13."
  },
  {
    section: "Numerical Reasoning",
    difficulty: "Hard",
    prompt: "11, 22, 20, 40, 38, 76, ?",
    options: ["74", "78", "80", "88"],
    answer: 0,
    explanation: "The pattern alternates ×2 and −2. After 76, subtract 2 to get 74."
  },
  {
    section: "Verbal Reasoning",
    difficulty: "Easy",
    prompt: "Bird is to nest as dog is to ____.",
    options: ["Kennel", "Branch", "Feather", "Pond"],
    answer: 0,
    explanation: "A nest is a typical home for a bird; a kennel is a typical home for a dog."
  },
  {
    section: "Verbal Reasoning",
    difficulty: "Easy",
    prompt: "Author is to book as composer is to ____.",
    options: ["Canvas", "Song", "Stage", "Ink"],
    answer: 1,
    explanation: "An author creates a book; a composer creates a song or musical work."
  },
  {
    section: "Verbal Reasoning",
    difficulty: "Medium",
    prompt: "Seed is to tree as egg is to ____.",
    options: ["Nest", "Bird", "Shell", "Wing"],
    answer: 1,
    explanation: "A seed can develop into a tree; an egg can develop into a bird."
  },
  {
    section: "Verbal Reasoning",
    difficulty: "Medium",
    prompt: "Thermometer is to temperature as barometer is to ____.",
    options: ["Altitude", "Pressure", "Rain", "Humidity"],
    answer: 1,
    explanation: "A thermometer measures temperature; a barometer measures pressure."
  },
  {
    section: "Verbal Reasoning",
    difficulty: "Easy",
    prompt: "Brief is to concise as timid is to ____.",
    options: ["Loud", "Shy", "Fast", "Angry"],
    answer: 1,
    explanation: "Brief and concise are similar; timid and shy are similar."
  },
  {
    section: "Verbal Reasoning",
    difficulty: "Medium",
    prompt: "Ocean is to water as desert is to ____.",
    options: ["Wind", "Heat", "Sand", "Stone"],
    answer: 2,
    explanation: "Water is strongly associated with oceans; sand is strongly associated with deserts."
  },
  {
    section: "Verbal Reasoning",
    difficulty: "Medium",
    prompt: "Painter is to canvas as sculptor is to ____.",
    options: ["Clay", "Brush", "Gallery", "Frame"],
    answer: 0,
    explanation: "A painter works on canvas; a sculptor often works with clay."
  },
  {
    section: "Verbal Reasoning",
    difficulty: "Hard",
    prompt: "Library is to books as archive is to ____.",
    options: ["Records", "Shelves", "Readers", "Windows"],
    answer: 0,
    explanation: "A library stores books; an archive stores records."
  },
  {
    section: "Logical Reasoning",
    difficulty: "Medium",
    prompt: "All wugs are blue. Some blue things are round. Must some wugs be round?",
    options: ["Yes", "No", "Cannot be determined", "Only if all blue things are round"],
    answer: 2,
    explanation: "Some blue things are round, but those blue things do not have to be wugs."
  },
  {
    section: "Logical Reasoning",
    difficulty: "Medium",
    prompt: "No poets are accountants. Some artists are poets. What must be true?",
    options: ["Some artists are not accountants", "All artists are accountants", "No artists are poets", "All accountants are poets"],
    answer: 0,
    explanation: "If some artists are poets, and no poets are accountants, then those artists are not accountants."
  },
  {
    section: "Logical Reasoning",
    difficulty: "Easy",
    prompt: "Every A is B. No B is C. Which conclusion follows?",
    options: ["Some A are C", "No A is C", "Every C is A", "Some B are A only"],
    answer: 1,
    explanation: "If all A are inside B, and B has no overlap with C, then A has no overlap with C."
  },
  {
    section: "Logical Reasoning",
    difficulty: "Medium",
    prompt: "Five people stand in line. Dan is first. Ava is before Ben. Cara is after Ben. Eli is after Cara. Who is second?",
    options: ["Ava", "Ben", "Cara", "Eli"],
    answer: 0,
    explanation: "The only order that satisfies the clues is Dan, Ava, Ben, Cara, Eli."
  },
  {
    section: "Logical Reasoning",
    difficulty: "Easy",
    prompt: "A is taller than B. C is taller than A. D is shorter than B. Who is tallest?",
    options: ["A", "B", "C", "D"],
    answer: 2,
    explanation: "C is taller than A, and A is taller than B and D."
  },
  {
    section: "Logical Reasoning",
    difficulty: "Medium",
    prompt: "If an item is red, then it is fragile. One item is not fragile. Can it be red?",
    options: ["Yes", "No", "Only sometimes", "Not enough information"],
    answer: 1,
    explanation: "If red always means fragile, then a non-fragile item cannot be red."
  },
  {
    section: "Logical Reasoning",
    difficulty: "Medium",
    prompt: "Exactly one of code X or code Y is active. Code X is inactive. What follows?",
    options: ["Y is active", "Y is inactive", "Both are active", "Neither can be known"],
    answer: 0,
    explanation: "If exactly one is active and X is inactive, Y must be active."
  },
  {
    section: "Logical Reasoning",
    difficulty: "Hard",
    prompt: "Three boxes A, B, and C contain one prize. Exactly one label is true. A says: ‘Prize is not in A.’ B says: ‘Prize is in A.’ C says: ‘Prize is not in C.’ Where is the prize?",
    options: ["A", "B", "C", "Impossible to know"],
    answer: 2,
    explanation: "If the prize is in C, A is true, B is false, and C is false: exactly one true label."
  },
  {
    section: "Pattern Recognition",
    difficulty: "Easy",
    prompt: "Complete the pattern: ◼ ◻ ◼ ◻ ◼ ?",
    options: ["◼", "◻", "◆", "◇"],
    answer: 1,
    explanation: "The pattern alternates black square, white square."
  },
  {
    section: "Pattern Recognition",
    difficulty: "Easy",
    prompt: "Complete the rotation: ↑ → ↓ ← ↑ ?",
    options: ["↑", "→", "↓", "←"],
    answer: 1,
    explanation: "The arrow rotates clockwise each step, so after ↑ comes →."
  },
  {
    section: "Pattern Recognition",
    difficulty: "Medium",
    prompt: "Triangle, square, pentagon, hexagon, ?",
    options: ["Circle", "Octagon", "Heptagon", "Cube"],
    answer: 2,
    explanation: "The number of sides increases: 3, 4, 5, 6, then 7 sides: heptagon."
  },
  {
    section: "Pattern Recognition",
    difficulty: "Easy",
    prompt: "Which is the odd one out? ○   ◯   ●   □",
    options: ["○", "◯", "●", "□"],
    answer: 3,
    explanation: "The first three are circles; the last is a square."
  },
  {
    section: "Pattern Recognition",
    difficulty: "Medium",
    prompt: "Complete the grid: <small>A B C<br>D E F<br>G H ?</small>",
    options: ["I", "J", "K", "L"],
    answer: 0,
    explanation: "The letters continue in alphabetic order across each row."
  },
  {
    section: "Pattern Recognition",
    difficulty: "Hard",
    prompt: "A1, B2, D4, G7, ?",
    options: ["J10", "K11", "L12", "H8"],
    answer: 1,
    explanation: "Letters move +1, +2, +3, +4 and numbers also add +1, +2, +3, +4."
  },
  {
    section: "Pattern Recognition",
    difficulty: "Medium",
    prompt: "In each pair, combine the two symbols. If ▲ + ● = ▲●, then ■ + ○ = ?",
    options: ["■○", "○■", "▲○", "■■"],
    answer: 0,
    explanation: "The rule keeps the first symbol followed by the second symbol."
  },
  {
    section: "Pattern Recognition",
    difficulty: "Hard",
    prompt: "A square is folded once vertically. A hole is punched near the top-left of the folded paper. After unfolding, where are the holes?",
    options: ["Top-left only", "Top-left and top-right", "Bottom-left and bottom-right", "Center only"],
    answer: 1,
    explanation: "A vertical fold mirrors left to right, so the hole appears at both top-left and top-right."
  },
  {
    section: "Pattern Recognition",
    difficulty: "Medium",
    prompt: "◇, ◇◇, ◇◇◇◇, ?",
    options: ["◇◇◇◇◇", "◇◇◇◇◇◇", "◇◇◇◇◇◇◇◇", "◇◇◇◇◇◇◇◇◇◇"],
    answer: 2,
    explanation: "The number of diamonds doubles: 1, 2, 4, then 8."
  },
  {
    section: "Attention & Working Memory",
    difficulty: "Easy",
    prompt: "If A = 2, B = 4, C = 6, what is C-A-B?",
    options: ["6-2-4", "2-4-6", "4-2-6", "6-4-2"],
    answer: 0,
    explanation: "C maps to 6, A maps to 2, and B maps to 4."
  },
  {
    section: "Attention & Working Memory",
    difficulty: "Medium",
    prompt: "Which pair sums to 19? <small>5, 7, 9, 12, 16</small>",
    options: ["5 and 12", "7 and 12", "9 and 12", "7 and 16"],
    answer: 1,
    explanation: "7 + 12 = 19."
  },
  {
    section: "Attention & Working Memory",
    difficulty: "Easy",
    prompt: "Reverse the number 7395.",
    options: ["5937", "5973", "5739", "7395"],
    answer: 0,
    explanation: "Reading 7395 backward gives 5937."
  },
  {
    section: "Attention & Working Memory",
    difficulty: "Medium",
    prompt: "A clock gains 5 minutes every hour. After 6 hours, how many minutes ahead is it?",
    options: ["11", "20", "30", "60"],
    answer: 2,
    explanation: "5 minutes per hour × 6 hours = 30 minutes ahead."
  },
  {
    section: "Attention & Working Memory",
    difficulty: "Hard",
    prompt: "Read this code once: R7-K2-M9. Which option matches it exactly?",
    options: ["R7-K2-M9", "R7-K9-M2", "K7-R2-M9", "R2-K7-M9"],
    answer: 0,
    explanation: "The exact code is R7-K2-M9."
  },
  {
    section: "Attention & Working Memory",
    difficulty: "Medium",
    prompt: "If every second letter is removed from P L A N E T, which letters remain?",
    options: ["P A E", "L N T", "P L A", "A E T"],
    answer: 0,
    explanation: "Removing positions 2, 4, and 6 leaves positions 1, 3, and 5: P, A, E."
  },
  {
    section: "Attention & Working Memory",
    difficulty: "Hard",
    prompt: "A pattern uses this rule: switch the first and last items, keep the middle. What does 8-3-6 become?",
    options: ["6-3-8", "3-8-6", "8-6-3", "6-8-3"],
    answer: 0,
    explanation: "Switching first and last changes 8-3-6 into 6-3-8."
  },
  {
    section: "Attention & Working Memory",
    difficulty: "Hard",
    prompt: "Which option is spelled exactly as COGNITIVE?",
    options: ["COGITVINE", "COGNITVEI", "COGNITIVE", "COGNITVEE"],
    answer: 2,
    explanation: "Only COGNITIVE matches the target spelling exactly."
  }
];

const TEST_DURATION_SECONDS = 25 * 60;
const state = {
  started: false,
  submitted: false,
  current: 0,
  answers: Array(QUESTIONS.length).fill(null),
  remaining: TEST_DURATION_SECONDS,
  timerId: null
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
  demoScoreButton: document.getElementById("demoScoreButton")
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
  el.demoScoreButton.addEventListener("click", () => {
    document.getElementById("results").scrollIntoView({ behavior: "smooth" });
    renderDemoResults();
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
  const correct = state.answers.reduce((sum, answer, index) => sum + (answer === QUESTIONS[index].answer ? 1 : 0), 0);
  const percentage = Math.round((correct / QUESTIONS.length) * 100);
  const practiceIndex = Math.round(70 + (correct / QUESTIONS.length) * 60);
  const domains = QUESTIONS.reduce((acc, question, index) => {
    if (!acc[question.section]) acc[question.section] = { correct: 0, total: 0 };
    acc[question.section].total += 1;
    if (state.answers[index] === question.answer) acc[question.section].correct += 1;
    return acc;
  }, {});
  return { correct, percentage, practiceIndex, domains };
}

function getBand(percentage) {
  if (percentage >= 90) return { title: "Exceptional practice performance", note: "You showed very strong accuracy across the item set." };
  if (percentage >= 75) return { title: "Advanced practice performance", note: "You solved most items and showed strong reasoning consistency." };
  if (percentage >= 60) return { title: "Strong practice performance", note: "You handled many item types well, with room for improvement in tougher items." };
  if (percentage >= 40) return { title: "Developing practice performance", note: "You answered a meaningful share correctly. Review explanations and retake later." };
  return { title: "Foundation-building practice performance", note: "Focus on patterns, sequence rules, and careful reading before retaking." };
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
  window.clearInterval(state.timerId);
  renderResults(auto);
  document.getElementById("results").scrollIntoView({ behavior: "smooth" });
}

function renderResults(auto = false) {
  const results = calculateResults();
  const band = getBand(results.percentage);
  const angle = Math.round((results.percentage / 100) * 360);
  const previousBest = Number(localStorage.getItem("cogniscale_best") || 0);
  if (results.percentage > previousBest) localStorage.setItem("cogniscale_best", String(results.percentage));
  const bestNow = Math.max(previousBest, results.percentage);

  el.resultsContent.className = "results-content";
  el.resultsContent.innerHTML = `
    <div class="score-card">
      <div class="score-circle" style="--score-angle: ${angle}deg">
        <span><strong>${results.percentage}%</strong>${results.correct}/${QUESTIONS.length} correct</span>
      </div>
      <div class="score-copy">
        <p class="eyebrow">${auto ? "Time ended" : "Submitted"}</p>
        <h3>${band.title}</h3>
        <p>${band.note}</p>
        <p><strong>Practice Cognitive Index:</strong> ${results.practiceIndex}. This index is a practice metric only; it is not age-normed and is not an official IQ score.</p>
        <p><strong>Best browser score:</strong> ${bestNow}%</p>
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
    <div class="review-list">
      ${QUESTIONS.map((question, index) => {
        const userAnswer = state.answers[index];
        const isCorrect = userAnswer === question.answer;
        return `
          <div class="review-item ${isCorrect ? "correct" : "incorrect"}">
            <strong>Q${index + 1}: ${isCorrect ? "Correct" : "Review"}</strong>
            <p>${stripHtml(question.prompt)}</p>
            <p>Your answer: ${userAnswer === null ? "No answer" : question.options[userAnswer]} · Correct answer: ${question.options[question.answer]}</p>
            <p>${question.explanation}</p>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderDemoResults() {
  el.resultsContent.className = "results-content";
  el.resultsContent.innerHTML = `
    <div class="score-card">
      <div class="score-circle" style="--score-angle: 270deg">
        <span><strong>75%</strong>Sample</span>
      </div>
      <div class="score-copy">
        <p class="eyebrow">Scoring preview</p>
        <h3>Advanced practice performance</h3>
        <p>The real report will show total accuracy, a practice cognitive index, domain scores, and explanations for every item.</p>
        <p>This score report is designed for practice feedback only, not clinical interpretation.</p>
      </div>
    </div>
  `;
}

function stripHtml(html) {
  const temp = document.createElement("div");
  temp.innerHTML = html;
  return temp.textContent || temp.innerText || "";
}

init();
