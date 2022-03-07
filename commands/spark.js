const Chariot = require("chariot.js")

class sparkcmd extends Chariot.Command {
    constructor() {
        super();

        this.name = "spark";
        this.alias = "sparkcmd", "sparky", "sparklez", "sparkle"
        this.cooldown = 0;
        this.help = {
            message: 'A designated command for sparky!!',
            usage: 'spark',
            example: ['spark'],
            inline: true
        };
        this.allowDMs = true;
        this.owner = false;
    }

    async execute(message, args, chariot) {
        let lapisgained = 5 || 6 || 4;
        let lavatick = (23-(23*(25/100)));
        let lapisspeed = 23 || lavatick;
        let permin = 5*(60/23) || 5*(60/parseInt(lavatick)) 
        let perhour = permin*60;
        enchanted(perhour);
        function calculation(lapisgained, lapisspeed, permin, enchanted_form) {
            console.log(lapisgained, lapisspeed, permin, perhour, enchanted_form)
            //150 is the amount we want, we get 4.89 enchanted lapis per hour
            //30.6 is the amount of hours required
            var timetaken = 150/enchanted_form;
            //30.6 hours = func
            var timer = timetaken;
            var ms = hourtoms(timer, 0, 0);
            //ms = 110399999.99999997 which is 30.6 hours
            console.log(ms)
/*             setInterval(() => {
                var kamiID = 285707976356921344;
                message.channel.createMessage(`<@!285707976356921344> control`)
            }, 10000) */
            setInterval(() => {
                var sparkyID = 327420703337086979;
                message.channel.createMessage(`<@!327420703337086979>, you should probably collect your minions now.`)
                console.log(ms)
            }, ms);
            setInterval(() => {
                var sparkyID = 327420703337086979;
                message.channel.createMessage(`<@!327420703337086979>, you should probably collect your minions now.`)
                console.log(ms)
            }, ms);
            return;
        }
        function enchanted(perhour) {
            let enchanted_form = perhour/160
            console.log(enchanted_form);
            calculation(6, (23-(23*25/100)), 5*(60/(23-(23*25/100))), enchanted_form);
            return;
        }
        function hourtoms(duration, min, sec) {
            var ms = (duration*60*60+min*60+sec)*1000;
            return ms;
        }
    }
}

module.exports = new sparkcmd();
