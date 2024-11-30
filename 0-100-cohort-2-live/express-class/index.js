const express = require("express");

const app = express();

app.use(express.json());

let users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];

app.get('/', (req, res) => {
    const user = users[0];
    const numKidneys = user.kidneys.length;
    let numHealthyKidneys = 0;
    console.log(numKidneys);
    for(let i = 0; i < numKidneys; i++){
        if(user.kidneys[i].healthy){
            numHealthyKidneys++;
        }
    }
    const numUnhealthyKidneys = numKidneys - numHealthyKidneys;
    res.status(200).json({
        "Number of Kidneys:" : numKidneys,
        "Number of Healthy Kidneys": numHealthyKidneys,
        "Number of Unhealthy Kidneys": numUnhealthyKidneys
    });
});

app.post('/add', (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    return res.status(201).send("Added Kidney");
})

app.put('/update', (req, res) => {
    const isHealthy = req.body.isHealthy;
    const user = users[0];
    const numKidneys = user.kidneys.length;
    for(let i = 0; i < numKidneys; i++){
        if(user.kidneys[i].healthy !== isHealthy){
            user.kidneys[i].healthy = isHealthy;
            return res.status(201).send("Updated Kidney Status");
        }
    }
    return res.status(404).send("Invalid Update");

})

app.delete('/remove', (req, res) => {
    const isHealthy = req.body.isHealthy;
    const user = users[0];
    const numKidneys = user.kidneys.length;
    let numHealthyKidneys = 0;
    for(let i = 0; i < numKidneys; i++){
        if(user.kidneys[i].healthy === isHealthy){
            user.kidneys.splice(i, 1)
            return res.status(201).send("Deleted Kidney");
        }
    }
    return res.status(404).send("Invalid Deletion Attempt");
})

app.listen(3000);
