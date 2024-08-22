document.addEventListener("scroll", function() {
    const logo = document.querySelector(".logo");
    const scrollPosition = window.scrollY;
    const logoContainerHeight = document.querySelector(".logo-container").offsetHeight;

    if (scrollPosition > logoContainerHeight) {
        logo.style.opacity = "0";
    } else {
        logo.style.opacity = "1";
    }
});
