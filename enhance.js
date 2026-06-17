(() => {
  const results = document.getElementById('resultsContent');
  if (!results) return;

  function text(el) { return (el && el.textContent ? el.textContent : '').replace(/\s+/g, ' ').trim(); }
  function data() {
    const score = text(results.querySelector('.score-circle strong') || results.querySelector('.metric strong')) || '---';
    const personLine = text(results.querySelector('.score-copy p:not(.eyebrow)')) || 'Test taker';
    const name = personLine.split(',')[0] || 'Test taker';
    const metricTexts = Array.from(results.querySelectorAll('.metric')).map(text);
    const percentile = (metricTexts.find(t => t.toLowerCase().includes('percentile')) || '').replace(/estimated percentile/i, '').trim() || 'shown in report';
    const domains = Array.from(results.querySelectorAll('.domain-card')).map(text);
    return { score, name, percentile, domains };
  }

  function review(d) {
    const best = d.domains[0] || 'reasoning skills';
    return [
      `${d.name}'s score report shows a structured reasoning profile across pattern recognition, logic, numbers, verbal thinking, and attention.`,
      `The score estimate is ${d.score}, with an estimated percentile of ${d.percentile}. This should be read as a cognitive practice report, not a medical or school placement result.`,
      `The strongest visible area appears to be ${best}. The domain breakdown helps show where the test taker was most accurate and where practice could improve speed and consistency.`,
      `Recommended practice: timed number sequences, visual pattern drills, logic puzzles, and short working-memory exercises.`
    ];
  }

  async function shareScore() {
    const d = data();
    const message = `${d.name} scored ${d.score} on the CogniScale Free Professional IQ-Style Test.`;
    try {
      if (navigator.share) await navigator.share({ title: 'My CogniScale Score', text: message, url: location.href });
      else { await navigator.clipboard.writeText(message + ' ' + location.href); alert('Share text copied.'); }
    } catch (e) { console.error(e); }
  }

  function certificate() {
    const d = data();
    const w = window.open('', '_blank');
    if (!w) { alert('Allow popups to open the certificate.'); return; }
    w.document.write(`<!doctype html><title>eCertificate</title><style>body{font-family:Arial;margin:0;background:#f4f8ff}.cert{margin:40px auto;padding:50px;max-width:820px;background:white;border:12px solid #1f8a70;text-align:center}h1{font-size:48px;margin:0;color:#1f8a70}h2{font-size:34px}.score{font-size:64px;font-weight:900;color:#0e4e86}.small{color:#637083;line-height:1.7}@media print{button{display:none}.cert{box-shadow:none;margin:0}}</style><div class="cert"><p>CogniScale</p><h1>eCertificate</h1><p class="small">Free Professional IQ-Style Test</p><h2>${d.name}</h2><p>has completed the reasoning assessment.</p><div class="score">${d.score}</div><p>Score estimate</p><p>Estimated percentile: ${d.percentile}</p><p class="small">Issued ${new Date().toLocaleDateString()}<br>Answers are not included on this certificate.</p><button onclick="window.print()">Download / Save as PDF</button></div>`);
    w.document.close();
  }

  function pay() {
    alert('Payment checkout is the next setup step. Send your Stripe Price ID and I will connect this button to Stripe/Firebase checkout.');
  }

  function add() {
    if (!results.querySelector('.score-card') || document.getElementById('premiumTools')) return;
    const d = data();
    const paragraphs = review(d).map(p => `<p>${p}</p>`).join('');
    results.insertAdjacentHTML('beforeend', `<div id="premiumTools" class="domain-card" style="border-radius:18px;padding:22px;background:white;box-shadow:var(--shadow)"><p class="eyebrow">Premium tools</p><h3>Certificate, sharing, and in-depth review</h3><p style="color:var(--muted);line-height:1.7">Users can unlock an eCertificate, share their score, and read a deeper review after completing the test.</p><div class="hero-actions" style="margin-top:14px"><button class="button primary" id="payCert">Unlock eCertificate</button><button class="button secondary" id="downloadCert">Open eCertificate PDF</button><button class="button secondary" id="shareScore">Share score</button></div></div><div class="domain-card" style="border-radius:18px;padding:22px;background:white"><p class="eyebrow">In-depth review</p><h3>Personal cognitive review</h3><div style="color:var(--muted);line-height:1.7">${paragraphs}</div></div>`);
    document.getElementById('payCert').onclick = pay;
    document.getElementById('downloadCert').onclick = certificate;
    document.getElementById('shareScore').onclick = shareScore;
  }

  new MutationObserver(add).observe(results, { childList: true, subtree: true });
  add();
})();
