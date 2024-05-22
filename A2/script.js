const URL = 'https://viacep.com.br/ws/'
const CEPinput = document.getElementById('cep')
const ruaInput = document.getElementById('logradouro')
CEPinput.addEventListener("change", (e) => {
    console.log(e.target.value)
    const inputCEP = e.target.value
    if (inputCEP.length != 8 &&  isNumeric(inputCEP)){
        fetch(`${URL}${inputCEP}/json/`)
            .then(response => response.json())
            .then(data => pegaRua(data))
    }
})

const pegaRua(json) => {

}