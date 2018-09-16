const Mailgun = require('mailgun-js')
const ContactModule = require('./contact')

const RootModule = (config) => {

    const mailgun = Mailgun(config.mailgun)

    const contact = ContactModule(mailgun)({ to: config.sendEmailsTo })

    return {
        ctrl: {
            contact
        }
    }

}

module.exports = RootModule