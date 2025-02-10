//Switch tab
const tabs = document.querySelectorAll ('.side-bar-button');

tabs.forEach(tab => tab.addEventListener('click',() => tabClicked(tab)));

const tabClicked= (tab) => {

    const contents = document.querySelectorAll('.content');

    contents.forEach(content => content.classList.remove('show'));

    const contentId = tab.getAttribute('content-id')
    const content = document.getElementById(contentId)
    
    console.log(contentId)
    console.log(content)
    
    content.classList.add('show');
}

//Tasks
//Elements
const tasksForm = document.querySelector('.tasks-form')
const taskDescriptionLabel = document.querySelector('#task-description-input');
const taskPriorityLabel = document.querySelector('#task-priority-input');
const submitButton = document.querySelector('.submit-task-button');
let tasksArray = [];

const toDoListBarBorder = document.querySelector('.to-do-list-bar')

//Functions


const saveTask = (text, priority) => {

    const task = document.createElement("div")
    task.classList.add("task")

    const taskTitle = document.createElement("h3")
    taskTitle.innerText = text;
    task.appendChild(taskTitle)

    const taskPriority = document.createElement("h4")
    taskPriority.innerText = priority;
    task.appendChild(taskPriority)

    const editTaskButton = document.createElement("button")
    editTaskButton.classList.add("edit-task")
    editTaskButton.innerHTML = 'edit';
    task.appendChild(editTaskButton);

    const removeTaskButton = document.createElement("button")
    removeTaskButton.classList.add("remove-task")
    removeTaskButton.innerHTML = 'remove';
    task.appendChild(removeTaskButton);

    removeTaskButton.addEventListener("click", () => {

        const index = tasksArray.findIndex(item => item[0] === text && item[1] === priority);
        
        if (index !== -1) {
            tasksArray.splice(index, 1); // Remove do array
        }

        renderTasks();
    });


    tasksForm.appendChild(task);

    taskDescriptionLabel.value = "";
    taskPriorityLabel.value = "";

}

const priorityTask = (text, priority) => {


    const nextTask = document.createElement("div")
    nextTask.classList.add("right-bar-priority-task")
    
    const taskPriority = document.createElement("h4")
    taskPriority.innerText = priority;
    nextTask.appendChild(taskPriority)

    const taskTitle = document.createElement("h3")
    taskTitle.innerText = text;
    nextTask.appendChild(taskTitle)

    toDoListBarBorder.appendChild(nextTask);


    
}

const removeAllTasks = () => {
    const tasks = document.querySelectorAll(".task");
    const nextTask = document.querySelectorAll(".right-bar-priority-task");
    tasks.forEach(task => task.remove());
    nextTask.forEach(task => task.remove());
    
};

const renderTasks = () => {

    removeAllTasks();

    tasksArray.forEach(task => {
        saveTask(task[0], task[1]);
    });

    tasksArray.slice(0, 3).forEach(task => {
        priorityTask(task[0], task[1]);
    });
};
//Events
tasksForm.addEventListener("submit", (e) => {

    
    e.preventDefault();

    const inputValue = taskDescriptionLabel.value;
    const taskPriority = taskPriorityLabel.value;


    if(inputValue){

        tasksArray.push([inputValue,taskPriority])
        tasksArray.sort((a, b) => a[1] - b[1])

        renderTasks();

    }

    console.log(tasksArray);

});

