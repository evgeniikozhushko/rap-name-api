const express = require('express')
const app = express()
const PORT = 8000

// Serve static files from the public directory
app.use(express.static('public'))

const rappers = {
    '21 savage': {
        'age': 21,
        'name': 'Sheyaa Bin Abraham-Joseph',
        'birthplace': 'London, England'
    },
    'cardi b': {
        'age': 25,
        'name': 'Belcalis Almanzar',
        'birthplace': 'The Bronx, New York City'
    },
    'kanye west': {
        'age': 41,
        'name': 'Kanye Omari West',
        'birthplace': 'Atlanta, Georgia'
    },
    'drake': {
        'age': 32,
        'name': 'Aubrey Drake Graham',
        'birthplace': 'Toronto, Ontario, Canada'
    },
    'unknown': {
        'age': 'unknown',
        'name': 'unknown',
        'birthplace': 'unknown'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html') // This line indicates to the program to tell it where to start looking for a file.
})

app.get('/api/:name', (req, res) => {
    const rapperName = req.params.name.toLowerCase()
    // console.log(rappers[rapperName].age)
    if (rappers[rapperName]) { // If the rapperName is in the rappers object, then return the object.
        res.json(rappers[rapperName])
    }else{
        res.json(rappers['unknown'])
    }
    // res.json(rappers)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})