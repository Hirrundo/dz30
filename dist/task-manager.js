"use strict";
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["ToDo"] = "ToDo";
    TaskStatus["InProgress"] = "InProgress";
    TaskStatus["Done"] = "Done";
})(TaskStatus || (TaskStatus = {}));
function displayTask(task) {
    return `${task.title}, статус: ${task.status}, приоритет: ${task.priority}`;
}
const task = {
    title: "Сделать домашнее задание",
    status: TaskStatus.InProgress,
    priority: 1
};
console.log(`Задача: ${displayTask(task)}`);
