const topSection = document.querySelector(".topSection");
const navbar = document.querySelector(".navbar");
const root = document.querySelector(":root");

window.addEventListener("scroll", () => {
    const topPoss = topSection.getBoundingClientRect().top;
    const screenPoss = window.innerHeight;
    console.log(topPoss);
    console.log(screenPoss);

    if (topPoss < screenPoss) {
        $(".navbar").addClass("bg-light");
        navbar.removeAttribute("data-bs-theme");
        root.style.setProperty("--backgroundTanda", "black");
    } else {
        $(".navbar").removeClass("bg-light");
        navbar.setAttribute("data-bs-theme", "dark");
        root.style.setProperty("--backgroundTanda", "white");
    }
});