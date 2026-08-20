"use strict";
const bookTitle = "Гарри Поттер";
const bookPages = 432;
const isAvailable = true;
const categories = ["Фэнтези", "Приключения", "Детская литература"];
categories.push('roman');
console.log(`Книга: ${bookTitle}, ${bookPages} стр., доступна: ${isAvailable}, категории: ${categories.join(", ")}`);
