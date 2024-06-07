const menuButton = document.getElementById('hamburger')
const mobileMenu = document.getElementById('mobile-menu')


menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle('hidden');
})