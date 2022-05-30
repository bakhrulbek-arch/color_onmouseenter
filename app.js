let a = document.querySelectorAll(".blc")
for (let i of a) {
    i.onmouseenter = () => {
        i.classList.toggle("anm")
    }
}