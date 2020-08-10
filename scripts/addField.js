//Procurar o botão
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener('click', cloneField)

//Executar uma ação
function cloneField() {
    //Duplicar os campos. Que campos?
    const newfieldContainer = document.querySelector('.schedule-item').cloneNode(true) // bolean: true ou false

    //limpar os campos. que campos?
    const filds = newfieldContainer.querySelectorAll('input')
    console.log(fields[0].value = "f")

    //Colocar na página. onde???
    document.querySelector('#schedule-items').appendChild(fields)
}