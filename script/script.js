const responsiveMenu = document.querySelector(".responsive-button");
responsiveMenu.addEventListener("click", () => {
    const headerMenu = document.querySelector(".navigation");
    headerMenu.classList.toggle("menu-active");
});
