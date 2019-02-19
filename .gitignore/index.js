const Discord = require('discord.js');
const client = new Discord.Client();



// START
client.on('ready', () => {
	client.user.setActivity(' de la musique', { type: 'LISTENING' });
	client.channels.find("id", "539847850666885131").send("ZIK! aime twerker !");
	client.user.setAvatar('https://theotime.me/discord/ZIK!.png');
	client.user.setUsername('ZIK!');
});

// Login
client.login(env.process.TOKEN);
