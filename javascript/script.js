const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll(".converter");

document.getElementById("temperatura").classList.add("active"); 
links[0].classList.add("active-link"); 

links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = link.getAttribute("data-section");

    resetarConversores();

    sections.forEach(sec => sec.classList.remove("active"));

    document.getElementById(target).classList.add("active");

    links.forEach(l => l.classList.remove("active-link"));

    link.classList.add("active-link");
  });
});

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("minimized");

    if (sidebar.classList.contains("minimized")) {
        localStorage.setItem("sidebarState", "minimized");
    } else {
        localStorage.setItem("sidebarState", "open");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const savedState = localStorage.getItem("sidebarState");

    if (savedState === "minimized") {
        sidebar.classList.add("minimized");
    } else {
        sidebar.classList.remove("minimized");
    }

    const atalhos = [
        { input: "tempInput", func: converterTemperatura },
        { input: "tempoInput", func: converterTempo },
        { input: "distanciaInput", func: converterDistancia },
        { input: "pesoInput", func: converterPeso },
        { input: "volumeInput", func: converterVolume },
        { input: "moedaInput", func: converterMoeda },
    ];

    atalhos.forEach(({ input, func }) => {
        const campo = document.getElementById(input);
        if (campo) {
            campo.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    e.preventDefault();
                    func();
                }
            });
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.ctrlKey && (e.key === "b" || e.key === "B")) {
            e.preventDefault();
            toggleSidebar();
        }
    });
});