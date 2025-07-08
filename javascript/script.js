function converterTemperatura() {
    const valor = parseFloat(document.getElementById("tempInput").value);
    const tipo = document.getElementById("tempTipo").value;
    let resultado = "";

    if (isNaN(valor)) {
        resultado = "Por favor, insira um número válido.";
    } else {
        if (tipo === "cToF") {
            resultado = `${valor} °C = ${(valor * 9/5 + 32).toFixed(2)} °F`;
        } else {
            resultado = `${valor} °F = ${((valor - 32) * 5/9).toFixed(2)} °C`;
        }
    }

    document.getElementById("tempResultado").textContent = `Resultado: ${resultado}`;
}

function converterTempo() {
    const valor = parseFloat(document.getElementById("tempoInput").value);
    const tipo = document.getElementById("tempoTipo").value;
    let resultado = "";

    if (isNaN(valor)) {
        resultado = "Por favor, insira um número válido.";
    } else {
        switch (tipo) {
            case "hToMin":
                resultado = `${valor} horas = ${(valor * 60).toFixed(2)} minutos`;
                break;
            case "minToH":
                resultado = `${valor} minutos = ${(valor / 60).toFixed(2)} horas`;
                break;
            case "hToS":
                resultado = `${valor} horas = ${(valor * 3600).toFixed(2)} segundos`;
                break;
            case "sToH":
                resultado = `${valor} segundos = ${(valor / 3600).toFixed(2)} horas`;
                break;
            case "minToS":
                resultado = `${valor} minutos = ${(valor * 60).toFixed(2)} segundos`;
                break;
            case "sToMin":
                resultado = `${valor} segundos = ${(valor / 60).toFixed(2)} minutos`;
                break;
            default:
                resultado = "Conversão inválida.";
        }
    }

    document.getElementById("tempoResultado").textContent = `Resultado: ${resultado}`;
}

function converterDistancia() {
    const valor = parseFloat(document.getElementById("distanciaInput").value);
    const tipo = document.getElementById("distanciaTipo").value;
    let resultado = "";

    if (isNaN(valor)) {
        resultado = "Por favor, insira um número válido.";
    } else {
        if (tipo === "mToFt") {
            resultado = `${valor} metros = ${(valor * 3.28084).toFixed(2)} pés`;
        } else {
            resultado = `${valor} pés = ${(valor / 3.28084).toFixed(2)} metros`;
        }
    }

    document.getElementById("distanciaResultado").textContent = `Resultado: ${resultado}`;
}

function converterPeso() {
    const valor = parseFloat(document.getElementById("pesoInput").value);
    const tipo = document.getElementById("pesoTipo").value;
    let resultado = "";

    if (isNaN(valor)) {
        resultado = "Por favor, insira um número válido.";
    } else {
        switch (tipo) {
            case "kgToLb":
                resultado = `${valor} kg = ${(valor * 2.20462).toFixed(2)} lb`;
                break;
            case "lbToKg":
                resultado = `${valor} lb = ${(valor / 2.20462).toFixed(2)} kg`;
                break;
            case "kgToG":
                resultado = `${valor} kg = ${(valor * 1000).toFixed(2)} g`;
                break;
            case "gToKg":
                resultado = `${valor} g = ${(valor / 1000).toFixed(3)} kg`;
                break;
            case "gToOz":
                resultado = `${valor} g = ${(valor * 0.035274).toFixed(2)} oz`;
                break;
            case "ozToG":
                resultado = `${valor} oz = ${(valor / 0.035274).toFixed(2)} g`;
                break;
            case "tonToKg":
                resultado = `${valor} ton = ${(valor * 1000).toFixed(2)} kg`;
                break;
            case "kgToTon":
                resultado = `${valor} kg = ${(valor / 1000).toFixed(3)} ton`;
                break;
            default:
                resultado = "Conversão inválida.";
        }
    }
    document.getElementById("pesoResultado").textContent = `Resultado: ${resultado}`;
}

function converterVolume() {
    const valor = parseFloat(document.getElementById("volumeInput").value);
    const tipo = document.getElementById("volumeTipo").value;
    let resultado = "";

    if (isNaN(valor)) {
        resultado = "Por favor, insira um número válido.";
    } else {
        switch (tipo) {
            case "lToGal":
                resultado = `${valor} litros = ${(valor * 0.264172).toFixed(2)} galões`;
                break;
            case "galToL":
                resultado = `${valor} galões = ${(valor / 0.264172).toFixed(2)} litros`;
                break;
            case "mlToL":
                resultado = `${valor} ml = ${(valor / 1000).toFixed(2)} litros`;
                break;
            case "lToMl":
                resultado = `${valor} litros = ${(valor * 1000).toFixed(2)} ml`;
                break;
            case "galToMl":
                resultado = `${valor} galões = ${(valor * 3785.41).toFixed(2)} ml`;
                break;
            case "mlToGal":
                resultado = `${valor} ml = ${(valor / 3785.41).toFixed(5)} galões`;
                break;
            default:
                resultado = "Conversão inválida.";
        }
    }
    document.getElementById("volumeResultado").textContent = `Resultado: ${resultado}`;
}

function converterMoeda() {
    const valor = parseFloat(document.getElementById("moedaInput").value);
    const tipo = document.getElementById("moedaTipo").value;
    let resultado = "";
    
    const cotacaoDolar = 5.10;

    if (isNaN(valor)) {
        resultado = "Por favor, insira um número válido.";
    } else {
        if (tipo === "brlToUsd") {
            resultado = `R$ ${valor.toFixed(2)} = $ ${(valor / cotacaoDolar).toFixed(2)}`;
        } else {
            resultado = `$ ${valor.toFixed(2)} = R$ ${(valor * cotacaoDolar).toFixed(2)}`;
        }
    }
    document.getElementById("moedaResultado").textContent = `Resultado: ${resultado}`;
}

const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll(".converter");

document.getElementById("temperatura").classList.add("active"); 
links[0].classList.add("active-link"); 

links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = link.getAttribute("data-section");

    
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