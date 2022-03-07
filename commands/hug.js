const Chariot = require('chariot.js');
//FIXME: fix mentions
class mention extends Chariot.Event {

    constructor() {
        super('messageCreate')
    }

    async execute(message) {
        const args = message.content.split(/ +/)
        const command = args.shift().toLowerCase();

            if(message.content.startsWith(";hi")) {
                console.log("work")
            var mention = message.mentions.members.first()
            if(mention == 285707976356921344) return message.channel.createMessage("Don't ping Kami");
            if(mention == null) return message.channel.createMessage("Mention Someone first");
            else {
                return message.channel.createMessage("Hi")
            }}
    }
}

module.exports = new mention()