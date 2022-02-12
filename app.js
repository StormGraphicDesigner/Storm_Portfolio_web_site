const nav = document.getElementById("nav"); 
const toggle = document.getElementById("toggle");
const wraps = document.querySelectorAll(".wrap");
toggle.addEventListener("click", () => nav.classList.toggle("active"));

wraps.forEach(el => {
    el.addEventListener("click", () => {
        classRemove();
        el.classList.add("active")
    })
})

function classRemove(){
    wraps.forEach(el => {
        el.classList.remove("active")
    })
}