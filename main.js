const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js';
document.head.appendChild(script);

function triggerConfetti() {
  confetti({
    particleCount: 600,
    spread: 150,
  });
}

addValues = () => {
  localStorage.setItem("stackOverflowVisits", Number(localStorage.getItem("stackOverflowVisits"))+1)
}


getValues = () => {
  return(localStorage.getItem("stackOverflowVisits"))
}

if(getValues() == null) {
  localStorage.setItem("stackOverflowVisits", 0)
}

addValues()

if (Number(getValues()) % 10 == 0) {
  script.onload = () => {
    triggerConfetti();
  };
  
  alert(`Yeay, du hast Stackoverflow ${localStorage.getItem("stackOverflowVisits")} mal besucht!`)
}
