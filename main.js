addValues = () => {localStorage.setItem("stackOverflowVisits", Number(localStorage.getItem("stackOverflowVisits"))+1)}
  
if(localStorage.getItem("stackOverflowVisits") == null) {
localStorage.setItem("stackOverflowVisits", 0)
addValues()
}

addValues()
alert(`Neuer Visit. Anzahl der Besuche: ${localStorage.getItem("stackOverflowVisits")}`)