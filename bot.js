const Discord = require("discord.js");
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("523411510991519744");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(` **' Welcome To Server Magic , منور يا قلب :heart: `), 4000)        
}
});


client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
