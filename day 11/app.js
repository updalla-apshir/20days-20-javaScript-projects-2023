const editor = document.querySelector('#editor')

function formatText(command, value = null){
    document.execCommand(command, false , value)
    editor.focus()
}

function undo(){
    document.execCommand('undo')
    editor.focus()
}

function redo(){
    document.execCommand('redo')
    editor.focus()
}