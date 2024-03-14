// Function to add a new task
function addTask() {
    // Get references to the input field and the task list
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    // Check if the input field is empty
    if (taskInput.value === "") {
        alert("Please enter a task!");
        return;
    }

    // Create new elements for the task (list item, span, delete button, edit button)
    var li = document.createElement("li");
    var span = document.createElement("span");
    var deleteBtn = document.createElement("button");
    var editBtn = document.createElement("button");

    // Set the text content of the span to the value entered in the input field
    span.innerText = taskInput.value;
    // Append the span to the list item
    li.appendChild(span);
    span.classList.add( "mx-3"); 
    // Set the text and click event handler for the delete button
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = function() {
        // Remove the parent li element when the delete button is clicked
        li.remove();
    };
    deleteBtn.classList.add("px-4", "py-2", "mx-3" ,"bg-blue-500", "text-white", "rounded-md");
    editBtn.classList.add("px-4", "py-2", "mx-3" , "bg-blue-500", "text-white", "rounded-md");
    // Append the delete button to the list item
    li.appendChild(deleteBtn);

    // Set the text and click event handler for the edit button
    editBtn.innerText = "Edit";
    editBtn.onclick = function() {
        // Prompt the user to edit the task and update the span text if a new task is entered
        var newTask = prompt("Edit task:", span.innerText);
        if (newTask !== null) {
            span.innerText = newTask;
        }
    };
    // Append the edit button to the list item
    li.appendChild(editBtn);

    // Add a click event handler to the list item to toggle the 'completed' class
    li.onclick = function() {
        li.classList.toggle("completed");
    };

    // Append the new list item to the task list
    taskList.appendChild(li);

    // Clear the input field after adding the task
    taskInput.value = "";
}