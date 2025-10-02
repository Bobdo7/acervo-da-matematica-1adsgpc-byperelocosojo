// Dados das atividades (inserção de dados)
const activities = [
  {
    title: "Atividade 1 - funções quadraticas",
    description: "vamos lançar uma bola verticalmente para cima. sua trajetória e descrita pela função quadratica: f(x) = -5x²+10, onde x é o tempo em segundos e f(x) é a altura em metros.",
    question: "responda: qual a altura máxima atingida pela bola? em quantos segundos a bola atinge a altura maxima?",
    date: "16-09-2025",
    type: "Exercício"
  },
  {
    title: "convem ao meu amigo dentinho colocar o resto das questões muahahah",
  }
];

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
    return sortOrder === 'newest' 
      ? new Date(b.date) - new Date(a.date) 
      : new Date(a.date) - new Date(b.date);
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