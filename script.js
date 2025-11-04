// Dados das atividades (inserção de dados)
const activities = [
   
 {
  "title": "questão 1 - funções quadraticas",
  "description": "vamos lançar uma bola verticalmente para cima. sua trajetória e descrita pela função quadratica: f(x) = -5x²+10, onde x é o tempo em segundos e f(x) é a altura em metros.",
  "question": "responda: qual a altura máxima atingida pela bola? em quantos segundos a bola atinge a altura maxima?",
  "date": "16-09-2025",
  "type": "Exercício"
},
{
  "title": "questão 2 - funções quadraticas",
  "description": "Uma fábrica de garrafas percebeu que o lucro , em milhares de reais, ao produzir  centenas de garrafas, pode ser descrito pela função: L(x) = -2x^2 + 40x - 50",
  "question": "responda: Qual o valor máximo do lucro obtido?",
  "date": "16-09-2025",
  "type": "Exercício"
},
{
  "title": "questão 3 - funções quadraticas",
  "description": "Uma bola de basquete é arremessada e sua altura , em metros, em função da distância horizontal , em metros, pode ser descrita por: h(x) = -0,5x^2 + 3x + 2",
  "question": "responda: Em que distância do lançamento a bola atinge o solo novamente?",
  "date": "16-09-2025",
  "type": "Exercício"
},
{
  "title": "questão 4 - funções quadraticas",
  "description": "Uma padaria descobriu que o lucro ao vender pães é dado pela função: L(x)=-3x² + 18x – 27",
  "question": "responda: Qual o número de unidades que deve ser vendido para maximizar o lucro?",
  "date": "16-09-2025",
  "type": "Exercício"
},
{
  "title": "questão 5 - funções quadraticas",
  "description": "Maria é uma artesã que vende pulseiras na escola técnica GP em horário de almoço ela descobriu que o lucro mensal (L) de suas vendas é dado pela função: L(x)=-2x² + 12x-10",
  "question": "Responda: Quantas pulseiras Maria terá que vender para obter o lucro máximo?",
  "date": "16-09-2025",
  "type": "Exercício"
},

// === 2 QUESTÕES POR ALUNO (sem alterar nada acima) ===

{
  "title": "questão 6 - Walter",
  "description": "Walter lançou um foguete de garrafa e a altura em metros é dada por h(t) = -5t² + 20t + 1, onde t é o tempo em segundos.",
  "question": "responda: Qual a altura máxima que o foguete atinge?",
  "date": "16-09-2025",
  "type": "Exercício"
},
{
  "title": "questão 7 - Walter",
  "description": "Walter vende brigadeiros na feira. O lucro L(x) em reais ao vender x dezenas é L(x) = -3x² + 30x - 48.",
  "question": "responda: Quantas dezenas Walter deve vender para maximizar o lucro?",
  "date": "16-09-2025",
  "type": "Exercício"
},

{
  "title": "questão 8 - Francisco",
  "description": "Francisco arremessou uma pedra e sua altura é dada por h(x) = -4x² + 16x + 3, com x em segundos.",
  "question": "responda: Em quantos segundos a pedra atinge a altura máxima?",
  "date": "16-09-2025",
  "type": "Exercício"
},
{
  "title": "questão 9 - Francisco",
  "description": "Francisco produz artesanato. O lucro L(x) = -x² + 14x - 25 ao vender x itens por semana.",
  "question": "responda: Qual o lucro máximo que Francisco pode obter?",
  "date": "16-09-2025",
  "type": "Exercício"
},

{
  "title": "questão 10 - Júlio",
  "description": "Júlio lançou uma bola ao alto com h(t) = -5t² + 15t + 2.",
  "question": "responda: Qual a altura máxima atingida pela bola?",
  "date": "16-09-2025",
  "type": "Exercício"
},
{
  "title": "questão 11 - Júlio",
  "description": "Júlio vende doces na escola. Lucro L(x) = -2x² + 24x - 40, onde x é o número de caixas vendidas.",
  "question": "responda: Quantas caixas maximizam o lucro?",
  "date": "16-09-2025",
  "type": "Exercício"
},

{
  "title": "questão 12 - Abacaxi",
  "description": "Abacaxi plantou um pé de feijão mágico. A altura h(t) = -3t² + 18t + 5 em metros, t em dias.",
  "question": "responda: Qual a altura máxima do pé de feijão?",
  "date": "16-09-2025",
  "type": "Exercício"
},
{
  "title": "questão 13 - Abacaxi",
  "description": "Abacaxi vende suco. Lucro L(x) = -4x² + 40x - 75, x em litros vendidos por dia.",
  "question": "responda: Quantos litros maximizam o lucro?",
  "date": "16-09-2025",
  "type": "Exercício"
},

{
  "title": "questão 14 - Jadson",
  "description": "Jadson chutou uma bola com trajetória h(x) = -0,4x² + 4x + 1,5 (distância em metros).",
  "question": "responda: Até que distância a bola chega antes de tocar o chão?",
  "date": "16-09-2025",
  "type": "Exercício"
},
{
  "title": "questão 15 - Jadson",
  "description": "Jadson faz bolos. Lucro L(x) = -5x² + 50x - 80 ao vender x bolos por semana.",
  "question": "responda: Qual o lucro máximo?",
  "date": "16-09-2025",
  "type": "Exercício"
},

{
  "title": "questão 16 - Matheus José",
  "description": "Matheus José lançou um drone com h(t) = -6t² + 24t + 4.",
  "question": "responda: Qual a altura máxima do drone?",
  "date": "16-09-2025",
  "type": "Exercício"
},
{
  "title": "questão 17 - Matheus José",
  "description": "Matheus José vende camisetas. L(x) = -2x² + 28x - 72, x em dezenas.",
  "question": "responda: Quantas dezenas maximizam o lucro?",
  "date": "16-09-2025",
  "type": "Exercício"
},

{
  "title": "questão 18 - Kauã Alexandre",
  "description": "Kauã Alexandre arremessou um papelão com h(t) = -5t² + 10t + 1.",
  "question": "responda: Em quantos segundos atinge a altura máxima?",
  "date": "16-09-2025",
  "type": "Exercício"
},
{
  "title": "questão 19 - Kauã Alexandre",
  "description": "Kauã Alexandre vende pipoca. L(x) = -3x² + 36x - 81, x em sacos.",
  "question": "responda: Qual o lucro máximo?",
  "date": "16-09-2025",
  "type": "Exercício"
},

{
  "title": "questão 20 - Márcio",
  "description": "Márcio lançou uma flecha com h(t) = -4t² + 20t + 3.",
  "question": "responda: Qual a altura máxima da flecha?",
  "date": "16-09-2025",
  "type": "Exercício"
},
{
  "title": "questão 21 - Márcio",
  "description": "Márcio vende sanduíches. L(x) = -x² + 16x - 40, x em unidades.",
  "question": "responda: Quantos sanduíches maximizam o lucro?",
  "date": "16-09-2025",
  "type": "Exercício"
},

{
  "title": "questão 22 - Matheus Rosa",
  "description": "Matheus Rosa lançou um avião de papel com h(t) = -3t² + 12t + 1.",
  "question": "responda: Qual a altura máxima atingida?",
  "date": "16-09-2025",
  "type": "Exercício"
},
{
  "title": "questão 23 - Matheus Rosa",
  "description": "Matheus Rosa vende doces. L(x) = -2x² + 20x - 32, x em caixas.",
  "question": "responda: Qual o lucro máximo?",
  "date": "16-09-2025",
  "type": "Exercício"
},

{
  "title": "questão 24 - Maísa",
  "description": "Maísa lançou uma bola com h(t) = -5t² + 25t + 2.",
  "question": "responda: Em quantos segundos a bola atinge a altura máxima?",
  "date": "16-09-2025",
  "type": "Exercício"
},
{
  "title": "questão 25 - Maísa",
  "description": "Maísa vende bijuterias. L(x) = -4x² + 40x - 76, x em conjuntos.",
  "question": "responda: Quantos conjuntos maximizam o lucro?",
  "date": "16-09-2025",
  "type": "Exercício"
},

{
  "title": "questão 26 - Marina",
  "description": "Marina arremessou uma bola de vôlei com h(x) = -0,6x² + 6x + 1,8.",
  "question": "responda: Em que distância a bola toca o chão novamente?",
  "date": "16-09-2025",
  "type": "Exercício"
},
{
  "title": "questão 27 - Marina",
  "description": "Marina vende bolos. L(x) = -3x² + 33x - 72, x em bolos.",
  "question": "responda: Qual o lucro máximo?",
  "date": "16-09-2025",
  "type": "Exercício"
},

{
  "title": "questão 28 - Caio",
  "description": "Caio lançou um foguete com h(t) = -5t² + 30t + 5.",
  "question": "responda: Qual a altura máxima do foguete?",
  "date": "16-09-2025",
  "type": "Exercício"
},
{
  "title": "questão 29 - Caio",
  "description": "Caio vende limonada. L(x) = -2x² + 24x - 54, x em copos.",
  "question": "responda: Quantos copos maximizam o lucro?",
  "date": "16-09-2025",
  "type": "Exercício"
},

{
  "title": "questão 30 - Davi Alexsandro",
  "description": "Davi Alexsandro chutou uma bola com h(x) = -0,5x² + 5x + 1,5.",
  "question": "responda: Até que distância a bola chega?",
  "date": "16-09-2025",
  "type": "Exercício"
},
{
  "title": "questão 31 - Davi Alexsandro",
  "description": "Davi Alexsandro vende artesanato. L(x) = -3x² + 30x - 63.",
  "question": "responda: Qual o lucro máximo?",
  "date": "16-09-2025",
  "type": "Exercício"
},

{
  "title": "questão 32 - Levi Henrique",
  "description": "Levi Henrique lançou um drone com h(t) = -4t² + 24t + 2.",
  "question": "responda: Qual a altura máxima?",
  "date": "16-09-2025",
  "type": "Exercício"
},
{
  "title": "questão 33 - Levi Henrique",
  "description": "Levi Henrique vende brownies. L(x) = -2x² + 26x - 68, x em dúzias.",
  "question": "responda: Quantas dúzias maximizam o lucro?",
  "date": "16-09-2025",
  "type": "Exercício"
},

{
  "title": "questão 34 - Albert",
  "description": "Albert lançou uma bola com h(t) = -6t² + 18t + 3.",
  "question": "responda: Em quantos segundos atinge a altura máxima?",
  "date": "16-09-2025",
  "type": "Exercício"
},
{
  "title": "questão 35 - Albert",
  "description": "Albert vende camisetas. L(x) = -x² + 15x - 36.",
  "question": "responda: Qual o lucro máximo?",
  "date": "16-09-2025",
  "type": "Exercício"
},

{
  "title": "questão 36 - Davi Solto",
  "description": "Davi Solto arremessou um frisbee com h(x) = -0,3x² + 4,5x + 1,2.",
  "question": "responda: Até que distância o frisbee voa?",
  "date": "16-09-2025",
  "type": "Exercício"
},
{
  "title": "questão 37 - Davi Solto",
  "description": "Davi Solto vende suco. L(x) = -5x² + 50x - 95, x em garrafas.",
  "question": "responda: Quantas garrafas maximizam o lucro?",
  "date": "16-09-2025",
  "type": "Exercício"
},

{
  "title": "questão 38 - Ana Vitória",
  "description": "Ana Vitória lançou uma bola com h(t) = -5t² + 20t + 1,5.",
  "question": "responda: Qual a altura máxima?",
  "date": "16-09-2025",
  "type": "Exercício"
},
{
  "title": "questão 39 - Ana Vitória",
  "description": "Ana Vitória vende pulseiras. L(x) = -2x² + 22x - 50, x em unidades.",
  "question": "responda: Quantas pulseiras maximizam o lucro?",
  "date": "16-09-2025",
  "type": "Exercício"
},

{
  "title": "questão 40 - Kauane",
  "description": "Kauane lançou um papelão com h(t) = -4t² + 16t + 2.",
  "question": "responda: Qual a altura máxima atingida?",
  "date": "16-09-2025",
  "type": "Exercício"
},
{
  "title": "questão 41 - Kauane",
  "description": "Kauane vende doces. L(x) = -3x² + 30x - 75.",
  "question": "responda: Qual o lucro máximo?",
  "date": "16-09-2025",
  "type": "Exercício"
},

{
  "title": "questão 42 - Carlos Eduardo",
  "description": "Carlos Eduardo chutou uma bola com h(x) = -0,4x² + 4,8x + 1,6.",
  "question": "responda: Em que distância a bola toca o chão?",
  "date": "16-09-2025",
  "type": "Exercício"
},
{
  "title": "questão 43 - Carlos Eduardo",
  "description": "Carlos Eduardo vende sanduíches. L(x) = -2x² + 28x - 80.",
  "question": "responda: Quantos sanduíches maximizam o lucro?",
  "date": "16-09-2025",
  "type": "Exercício"
},

{
  "title": "questão 44 - Anthony",
  "description": "Anthony lançou um foguete com h(t) = -5t² + 25t + 3.",
  "question": "responda: Qual a altura máxima do foguete?",
  "date": "16-09-2025",
  "type": "Exercício"
},
{
  "title": "questão 45 - Anthony",
  "description": "Anthony vende bolos. L(x) = -4x² + 44x - 100.",
  "question": "responda: Qual o lucro máximo?",
  "date": "16-09-2025",
  "type": "Exercício"
},

{
  "title": "questão 46 - Daniel Ferreira",
  "description": "Daniel Ferreira arremessou uma bola com h(t) = -6t² + 24t + 2.",
  "question": "responda: Em quantos segundos atinge a altura máxima?",
  "date": "16-09-2025",
  "type": "Exercício"
},
{
  "title": "questão 47 - Daniel Ferreira",
  "description": "Daniel Ferreira vende artesanato. L(x) = -3x² + 36x - 99.",
  "question": "responda: Quantas unidades maximizam o lucro?",
  "date": "16-09-2025",
  "type": "Exercício"
},

{
  "title": "questão 48 - Abinadab",
  "description": "Abinadab lançou uma flecha com h(t) = -5t² + 30t + 4.",
  "question": "responda: Qual a altura máxima da flecha?",
  "date": "16-09-2025",
  "type": "Exercício"
},
{
  "title": "questão 49 - Abinadab",
  "description": "Abinadab vende doces. L(x) = -2x² + 26x - 72, x em caixas.",
  "question": "responda: Qual o lucro máximo que Abinadab pode obter?",
  "date": "16-09-2025",
  "type": "Exercício"
}
];

