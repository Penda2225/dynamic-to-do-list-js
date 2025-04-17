document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Load tasks from localStorage on page load
    function loadTasks() {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.forEach(taskText => addTask(taskText, false)); // don't save again when loading
    }
  
    // Save tasks to localStorage
    function saveTasks() {
      const tasks = [];
      document.querySelectorAll('#task-list li span').forEach(span => {
        tasks.push(span.textContent);
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  
    // Function to add a task
    function addTask(taskText, save = true) {
      if (!taskText || taskText.trim() === '') {
        alert('Please enter a task.');
        return;
      }
  
      const li = document.createElement('li');
  
      const taskSpan = document.createElement('span');
      taskSpan.textContent = taskText;
  
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.classList.add('remove-btn');
  
      removeBtn.onclick = () => {
        taskList.removeChild(li);
        saveTasks(); // update localStorage
      };
  
      li.appendChild(taskSpan);
      li.appendChild(removeBtn);
      taskList.appendChild(li);
  
      taskInput.value = '';
  
      if (save) {
        saveTasks(); // update localStorage after adding new task
      }
    }
  
    // Click button to add task
    addButton.addEventListener('click', () => {
      addTask(taskInput.value);
    });
  
    // Press Enter to add task
    taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addTask(taskInput.value);
      }
    });
  
    // Initialize on page load
    loadTasks();
  });
  