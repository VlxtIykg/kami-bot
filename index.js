const chariot = require("chariot.js")
require("dotenv").config();

let forgery = 926167132943831081;
let trollchickenguild = 935068334175715408;

class MyExampleBot extends chariot.Client {
    constructor() {
        super(new chariot.Config(
            `${process.env.token}`, 
            {
                prefix: ['process.env.prefix', '@mention', '-'],
                guildPrefixes: [
                    { guildID: `${trollchickenguild}`, prefix: '-' },
                    { guildID: `${forgery}`, prefix: '?' }
                ],
                defaultHelpCommand: true,
                primaryColor: 'black',
                owner: [
                    '285707976356921344'
                ],
                excludeDirectories: [
                    'none'
                ]
            },
            {
                messageLimit: 50,
                defaultImageFormat: 'png'
            }
            ));
        }
    }
    module.exports = new MyExampleBot();
    
    console.log(MyExampleBot);