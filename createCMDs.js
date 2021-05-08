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
    type: 'list',
    name: "aliases",
    message: "What aliases should this command have? If none, put null"
  },
  {
    type: 'text',
    name: 'ownerOnly',
    message: "Should this command be only for the owner? (y / n)",
    validate: ownerOnly => ownerOnly === 'y' || ownerOnly === 'n' ? true : false 
  },

  {
    type: "text",
    name: "callback",
    message: "Would this callback function be async? (y / n)",
    validate: callback => callback === 'y' || callback === 'n' ? true : false
  }
];

(async () => {
  const response = await prompts(questions);

  let commandFileTemplate = "module.exports = { \n";

  for( let key in response) {

     
    // {
    //   name: 'aa',
    //   description: 'a',
    //   usesArguments: 'n',
    //   aliases: [ 'n' ],
    //   ownerOnly: 'n',
    //   callback: 'n'
    // }


  }
  commandFileTemplate += "}"

//   fs.writeFile(path.join("cmds", `${response.name}.js`), 'd', (err) => {
//     if(err) console.log(err)
//   } )
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