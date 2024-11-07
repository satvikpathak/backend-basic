require('dotenv').config()
import express from 'express';

const app = express();
const port =process.env.PORT || 3000
app.use(express.json())

let peepData = []
let nextId = 1

//add a new peep
app.post('/peeps', (req, res) => {
    const { name, age, city } = req.body
    const newPeep = { id: nextId++, name, age, city }
    peepData.push(newPeep)
    res.status(201).send(newPeep)
})

//get all peep
app.get('/peeps', (req, res) => {
    res.send(peepData)
})

//get a peep with id
app.get('/peeps/:id', (req, res) => {
    const peep = peepData.find(p=>p.id === parseInt(req.params.id))
    if(!peep){
        res.status(404).send('Peep not found')
    }
    res.status(200).send(peep)
})

//update peep
app.put('/peeps/:id', (req, res) => {
    const peep=peepData.find(p=>p.id === parseInt(req.params.id))

    if(!peep){
        res.status(404).send('Peep not found')
    }
    const { name, age, city } = req.body
    peep.name = name
    peep.age = age
    peep.city = city
    res.status(200).send(peep)
})

//delete a peep
app.delete('/peeps/:id', (req, res) => {
    const index=peepData.findIndex(p=>p.id === parseInt(req.params.id))
    if(index === -1){
        res.status(404).send('Peep not found')
    }
    peepData.splice(index, 1)
    res.status(204).send('deleted')
})
app.get('/', (req, res) => {
    res.send('Kidda peeps')
})
app.get('/peeps', (req, res) => {
    res.send('dogs are peeps too')
})
app.get('/twitter', (req, res) => {
    res.send('satvikpathak')
})

app.listen(port, () =>{
    console.log(`Server is running on port ${port}...`)
})