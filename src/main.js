const RootModule = require('./app/root')

const main = async () => {

    // load the environment and app config
    require('dotenv').config()
    const {env} = process
    const config = {
        mailgun: {
            apiKey: env.MG_SECRET,
            domain: env.MG_DOMAIN
        },
        sendEmailsTo: env.SEND_CONTACT_EMAILS_TO
    }

    // bootstrap the root module and launch the server
    RootModule(config).api.listen(8080, () => console.log('listening on port 8080'))
}

main()