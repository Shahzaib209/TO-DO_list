// We use fundamental JavaScript without modern ES6+ features like let/const, arrow functions where basic functions suffice
var taskInput = document.getElementById('taskInput');
var addBtn = document.getElementById('addBtn');
var taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    var taskText = taskInput.value;

    // Check if input is empty
    if (taskText.trim() === '') {
        alert('Please enter a task before adding.');
        return;
    }

    // Create the list item element
    var li = document.createElement('li');

    // Create the span that holds the task text
    var span = document.createElement('span');
    span.className = 'task-text';
    span.innerText = taskText;

    // Add click event to toggle completion status
    span.onclick = function() {
        if (li.className === 'completed') {
            li.className = '';
        } else {
            li.className = 'completed';
        }
    };

    // Create the delete button
    var deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete-btn';

    // Add click event to remove the task
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    // Append the span and delete button to the list item
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Append the list item to the unordered list
    taskList.appendChild(li);

    // Clear the input box after adding
    taskInput.value = '';
}

// Attach the addTask function to the Add button click event
addBtn.onclick = addTask;

// Allow adding tasks by pressing the Enter key in the input field
taskInput.onkeypress = function(event) {
    // Check if the pressed key is Enter
    if (event.key === 'Enter' || event.keyCode === 13) {
        addTask();
    }
};
