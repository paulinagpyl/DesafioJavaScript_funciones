function pintar(color='green') {
    ele.style.backgroundColor = color
}

const ele = document.getElementById("ele1")

ele.addEventListener("click", ()=>{
    pintar('yellow')
});


