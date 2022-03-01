import Discord from 'discord.js'
import axios from 'axios'
const client = new Discord.Client();

client.on('ready', async() => {
  console.log(`Logged in as ${client.user.tag}!`)
});

const raccoonApi = async () => {
    const answer = (await axios.get('https://some-random-api.ml/animal/raccoon')).data
    return answer
}

const myAPI = async (url) => {
    const answer = (await axios.get('https://raccoon-project.herokuapp.com/'+url)).data
    console.log(answer)
    return answer
}

client.on('message', async (msg) => {
    
    if(msg.content.substring(0,2) !=="!r") return

    if (["!r coon", "!raccoon"].includes(msg.content)) {
        const reply = (await myAPI('coon')).image
        msg.channel.send(msg.author, {files: [reply]})
    } 
    else 
    if (["!r coon bomb", "!raccoon bomb"].includes(msg.content)) {
        const reply = (await myAPI('coons')).map(reply => reply.image)
        msg.channel.send(msg.author, {files: [...reply]})
    }
    else 
    if(msg.content === "!r fact"){
        const reply = (await raccoonApi()).fact
        msg.channel.send(reply)
    }
    else 
    if(["!r", "!r help", "!raccoon help"].includes(msg.content)){
        const reply = `\`\`\`!r coon/!raccoon - Gives you a random raccoon picture \n !raccoon bomb / !r coon bomb - Gives you a lot of random raccoon pictures =P\n !r fact - Gives you a random raccoon fact\`\`\`` 
        msg.channel.send(reply)
    }
    console.log(`${msg.author} acabou de me usar dizendo ${msg.content}`)
    msg.react('🦝')
});

client.login('OTQ3MTg0NTk0NjQ0NTEyODM4.YhpkZQ.Qx0OaZxdp2jD5OS00zu4XFShDYE')
