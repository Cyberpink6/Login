const menuItems = document.querySelectorAll(".menu-item")

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        let prevActive = document.querySelector("a.menu-item.active")
        if (prevActive) {
            prevActive.classList.toggle("active")
        }
        item.classList.toggle("active")
    })
})
