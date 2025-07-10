const cacheCotacoes = {};
const tempoCache = 60 * 1000;

async function obterCotacao(de, para) {
    const chave = `${de}${para}`;
    const agora = Date.now();

    if (cacheCotacoes[chave] && (agora - cacheCotacoes[chave].timestamp < tempoCache)) {
        return cacheCotacoes[chave].valor;
    }

    try {
        const response = await fetch(`https://economia.awesomeapi.com.br/last/${de}-${para}`);
        const data = await response.json();
        const cotacao = parseFloat(data[chave].bid);

        cacheCotacoes[chave] = {
            valor: cotacao,
            timestamp: agora
        };

        return cotacao;
    } catch (error) {
        console.error("Erro ao buscar cotação:", error);
        return null;
    }
}