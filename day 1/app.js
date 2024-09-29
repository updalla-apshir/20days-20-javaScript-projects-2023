// UI elements

const taskInput = document.querySelector('#input'),
    addTaskBtn = document.querySelector('.btnAdd'),
    taskBox = document.querySelector('.task-box'),
    filters = document.querySelectorAll(".filter span"),
    btnDelete = document.querySelector('.btnDelete')

let taskinfo = JSON.parse(localStorage.getItem('taskinfo') || "[]"), toUpdateId

filters.forEach(filter => {
    filter.addEventListener('click', () => {
        // console.log(filter);
        document.querySelector('span.active').classList.remove('active')
        filter.classList.add('active')
        display(filter.id)
    })
})

display('all')

addTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (taskInput.value == '') {
        alert('fill the filds')
    }
    else {
        if (addTaskBtn.innerHTML == '<i class="fa-solid fa-plus"></i>') {
            addTask({ taskInput: taskInput.value, status: 'no-completed' })
        }
        else {
            updateTask({ taskInput: taskInput.value, status: 'no-completed' })
        }
    }
})
function display(filter) {
    let output = '';

    if (taskinfo.length) {
        tasksCompleted = taskinfo.filter(task => filter === 'all' || task.status === filter)

        if (tasksCompleted.length) {
            tasksCompleted.forEach((task, index) => {




                let completed = task.status == 'Completed' ? 'checked' : ''

                output += `
            <li class="task">
            <label for="${index}">
                <input type="checkbox" onclick="updateStatus(this)" id="${index}" ${completed}>
                <p class="${completed}">${task.taskInput}</p>
            </label>
            <div class="right-task">
                <span onclick="prepareUpdate(${index})"><i class="fa-solid fa-file-pen"></i></span>
                <span onclick="remove(${index})"><i class="fa-solid fa-trash"></i></span>
            </div>
        </li>
            
            `;

            
        })
            
    } 
    else{
        output = `<li> no task to ${filter.toLowerCase()}.</li>`
    }
}
    else{
        output = `<li> no tasks availible </li>`
    
    }





    taskBox.innerHTML = output;

}



function addTask(obj) {
    let userField = taskInput.value.trim()
    let taskAdd = { taskInput: userField, status: obj.status }
    taskinfo.push(taskAdd)
    localStorage.setItem('taskinfo', JSON.stringify(taskinfo))
    alert('succesfully added')
    location.reload()
}

function updateStatus(seletedTask) {
    let taskid = seletedTask.id;
    let taskName = seletedTask.parentElement.querySelector('p')
    if (seletedTask.checked) {
        taskName.classList.add('checked')
        taskinfo[taskid].status = 'Completed';
    }
    else {
        taskName.classList.remove('checked')
        taskinfo[taskid].status = 'no-completed';
    }
    localStorage.setItem('taskinfo', JSON.stringify(taskinfo))
}

function updateTask(obj) {
    if (toUpdateId !== undefined) {
        taskinfo[toUpdateId] = obj
        localStorage.setItem('taskinfo', JSON.stringify(taskinfo))
        alert('succefully updated')
        location.reload()
    }
    else {
        alert('No task to Update')
    }
}
function prepareUpdate(index) {
    taskInput.value = taskinfo[index].taskInput
    addTaskBtn.innerHTML = '<i class="fa-solid fa-file-pen"></i>'
    toUpdateId = index
}

function remove(index) {
    if (confirm('are you sure to delete')) {
        taskinfo.splice(index, 1)
        localStorage.setItem('taskinfo', JSON.stringify(taskinfo))
        alert('succesfully deleted')
        location.reload()
    }
}

btnDelete.addEventListener('click', () => {
    taskinfo.splice(0)
    localStorage.setItem('taskinfo', JSON.stringify(taskinfo))
    location.reload()
})


/// Good luck ... that's dynamic to do list App


//finally make dynamic to do lis app whith 4-6 hours at least 4 hours to makke this App

//good night