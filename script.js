document.getElementById('addBtn').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        
        // Create a new task item
        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        // Create a 'Delete' button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function () {
            taskList.removeChild(newTask);
        };

        // Mark task as completed
        newTask.addEventListener('click', function () {
            newTask.classList.toggle('completed');
        });

        // Append button to task item
        newTask.appendChild(deleteBtn);
        
        // Add new task item to the list
        taskList.appendChild(newTask);
        
        // Clear the input field
        taskInput.value = '';
    }
});

