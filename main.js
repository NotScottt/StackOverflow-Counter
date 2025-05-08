const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js';
document.head.appendChild(script);
var firstUseDate = new Date()

function triggerConfetti() {
  confetti({
    particleCount: 600,
    spread: 150,
  });
}

function logFirstUse() {
	const firstUse = firstUseDate.toLocaleDateString("de",{year:"2-digit",month:"2-digit", day:"2-digit"});
	
	localStorage.setItem("firstScriptUse", firstUse)
}

addValues = () => {
  localStorage.setItem("stackOverflowVisits", Number(localStorage.getItem("stackOverflowVisits"))+1)
  
  if (localStorage.getItem("stackOverflowVisits") === 1) {
  	logFirstUse();
  }
}


getValues = () => {
  return(localStorage.getItem("stackOverflowVisits"))
}

if(getValues() === null) {
  localStorage.setItem("stackOverflowVisits", 0)
}

addValues()

if (Number(getValues()) % 10 === 0) {
  script.onload = () => {
    triggerConfetti();
  };
  
  if (localStorage.getItem("firstScriptUse") !== null) {
  	alert(`Yeay, du hast Stackoverflow seit dem ${localStorage.getItem("firstScriptUse")} genau ${localStorage.getItem("stackOverflowVisits")} mal besucht!`)
  } else {
  	alert(`Yeay, du hast Stackoverflow ${localStorage.getItem("stackOverflowVisits")} mal besucht!`)
  }
}