// Função para converter data no formato DD-MM-YYYY para objeto Date
function parseBrazilianDate(dateString) {
  const [day, month, year] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
}

// Função para renderizar as atividades
function renderActivities(filterType = 'all', sortOrder = 'newest') {
  const activityList = document.getElementById('activityList');
  activityList.innerHTML = '';

  // Filtrar por tipo
  let filteredActivities = filterType === 'all' 
    ? activities 
    : activities.filter(activity => activity.type === filterType);

  // Ordenar por data
  filteredActivities.sort((a, b) => {
    const dateA = parseBrazilianDate(a.date);
    const dateB = parseBrazilianDate(b.date);
    return sortOrder === 'newest' 
      ? dateB - dateA 
      : dateA - dateB;
  });

  // Renderizar cada atividade
  filteredActivities.forEach(activity => {
    const activityCard = document.createElement('div');
    activityCard.className = 'bg-white p-4 rounded shadow activity-card';
    activityCard.innerHTML = `
      <h2 class="text-xl font-semibold">${activity.title}</h2>
      <p class="text-gray-600">${activity.description}</p>
      <p class="text-gray-700 font-medium mt-2">Pergunta: ${activity.question}</p>
      <p class="text-sm text-gray-500">Data: ${activity.date}</p>
      <p class="text-sm text-gray-500">Tipo: ${activity.type}</p>
    `;
    activityList.appendChild(activityCard);
  });
}

// Inicializar a lista
renderActivities();

document.getElementById('typeFilter').addEventListener('change', (e) => {
  renderActivities(e.target.value, document.getElementById('dateFilter').value);
});

document.getElementById('dateFilter').addEventListener('change', (e) => {
  renderActivities(document.getElementById('typeFilter').value, e.target.value);
});

