const bookTitle: string = "Гарри Поттер";
const bookPages: number = 432;
const isAvailable: boolean = true;
const categories: string[] = ["Фэнтези", "Приключения", "Детская литература"];

categories.push('roman')

console.log(
    `Книга: ${bookTitle}, ${bookPages} стр., доступна: ${isAvailable}, категории: ${categories.join(", ")}`
);
