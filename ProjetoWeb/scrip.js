
const createTask = () => {
    let inputText = document.getElementById('inputText').value   
    

    let task = document.getElementById('task').innerHTML += '<div id="'+inputText+'}" class="taskConteudo">'+inputText+'<button id="remove" class="remove" onclick="removeTask(\"${inputText}\")">X</button></div>'

}

const removeTask = (id) =>{
    let remove = document.getElementById(id).remove();
    
}