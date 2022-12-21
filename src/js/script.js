const listaTarefas = document.querySelector("#listaTarefas");
const tarefa = document.querySelector("#Tarefa");
const buttonAction = document.querySelector("#addTarefa");

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
    });

    return buttonRemove;
}

