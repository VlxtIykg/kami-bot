const Chariot = require("chariot.js")

class ping extends Chariot.Command {
    constructor() {
        super();

        this.name = "ping";
        this.cooldown = 1;
        this.help = {
            message: 'A super simple ping command',
            usage: 'ping',
            example: ['ping'],
            inline: true
        }
    }

    async execute(message, args, chariot) {
        message.channel.createMessage("Pong!");
    }
}

module.exports = new ping();
