function converterTemperatura() {
    const input = document.getElementById("tempInput").value;
    const de = document.getElementById("tempDe").value;
    const para = document.getElementById("tempPara").value;
    const resultadoElemento = document.getElementById("tempResultado");
    const t = traducoes[idiomaAtual].mensagens;

    let valor = parseFloat(input);
    if (isNaN(valor)) {
        resultadoElemento.innerText = t.erroNumero;
        return;
    }

    let unidadeDe = de === "c" ? "°C" : de === "f" ? "°F" : "K";
    let unidadePara = para === "c" ? "°C" : para === "f" ? "°F" : "K";

    let celsiusValor;
    switch (de) {
        case "c":
            celsiusValor = valor;
            break;
        case "f":
            celsiusValor = (valor - 32) * 5 / 9;
            break;
        case "k":
            celsiusValor = valor - 273.15;
            break;
        default:
            resultadoElemento.innerText = t.erroConversao;
            return;
    }

    let convertido;
    switch (para) {
        case "c":
            convertido = celsiusValor;
            break;
        case "f":
            convertido = celsiusValor * 9 / 5 + 32;
            break;
        case "k":
            convertido = celsiusValor + 273.15;
            break;
        default:
            resultadoElemento.innerText = t.erroConversao;
            return;
    }

    resultadoElemento.innerText = `${t.resultado} ${valor} ${unidadeDe} = ${convertido.toFixed(2)} ${unidadePara}`;
}

function converterEnergia() {
    const input = document.getElementById("energiaInput").value;
    const de = document.getElementById("energiaDe").value;
    const para = document.getElementById("energiaPara").value;
    const resultadoElemento = document.getElementById("energiaResultado");
    const t = traducoes[idiomaAtual].mensagens;

    let valor = parseFloat(input);
    if (isNaN(valor)) {
        resultadoElemento.innerText = t.erroNumero;
        return;
    }

    const unidades = {
        J: 1,
        kJ: 1000,
        cal: 4.184,
        kcal: 4184,
        Wh: 3600,
        kWh: 3600000,
        eV: 1.60218e-19
    };

    if (!(de in unidades) || !(para in unidades)) {
        resultadoElemento.innerText = t.erroConversao;
        return;
    }

    let valorEmJoules = valor * unidades[de];
    let convertido = valorEmJoules / unidades[para];

    const formatado = parseFloat(convertido.toFixed(6));

    resultadoElemento.innerText = `${t.resultado} ${valor} ${de} = ${formatado} ${para}`;
}

function converterTempo() {
    const input = document.getElementById("tempoInput").value;
    const de = document.getElementById("tempoDe").value;
    const para = document.getElementById("tempoPara").value;
    const resultadoElemento = document.getElementById("tempoResultado");
    const t = traducoes[idiomaAtual].mensagens;

    let valor = parseFloat(input);
    if (isNaN(valor)) {
        resultadoElemento.innerText = t.erroNumero;
        return;
    }

    const unidades = {
        h: 3600000,
        min: 60000,
        s: 1000,
        ms: 1
    };

    if (!(de in unidades) || !(para in unidades)) {
        resultadoElemento.innerText = t.erroConversao;
        return;
    }

    let valorMs = valor * unidades[de];
    let convertido = valorMs / unidades[para];

    resultadoElemento.innerText = `${t.resultado} ${valor} ${de} = ${convertido.toFixed(2)} ${para}`;
}

function converterDistancia() {
    const input = document.getElementById("distanciaInput").value;
    const de = document.getElementById("distanciaDe").value;
    const para = document.getElementById("distanciaPara").value;
    const resultadoElemento = document.getElementById("distanciaResultado");
    const t = traducoes[idiomaAtual].mensagens;

    let valor = parseFloat(input);
    if (isNaN(valor)) {
        resultadoElemento.innerText = t.erroNumero;
        return;
    }

    const unidades = {
        m: 1,
        ft: 0.3048,
        km: 1000,
        mi: 1609.344
    };

    if (!(de in unidades) || !(para in unidades)) {
        resultadoElemento.innerText = t.erroConversao;
        return;
    }

    let valorEmMetros = valor * unidades[de];
    let convertido = valorEmMetros / unidades[para];

    resultadoElemento.innerText = `${t.resultado} ${valor} ${de} = ${convertido.toFixed(2)} ${para}`;
}

