const Argument = require('sern_handler/Argument/argumentHandler')
const Payload = require('sern_handler/data_events/payload')
const {Message} = require('discord.js')

module.exports = { 
name : "help", 
description : "lists all commands", 
// ownerOnly : false, 
/**
 * 
 * @param {Payload} payload 
 * @param {Message} message 
 * @param {Argument} argument 
 */
 callback : (payload, message, argument) => {

        let {MessageEmbed} = require('discord.js')
        
        let embed = new MessageEmbed()
        .setTitle('Help')
        message.channel.send(embed)

        
        
         } 
}