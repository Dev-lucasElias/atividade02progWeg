const URL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
const selectUFS = document.getElementById('ufs')

const insereUFS = (listaUFS) => {
    listaUFS.sort((a, b) => {
        if (a.sigla > b.sigla) {
            return 1
        }
        else if (a.sigla < b.sigla) {
            return -1
        }
        return 0
    });
    listaUFS.map(uf => {
        const optionUF = document.createElement('option')
        optionUF.innerText = uf.sigla
        selectUFS.appendChild(optionUF)
    })
}

const insereCidades = (listaCidades) => {
    const selectCidds = document.getElementById('cidades')
    selectCidds.innerHTML = ''
    listaCidades.sort((a, b) => {
        if (a.nome > b.nome) {
            return 1
        }
        else if (a.nome < b.nome) {
            return -1
        }
        return 0
    });
    listaCidades.map(cidd => {
        const optionCidd = document.createElement('option')
        optionCidd.innerText = cidd.nome
        selectCidds.appendChild(optionCidd)
    })
    selectCidds.removeAttribute("disabled")
}

window.onload = () => {
    fetch(URL)
    .then(response => response.json()
    )
    .then(data => insereUFS(data))

    selectUFS.addEventListener('change', (e) => {
        const UF = e.target.value
        fetch(`${URL}/${UF}/municipios`)
        .then(response => response.json())
        .then(data => insereCidades(data))
    })
}