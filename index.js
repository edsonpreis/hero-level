// Desafio Classificador de nível de Herói
// DIO - Digital Innovation One

// Função para classificar o nível do herói com base no XP
function classificarHeroi(nome, xp) {
  let nivel;

  // Estrutura de decisão para determinar o nível
  if (xp < 1000) {
    nivel = "Ferro";
  } else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
  } else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
  } else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
  } else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
  } else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  // Saída formatada
  console.log(`O Herói de nome **${nome}** está no nível de **${nivel}**`);
}

// Array de heróis para demonstrar uso de laços de repetição
const herois = [
  { nome: "Arthur", xp: 500 },
  { nome: "Morgana", xp: 1500 },
  { nome: "Lancelot", xp: 3500 },
  { nome: "Merlin", xp: 6000 },
  { nome: "Guinevere", xp: 7500 },
  { nome: "Percival", xp: 8500 },
  { nome: "Galahad", xp: 9500 },
  { nome: "Excalibur", xp: 12000 },
];

// Laço de repetição para classificar todos os heróis
console.log("=== Classificação de Heróis ===\n");
for (let i = 0; i < herois.length; i++) {
  classificarHeroi(herois[i].nome, herois[i].xp);
}

console.log("\n=== Fim da Classificação ===");
