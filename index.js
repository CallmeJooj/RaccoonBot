import Discord, { MessageFlags } from 'discord.js'
import axios from 'axios'
const client = new Discord.Client();

client.on('ready', async() => {
  console.log(`Logged in as ${client.user.tag}!`)
  console.log((await axios.get('https://some-random-api.ml/animal/raccoon')).data)
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
        msg.react('🦝')
    } 
    else 
    if (["!r coon bomb", "!raccoon bomb"].includes(msg.content)) {
        const reply = (await myAPI('coons')).map(reply => reply.image)
        msg.channel.send(`${msg.author}`) 
        reply.forEach(element => {
            msg.channel.send(element)
        });
        msg.react('🦝')
    }
    else 
    if(msg.content === "!r fact"){
        const reply = (await raccoonApi()).fact
        msg.channel.send(reply)
        msg.react('🦝')
    }
    else 
    if(["!r", "!r help", "!raccoon help"].includes(msg.content)){
        const reply = `\`\`\`!r coon/!r raccoon - Gives you a random raccoon picture\`\`\`\`\`\`!r fact - Gives you a random raccoon fact\`\`\`` 
        msg.channel.send(reply)
        msg.react('🦝')
    }
});

client.login('token')
