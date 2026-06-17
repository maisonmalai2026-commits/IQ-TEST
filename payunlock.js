(() => {
  const buyUrl = 'https://toxabhimanyu.gumroad.com/l/udigsu';
  const box = document.getElementById('resultsContent');
  if (!box) return;
  const paid = () => localStorage.getItem('cogniscale_paid_report') === 'yes';
  const setPaid = () => localStorage.setItem('cogniscale_paid_report', 'yes');
  function openPay() {
    window.open(buyUrl, '_blank', 'noopener');
    const b = document.getElementById('buyFullReport');
    if (b) b.textContent = 'Payment opened - unlocking in 15s...';
    setTimeout(() => { setPaid(); location.reload(); }, 15000);
  }
  function run() {
    if (!box.querySelector('.score-card') || box.dataset.unlockReady) return;
    box.dataset.unlockReady = '1';
    const b = document.getElementById('buyFullReport');
    if (b) b.onclick = openPay;
    if (paid()) {
      box.querySelectorAll('.score-metrics,.domain-grid').forEach(el => { el.style.filter='none'; el.style.opacity='1'; el.style.pointerEvents='auto'; el.style.userSelect='auto'; });
      box.querySelectorAll('.score-copy p').forEach(p => p.style.display='');
      const old = document.getElementById('buyFullReport');
      if (old) old.closest('.lock-note')?.remove();
      if (!document.getElementById('paidUnlockedBox')) box.insertAdjacentHTML('beforeend', `<div id='paidUnlockedBox' class='domain-card' style='border-radius:18px;padding:22px;background:white;box-shadow:var(--shadow)'><p class='eyebrow'>Unlocked</p><h3>Full report unlocked on this account</h3><p style='color:var(--muted);line-height:1.7'>The full report is now visible. Gumroad also emails the receipt and uploaded access PDF.</p><button class='button secondary' onclick='window.print()'>Print / Save report as PDF</button></div>`);
    }
  }
  new MutationObserver(run).observe(box,{childList:true,subtree:true});
  run();
})();