function converterPeso() {
    const input = document.getElementById("pesoInput").value;
    const de = document.getElementById("pesoDe").value;
    const para = document.getElementById("pesoPara").value;
    const resultadoElemento = document.getElementById("pesoResultado");
    const t = traducoes[idiomaAtual].mensagens;

    let valor = parseFloat(input);
    if (isNaN(valor)) {
        resultadoElemento.innerText = t.erroNumero;
        return;
    }

    const unidades = {
        mg: 0.001,
        g: 1,
        kg: 1000,
        lb: 453.592,
        oz: 28.3495,
        ton: 1_000_000
    };

    if (!(de in unidades) || !(para in unidades)) {
        resultadoElemento.innerText = t.erroConversao;
        return;
    }

    let valorEmGramas = valor * unidades[de];
    let convertido = valorEmGramas / unidades[para];

    resultadoElemento.innerText = `${t.resultado} ${valor} ${de} = ${convertido.toFixed(2)} ${para}`;
}

function converterVolume() {
    const input = document.getElementById("volumeInput").value;
    const de = document.getElementById("volumeDe").value;
    const para = document.getElementById("volumePara").value;
    const resultadoElemento = document.getElementById("volumeResultado");
    const t = traducoes[idiomaAtual].mensagens;

    let valor = parseFloat(input);
    if (isNaN(valor)) {
        resultadoElemento.innerText = t.erroNumero;
        return;
    }

    const unidades = {
        ml: 1,
        l: 1000,
        gal: 3785.41,
        m3: 1_000_000
    };

    if (!(de in unidades) || !(para in unidades)) {
        resultadoElemento.innerText = t.erroConversao;
        return;
    }

    let valorEmMl = valor * unidades[de];
    let convertido = valorEmMl / unidades[para];

    resultadoElemento.innerText = `${t.resultado} ${valor} ${de} = ${convertido.toFixed(2)} ${para}`;
}

// Parte Moedas Com API ---------------------------------------------------------------------------------------------------

const simbolosMoeda = {
    BRL: "R$",
    USD: "$",
    EUR: "€",
    GBP: "£",
    ARS: "$",
    CLP: "$",
    CAD: "C$",
    AUD: "A$",
    JPY: "¥",
    CNY: "¥",
    CHF: "CHF",
    SEK: "kr",
    NOK: "kr",
    DKK: "kr",
    MXN: "$",
    INR: "₹",
    RUB: "₽",
    ZAR: "R",
    KRW: "₩",
    TRY: "₺"
};

async function converterMoeda() {
    const input = document.getElementById("moedaInput").value;
    const de = document.getElementById("moedaDe").value;
    const para = document.getElementById("moedaPara").value;
    const resultadoElemento = document.getElementById("moedaResultado");
    const t = traducoes[idiomaAtual].mensagens;

    let valor = parseFloat(input);
    if (isNaN(valor)) {
        resultadoElemento.innerText = t.erroNumero;
        return;
    }

    resultadoElemento.innerText = t.buscandoCotacao;

    const cotacao = await obterCotacao(de, para);

    if (!cotacao) {
        resultadoElemento.innerText = t.erroCotacao;
        return;
    }

    const convertido = (valor * cotacao).toFixed(2);
    const simboloDe = simbolosMoeda[de] || de;
    const simboloPara = simbolosMoeda[para] || para;

    resultadoElemento.innerText = `${t.resultado} ${simboloDe}${valor} = ${simboloPara}${convertido}`;
}