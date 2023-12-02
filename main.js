const form = document.querySelector("[data-form]");
const lists = document.querySelector("[data-lists");
const input = document.querySelector("[data-input]");

let todoArr = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let id = Math.random() + 1000000;
    const todo = new ToDo(id, input.value)
    todoArr = [...todoArr, todo];
    console.log(todoArr)
});

class ToDo {
    constructor(id, todo){
        this.id = id;
        this.todo = todo;
    }
}