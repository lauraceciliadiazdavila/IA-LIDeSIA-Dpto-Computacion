document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("[data-section]");
    const sections = document.querySelectorAll(".inicio-section");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const targetId = link.getAttribute("data-section");

            sections.forEach(sec => sec.classList.remove("active"));
            document.getElementById(targetId).classList.add("active");
        });
    });
});
