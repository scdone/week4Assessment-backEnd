const express = require("express");
const cors = require("cors");

const ctrl = require('./controller')

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get('/api/fortunes', ctrl.getFortunesBackEnd)
app.delete('/api/fortunes/:id', ctrl.deleteFortuneBackEnd)
app.put('/api/fortunes/:id', ctrl.luckyNumberBackEnd)
app.post('/api/fortunes', ctrl.addFortuneBackEnd)

app.listen(4000, () => console.log("Server running on 4000"));
