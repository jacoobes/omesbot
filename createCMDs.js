const prompts = require('prompts')

const fs = require('fs');
const path = require('path');

const questions = [
  {
    type: 'text',
    name: 'name',
    message: 'name of command?',
    validate: command => !command.match(/[a-zA-Z]/) ? `Not valid command name` : true
  },

  {
    type: 'text',
    name: 'description',
    message: "What would your description be?",
    validate: description => !description.match(/[a-zA-Z]/)? `Not valid description` : true
  },
  {
    type: 'text',
    name: 'usesArguments',
    message: "Will this command use arguments? (y / n)",
    validate: usesArgs => usesArgs === 'y' || usesArgs === 'n' ? true : false  
  },
  {
    type: 'text',
    name: "aliases",
    message: "Would this command have aliases? (y / n)",
    validate: aliases => aliases === 'y' || aliases === 'n' ? true : false
  },
  {
    type: 'text',
    name: 'ownerOnly',
    message: "Should this command be only for the owner? (y / n)",
    validate: ownerOnly => ownerOnly === 'y' || ownerOnly === 'n' ? true : false 
  },

];

function usesArguments(header, response) {
  let argumentBody = ""  

  if(response[header] === 'n')  return argumentBody
  
  argumentBody += `//${header} : { \n`
  argumentBody += `//     array : true, \n`
  argumentBody += `//     argType : "flex flex", \n`
  argumentBody += `//     validate : (args) => {
  // if true executes command else return
  //     }, \n`
  argumentBody += `//     validateError : "args must be blah...", \n`
  argumentBody += `//     noArgumentsError : "bro u got no arguments", \n`
  argumentBody += `//     typeError: "wrong types", \n`
  
  argumentBody += '//},'

  return argumentBody
}

function aliases(header, response) {
  if(response[header] == 'n') return ""
  
  return `aliases : [/*put aliases here*/],`
}

function ownerOnly(header, response) {
  if(response[header] === 'n') return `// ${header} : false,`

  return `// ${header} : true, \n //notOwnerError: "u are not the owner,`

}


(async () => {
  const response = await prompts(questions);
 
  function append(header, response) {
    let string = ""
    //switch case? 
    if(header === 'name') {
      string = `${header} : "${response[header]}", \n`
      }
    if(header === 'description') {
      string = `${header} : "${response[header]}", \n`
    }
    if(header === 'usesArguments') {
      string = `${usesArguments(header, response)} \n`
    }
    if(header === 'aliases') {
      string = `${aliases(header, response)} \n`
    }
    if(header === 'ownerOnly') {
      string = `${ownerOnly(header, response)} \n`
    }

    return string
  }

  let filePath = path.join("cmds", `${response.name}.js`) 
  
  fs.writeFile(filePath, "", (err) => {
    if(err) console.log(err)
  } )

  fs.appendFileSync(filePath, `const Argument = require('sern_handler/Argument/argumentHandler') \n
  const Payload = require('sern_handler/data_events/payload') \n
  const {Message} = require('discord.js') \n`) 

  console.log(response)

  fs.appendFileSync(filePath, "module.exports = { \n")
 

  for( let header in response) {
    fs.appendFileSync(filePath, append(header, response))
  }
  fs.appendFileSync(filePath, `/**
  * 
  * @param {Payload} payload 
  * @param {Message} message 
  * @param {Argument} argument 
  */
 `)
  fs.appendFileSync(filePath, ` callback : (payload, message, argument) => {
        
         } \n`)
 
  fs.appendFileSync(filePath, "}")

   
 })();







  
//   module.exports = {
//   name: "profile", 
//   description: "shows user profile",
//   usesArguments: {                                    
//      array: true,                                     
//      argType: 'flex flex',                            
//      validate: (args) => {                            
//        return args?.[0] === 'Baloney' //good practice to optional chain your validate function!
//      },
//      validateError: "Not valid, bro",                 
//      noArgumentsError: "No arguments were attached",
//      typeError: "Incorrect types received"   
//    },
//   aliases: ["p", "prof", "profil"],
//   ownerOnly: false,                                  
//   notOwnerError: "You do not have perms.",            

//   callback: async (payload, message, {argument, utils: {check}}) => { 
  
//      console.log(argument)
//   },
// };
//