
(() => {
  const buyUrl = 'https://toxabhimanyu.gumroad.com/l/udigsu';
  const box = document.getElementById('resultsContent');
  if (!box) return;
  function applyLock() {
    if (!box.querySelector('.score-card') || box.dataset.lockedView) return;
    box.dataset.lockedView = '1';
    const scoreEl = box.querySelector('.score-circle strong');
    const score = parseInt(scoreEl ? scoreEl.textContent : '', 10);
    const low = Number.isFinite(score) ? Math.floor(score / 10) * 10 : null;
    const range = low === null ? 'IQ range' : `${low}-${low + 10} IQ`;
    const circle = box.querySelector('.score-circle span');
    if (circle) circle.innerHTML = `<strong style='font-size:2rem;color:var(--accent-dark)'>${range}</strong><br>IQ range`;
    const title = box.querySelector('.score-copy h3');
    if (title) title.textContent = 'Your IQ range is ready';
    const intro = box.querySelector('.score-copy p:not(.eyebrow):not(#saveStatus)');
    if (intro) intro.textContent = 'Your free result shows only an approximate IQ range. The full PDF report contains exact score, percentile, domain analysis, in-depth review, and eCertificate.';
    box.querySelectorAll('.score-copy p').forEach(p => { if (/Time used|Answer keys/i.test(p.textContent)) p.style.display = 'none'; });
    box.querySelectorAll('.score-metrics,.domain-grid').forEach(el => { el.style.filter='blur(8px)'; el.style.opacity='.55'; el.style.pointerEvents='none'; el.style.userSelect='none'; });
    const copy = box.querySelector('.score-copy');
    if (copy && !document.getElementById('buyFullReport')) {
      copy.insertAdjacentHTML('beforeend', `<div class='lock-note' style='margin-top:16px'><strong>Full PDF report locked</strong><p>Purchase the PDF report to unlock every detail and the eCertificate.</p><button class='button primary' id='buyFullReport' type='button'>Buy Full PDF Report + eCertificate</button></div>`);
      document.getElementById('buyFullReport').onclick = () => window.open(buyUrl, '_blank', 'noopener');
    }
  }
  new MutationObserver(applyLock).observe(box, { childList:true, subtree:true });
  applyLock();
})();
