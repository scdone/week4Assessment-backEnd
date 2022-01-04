// const { default: axios } = require("axios")

// const { default: axios } = require("axios")

// const { default: axios } = require("axios")

const getBtn = document.querySelector('#getall-button')
const fortuneContainer = document.querySelector('#fortune-container')
const addFortuneForm = document.querySelector('#fortune-form')
const fortuneInput = document.querySelector('#fortune-input')
const numberInput = document.querySelector('#number-input')


function displayFortunes(fortuneArr) {
    fortuneContainer.innerHTML = ``

    fortuneArr.forEach(function(fortune) {
        const fortuneCard = document.createElement('div')
        const fortuneText = document.createElement('h3')
        const luckyNumber = document.createElement('h4')
        const deleteBtn = document.createElement('button')
        const luckyNumberBtn = document.createElement('button')

        fortuneText.textContent = fortune.fortune
        luckyNumber. textContent = 'Your lucky number is' + ' ' + fortune.luckyNumber

        deleteBtn.textContent = 'Delete Fortune'
        luckyNumberBtn.textContent = 'Change Lucky number'

        fortuneCard.appendChild(fortuneText)
        fortuneCard.appendChild(luckyNumber)
        fortuneCard.appendChild(deleteBtn)
        fortuneCard.appendChild(luckyNumberBtn)

        fortuneContainer.appendChild(fortuneCard)

        deleteBtn.addEventListener('click', () => {deleteFortuneFront(fortuneObj.id)})

    })
}


function getFortunesFrontEnd() {
    axios.get(`http://localhost:4000/api/fortunes`)
    .then(res => displayFortunes(res.data))
}

getBtn.addEventListener('click', getFortunesFrontEnd)

function deleteFortuneFront(id) {
    axios.delete(`http://localhost:4000/api/fortunes/${id}`)
    .then(res => displayFortunes(res.data))
}
