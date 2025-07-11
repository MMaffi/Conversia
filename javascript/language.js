const traducoes = {
	pt: {
		siteTitle: "Conversia",
		sidebar: {
			temperatura: "Temperatura",
			tempo: "Tempo",
			distancia: "Distância",
			peso: "Peso",
			volume: "Volume",
			moeda: "Moeda",
			idioma: "Idioma",
			tema: "Tema"
		},
		secoes: {
			temperatura: "🌡️ Temperatura",
			tempo: "⏱️ Tempo",
			distancia: "📏 Distância",
			peso: "⚖️ Peso",
			volume: "🧴 Volume",
			moeda: "💰 Moeda"
		},
		placeholders: {
			input: "Digite o valor"
		},
		botoes: {
			converter: "Converter",
			invert: "Inverter",
			convertendo: "Convertendo...",
			selecionarIdioma: "Selecionar idioma"
		},
		mensagens: {
			resultado: "Resultado:",
			erroNumero: "Por favor, insira um número válido.",
			erroConversao: "Conversão inválida.",
			buscandoCotacao: "Buscando cotação...",
			erroCotacao: "Erro ao obter cotação. Tente novamente mais tarde."
		}
	},

	en: {
		siteTitle: "Conversia",
		sidebar: {
			temperatura: "Temperature",
			tempo: "Time",
			distancia: "Distance",
			peso: "Weight",
			volume: "Volume",
			moeda: "Currency",
			idioma: "Language",
			tema: "Theme"
		},
		secoes: {
			temperatura: "🌡️ Temperature",
			tempo: "⏱️ Time",
			distancia: "📏 Distance",
			peso: "⚖️ Weight",
			volume: "🧴 Volume",
			moeda: "💰 Currency"
		},
		placeholders: {
			input: "Enter a value"
		},
		botoes: {
			converter: "Convert",
			invert: "Swap",
			convertendo: "Converting...",
			selecionarIdioma: "Select language"
		},
		mensagens: {
			resultado: "Result:",
			erroNumero: "Please enter a valid number.",
			erroConversao: "Invalid conversion.",
			buscandoCotacao: "Fetching exchange rate...",
			erroCotacao: "Error fetching exchange rate. Please try again later."
		}
	}
};

let idiomaAtual = localStorage.getItem("language") || "pt";

function setLanguage(lang) {
	localStorage.setItem("language", lang);
	idiomaAtual = lang;
	carregarIdioma(lang);
	document.getElementById("languageMenu").style.display = "none";
}

function carregarIdioma(lang) {
	const t = traducoes[lang];

	// Sidebar
	const sidebarItems = document.querySelectorAll(".sidebar nav a span");
	sidebarItems[0].innerText = t.sidebar.temperatura;
	sidebarItems[1].innerText = t.sidebar.tempo;
	sidebarItems[2].innerText = t.sidebar.distancia;
	sidebarItems[3].innerText = t.sidebar.peso;
	sidebarItems[4].innerText = t.sidebar.volume;
	sidebarItems[5].innerText = t.sidebar.moeda;

	// Texto do botão de idioma
	document.querySelector("#languageSwitcher p").innerText = t.sidebar.idioma;

	// Texto do botão Tema
	document.querySelector(".darkmodetext").innerText = t.sidebar.tema;

	// Títulos das seções
	document.querySelector("#temperatura h2").innerText = t.secoes.temperatura;
	document.querySelector("#tempo h2").innerText = t.secoes.tempo;
	document.querySelector("#distancia h2").innerText = t.secoes.distancia;
	document.querySelector("#peso h2").innerText = t.secoes.peso;
	document.querySelector("#volume h2").innerText = t.secoes.volume;
	document.querySelector("#moeda h2").innerText = t.secoes.moeda;

	// Placeholders dos inputs
	document.querySelectorAll("input[type='number']").forEach(input => {
		input.placeholder = t.placeholders.input;
	});

	// Botões Converter
	document.querySelectorAll("button").forEach(btn => {
		if (btn.innerText === "Converter" || btn.innerText === "Convert") {
		btn.innerText = t.botoes.converter;
		}
	});

	// Resultado (corrige sempre que muda de idioma)
	document.getElementById("tempResultado").innerText = t.mensagens.resultado;
	document.getElementById("tempoResultado").innerText = t.mensagens.resultado;
	document.getElementById("distanciaResultado").innerText = t.mensagens.resultado;
	document.getElementById("pesoResultado").innerText = t.mensagens.resultado;
	document.getElementById("volumeResultado").innerText = t.mensagens.resultado;
	document.getElementById("moedaResultado").innerText = t.mensagens.resultado;

	// Traduz os selects
	traduzirSelects(lang);
}

