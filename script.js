function toggleMenu() {
    /* Elements targeted */
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    /* Clicking on the element either opens or closes that class */
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}