addValues = () => { localStorage.setItem("stackOverflowVisits", Number(localStorage.getItem("stackOverflowVisits")) + 1) }
getValues = () => { return (localStorage.getItem("stackOverflowVisits")) }

if (getValues() == null) {
    localStorage.setItem("stackOverflowVisits", 0)
}

addValues()
if (Number(getValues()) % 10 == 0) {
    alert(`Yeay, du hast Stackoverflow ${localStorage.getItem("stackOverflowVisits")} mal besucht!`)
}