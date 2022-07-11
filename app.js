window.addEventListener('load', () => {
  const form = document.querySelector('#new-task-form');
  const input = document.querySelector('#new-task-input');
  const listElement = document.querySelector('#tasks');

  //prevent a refresh of the page
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = input.value;
    if (!task) {
      alert("Please fill out the task input field.");
      console.log("Failed task submission");
      return;
    } else {
      console.log("Successful task submission");
    }
  });

});