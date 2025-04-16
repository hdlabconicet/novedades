document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        if (link.href && !link.target) {
            link.target = "_blank";
        }
    });
});