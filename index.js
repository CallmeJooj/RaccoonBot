import Discord from 'discord.js'
import { singleRaccoon, multipleRaccoons, raccoonFact } from './utils';
const client = new Discord.Client();

client.on('ready', async() => {
  console.log(`Logged in as ${client.user.tag}!`)
});

client.on('message', async (msg) => {
    
    if(msg.content.substring(0,2) !=="!r") return

    if (["!r coon", "!raccoon"].includes(msg.content)) {
        const reply = singleRaccoon()
        msg.channel.send(msg.author, {files: [reply]})
    } 
    else 
    if (["!r coon bomb", "!raccoon bomb"].includes(msg.content)) {
        const reply = multipleRaccoons()
        msg.channel.send(msg.author, {files: [...reply]})
    }
    else 
    if(msg.content === "!r fact"){
        const reply = (await raccoonFact()).fact
        msg.channel.send(reply)
    }
    else 
    if(["!r", "!r help", "!raccoon help"].includes(msg.content)){
        const reply = `\`\`\`!r coon/!raccoon - Gives you a random raccoon picture \n !raccoon bomb / !r coon bomb - Gives you a lot of random raccoon pictures =P\n !r fact - Gives you a random raccoon fact\`\`\`` 
        msg.channel.send(reply)
    }
    msg.react('🦝')
});

client.login('OTQ3MTg0NTk0NjQ0NTEyODM4.YhpkZQ.Qx0OaZxdp2jD5OS00zu4XFShDYE')
