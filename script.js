// Dados das atividades (inserção de dados)
const activities = [
  {
    title: "questão 1 - funções quadraticas",
    description: "vamos lançar uma bola verticalmente para cima. sua trajetória e descrita pela função quadratica: f(x) = -5x²+10, onde x é o tempo em segundos e f(x) é a altura em metros.",
    question: "responda: qual a altura máxima atingida pela bola? em quantos segundos a bola atinge a altura maxima?",
    date: "16-09-2025",
    type: "Exercício"
  },
  {
    title: "questão 2 - funções quadraticas",
    description: "Uma fábrica de garrafas percebeu que o lucro , em milhares de reais, ao produzir  centenas de garrafas, pode ser descrito pela função: L(x) = -2x^2 + 40x - 50",
    question: "responda: Qual o valor máximo do lucro obtido?",
    date: "16-09-2025",
    type: "Exercício"
  },
  {
    title: "questão 3 - funções quadraticas",
    description: "Uma bola de basquete é arremessada e sua altura , em metros, em função da distância horizontal , em metros, pode ser descrita por: h(x) = -0,5x^2 + 3x + 2",
    question: "responda: Em que distância do lançamento a bola atinge o solo novamente?",
    date: "16-09-2025",
    type: "Exercício"
  },
  {
    title: " questão 4 - funções quadraticas",
    description: "Uma padaria descobriu que o lucro ao vender pães é dado pela função: L(x)=-3x² + 18x – 27",
    question: "responda: Qual o número de unidades que deve ser vendido para maximizar o lucro?",
    date: "16-09-2025",
    type: "Exercício"
  },
{
  title: "questão 5 - funções quadraticas",
  description: "Maria é uma artesã que vende pulseiras na escola técnica GP em horário de almoço ela descobriu que o lucro mensal (L) de suas vendas é dado pela função: L(x)=-2x² + 12x-10",
  question: "Responda: Quantas pulseiras Maria terá que vender para obter o lucro máximo?",
  date: "16-09-2025",
  type: "Exercício"
},
{
title: "questão 6 - funções quadraticas",
description: "Um grupo de amigos do 1°ADS decidiu organizar um churrasco no parque 13 de Maio. Eles querem cercar uma área retangular para garantir que os outros visitantes não entrem no local. Eles têm 20 metros de cerca disponivel. Se X é o comprimento da área retangular e Y é a largura, e sabendo que a área A é dada pela função A(x) = -x²+10x",
question: "Responda: Qual é o comprimento que maximiza a área?",
date: "16-09-2025",
type: "Exercício"
},
{
  title: "questão 7 - funções quadraticas",
  description: "Uma fábrica de sucos vende garrafas de 1 litro, e o lucro da empresa é dado pela função L(x)= -2x²+20x-24",
  question: "Responda: Qual desses preços gera o maior lucro para a empresa?",
  date: "16-09-2025",
  type: "Exercício"
},
{
  title: " questão 8 - funções quadraticas",
  description: "Uma loja de camisetas descobriu que seu lucro pode ser representado pela função L(x)= -x²+12x-32",
  question: "Responda: Qual o preço ideal para maximizar o lucro?",
  date: "16-09-2025",
  type: "Exercício"
},
{
  title: " questão 9 - funções quadraticas",
  description: "Um produtor deseja construir um cercado cujo área, em metros quadrados, é dada pela função quadratica: A(x)= -x²+20x",
  question:"Responda: Qual é o Vertice da parabola?",
  date: "16-09-2025",
  type: "Exercício"
},
{
  title: "questão 10 - funções quadraticas",
  description: "A altura, em metros, de um projetil lançado verticalmente é representada pela função quadratica: h(t)= -5t²+20t",
  question: "Responda: Qual são os zeros da função?",
  date: "16-09-2025",
  type: "Exercício"
},
{
  title: "questão 11 - funções quadraticas",
  description: "A função é dada por: f(x)= x²-4x+3",
  question: "Responda: Determine o vertice da parabola",
  date: "16-09-2025",
  type: "Exercício"
},
{
  title: "questão 12 - funções quadraticas",
  description: "Um foguete é lançado verticalmente, e sua altura em metros após segundos é dada por: h(t)= -5t²+20t+15",
  question: "Responda: Qual é o tempo em que o foguete atinge a altura maxima?",
  date: "16-09-2025",
  type: "Exercício"
},
{
  title: "questão 13 - funções quadraticas",
  description:"Em uma fábrica de camisetas personalizadas, o lucro diário L(x) em reais é modelado pela função quadratica: L(x)= -2x²+120x-500",
  question:"Responda: Qual lote de camisetas fará a fabrica alcançar o lucro maximo e qual é esse lucro máximo alcançado nesse lote",
  date:"16-09-2025",
  type:"Exercício"
},
{
  title:"questão 14 - funções quadraticas",
  description:"Uma startup de eletronicos em uma zona industrial enfrenta desafios com custos de produção que incluem materias-primas, mão de obra e manuntenção de maquinas, criando um equilibrio onde produzir demais aumenta despesas desnecessarias. O custo total C(q) em dolares é representado pela função quadratica: C(q)= 0.5q²-30q+400",
  question:"Responda: Qual a quantidade de celulares minimiza o custo total e qual é o custo minimo alcançado nessa quantidade?",
  date:"16-09-2025",
  type:"Exercício"
},
{
  title:"questão 15 - funções quadraticas",
  description:"Em homenagem à 'Pimentinha', um grupo de jovens artistas organizou o festival 'Elis Vive', que aconteceria em diversas cidades, com releituras de musicas marcantes como 'O Bebado e a Equilibrista' e 'Como nossos Pais', No inicio, as vendas foram lentas, mas, à medida de video das apresentações começaram a viralizar nas redes sociais e o interesse aumentou. A produção percebeu que essa variação seguia um padrão e representou o número de ingressos vendidos pela função: f(x)= -2x²+40x+100",
  question:"Responda: Qual foi o valor máximo de ingressos vendidos? (yv)",
  date:"16-09-2025",
  type:"Exercício"
},
{
  title:"questão 16 - funções quadraticas",
  description:"Tim Maia, teve uma de suas músicas mais conhecidas, 'Azul da Cor do Mar', relançada em uma versão digital remasterizada. A gravadora, curiosa para entender o comportamento das reproduções, acompanhou semanalmente o número de acessos nas plataformas de streaming. A canção ganhou destaque nas playlists e teve um crescimento acelerado de ouvintes. Depois de certo tempo, o número de reproduções começou a diminuir, já que novos lançamentos dominaram as paradas. Essa variação fou representada pela função: P(x) -x²+12x+20",
  question:"Responda: Qual o valor de xv, indicando em qual semana a música atingiu o pico de popularidade",
  date:"16-09-2025",
  type:"Exercício"
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

