const listaTarefas = document.querySelector("#listaTarefas");
const tarefa = document.querySelector("#textTarefa");
const buttonAction = document.querySelector("#addTarefa");
const suspensionList = document.querySelector("#suspensionList");

buttonAction.addEventListener("click", function() {
    if(tarefa.value == ""){
       /* let error = document.createElement("span");
        error.setAttribute("class", "error");
        error.textContent = "Por favor, digite uma tarefa!";
        listaTarefas.appendChild(error);*/
        alert("Por favor, digite uma tarefa!");
    }else{
        error = "";
        const textTarefa = tarefa.value;
        tarefa.value = "";
        listaTarefas.appendChild(addTarefa(textTarefa));
        showHiddenList();
        tarefa.focus();
    }
    
});
function addTarefa(textTarefa) {
    const elementLI = document.createElement("li");
    const elementSpan = document.createElement("span");

    elementSpan.setAttribute("id", "tarefa");
    elementSpan.setAttribute("title", "Clique para marcar como realizada.");
    elementSpan.textContent = textTarefa;
    elementLI.className = "naoRealizada";
    elementLI.appendChild(elementSpan);
    elementLI.appendChild(removeTarefa());

    elementSpan.addEventListener("click", function(){
        if(this.id === "tarefa"){
            if(this.parentNode.className === "naoRealizada"){
                this.parentNode.className = "realizada"
            }else{
                this.parentNode.className = "naoRealizada"
            }
        }
    }
    );
    return elementLI;
}
function removeTarefa(){
    const buttonRemove = document.createElement("button");
    buttonRemove.setAttribute("class", "removeTarefa");
    buttonRemove.textContent = "✘";

    buttonRemove.addEventListener("click", function() {
        listaTarefas.removeChild(this.parentNode);
        showHiddenList();
    });

    return buttonRemove;
}
function showHiddenList(){
    const elementSpan = document.querySelector("#tarefa");
    if (elementSpan === null){
        suspensionList.setAttribute('hidden', 'hidden');
    }else{
        suspensionList.removeAttribute('hidden');
    }
}

suspensionList.addEventListener('change', function(){
    if(suspensionList.selectedIndex === 1 || suspensionList.selectedIndex === 2){
        const vectorTarefas = listaTarefas.querySelectorAll("#tarefa");
        for(let tarefa of vectorTarefas){
            tarefa.dispatchEvent(new Event("click"));
        }
    } else if(suspensionList.selectedIndex === 3){
        const vectorTarefas = listaTarefas.querySelectorAll(".removeTarefa");
        for(let button of vectorTarefas){
            button.dispatchEvent(new Event("click"));
        }
    }
});