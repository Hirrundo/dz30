enum TaskStatus {
    ToDo = "ToDo",
    InProgress = "InProgress",
    Done = "Done"
}

interface Task {
    title: string;
    status: TaskStatus;
    priority: number | string;
}

function displayTask(task: Task): string {
    return `${task.title}, статус: ${task.status}, приоритет: ${task.priority}`;
}

const task: Task = {
    title: "Сделать домашнее задание",
    status: TaskStatus.InProgress,
    priority: 1
};

console.log(`Задача: ${displayTask(task)}`);