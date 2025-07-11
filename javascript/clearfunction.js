function resetarConversores() {
    const inputs = document.querySelectorAll(".converter input[type='number']");
    inputs.forEach(input => input.value = "");

    const selects = document.querySelectorAll(".converter select");
    selects.forEach(select => {
        const defaultOption = select.querySelector("option[selected]");
        if (defaultOption) {
            select.value = defaultOption.value;
        } else {
            select.selectedIndex = 0;
        }
    });

    const resultados = document.querySelectorAll(".converter p");
    const textoResultado = traducoes[idiomaAtual].mensagens.resultado;
    resultados.forEach(p => p.textContent = textoResultado);
}
