import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([{
            name: "todo",
            message: "what do you want to add in your list?",
            type: "input"
        }, {
            name: "addMore",
            message: "Are you sure you want to add more in todos",
            type: "confirm",
            default: "false"
        }
    ]);
    // console.log(addTask);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
}
