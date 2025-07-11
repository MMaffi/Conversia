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

    let convertido = 0;
    let unidadeDe = de === "c" ? "°C" : "°F";
    let unidadePara = para === "c" ? "°C" : "°F";

    if (de === "c" && para === "f") {
        convertido = (valor * 9/5 + 32).toFixed(2);
    } else if (de === "f" && para === "c") {
        convertido = ((valor - 32) * 5/9).toFixed(2);
    } else {
        convertido = valor.toFixed(2);
    }

    resultadoElemento.innerText = `${t.resultado} ${valor} ${unidadeDe} = ${convertido} ${unidadePara}`;
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
        h: "h",
        min: "min",
        s: "s"
    };

    let convertido = 0;

    let segundos = valor;
    if (de === "h") segundos *= 3600;
    else if (de === "min") segundos *= 60;

    if (para === "h") convertido = (segundos / 3600).toFixed(2);
    else if (para === "min") convertido = (segundos / 60).toFixed(2);
    else convertido = segundos.toFixed(2);

    resultadoElemento.innerText = `${t.resultado} ${valor} ${unidades[de]} = ${convertido} ${unidades[para]}`;
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

    let convertido = 0;

    if (de === "m" && para === "ft") convertido = (valor * 3.28084).toFixed(2);
    else if (de === "ft" && para === "m") convertido = (valor / 3.28084).toFixed(2);
    else convertido = valor.toFixed(2);

    const unidades = { m: "m", ft: "ft" };
    resultadoElemento.innerText = `${t.resultado} ${valor} ${unidades[de]} = ${convertido} ${unidades[para]}`;
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

    let gramas = valor;
    switch (de) {
        case "kg": gramas *= 1000; break;
        case "lb": gramas *= 453.592; break;
        case "oz": gramas *= 28.3495; break;
        case "ton": gramas *= 1_000_000; break;
    }

    let convertido = gramas;
    switch (para) {
        case "kg": convertido = gramas / 1000; break;
        case "lb": convertido = gramas / 453.592; break;
        case "oz": convertido = gramas / 28.3495; break;
        case "ton": convertido = gramas / 1_000_000; break;
    }

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

    let ml = valor;
    switch (de) {
        case "l": ml *= 1000; break;
        case "gal": ml *= 3785.41; break;
    }

    let convertido = ml;
    switch (para) {
        case "l": convertido = ml / 1000; break;
        case "gal": convertido = ml / 3785.41; break;
    }

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