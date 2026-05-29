const events = [

  {
    title: "Insetos na plantação",

    text:
    "Os agricultores perceberam insetos atacando os alimentos.",

    image:
    "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop",

    option1: {
      text: "Usar controle biológico",

      food: 8,
      nature: 10,
      water: 8,
      health: 10,

      message:
      "Métodos naturais protegeram os alimentos sem contaminar o ambiente."
    },

    option2: {
      text: "Usar agrotóxicos químicos",

      food: 12,
      nature: -20,
      water: -18,
      health: -22,

      message:
      "Os agrotóxicos aumentaram a produção temporariamente, mas prejudicaram solo, água e saúde."
    }
  },

  {
    title: "Contaminação do rio",

    text:
    "Resíduos químicos começaram a chegar no rio da comunidade.",

    image:
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1200&auto=format&fit=crop",

    option1: {
      text: "Criar proteção ambiental",

      food: 5,
      nature: 15,
      water: 18,
      health: 12,

      message:
      "A vegetação protegeu o rio e melhorou a qualidade da água."
    },

    option2: {
      text: "Ignorar o problema",

      food: 8,
      nature: -20,
      water: -25,
      health: -18,

      message:
      "Peixes morreram e a água ficou contaminada."
    }
  },

  {
    title: "Solo enfraquecido",

    text:
    "O excesso de pesticidas está destruindo os nutrientes do solo.",

    image:
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop",

    option1: {
      text: "Investir em agricultura sustentável",

      food: 15,
      nature: 18,
      water: 10,
      health: 15,

      message:
      "A rotação de culturas recuperou a fertilidade do solo."
    },

    option2: {
      text: "Aplicar mais químicos",

      food: 8,
      nature: -18,
      water: -12,
      health: -16,

      message:
      "O solo ficou dependente de produtos químicos."
    }
  }

];

let currentEvent = 0;

let food = 70;
let nature = 70;
let water = 70;
let health = 70;

const title = document.getElementById("title");
const text = document.getElementById("text");
const image = document.getElementById("gameImage");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

const foodText = document.getElementById("food");
const natureText = document.getElementById("nature");
const waterText = document.getElementById("water");
const healthText = document.getElementById("health");

const message = document.getElementById("message");

const restart = document.getElementById("restart");

function updateStats(){

  foodText.textContent = food;
  natureText.textContent = nature;
  waterText.textContent = water;
  healthText.textContent = health;
}

function loadEvent(){

  if(currentEvent >= events.length){

    finishGame();
    return;
  }

  const event = events[currentEvent];

  title.textContent = event.title;

  text.textContent = event.text;

  image.src = event.image;

  btn1.textContent = event.option1.text;

  btn2.textContent = event.option2.text;

  btn1.onclick = function(){
    choose(event.option1);
  };

  btn2.onclick = function(){
    choose(event.option2);
  };
}

function choose(option){

  food += option.food;
  nature += option.nature;
  water += option.water;
  health += option.health;

  if(food > 100) food = 100;
  if(nature > 100) nature = 100;
  if(water > 100) water = 100;
  if(health > 100) health = 100;

  if(food < 0) food = 0;
  if(nature < 0) nature = 0;
  if(water < 0) water = 0;
  if(health < 0) health = 0;

  updateStats();

  message.textContent = option.message;

  currentEvent++;

  setTimeout(function(){

    loadEvent();

  },1000);
}

function finishGame(){

  title.textContent =
  "🏆 Agricultura Sustentável";

  text.textContent =
  "Você aprendeu que o uso excessivo de agrotóxicos prejudica o meio ambiente e a saúde humana.";

  image.src =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop";

  btn1.style.display = "none";
  btn2.style.display = "none";

  message.textContent =
  "Produzir alimentos exige equilíbrio com a natureza.";
}

restart.onclick = function(){

  currentEvent = 0;

  food = 70;
  nature = 70;
  water = 70;
  health = 70;

  btn1.style.display = "block";
  btn2.style.display = "block";

  updateStats();

  loadEvent();

  message.textContent =
  "Novo jogo iniciado.";
};

updateStats();
loadEvent();