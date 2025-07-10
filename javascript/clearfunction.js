function resetarConversores() {
    // Limpa todos os inputs
    const inputs = document.querySelectorAll(".converter input[type='number']");
    inputs.forEach(input => input.value = "");

    // Reseta selects para a opção marcada como selected
    const selects = document.querySelectorAll(".converter select");
    selects.forEach(select => {
        const defaultOption = select.querySelector("option[selected]");
        if (defaultOption) {
            select.value = defaultOption.value;
        } else {
            // fallback se não tiver nenhuma marcada
            select.selectedIndex = 0;
        }
    });

    // Limpa os resultados
    const resultados = document.querySelectorAll(".converter p");
    resultados.forEach(p => p.textContent = "Resultado: ");
}

