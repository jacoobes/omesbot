const {Client} = require('discord.js')
const info = require('./info.json')
const{sern_handler, Payload} = require('sern_handler')

const client = new Client()



const handler = new sern_handler(new Payload(
    {
        commands: '/cmds',
        events: '/events',
        client: client,
        prefix: '!',
        owners: ["182326315813306368", "321499931917680641"]
    }

))

console.log("logging in")



client.login(info.clientID)
