const Mailgun = require('mailgun-js')
const ContactModule = require('./contact')
const getAPI = require('./api')

const RootModule = (config) => {

    // init external modules
    const mailgun = Mailgun(config.mailgun)

    // init internal modules
    const contact = ContactModule(mailgun)({ to: config.sendEmailsTo })
    const api = getAPI({ contact })

    // root module exports
    return {
        api
    }

}

module.exports = RootModule