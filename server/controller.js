// const { default: axios } = require('axios')
let fortuneData = require('../fortunes.json')
let newFortuneId = 11

module.exports = {
    getFortunesBackEnd: (req, res) => {
        res.status(200).send(fortuneData)
    },
    deleteFortuneBackEnd: (req, res) => {
       const targetId = +req.params.id;
       const foundIndex = fortuneData.findIndex(fortuneObj => {
           return fortuneObj.id === targetId
       });

       fortuneData.splice(foundIndex, 1)

       res.status(200).send(fortuneData);

    },
    luckyNumberBackEnd: (req, res) => {
        const targetId = +req.params.id;
        const foundIndex = fortuneData.findIndex(fortuneObj => {
            return fortuneObj.id === targetId
        });

        fortuneData[foundIndex].luckyNumber ++

        res.status(200).send(fortuneData)

    },
    addFortuneBackEnd: (req, res) => {
        const { fortune, luckyNumber } = req.body

        let newFortune = {
            "id": newFortuneId,
            "fortune": fortune,
            "luckyNumber": luckyNumber
        }

        fortuneData.push(newFortune)

        res.status(200).send(fortuneData)
    }
}