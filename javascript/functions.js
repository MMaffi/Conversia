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

function converterArea() {
  const input = parseFloat(document.getElementById("areaInput").value);
  const de = document.getElementById("areaDe").value;
  const para = document.getElementById("areaPara").value;
  const resultado = document.getElementById("areaResultado");
  const t = traducoes[idiomaAtual].mensagens;

  if (isNaN(input)) {
    resultado.innerText = t.erroNumero;
    return;
  }

  const fatores = {
    m2: 1,
    km2: 1e6,
    ft2: 0.092903,
    acre: 4046.86,
    hectare: 10000
  };

  if (!(de in fatores) || !(para in fatores)) {
    resultado.innerText = t.erroConversao;
    return;
  }

  const emM2 = input * fatores[de];
  const convertido = emM2 / fatores[para];

  resultado.innerText = `${t.resultado} ${input} ${de} = ${convertido.toFixed(4)} ${para}`;
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

function converterArmazenamento() {
  const input = parseFloat(document.getElementById("armazenamentoInput").value);
  const de = document.getElementById("armazenamentoDe").value;
  const para = document.getElementById("armazenamentoPara").value;
  const resultado = document.getElementById("armazenamentoResultado");
  const t = traducoes[idiomaAtual].mensagens;

  if (isNaN(input)) {
    resultado.innerText = t.erroNumero;
    return;
  }

  const fatores = {
    bit: 1,
    byte: 8,
    kb: 8 * 1024,
    mb: 8 * 1024 ** 2,
    gb: 8 * 1024 ** 3,
    tb: 8 * 1024 ** 4
  };

  if (!(de in fatores) || !(para in fatores)) {
    resultado.innerText = t.erroConversao;
    return;
  }

  const emBits = input * fatores[de];
  const convertido = emBits / fatores[para];

  resultado.innerText = `${t.resultado} ${input} ${de} = ${convertido.toFixed(4)} ${para}`;
}

function converterPressao() {
  const input = parseFloat(document.getElementById("pressaoInput").value);
  const de = document.getElementById("pressaoDe").value;
  const para = document.getElementById("pressaoPara").value;
  const resultado = document.getElementById("pressaoResultado");
  const t = traducoes[idiomaAtual].mensagens;

  if (isNaN(input)) {
    resultado.innerText = t.erroNumero;
    return;
  }

  const fatores = {
    pa: 1,
    bar: 100000,
    atm: 101325,
    psi: 6894.76,
    mmHg: 133.322
  };

  if (!(de in fatores) || !(para in fatores)) {
    resultado.innerText = t.erroConversao;
    return;
  }

  const emPa = input * fatores[de];
  const convertido = emPa / fatores[para];

  resultado.innerText = `${t.resultado} ${input} ${de} = ${convertido.toFixed(4)} ${para}`;
}

function converterFrequencia() {
    const input = document.getElementById("frequenciaInput").value;
    const de = document.getElementById("frequenciaDe").value;
    const para = document.getElementById("frequenciaPara").value;
    const resultadoElemento = document.getElementById("frequenciaResultado");
    const t = traducoes[idiomaAtual].mensagens;

    let valor = parseFloat(input);
    if (isNaN(valor)) {
        resultadoElemento.innerText = t.erroNumero;
        return;
    }

    const fatores = {
        Hz: 1,
        kHz: 1e3,
        MHz: 1e6,
        GHz: 1e9
    };

    if (!(de in fatores) || !(para in fatores)) {
        resultadoElemento.innerText = t.erroConversao;
        return;
    }

    const emHz = valor * fatores[de];
    const convertido = emHz / fatores[para];

    resultadoElemento.innerText = `${t.resultado} ${valor} ${de} = ${convertido.toFixed(6)} ${para}`;
}

function converterVelocidade() {
    const input = document.getElementById("velocidadeInput").value;
    const de = document.getElementById("velocidadeDe").value;
    const para = document.getElementById("velocidadePara").value;
    const resultadoElemento = document.getElementById("velocidadeResultado");
    const t = traducoes[idiomaAtual].mensagens;

    let valor = parseFloat(input);
    if (isNaN(valor)) {
        resultadoElemento.innerText = t.erroNumero;
        return;
    }

    const unidades = {
        "km/h": 1,
        "m/s": 3.6,
        "mph": 1.609344,
        "nos": 1.852
    };

    if (!(de in unidades) || !(para in unidades)) {
        resultadoElemento.innerText = t.erroConversao;
        return;
    }

    let valorKmH = valor * unidades[de];
    let convertido = valorKmH / unidades[para];

    resultadoElemento.innerText = `${t.resultado} ${valor} ${de} = ${convertido.toFixed(4)} ${para}`;
}

function converterAngulo() {
    const input = document.getElementById("anguloInput").value;
    const de = document.getElementById("anguloDe").value;
    const para = document.getElementById("anguloPara").value;
    const resultadoElemento = document.getElementById("anguloResultado");
    const t = traducoes[idiomaAtual].mensagens;

    let valor = parseFloat(input);
    if (isNaN(valor)) {
        resultadoElemento.innerText = t.erroNumero;
        return;
    }

    let valorGraus;
    switch(de) {
        case "graus": valorGraus = valor; break;
        case "radianos": valorGraus = valor * (180 / Math.PI); break;
        case "grads": valorGraus = valor * 0.9; break;
        default:
            resultadoElemento.innerText = t.erroConversao;
            return;
    }

    let convertido;
    switch(para) {
        case "graus": convertido = valorGraus; break;
        case "radianos": convertido = valorGraus * (Math.PI / 180); break;
        case "grads": convertido = valorGraus / 0.9; break;
        default:
            resultadoElemento.innerText = t.erroConversao;
            return;
    }

    resultadoElemento.innerText = `${t.resultado} ${valor} ${de} = ${convertido.toFixed(6)} ${para}`;
}

function converterTaxa() {
    const input = document.getElementById("taxaInput").value;
    const de = document.getElementById("taxaDe").value;
    const para = document.getElementById("taxaPara").value;
    const resultadoElemento = document.getElementById("taxaResultado");
    const t = traducoes[idiomaAtual].mensagens;

    let valor = parseFloat(input);
    if (isNaN(valor)) {
        resultadoElemento.innerText = t.erroNumero;
        return;
    }

    let convertido;

    if (de === para) {
        convertido = valor;
    } else if (de === "porcentagem") {
        if (para === "fracao" || para === "proporcao") convertido = valor / 100;
        else {
            resultadoElemento.innerText = t.erroConversao;
            return;
        }
    } else if (de === "fracao" || de === "proporcao") {
        if (para === "porcentagem") convertido = valor * 100;
        else if (para === "fracao" || para === "proporcao") convertido = valor;
        else {
            resultadoElemento.innerText = t.erroConversao;
            return;
        }
    } else {
        resultadoElemento.innerText = t.erroConversao;
        return;
    }

    resultadoElemento.innerText = `${t.resultado} ${valor} ${de} = ${convertido.toFixed(6)} ${para}`;
}

function converterSom() {
    const input = document.getElementById("somInput").value;
    const de = document.getElementById("somDe").value;
    const para = document.getElementById("somPara").value;
    const resultadoElemento = document.getElementById("somResultado");
    const t = traducoes[idiomaAtual].mensagens;

    let valor = parseFloat(input);
    if (isNaN(valor)) {
        resultadoElemento.innerText = t.erroNumero;
        return;
    }

    if (de === para) {
        resultadoElemento.innerText = `${t.resultado} ${valor} ${de} = ${valor} ${para}`;
        return;
    }

    let convertido;

    if (de === "dB") {
        if (para === "sones") {
            convertido = Math.pow(2, (valor - 40) / 10);
        } else if (para === "phons") {
            convertido = valor;
        } else {
            resultadoElemento.innerText = t.erroConversao;
            return;
        }
    } else if (de === "sones") {
        if (para === "dB") {
            convertido = 40 + 10 * Math.log2(valor);
        } else if (para === "phons") {
            convertido = 40 + 10 * Math.log2(valor);
        } else {
            resultadoElemento.innerText = t.erroConversao;
            return;
        }
    } else if (de === "phons") {
        if (para === "dB") {
            convertido = valor;
        } else if (para === "sones") {
            convertido = Math.pow(2, (valor - 40) / 10);
        } else {
            resultadoElemento.innerText = t.erroConversao;
            return;
        }
    } else {
        resultadoElemento.innerText = t.erroConversao;
        return;
    }

    resultadoElemento.innerText = `${t.resultado} ${valor} ${de} = ${convertido.toFixed(4)} ${para}`;
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