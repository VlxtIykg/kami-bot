const Chariot = require("chariot.js")
//TODO: finish ehp bot
class ehp extends Chariot.Command {
    constructor() {
        super();

        this.name = "embed";
        this.cooldown = 0;
        this.help = {
            message: 'A super simple embed command',
            usage: 'embed <[link]>',
            example: ['embed', 'embed link'],
            inline: false
        }
    }

    async execute(message, args, chariot) {
        message.channel.send("Hai");
    }
}

module.exports = new ehp();