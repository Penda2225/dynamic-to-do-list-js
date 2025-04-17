document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === '') {
        alert('Please enter a task.');
        return;
      }
  
      const li = document.createElement('li');
  
      const taskSpan = document.createElement('span');
      taskSpan.textContent = taskText;
  
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.classList.add('remove-btn');
      removeBtn.onclick = () => taskList.removeChild(li);
  
      li.appendChild(taskSpan);
      li.appendChild(removeBtn);
      taskList.appendChild(li);
      taskInput.value = '';
    }
  
    addButton.addEventListener('click', addTask);
  
    taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  });
  