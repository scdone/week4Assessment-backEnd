// const { default: axios } = require('axios')
let fortuneData = require('../fortunes.json')

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

    },
    addFortuneBackEnd: (req, res) => {

    }
}