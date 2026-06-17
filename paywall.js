(() => {
  const box = document.getElementById('resultsContent');
  if (!box) return;
  function run(){
    if (!box.querySelector('.score-card') || box.dataset.paydone) return;
    box.dataset.paydone = '1';
    const el = box.querySelector('.score-circle strong');
    const score = parseInt(el ? el.textContent : '', 10);
    if (Number.isFinite(score)) {
      const low = Math.floor(score / 10) * 10;
      const range = `${low}-${low + 10} IQ`;
      const circle = box.querySelector('.score-circle span');
      if (circle) circle.innerHTML = `<strong style="font-size:2rem;color:var(--accent-dark)">${range}</strong><br>IQ range`;
    }
  }
  new MutationObserver(run).observe(box,{childList:true,subtree:true});
  run();
})();
