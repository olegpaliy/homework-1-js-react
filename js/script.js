// завдання 1
let yearsUser = prompt("Скільки тобі років?")
alert(`Тобі ${yearsUser} років`);

//завдання 2
const this_year = 2020;
let yearOFborn = +prompt('коли ти народився?')
let born = this_year - yearOFborn ;
alert(`Привіт, мені ${born} років`);

//завдання 3
let width = +prompt('введіть ширину');
let height = +prompt('введіть висоту');
let result = (height + width)*2;
alert(`периметр дорівнює ${result}!`);

//завдання 4
const PI = 3.14;
let radius = +prompt('введіть радіус кола');
let area = PI * radius ** 2 ;
alert(`площа кола дорівнює ${area}`);

//завдання 5
const speed = 50;
let time = +prompt('скільки тобі ще треба проїхати?');
let distance = speed * time;
alert(`тобі ще треба проїхати ${distance} км`);

//завдання 6
let convetr = +prompt('введіть кількість одиниць для конвнртації в км та милі');
let mile = 1.6;
let km = 1;
let countOfMiles = mile * convetr;
let countOfKm = km * convetr;
alert(`${countOfMiles} милі або ${countOfKm} км`)

//завдання 7
let fuel = 22;
let money = +prompt('скікі зільоних(не з зе-команди) у тебе є?');
let countOfFuel = money / fuel;
let restOfMoney = money - (countOfFuel * fuel);  
alert(`ти зможеш купити ${countOfFuel} л бензину, і в тебе залишилось ${restOfMoney} грн`)