function traduzirSelects(lang) {
	const labels = {
		pt: {
			c: "Celsius",
			f: "Fahrenheit",

			h: "Horas",
			min: "Minutos",
			s: "Segundos",

			m: "Metros",
			ft: "Pés",

			kg: "Quilos",
			lb: "Libras",
			g: "Gramas",
			oz: "Onças",
			ton: "Toneladas",

			l: "Litros",
			ml: "Mililitros",
			gal: "Galões",

			BRL: "🇧🇷 Real Brasileiro (BRL)",
			USD: "🇺🇸 Dólar Americano (USD)",
			EUR: "🇪🇺 Euro (EUR)",
			GBP: "🇬🇧 Libra Esterlina (GBP)",
			ARS: "🇦🇷 Peso Argentino (ARS)",
			CLP: "🇨🇱 Peso Chileno (CLP)",
			CAD: "🇨🇦 Dólar Canadense (CAD)",
			AUD: "🇦🇺 Dólar Australiano (AUD)",
			JPY: "🇯🇵 Iene Japonês (JPY)",
			CNY: "🇨🇳 Yuan Chinês (CNY)",
			CHF: "🇨🇭 Franco Suíço (CHF)",
			SEK: "🇸🇪 Coroa Sueca (SEK)",
			NOK: "🇳🇴 Coroa Norueguesa (NOK)",
			DKK: "🇩🇰 Coroa Dinamarquesa (DKK)",
			MXN: "🇲🇽 Peso Mexicano (MXN)",
			INR: "🇮🇳 Rúpia Indiana (INR)",
			RUB: "🇷🇺 Rublo Russo (RUB)",
			ZAR: "🇿🇦 Rand Sul-Africano (ZAR)",
			KRW: "🇰🇷 Won Sul-Coreano (KRW)",
			TRY: "🇹🇷 Lira Turca (TRY)"
		},
		en: {
			c: "Celsius",
			f: "Fahrenheit",

			h: "Hours",
			min: "Minutes",
			s: "Seconds",

			m: "Meters",
			ft: "Feet",

			kg: "Kilograms",
			lb: "Pounds",
			g: "Grams",
			oz: "Ounces",
			ton: "Tons",

			l: "Liters",
			ml: "Milliliters",
			gal: "Gallons",

			BRL: "🇧🇷 Brazilian Real (BRL)",
			USD: "🇺🇸 US Dollar (USD)",
			EUR: "🇪🇺 Euro (EUR)",
			GBP: "🇬🇧 British Pound (GBP)",
			ARS: "🇦🇷 Argentine Peso (ARS)",
			CLP: "🇨🇱 Chilean Peso (CLP)",
			CAD: "🇨🇦 Canadian Dollar (CAD)",
			AUD: "🇦🇺 Australian Dollar (AUD)",
			JPY: "🇯🇵 Japanese Yen (JPY)",
			CNY: "🇨🇳 Chinese Yuan (CNY)",
			CHF: "🇨🇭 Swiss Franc (CHF)",
			SEK: "🇸🇪 Swedish Krona (SEK)",
			NOK: "🇳🇴 Norwegian Krone (NOK)",
			DKK: "🇩🇰 Danish Krone (DKK)",
			MXN: "🇲🇽 Mexican Peso (MXN)",
			INR: "🇮🇳 Indian Rupee (INR)",
			RUB: "🇷🇺 Russian Ruble (RUB)",
			ZAR: "🇿🇦 South African Rand (ZAR)",
			KRW: "🇰🇷 South Korean Won (KRW)",
			TRY: "🇹🇷 Turkish Lira (TRY)"
		}
	};

	const traduzir = (selectId) => {
		const select = document.getElementById(selectId);
		[...select.options].forEach(option => {
		if (labels[lang][option.value]) {
			option.text = labels[lang][option.value];
		}
		});
	};

	// Temperatura
	traduzir("tempDe");
	traduzir("tempPara");

	// Tempo
	traduzir("tempoDe");
	traduzir("tempoPara");

	// Distância
	traduzir("distanciaDe");
	traduzir("distanciaPara");

	// Peso
	traduzir("pesoDe");
	traduzir("pesoPara");

	// Volume
	traduzir("volumeDe");
	traduzir("volumePara");

	// Moeda
	traduzir("moedaDe");
	traduzir("moedaPara");
}

// Script do menu de idioma ------------------------------------------------------------------------------------------------------

document.getElementById("languageSwitcher").addEventListener("click", toggleLanguageMenu);

function toggleLanguageMenu() {
	const menu = document.getElementById("languageMenu");
	const switcher = document.getElementById("languageSwitcher"); 

	if (menu.style.display === "block") {
		menu.style.display = "none";
		return;
	}

	menu.style.display = "block";

	const rect = switcher.getBoundingClientRect();

	menu.style.top = window.scrollY + rect.top - 105 + "px";
	menu.style.left = window.scrollX + rect.left + "px";
}

document.addEventListener("click", function (event) {
	const switcher = document.getElementById("languageSwitcher");
	if (!switcher.contains(event.target)) {
		document.getElementById("languageMenu").style.display = "none";
	}
});

document.addEventListener("DOMContentLoaded", () => {
	const idiomaSalvo = localStorage.getItem("language") || "pt";
	carregarIdioma(idiomaSalvo);
});