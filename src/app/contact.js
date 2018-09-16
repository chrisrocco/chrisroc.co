
const ContactModule = (mailgun) => ({ to }) => {
    return {
        sendContactEmail: ({from, text, name}) => {
            return mailgun.messages().send({
                to,
                from,
                subject: "New Website Contact",
                text: `From: ${name} \n Message: ${text}`
            })
        }
    }
}

module.exports = ContactModule