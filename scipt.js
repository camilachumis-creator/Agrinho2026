const state = {

  food: 70,
  nature: 70,
  water: 70,
  health: 70,
  score: 0
};

const events = [

  {
    title: "Insetos na Plantação",

    text:
      "Os agricultores perceberam insetos atacando os alimentos da comunidade. Alguns sugerem usar agrotóxicos fortes.",

    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop",

    choices: [

      {
        text: "Usar controle biológico natural",

        effects: {
          food: 8,
          nature: 12,
          water: 8,
          health: 10,
          score: 15
        },

        message:
          "Métodos naturais protegeram a plantação sem contaminar o solo."
      },

      {
        text: "Aplicar agrotóxicos químicos",

        effects: {
          food: 12,
          nature: -22,
          water: -18,
          health: -20,
          score: 3
        },

        message:
          "Os agrotóxicos aumentaram a produção rapidamente, mas prejudicaram a água, o solo e a saúde das pessoas."
      }

    ]
  },

  {
    title: "Contaminação da Água",

    text:
      "Após o uso excessivo de venenos agrícolas, o rio da região começou a apresentar sinais de contaminação.",

    image:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1200&auto=format&fit=crop",

    choices: [

      {
        text: "Criar proteção ambiental e reduzir químicos",

        effects: {
          food: 5,
          nature: 15,
          water: 20,
          health: 14,
          score: 20
        },

        message:
          "A recuperação das margens ajudou a limpar o rio e proteger a população."
      },

      {
        text: "Continuar usando químicos intensivos",

        effects: {
          food: 10,
          nature: -20,
          water: -25,
          health: -18,
          score: -5
        },

        message:
          "Peixes morreram e a água ficou imprópria para consumo."
      }

    ]
  },

  {
    title: "Solo Enfraquecido",

    text:
      "O excesso de pesticidas começou a destruir os nutrientes naturais do solo.",

    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop",

    choices: [

      {
        text: "Investir em agricultura sustentável",

        effects: {
          food: 15,
          nature: 20,
          water: 12,
          health: 16,
          score: 25
        },

        message:
          "A rotação de culturas recuperou a fertilidade do solo."
      },

      {
        text: "Aplicar mais fertilizantes químicos",

        effects: {
          food: 8,
          nature: -18,
          water: -12,
          health: -15,
          score: -4
        },

        message:
          "O solo ficou cada vez mais dependente de produtos químicos."
      }

    ]
  },

  {
    title: "Saúde da Comunidade",

    text:
      "Moradores começaram a apresentar problemas de saúde relacionados à exposição aos agrotóxicos.",

    image:
      "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?q=80&w=1200&auto=format&fit=crop",

    choices: [

      {
        text: "Produzir alimentos orgânicos",

        effects: {
          food: 12,
          nature: 18,
          water: 12,
          health: 22,
          score: 30
        },

        message:
          "Os alimentos ficaram mais saudáveis e valorizados pela população."
      },

      {
        text: "Aumentar a produção com venenos",

        effects: {
          food: 18,
          nature: -20,
          water: -14,
          health: -25,
          score: 0
        },

        message:
          "A produção cresceu temporariamente, mas aumentaram os problemas de saúde."
      }

    ]
  }

];

const eventTitle = document.getElementById("eventTitle");
const eventText = document.getElementById("eventText");
const eventImage = document.getElementById("eventImage");

const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");

const foodValue = document.getElementById("foodValue");
const natureValue = document.getElementById("natureValue");
const waterValue = document.getElementById("waterValue");
const healthValue = document.getElementById("healthValue");
const scoreValue = document.getElementById("scoreValue");

const foodBar = document.getElementById("foodBar");
const natureBar = document.getElementById("natureBar");
const waterBar = document.getElementById("waterBar");
const healthBar = document.getElementById("healthBar");

const messageText = document.getElementById("messageText");

const restartBtn = document.getElementById("restartBtn");

let currentEvent = 0;

function limit(value) {
  return Math.max(0, Math.min(100, value));
}

function updateUI() {

  foodValue.textContent = state.food;
  natureValue.textContent = state.nature;
  waterValue.textContent = state.water;
  healthValue.textContent = state.health;
  scoreValue.textContent = state.score;

  foodBar.style.width = `${state.food}%`;
  natureBar.style.width = `${state.nature}%`;
  waterBar.style.width = `${state.water}%`;
  healthBar.style.width = `${state.health}%`;
}

function loadEvent() {

  if (
    state.food <= 0 ||
    state.nature <= 0 ||
    state.water <= 0 ||
    state.health <= 0
  ) {
    gameOver();
    return;
  }

  if (currentEvent >= events.length) {
    victory();
    return;
  }

  const event = events[currentEvent];

  eventTitle.textContent = event.title;
  eventText.textContent = event.text;

  eventImage.src = event.image;

  choice1.textContent = event.choices[0].text;
  choice2.textContent = event.choices[1].text;

  choice1.onclick = () => choose(0);
  choice2.onclick = () => choose(1);
}

function choose(index) {

  const event = events[currentEvent];

  const selected = event.choices[index];

  state.food =
    limit(state.food + selected.effects.food);

  state.nature =
    limit(state.nature + selected.effects.nature);

  state.water =
    limit(state.water + selected.effects.water);

  state.health =
    limit(state.health + selected.effects.health);

  state.score += selected.effects.score;

  messageText.textContent =
    selected.message;

  updateUI();

  currentEvent++;

  setTimeout(() => {
    loadEvent();
  }, 1200);
}

function gameOver() {

  eventTitle.textContent =
    "☠️ Crise Ambiental";

  eventText.textContent =
    "O uso excessivo de agrotóxicos destruiu o equilíbrio ambiental e prejudicou a saúde das pessoas.";

  eventImage.src =
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop";

  choice1.style.display = "none";
  choice2.style.display = "none";

  messageText.textContent =
    "Produzir alimentos exige proteger o meio ambiente.";
}

function victory() {

  eventTitle.textContent =
    "🏆 Agricultura Sustentável";

  eventText.textContent =
    "Sua comunidade mostrou que é possível produzir alimentos saudáveis sem destruir a natureza.";

  eventImage.src =
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop";

  choice1.style.display = "none";
  choice2.style.display = "none";

  messageText.textContent =
    `Pontuação Final: ${state.score}`;
}

restartBtn.addEventListener("click", () => {

  state.food = 70;
  state.nature = 70;
  state.water = 70;
  state.health = 70;
  state.score = 0;

  currentEvent = 0;

  choice1.style.display = "block";
  choice2.style.display = "block";

  updateUI();

  loadEvent();

  messageText.textContent =
    "Novo jogo iniciado.";
});

updateUI();
loadEvent();