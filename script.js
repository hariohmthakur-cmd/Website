const nav = document.getElementById("nav");
const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");
window.addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 30));
menu.addEventListener("click", () => navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach((a) => a.addEventListener("click", () => navLinks.classList.remove("open")));

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) e.target.classList.add("visible");
        });
    },
    { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

document.querySelectorAll(".amount").forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".amount").forEach((x) => x.classList.remove("active"));
        btn.classList.add("active");
    });
});

/* Countdown — set the actual festival start date here when confirmed. */
const festivalDate = new Date("2026-10-11T00:00:00+05:30");
function updateCountdown() {
    const diff = Math.max(0, festivalDate - new Date());
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    document.getElementById("days").textContent = String(d).padStart(2, "0");
    document.getElementById("hours").textContent = String(h).padStart(2, "0");
    document.getElementById("mins").textContent = String(m).padStart(2, "0");
    document.getElementById("secs").textContent = String(s).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);