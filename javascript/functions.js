function converterTemperatura() {
    const valor = parseFloat(document.getElementById("tempInput").value);

    const de = document.getElementById("tempDe").value;
    const para = document.getElementById("tempPara").value;
    
    let resultado = "";

    if (isNaN(valor)) {
    resultado = "Por favor, insira um número válido.";
    } else if (de === para) {
        resultado = `${valor} ${de.toUpperCase()} = ${valor.toFixed(2)} ${para.toUpperCase()}`;
    } else if (de === "c" && para === "f") {
        resultado = `${valor} °C = ${(valor * 9 / 5 + 32).toFixed(2)} °F`;
    } else if (de === "f" && para === "c") {
        resultado = `${valor} °F = ${((valor - 32) * 5 / 9).toFixed(2)} °C`;
    } else {
        resultado = "Conversão inválida.";
    }

    document.getElementById("tempResultado").textContent = `Resultado: ${resultado}`;
}

function converterTempo() {
    const valor = parseFloat(document.getElementById("tempoInput").value);
    const de = document.getElementById("tempoDe").value;
    const para = document.getElementById("tempoPara").value;
    let resultado = "";

    if (isNaN(valor)) {
        resultado = "Por favor, insira um número válido.";
    } else if (de === para) {
        resultado = `${valor} ${de} = ${valor.toFixed(2)} ${para}`;
    } else {
        let segundos;
        switch (de) {
            case "h": segundos = valor * 3600; break;
            case "min": segundos = valor * 60; break;
            case "s": segundos = valor; break;
            default: segundos = NaN;
        }

        let convertido;
        switch (para) {
            case "h": convertido = segundos / 3600; break;
            case "min": convertido = segundos / 60; break;
            case "s": convertido = segundos; break;
            default: convertido = NaN;
        }

        if (isNaN(segundos) || isNaN(convertido)) {
            resultado = "Conversão inválida.";
        } else {
            resultado = `${valor} ${de} = ${convertido.toFixed(2)} ${para}`;
        }
    }

    document.getElementById("tempoResultado").textContent = `Resultado: ${resultado}`;
}

function converterDistancia() {
    const valor = parseFloat(document.getElementById("distanciaInput").value);
    const de = document.getElementById("distanciaDe").value;
    const para = document.getElementById("distanciaPara").value;
    let resultado = "";

    const emMetros = {
        m: 1,
        ft: 1 / 3.28084
    };

    const deMetroPara = {
        m: 1,
        ft: 3.28084
    };

    if (isNaN(valor)) {
        resultado = "Por favor, insira um número válido.";
    } else {
        const metros = valor * (emMetros[de] || NaN);
        const convertido = metros * (deMetroPara[para] || NaN);

        if (isNaN(convertido)) {
            resultado = "Conversão inválida.";
        } else {
            resultado = `${valor} ${de} = ${convertido.toFixed(2)} ${para}`;
        }
    }

    document.getElementById("distanciaResultado").textContent = `Resultado: ${resultado}`;
}

function converterPeso() {
    const valor = parseFloat(document.getElementById("pesoInput").value);
    const de = document.getElementById("pesoDe").value;
    const para = document.getElementById("pesoPara").value;
    let resultado = "";

    const emGramas = {
        kg: 1000,
        lb: 453.592,
        g: 1,
        oz: 28.3495,
        ton: 1_000_000
    };

    if (isNaN(valor)) {
        resultado = "Por favor, insira um número válido.";
    } else {
        const gramas = valor * (emGramas[de] || NaN);
        const convertido = gramas / (emGramas[para] || NaN);

        if (isNaN(convertido)) {
            resultado = "Conversão inválida.";
        } else {
            resultado = `${valor} ${de} = ${convertido.toFixed(2)} ${para}`;
        }
    }

    document.getElementById("pesoResultado").textContent = `Resultado: ${resultado}`;
}

function converterVolume() {
    const valor = parseFloat(document.getElementById("volumeInput").value);
    const de = document.getElementById("volumeDe").value;
    const para = document.getElementById("volumePara").value;
    let resultado = "";

    const emMililitros = {
        l: 1000,
        ml: 1,
        gal: 3785.41
    };

    if (isNaN(valor)) {
        resultado = "Por favor, insira um número válido.";
    } else {
        const ml = valor * (emMililitros[de] || NaN);
        const convertido = ml / (emMililitros[para] || NaN);

        if (isNaN(convertido)) {
            resultado = "Conversão inválida.";
        } else {
            resultado = `${valor} ${de} = ${convertido.toFixed(2)} ${para}`;
        }
    }

    document.getElementById("volumeResultado").textContent = `Resultado: ${resultado}`;
}

async function converterMoeda() {
    const valor = parseFloat(document.getElementById("moedaInput").value);
    const de = document.getElementById("moedaDe").value.toUpperCase();
    const para = document.getElementById("moedaPara").value.toUpperCase();
    const resultadoEl = document.getElementById("moedaResultado");
    const botao = document.getElementById("botaoConverterMoeda");

    let resultado = "";

    if (isNaN(valor)) {
        resultado = "Por favor, insira um número válido.";
        resultadoEl.textContent = `Resultado: ${resultado}`;
        return;
    }

    if (de === para) {
        resultado = `${valor.toFixed(2)} ${de} = ${valor.toFixed(2)} ${para}`;
        resultadoEl.textContent = `Resultado: ${resultado}`;
        return;
    }

    botao.disabled = true;
    botao.textContent = "Convertendo...";
    resultadoEl.textContent = "Resultado: Buscando cotação...";

    const cotacao = await obterCotacao(de, para);

    if (cotacao) {
        const convertido = valor * cotacao;
        resultado = `${valor.toFixed(2)} ${de} = ${convertido.toFixed(2)} ${para}`;
    } else {
        resultado = "Erro ao obter cotação. Tente novamente mais tarde.";
    }

    resultadoEl.textContent = `Resultado: ${resultado}`;

    botao.disabled = false;
    botao.textContent = "Converter";
}