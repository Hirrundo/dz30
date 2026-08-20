"use strict";
function formatTasks(tasks, category) {
    const taskList = tasks.join(", ");
    if (category) {
        return `${category}: ${taskList}`;
    }
    return taskList;
}
const tasks = [
    "Сделать домашку",
    "Погулять",
    "Купить продукты",
];
const result1 = formatTasks(tasks);
console.log(`Задачи: ${result1}`);
const result2 = formatTasks(tasks, "На сегодня");
console.log(`Задачи: ${result2}`);
