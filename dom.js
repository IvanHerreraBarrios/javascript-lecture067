const $eventsDivs = document.querySelectorAll("flow-events div"),
$linkEvents = document.querySelector(".flow-events a")
console.log($eventsDivs)

function flowEvents(e) {
    console.log(`Hi ${this.className}, origin ${e.target.className}`)
    e.stopPropagation()
}

$eventsDivs.forEach(div => {
    div.addEventListener("click", flowEvents) // =>bubble
    //div.addEventListener("click", flowEvents, false) // false => bubble


    //div.addEventListener("click", flowEvents, true) //true => capture
    /*div.addEventListener("click", flowEvents, {
        capture: false, //false = bubble
        once: true, //only 1 time
    }) //true => capture
     */
})

$linkEvents.addEventListener("click", e=> {
    alert("Hello events")
    e.preventDefault()
    e.stopPropagation()
})