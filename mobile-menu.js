const mobileMenu = document.querySelector(".mobile-menu")
const blackThing = document.querySelector(".mobile-menu>div:nth-child(1)")
const actualMenu = document.querySelector(".mobile-menu>div:nth-child(2)")
const burger = document.querySelector(".burger")
const mobilex = document.querySelector(".mobilex")

burger.addEventListener("click", () => {
    mobileMenu.style.display = "flex"
    blackThing.style.transform = "translateX(0)"
    setTimeout(() => {
        actualMenu.style.transform = "translateX(0)"
    },1)
})

mobilex.addEventListener("click", () => {
    blackThing.style.transform = "translateX(100%)"
    actualMenu.style.transform = "translateX(100%)"
    setTimeout(() => {
        mobileMenu.style.display = "none"
    },200)
})