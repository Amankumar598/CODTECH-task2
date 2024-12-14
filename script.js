 const form = document.getElementById('todo-form');
        const taskInput = document.getElementById('new-task');
        const taskList = document.getElementById('task-list');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const taskText = taskInput.value.trim();
            if (taskText === '') return;

            const li = document.createElement('li');
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="remove">&times;</button>
            `;

            taskList.appendChild(li);
            taskInput.value = '';

            li.querySelector('.remove').addEventListener('click', function() {
                taskList.removeChild(li);
            });
        });
