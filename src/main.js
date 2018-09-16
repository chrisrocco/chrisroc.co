const RootModule = require('./api/root')
const getAPI = require('./api')

require('dotenv').config()

const main = async () => {

    const {env} = process
    const config = {
        mailgun: {
            apiKey: env.MG_SECRET,
            domain: env.MG_DOMAIN
        },
        sendEmailsTo: env.SEND_CONTACT_EMAILS_TO
    }

    const root = RootModule(config)

    const api = getAPI(root)
    api.listen(8080, () => console.log('listening on port 8080'))
}

main()