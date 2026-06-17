(() => {
  const home = document.querySelector('.hero');
  const results = document.getElementById('resultsContent');
  if (!home || !results) return;

  const KEY = 'cogniscale_last_result';

  function clean(s) {
    return (s || '').replace(/\s+/g, ' ').trim();
  }

  function isPaid() {
    return localStorage.getItem('cogniscale_paid_report') === 'yes';
  }

  function saveFromResult() {
    if (!results.querySelector('.score-card')) return;

    const range = clean(
      results.querySelector('.score-circle strong')?.textContent || 'IQ range'
    );

    const saved = {
      range,
      paid: isPaid(),
      date: new Date().toLocaleDateString()
    };

    localStorage.setItem(KEY, JSON.stringify(saved));
    showProfile(saved);
  }

  function showProfile(data) {
    let card = document.getElementById('profileResultCard');

    if (!card) {
      card = document.createElement('section');
      card.id = 'profileResultCard';
      card.className = 'info-strip';
      home.insertAdjacentElement('afterend', card);
    }

    card.innerHTML = `
      <div>
        <p class="eyebrow">Your account</p>
        <h2>Saved result</h2>
      </div>

      <div>
        <p style="color:var(--muted);line-height:1.65;margin-top:0">
          Last result saved on this device.
        </p>

        <div class="score-preview">
          <div>
            <strong>${data.range}</strong>
            <small>IQ range</small>
          </div>
          <div>
            <strong>${data.paid ? 'Unlocked' : 'Locked'}</strong>
            <small>PDF report</small>
          </div>
          <div>
            <strong>${data.date}</strong>
            <small>saved</small>
          </div>
        </div>

        <div class="hero-actions" style="margin-top:16px">
          <a class="button primary" href="#results">View my result</a>
          <button class="button secondary" id="clearSavedResult" type="button">
            Clear saved result
          </button>
        </div>
      </div>
    `;

    document.getElementById('clearSavedResult').onclick = () => {
      localStorage.removeItem(KEY);
      card.remove();
    };
  }

  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (saved) showProfile(saved);
  } catch (e) {}

  new MutationObserver(saveFromResult).observe(results, {
    childList: true,
    subtree: true
  });

  saveFromResult();
})();
