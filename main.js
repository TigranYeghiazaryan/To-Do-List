function addTask() {
    var inputValue = document.getElementById("new-task").value;


    if (inputValue !== "") {
      var newTaskItem = document.createElement("li");


      var taskText = document.createTextNode(inputValue);


      var deleteButton = document.createElement("button");
      deleteButton.innerHTML = "Delete";
      deleteButton.className = "delete-btn";
      deleteButton.addEventListener("click", function () {

        newTaskItem.remove();
      });


      newTaskItem.appendChild(taskText);
      newTaskItem.appendChild(deleteButton);


      document.getElementById("tasks-list").appendChild(newTaskItem);


      document.getElementById("new-task").value = "";
    }
  }