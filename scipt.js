const game = {

  food: 70,
  nature: 70,
  water: 70,
  health: 70
};

const events = [

  {
    title: "Insetos atacando a plantação",

    description:
    "Os agricultores descobriram pragas nas verduras da comunidade.",

    image:
    "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop",

    option1: {
      text: "Usar controle biológico natural",

      effects: {
        food: 8,
        nature: 12,
        water: 8,
        health: 10
      },

      message:
      "Métodos naturais protegeram a plantação sem contaminar o ambiente."
    },

    option2: {
      text: "Aplicar agrotóxicos químicos",

      effects: {
        food: 12,
        nature: -20,
        water: -18,
        health: -22
      },

      message:
      "Os venenos aumentaram a produção rapidamente, mas contaminaram solo e água."
    }
  },

  {
    title: "Contaminação do rio",

    description:
    "Os resíduos químicos começaram a chegar no rio da comunidade.",

    image:
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1200&auto=format&fit=crop",

    option1: {
      text: "Criar proteção ambiental",

      effects: {
        food: 5,
        nature: 15,
        water: 18,
        health: 12
      },

      message:
      "A vegetação ajudou a proteger a água e recuperar o rio."
    },

    option2: {
      text: "Ignorar o problema",

      effects: {
        food: 6,
        nature: -20,
        water: -25,
        health: -18
      },

      message:
      "Peixes morreram e a água ficou imprópria para consumo."
    }
  },

  {
    title: "Solo enfraquecido",

    description:
    "O excesso de pesticidas começou a destruir os nutrientes do solo.",

    image:
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop",

    option1: {
      text: "Investir em agricultura sustentável",

      effects: {
        food: 15,
        nature: 18,
        water: 10,
        health: 15
      },

      message:
      "A rotação de culturas recuperou a fertilidade do solo."
    },

    option2: {
      text: "Aplicar mais químicos",

      effects: {
        food: 8,
        nature: -18,
        water: -12,
        health: -16
      },

      message:
      "O solo ficou cada vez mais dependente de produtos químicos."
    }
  }

];

let current = 0;

const title = document.getElementById("title");
const description = document.getElementById("description");
const image = document.getElementById("sceneImage");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

const food = document.getElementById("food");
const nature = document.getElementById("nature");
const water = document.getElementById("water");
const health = document.getElementById("health");

const foodBar = document.getElementById("foodBar");
const natureBar = document.getElementById("natureBar");
const waterBar = document.getElementById("waterBar");
const healthBar = document.getElementById("healthBar");

const message = document.getElementById("message");

const restart = document.getElementById("restart");

function updateUI(){

  food.textContent = game.food;
  nature.textContent = game.nature;
  water.textContent = game.water;
  health.textContent = game.health;

  foodBar.style.width = game.food + "%";
  natureBar.style.width = game.nature + "%";
  waterBar.style.width = game.water + "%";
  healthBar.style.width = game.health + "%";
}

function limit(value){

  if(value > 100){
    return 100;
  }

  if(value < 0){
    return 0;
  }

  return value;
}

function loadEvent(){

  if(current >= events.length){

    endGame();
    return;
  }

  const event = events[current];

  title.textContent = event.title;

  description.textContent =
  event.description;

  image.src = event.image;

  btn1.textContent =
  event.option1.text;

  btn2.textContent =
  event.option2.text;

  btn1.onclick = function(){
    choose(event.option1);
  };

  btn2.onclick = function(){
    choose(event.option2);
  };
}

function choose(option){

  game.food =
  limit(game.food + option.effects.food);

  game.nature =
  limit(game.nature + option.effects.nature);

  game.water =
  limit(game.water + option.effects.water);

  game.health =
  limit(game.health + option.effects.health);

  message.textContent =
  option.message;

  updateUI();

  current++;

  setTimeout(function(){
    loadEvent();
  },1000);
}

function endGame(){

  title.textContent =
  "🏆 Agricultura Sustentável";

  description.textContent =
  "Você aprendeu que proteger o meio ambiente é essencial para produzir alimentos saudáveis.";

  image.src =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop";

  btn1.style.display = "none";
  btn2.style.display = "none";

  message.textContent =
  "Os agrotóxicos podem causar danos graves ao solo, água e saúde humana.";
}

restart.onclick = function(){

  game.food = 70;
  game.nature = 70;
  game.water = 70;
  game.health = 70;

  current = 0;

  btn1.style.display = "block";
  btn2.style.display = "block";

  updateUI();

  loadEvent();

  message.textContent =
  "Novo jogo iniciado.";
};

updateUI();
loadEvent();