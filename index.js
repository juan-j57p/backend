require('dotenv').config();
require('./mongo');

const espress = require('express');
const morgan = require('morgan');
const cors = require('cors');
const Phone = require('./models/Phone');

const app = espress();

<<<<<<< HEAD

app.use(espress.static('build'));
=======
>>>>>>> parent of 8dad42d (all changes)
app.use(cors());
app.use(espress.json());
app.use(espress.urlencoded({ extended: true }));
app.use((req, res, next) => {
    if (req.method !== 'POST'){
       return morgan('tiny')(req, res, next)
    }
    next()
});


app.get('/api/persons', (req, res) => {
   Phone.find({}).then( phones => {
     res.json(phones)
   })
})

app.get('/info', (req, res) => {
    res.send(
       `<div>  
            <p>Phonebook has info for ${persons.length} people</p>
            <p>${new Date()}</p>
        </div>`
    )
})

app.get('/api/persons/:id', (req, res) => {
    const {id} = req.params
    Phone.findById(id).then (phone => {
        if (phone) {
        res.json(phone)
        } else {
        res.status(404).end()
       }
    })
})

    

app.delete('/api/persons/:id', (req, res, next) => {
    const {id} = req.params

    Phone.findByIdAndRemove(id).then(result => {
       res.status(204).end()
    }).catch(error => next(error))
    res.status(204).end()
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body', {
    stream: {
        write: (message) => console.log(message.trim())
    }
}));
morgan.token('body', (req) => JSON.stringify(req.body));

app.post('/api/persons', (req, res) => {
    const person = req.body
    console.log(person)

    if (!person.name || !person.number) {
        return res.status(400).json({ error: 'name or number missing' })
    }
    if (persons.find(person => person.name === person.name)) {
        return res.status(400).json({ error: 'name must be unique' })
    } 

    const newPerson = new Phone ({
        name: person.name,
        number: person.number
    })

    newPerson.save().then( savedPerson => {
        res.json(savedPerson)
    })
})

app.use((error, req, res,next)=> {
    console.error(errror)
   
    if (error.name === 'CastError'){
        res.status(400).end()
    }else(
        res.status(500).end()
    )
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
