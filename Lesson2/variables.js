var data = {
  name:  "Артур",
  ourLost: 1000,
  ourArmy: 5000,
  enemiesLost: 10000,
  enemiesArmy: 12000,
  ourSurvived: 4000,
  enemiesTale: 2000,
}
name()

let kingName = prompt('Как зовут короля?');
let enemiesLost = prompt('Сколько потерь понесла армия врагов?');
let ourLost = prompt('Сколько потерь понесла армия короля?');
let ourArmy = prompt('Сколько воинов было в армии короля?');
let enemiesArmy = prompt('Сколько воинов было во вражеской армии?');
let ourSurvived = prompt('Сколько выживших было в армии короля?');
let enemiesTale = prompt('Сколько солдат осталось во вражеской армии?');


console.log(`Король ${data.name}, мы победили вражескую армию в ${data.enemiesArmy}! Враг бежит, оставив на поле боя ${data.enemiesLost} павших воинов. Наши потери король ${data.name} составили ${data.ourLost} героически павших воинов от всей нашей армии в ${data.ourArmy} солдат! Мы победили, сохранив ${data.ourSurvived} воинов. И можем продолжить преследовать остатки вражеской армии в ${data.enemiesTale} солдат. С победой король ${data.name}!!`)


console.log(`Король ${kingName}, мы победили вражескую армию в ${enemiesArmy}! Враг бежит, оставив на поле боя ${enemiesLost} павших воинов. Наши потери король ${name} составили ${ourLost} героически павших воинов от всей нашей армии в ${ourArmy} солдат! Мы победили, сохранив ${ourSurvived} воинов. И можем продолжить преследовать остатки вражеской армии в ${enemiesTale} солдат. С победой король ${kingName}!!`)