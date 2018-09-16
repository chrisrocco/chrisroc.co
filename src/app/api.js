const fs = require('fs')
const bodyParser = require('body-parser')
const express = require('express')

const getAPI = (ctrl) => {

    const sourceRoot = __dirname + '/..'

    // Helper
    const renderPage = name => (req, res) => res.send(fs.readFileSync(`${sourceRoot}/pages/${name}.html`).toString())

    // Bootstraping App
    const app = express()
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())

    // Static Files
    app.use(express.static(`${sourceRoot}/assets`))

    // Route to Pages
    app.get('/', renderPage('landing'))

    app.post('/api/contact', (req, res) => {
        ctrl.contact.sendContactEmail(req.body)
            .then(() => res.json({ message: 'Contact email sent!' }))
            .catch(err => res.status(500).json(err))
    })

    return app
}

module.exports = getAPI