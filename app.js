window.addEventListener('load', () => {
  const form = document.querySelector('#new-task-form');
  const input = document.querySelector('#new-task-input');
  const listElement = document.querySelector('#tasks');

  //when a user attempts to submit a new task
  form.addEventListener('submit', (e) => {
    //prevent refresh of page
    e.preventDefault();

    /**
     * If a user tries to submit a blank box, send an alert telling them to correct the issue.
     * Otherwise, send a success message to the console.
     */
    const task = input.value;
    if (!task) {
      alert("Please fill out the task input field.");
      console.log("Failed task submission");
      return;
    } else {
      console.log("Successful task submission");
    }

    //create a div that will contain the task text and associated buttons
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');

    //setup the actual content portion of the individual task item
    const taskContentElement = document.createElement('div');
    taskContentElement.classList.add('content');

    /**
     * With the typed content from the user, add it as a literal input field
     * inside of the task items. The point of this is to add the user text directly into the
     * content div that was setup previously. Once setup, make this input field a child of 
     * the content div.
     */
    const taskInputElement = document.createElement('input');
    taskInputElement.classList.add('to-do-text');
    taskInputElement.type = 'text';
    taskInputElement.value = task;
    taskInputElement.setAttribute('readonly', 'readonly');
    taskContentElement.appendChild(taskInputElement);

    //add the content/text portion of the individual task as a child to the task item in general
    taskElement.appendChild(taskContentElement);

    //create the div for the edit and delete buttons
    const taskActionsElement = document.createElement('div');
    taskActionsElement.classList.add('actions');

    //add a new edit button for the task
    const editElement = document.createElement('button');
    editElement.classList.add('edit');
    editElement.innerText = 'Edit';

    //add a new delete button for the task
    const deleteElement = document.createElement('button');
    deleteElement.classList.add('delete');
    deleteElement.innerText = 'Delete';

    //insert the task buttons in their proper order in the DOM
    taskActionsElement.appendChild(editElement);
    taskActionsElement.appendChild(deleteElement);
    taskElement.appendChild(taskActionsElement);

    //add the entire task item to the complete list of tasks
    listElement.appendChild(taskElement);

    input.value = '';

    //give the edit button functionality
    editElement.addEventListener('click', () => {
      if (editElement.innerText.toLowerCase() === 'edit') {
        taskInputElement.removeAttribute('readonly');
        taskInputElement.focus(); //bring cursor to text
        editElement.innerText = "Save";
      } else {
        taskInputElement.setAttribute('readonly', 'readonly');
        editElement.innerText = "Edit";
      }
    });
  });
});