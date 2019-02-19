const Discord = require('discord.js'),
	client = new Discord.Client(),
      	ytdl = require('./node_modules/ytdl-core'),
	activities_list = [
	  "",
	  "de la musique", 
	  "Imagine Dragons - Believer",
	  "un concert de musique",
	  "les derniers albums sorties",
	  "la radio"
	];



// START
client.on('ready', () => {
	client.user.setActivity('Reload');
	client.channels.find("id", "539847850666885131").send("ZIK! aime twerker !");
	client.user.setAvatar('https://theotime.me/discord/ZIK!.png');
	client.user.setUsername('ZIK!');
	setInterval(() => {
	      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
	      client.user.setActivity(activities_list[index], { type: 'LISTENING' });
	}, 2500);
});

client.on('message', msg => {
	if (msg.channel.type === 'dm'){
		msg.channel.send("Je ne réponds pas au message privé !");
	}
	if (msg.content == "Hey, je suis prêt à faire feu !"){
		msg.channel.send('Cool ta vie !');
	}
});

// Login
client.login(process.env.TOKEN);
