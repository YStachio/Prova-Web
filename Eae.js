const frm = document.querySelector("form");
const dvQuadro = document.querySelector("#divQuadro");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const tarefa = frm.inTarefa.value;

    const h5 = document.createElement("h5");
    const texto = document.createTextNode(tarefa);
    h5.appendChild(texto);
    dvQuadro.appendChild(h5);

    frm.inTarefa.value = "";
    frm.inTarefa.focus();
});

frm.btSelecionar.addEventListener("click", () => {
    const tarefas = document.querySelector("h5");

    if(tarefas.length == 0){
        alert("Não há tarefas para selecionar!");
        return
    }

    let aux = -1

    for (let i=0; i < tarefas.length; i++){
        if (tarefas[i].className== "tarefa-selecionada"){
            tarefas[i].className = "tarefas-normal"
            aux = i;
            break
        }
    }

    tarefas[aux + 1].className = "tarefa-selecionada"
})

function sortfunction(a, b){
    return (a-b)
}