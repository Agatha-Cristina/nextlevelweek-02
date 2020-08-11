//Procurar o botão
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener('click', cloneField)

//Executar uma ação
function cloneField() {
    //Duplicar os campos. Que campos?
    const newfieldContainer = document.querySelector('.schedule-item').cloneNode(true) // bolean: true ou false

    //pegar os campos. Que campos?
    const fields = newfieldContainer.querySelectorAll('input')
    
    // para cada campo, limpar
    fields.forEach(function(field) {
      //pegar o field no momento e limpa ele
        field.value = ""
    })

    //Colocar na página. onde???
    document.querySelector('#schedule-items').appendChild(newfieldContainer)
}