const Chariot = require("chariot.js")

class test extends Chariot.Command {
    constructor() {
        super();

        var id = 285707976356921344;
        var id2 = 711127058532532234;
        this.name = "ft";
        this.subcommands = ["link", `<@!285707976356921344>`, `<@!711127058532532234>`];
        this.cooldown = 0;
        this.help = {
            message: 'A super simple embed command',
            usage: 'embed <[link]>',
            example: ['embed', 'embed link'],
            inline: false
        }
    }

    async link(message, args, chariot) {
        message.channel.createMessage("Pong!");
    }
    async "<@!285707976356921344>"(message, args, chariot) {
        message.channel.createMessage("You are not allowed to ping kami.");
        return;
    }
    async "<@!711127058532532234>"(message, args, chariot) {
        message.channel.createMessage("You are not allowed to ping unthink.!");
        return;
    }
    async execute(message, args, chariot) {
        const simpletest = message.channel.createEmbed(new Chariot.RichEmbed()
        .setColor('#FF0000')
        .setTitle('Simple Embed')
        .setDescription('This is an embed')
        .addField('Work', 'No work',true)
        .addField('Work', 'No work',true)
        .addBlankField(true)
    );
    }
}

module.exports = new test();