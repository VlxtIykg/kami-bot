const Chariot = require("chariot.js")

/* Ready Event */
class Ready extends Chariot.Event {
        /**
     * Instantiating the superclass with the appropriate event name
     */
    constructor() {
        super('ready');
    }

    /**
     * No parameters since the "ready" event doesn't emit any
     */
    async execute() {
       Chariot.Logger.event(`Bot is ready in ${this.client.guilds.size} guilds!`); 
    }
}

module.exports = new Ready();

/* Guild Event */

class GuildJoin extends Chariot.Event {

    constructor() {
        super('guildCreate');
    }

    async execute(guild) {
        Chariot.Logger.event(`Joined a new guild called ${guild.name}!`);
    }
}

module.exports = new GuildJoin();