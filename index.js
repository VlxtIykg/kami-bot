const chariot = require("chariot.js")
require("dotenv").config();

let forgery = 926167132943831081;
let bruddas = 861282429624123392;
let trollchickenguild = 935068334175715408;
let uptime; let startTime;

class KamiBot extends chariot.Client {
    constructor() {
        super(new chariot.Config(
            `${process.env.token}`, 
            {
                prefix: ['process.env.prefix', '@mention', '-'],
                guildPrefixes: [
                    { guildID: '861282429624123392', prefix: '-' },
                    { guildID: `926167132943831081`, prefix: '?' },
                    { guildID: '935068334175715408', prefix: ';' }
                ],
                defaultHelpCommand: true,
                primaryColor: 'black',
                owner: [
                    '285707976356921344'
                ],
                excludeDirectories: [
                    'none', 'ehp'
                ],
                customLocales: {
                    missingPermissions: 'Command **{command}** requires following permissions: **{missingPermissions}**',
                    owner: 'You should not be playing around with this!',
                    cooldown: 'Just wait **{timeLeftFormatted}** before spamming **{command}** yet again ...',
                    nsfw: '**{command}** is an NSFW command and cannot be used here.',
                    userPermissions: {
                        title: 'Hold up ...',
                        description: 'I need you to make sure you have following permissions before using this command: **{missingUserPermissions}**',
                    }
                },
                
            },
            {
                messageLimit: 50,
                defaultImageFormat: 'png'
            }
            ));
        }
    }
    module.exports = new KamiBot();
    