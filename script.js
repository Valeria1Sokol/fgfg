var menu = {
    cap: {
        dough: 1
        , tomato_sausage: 1
        , onion: 2
        , sausage: 2
        , mashroom: 3
        , cheez: 1
    , }
    , onions: {
        dough: 1
        , tomato_sausage: 1
        , onion: 2
        , meat: 1
        , cheez: 1
    }
    , king_one: {
        dough: 1
        , tomato_sausage: 1
        , onion: 2
        , mayo: 1
        , mashroom: 3
        , tomato: 2
        , cheez: 3
        , dill: 2
        , parsley: 2
    }
    , gavay: {
        dough: 1
        , tomato_sausage: 1
        , onion: 2
        , ananas: 1
        , cheez: 2
    }
    , tonno: {
        dough: 1
        , tomato_sausage: 1
        , tuna: 2
        , kappers: 1
        , cheez: 1
    }
    , vegeterian: {
        dough: 1
        , tomato_sausage: 1
        , tomato: 2
        , kappers: 1
        , cucumber: 2
        , onion: 2
        , cheez: 1
    }
}
var popular = [];
var ingridients = [];
var pizzas = prompt('enter pizza').split(' ');
var popularPizzas = {};
var ing = []; //початковий масив, де є всі інгрідієнти(назви дублюються)
var popularIng = {}; //об'єкт для програмних обрахунків
console.log(pizzas);
//визначаємо кількість повторів елементів
for (let i in pizzas) {
    if (popularPizzas[pizzas[i]] != undefined) {
        (popularPizzas[pizzas[i]]++)
    }
    else {
        (popularPizzas[pizzas[i]] = 1)
    }
}
//кількість повторів для інгрідієнтів
for (let i = 0; i < pizzas.length; i++) {
    let obj = menu[pizzas[i]];
    ing.push(obj);
}
for (let i = 0; i < ing.length; i++) {
    for (let j in ing[i]) {
        if (popularIng[j] === undefined) {
            popularIng[j] = ing[i][j];
        }
        else {
            popularIng[j] += ing[i][j];
        }
    }
}
console.log(popularIng);
//сортування за к-стю елементів
function bySortedValue(obj) {
    var tuples = [];
    for (var key in obj) tuples.push([key, obj[key]]);
    tuples.sort(function (a, b) {
        a = a[1];
        b = b[1];
        return a > b ? -1 : (a > b ? 1 : 0);
    });
    for (var i = 0; i < tuples.length; i++) {
        var key = ' ' + tuples[i][0];
        popular.push(key);
    }
}

function sortIng(obj) {
    var tuples = [];
    for (var key in obj) tuples.push([key, obj[key]]);
    tuples.sort(function (a, b) {
        a = a[1];
        b = b[1];
        return a > b ? -1 : (a > b ? 1 : 0);
    });
    for (var i = 0; i < tuples.length; i++) {
        var key = ' ' + tuples[i][0];
        ingridients.push(key);
    }
}
bySortedValue(popularPizzas);
sortIng(popularIng);
function getPizzaInfo (lastPizzas)
{
   return document.write("Popular pizzas is " + popular.splice(0, 5) + " " + '<br>'+"Popular ing is " + ingridients + " ");
}
getPizzaInfo(popular);
