const traducoes = {
	pt: {
		siteTitle: "Conversia",
		sidebar: {
			temperatura: "Temperatura",
			tempo: "Tempo",
			distancia: "Distância",
			area: "Área",
			peso: "Peso",
			volume: "Volume",
			armazenamento: "Armazenamento",
			pressao: "Pressão",
			frequencia: "Frequência",
			velocidade: "Velocidade",
			angulo: "Ângulo",
			taxa: "Taxa",
			som: "Som",
			energia: "Energia",
			moeda: "Moeda",
			idioma: "Idioma",
			tema: "Tema"
		},
		secoes: {
			temperatura: "🌡️ Temperatura",
			tempo: "⏱️ Tempo",
			distancia: "📏 Distância",
			area: "📐 Área",
			peso: "⚖️ Peso",
			volume: "🧴 Volume",
			armazenamento: "💾 Armazenamento",
			pressao: "🧪 Pressão",
			frequencia: "📶 Frequência",
			velocidade: "🏎️ Velocidade",
			angulo: "🧭 Ângulo",
			taxa: "📊 Taxa",
			som: "🔊 Som",
			energia: "⚡ Energia",
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
			area: "Area",
			peso: "Weight",
			volume: "Volume",
			armazenamento: "Storage",
			pressao: "Pressure",
			frequencia: "Frequency",
			velocidade: "Speed",
			angulo: "Angle",
			taxa: "Rate",
			som: "Sound",
			energia: "Energy",
			moeda: "Currency",
			idioma: "Language",
			tema: "Theme"
		},
		secoes: {
			temperatura: "🌡️ Temperature",
			tempo: "⏱️ Time",
			distancia: "📏 Distance",
			area: "📐 Area",
			peso: "⚖️ Weight",
			volume: "🧴 Volume",
			armazenamento: "💾 Storage",
			pressao: "🧪 Pressure",
			frequencia: "📶 Frequency",
			velocidade: "🏎️ Speed",
			angulo: "🧭 Angle",
			taxa: "📊 Rate",
			som: "🔊 Sound",
			energia: "⚡ Energy",
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
	sidebarItems[3].innerText = t.sidebar.area;
	sidebarItems[4].innerText = t.sidebar.peso;
	sidebarItems[5].innerText = t.sidebar.volume;
	sidebarItems[6].innerText = t.sidebar.armazenamento;
	sidebarItems[7].innerText = t.sidebar.pressao;
	sidebarItems[8].innerText = t.sidebar.frequencia;
	sidebarItems[9].innerText = t.sidebar.velocidade;
	sidebarItems[10].innerText = t.sidebar.angulo;
	sidebarItems[11].innerText = t.sidebar.taxa;
	sidebarItems[12].innerText = t.sidebar.som;
	sidebarItems[13].innerText = t.sidebar.energia;
	sidebarItems[14].innerText = t.sidebar.moeda;

	// Texto do botão de idioma
	document.querySelector("#languageSwitcher p").innerText = t.sidebar.idioma;

	// Texto do botão Tema
	document.querySelector(".darkmodetext").innerText = t.sidebar.tema;

	// Títulos das seções
	document.querySelector("#temperatura h2").innerText = t.secoes.temperatura;
	document.querySelector("#tempo h2").innerText = t.secoes.tempo;
	document.querySelector("#distancia h2").innerText = t.secoes.distancia;
	document.querySelector("#area h2").innerText = t.secoes.area;
	document.querySelector("#peso h2").innerText = t.secoes.peso;
	document.querySelector("#volume h2").innerText = t.secoes.volume;
	document.querySelector("#armazenamento h2").innerText = t.secoes.armazenamento;
	document.querySelector("#pressao h2").innerText = t.secoes.pressao;
	document.querySelector("#frequencia h2").innerText = t.secoes.frequencia;
	document.querySelector("#velocidade h2").innerText = t.secoes.velocidade;
	document.querySelector("#angulo h2").innerText = t.secoes.angulo;
	document.querySelector("#taxa h2").innerText = t.secoes.taxa;
	document.querySelector("#som h2").innerText = t.secoes.som;
	document.querySelector("#energia h2").innerText = t.secoes.energia;
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
	document.getElementById("areaResultado").innerText = t.mensagens.resultado;
	document.getElementById("pesoResultado").innerText = t.mensagens.resultado;
	document.getElementById("volumeResultado").innerText = t.mensagens.resultado;
	document.getElementById("armazenamentoResultado").innerText = t.mensagens.resultado;
	document.getElementById("pressaoResultado").innerText = t.mensagens.resultado;
	document.getElementById("frequenciaResultado").innerText = t.mensagens.resultado;
	document.getElementById("velocidadeResultado").innerText = t.mensagens.resultado;
	document.getElementById("anguloResultado").innerText = t.mensagens.resultado;
	document.getElementById("taxaResultado").innerText = t.mensagens.resultado;
	document.getElementById("somResultado").innerText = t.mensagens.resultado;
	document.getElementById("energiaResultado").innerText = t.mensagens.resultado;
	document.getElementById("moedaResultado").innerText = t.mensagens.resultado;

	// Traduz os selects
	traduzirSelects(lang);
}

function traduzirSelects(lang) {
	const labels = {
		pt: {
			// Temperatura
			c: "Celsius",
			f: "Fahrenheit",
			k: "Kelvin",

			// Tempo
			h: "Horas",
			min: "Minutos",
			s: "Segundos",
			ms: "Milissegundos",

			// Distância
			m: "Metros",
			ft: "Pés",
			km: "Quilômetros",
			mi: "Milhas",

			// Área
			m2: "Metros quadrados",
			km2: "Quilômetros quadrados",
			ft2: "Pés quadrados",
			ac: "Acres",
			ha: "Hectares",

			// Peso
			mg: "Miligramas",
			g: "Gramas",
			kg: "Quilos",
			lb: "Libras",
			oz: "Onças",
			ton: "Toneladas",

			// Volume
			ml: "Mililitros",
			l: "Litros",
			gal: "Galões",
			m3: "Metros cúbicos",

			// Armazenamento
			bit: "Bits",
			B: "Bytes",
			KB: "Kilobytes",
			MB: "Megabytes",
			GB: "Gigabytes",
			TB: "Terabytes",

			// Pressão
			Pa: "Pascal",
			bar: "Bar",
			atm: "Atm",
			psi: "Psi",
			mmHg: "Milímetros de mercúrio",

			// Frequência
			Hz: "Hertz",
			kHz: "Quilohertz",
			MHz: "Megahertz",
			GHz: "Gigahertz",

			// Velocidade
			"km/h": "Quilômetros por hora",
			"m/s": "Metros por segundo",
			mph: "Milhas por hora",
			knots: "Nós",

			// Ângulo
			graus: "Graus",
			radianos: "Radianos",
			grads: "Grads",

			// Taxa
			porcentagem: "Porcentagem",
			fracao: "Fração",
			proporcao: "Proporção",

			// Som
			dB: "Decibéis",
			sone: "Sones",
			phon: "Fons",

			// Energia
			J: "Joule",
			kJ: "Quilojoule",
			cal: "Caloria",
			kcal: "Quilocaloria",
			Wh: "Watt-hora",
			kWh: "Quilowatt-hora",
			eV: "Eletronvolt",

			// Moedas
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
			// Temperature
			c: "Celsius",
			f: "Fahrenheit",
			k: "Kelvin",

			// Time
			h: "Hours",
			min: "Minutes",
			s: "Seconds",
			ms: "Milliseconds",

			// Distance
			m: "Meters",
			ft: "Feet",
			km: "Kilometers",
			mi: "Miles",

			// Area
			m2: "Square meters",
			km2: "Square kilometers",
			ft2: "Square feet",
			ac: "Acres",
			ha: "Hectares",

			// Weight
			mg: "Milligrams",
			g: "Grams",
			kg: "Kilograms",
			lb: "Pounds",
			oz: "Ounces",
			ton: "Tons",

			// Volume
			ml: "Milliliters",
			l: "Liters",
			gal: "Gallons",
			m3: "Cubic meters",

			// Storage
			bit: "Bits",
			B: "Bytes",
			KB: "Kilobytes",
			MB: "Megabytes",
			GB: "Gigabytes",
			TB: "Terabytes",

			// Pressure
			Pa: "Pascal",
			bar: "Bar",
			atm: "Atm",
			psi: "Psi",
			mmHg: "Millimeters of mercury",

			// Frequency
			Hz: "Hertz",
			kHz: "Kilohertz",
			MHz: "Megahertz",
			GHz: "Gigahertz",

			// Speed
			"km/h": "Kilometers per hour",
			"m/s": "Meters per second",
			mph: "Miles per hour",
			knots: "Knots",

			// Angle
			graus: "Degrees",
			radianos: "Radians",
			grads: "Grads",

			// Rate
			porcentagem: "Percentage",
			fracao: "Fraction",
			proporcao: "Ratio",

			// Sound
			dB: "Decibels",
			sone: "Sones",
			phon: "Phons",

			// Energy
			J: "Joule",
			kJ: "Kilojoule",
			cal: "Calorie",
			kcal: "Kilocalorie",
			Wh: "Watt-hour",
			kWh: "Kilowatt-hour",
			eV: "Electronvolt",

			// Currencies
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

	// Área
	traduzir("areaDe");
	traduzir("areaPara");

	// Peso
	traduzir("pesoDe");
	traduzir("pesoPara");
	
	// Volume
	traduzir("volumeDe");
	traduzir("volumePara");

	// Armazenamento
	traduzir("armazenamentoDe");
	traduzir("armazenamentoPara");

	// Pressão
	traduzir("pressaoDe");
	traduzir("pressaoPara");

	// Frequência
	traduzir("frequenciaDe");
	traduzir("frequenciaPara");

	// Velocidade
	traduzir("velocidadeDe");
	traduzir("velocidadePara");

	// Ângulo
	traduzir("anguloDe");
	traduzir("anguloPara");

	// Taxa
	traduzir("taxaDe");
	traduzir("taxaPara");

	// Som
	traduzir("somDe");
	traduzir("somPara");

	// Energia
	traduzir("energiaDe");
	traduzir("energiaPara");
	
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