const titleName = document.querySelector('#titleName'),
      description = document.querySelector('#description'),
      btnSave = document.querySelector('#btnSave'),
      outPutNote = document.querySelector('.output')


let noteinfo = JSON.parse(localStorage.getItem('noteinfo') || '[]') ,toUpdateId;

display(noteinfo)
btnSave.addEventListener('click',(e)=>{
    e.preventDefault();
    if(titleName.value == '' && description.value == ''){
        alert('fill the fileds')
    } 
    else{
        if(btnSave.innerHTML == 'Save'){
            addNote({titleName:titleName.value,description:description.value})
        }
        else{
            updateNote({titleName:titleName.value,description:description.value})
        }
    }
})

function addNote(obj){
    let curentDate = new Date()
    obj.time = curentDate.toLocaleString()
    noteinfo.push(obj)
    localStorage.setItem('noteinfo',JSON.stringify(noteinfo))
    alert('successfully Added')
    location.reload()
}
function display(data){
    let output = '';
    if(data.length){
        data.forEach((task,index)=>{
            output+=`
            <li class="note text-light bg-primary">
            <div class="detail">
                <p>${task.titleName}</p>
                <span>${task.description}</span>
            </div>
            <div class="bottom">
                <span>${task.time}</span>
                <div class="dropdown dropup dropstart position-relative">
                    <button class="btn dropdown-toggle text-light" type="button" id="dropdownmenu"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa-solid fa-ellipsis"></i>
                    </button>

                    <div class="dropdown-menu bg-primary start-0 py-0" style="min-width: 90px;">
                        <span class="dropdown-item"  onclick="remove(${index})" ><i class="fa-solid fa-trash"></i>Delete</span>
                        <span class="dropdown-item" onclick="prepareUpdate(${index})" data-bs-toggle="modal" data-bs-target="#noteModal"><i class="fa-solid fa-file-pen"></i>Edit</span>
                    </div>
        </li>
            
            `
        })
    }
    outPutNote.innerHTML = output
}

function remove(index){
    if(confirm('are you sure to delete')){
        noteinfo.splice(index,1)
        localStorage.setItem('noteinfo',JSON.stringify(noteinfo))
        location.reload()
    }
}
function prepareUpdate(index){
    titleName.value = noteinfo[index].titleName
    description.value = noteinfo[index].description
    btnSave.innerHTML = 'Update';
    toUpdateId = index;
}

function updateNote(obj){
    if(toUpdateId !== undefined){
        noteinfo[toUpdateId] = obj
        localStorage.setItem('noteinfo',JSON.stringify(noteinfo))
        alert('successfully updated')
        location.reload()
    }
}