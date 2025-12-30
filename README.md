# 1️⃣ Desafio Classificador de Nível de Herói

**Desafio proposto pela DIO (Digital Innovation One)**

## 📋 Descrição

Este projeto implementa um classificador que determina o nível de um herói com base em sua quantidade de experiência (XP). O desafio utiliza conceitos fundamentais de programação como variáveis, operadores, estruturas de decisão e laços de repetição.

## 🎯 Objetivo

Criar um sistema que classifique heróis em diferentes níveis de acordo com sua experiência acumulada.

## 📊 Tabela de Classificação por XP

| XP                      | Nível      |
| ----------------------- | ---------- |
| Menor que 1.000         | Ferro      |
| Entre 1.001 e 2.000     | Bronze     |
| Entre 2.001 e 5.000     | Prata      |
| Entre 5.001 e 7.000     | Ouro       |
| Entre 7.001 e 8.000     | Platina    |
| Entre 8.001 e 9.000     | Ascendente |
| Entre 9.001 e 10.000    | Imortal    |
| Maior ou igual a 10.001 | Radiante   |

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript

## 📦 Conceitos Aplicados

- ✅ **Variáveis** - Armazenamento de nome e XP do herói
- ✅ **Operadores** - Comparação de valores (maior, menor, igual)
- ✅ **Estruturas de Decisão** - if/else para classificação
- ✅ **Laços de Repetição** - for para processar múltiplos heróis

## 🚀 Como Executar

### Pré-requisitos

- Node.js instalado (versão 12 ou superior)

### Execução

```bash
node index.js
```

## 💡 Exemplo de Saída

```
=== Classificação de Heróis ===

O Herói de nome **Arthur** está no nível de **Ferro**
O Herói de nome **Morgana** está no nível de **Bronze**
O Herói de nome **Lancelot** está no nível de **Prata**
O Herói de nome **Merlin** está no nível de **Ouro**
O Herói de nome **Guinevere** está no nível de **Platina**
O Herói de nome **Percival** está no nível de **Ascendente**
O Herói de nome **Galahad** está no nível de **Imortal**
O Herói de nome **Excalibur** está no nível de **Radiante**

=== Fim da Classificação ===
```

## 🎨 Personalização

Para adicionar seus próprios heróis, edite o array `herois` no arquivo [index.js](index.js):

```javascript
const herois = [
  { nome: "SeuHeroi", xp: 5500 },
  // Adicione mais heróis aqui
];
```

## 📝 Estrutura do Projeto

```
hero-level/
├── README.md        # Documentação do projeto
└── index.js         # Código principal do classificador
```

## 👨‍💻 Autor

Desenvolvido como parte do desafio de lógica de programação da DIO.

---

⭐ **Desafio concluído com sucesso!** ⭐
