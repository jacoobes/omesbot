const Argument = require('sern_handler/Argument/argumentHandler') 
const Payload = require('sern_handler/data_events/payload') 
const {Message} = require('discord.js')
 
module.exports = { 
name : "test", 
description : "tes", 
//usesArguments : { 
//     array : true, 
//     argType : "flex flex", 
//     validate : (args) => {
  // if true executes command else return
  //     }, 
//     validateError : "args must be blah...", 
//     noArgumentsError : "bro u got no arguments", 
//     typeError: "wrong types", 
//}, 
aliases : [/*put aliases here*/], 
// ownerOnly : true, 
 //notOwnerError: "u are not the owner, 
/**
  * 
  * @param {Payload} payload 
  * @param {Message} message 
  * @param {Argument} argument 
  */
  callback : (payload, message, argument) => {
        
         } 
}