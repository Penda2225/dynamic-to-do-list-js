// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Function to add a new task
    function addTask() {
      const taskText = taskInput.value.trim();
  
      if (taskText === '') {
        alert('Please enter a task.');
        return;
      }
  
      // Create list item and remove button
      const li = document.createElement('li');
      li.textContent = taskText;
  
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.className = 'remove-btn';
  
      // Add remove functionality
      removeBtn.onclick = () => {
        taskList.removeChild(li);
      };
  
      // Append button to list item and item to list
      li.appendChild(removeBtn);
      taskList.appendChild(li);
  
      // Clear input field
      taskInput.value = '';
    }
  
    // Click event for add button
    addButton.addEventListener('click', addTask);
  
    // Press "Enter" to add task
    taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  
    // Optionally invoke addTask once on DOMContentLoaded (not strictly necessary here)
    // addTask(); // can be included only if required by instruction
  });
   
