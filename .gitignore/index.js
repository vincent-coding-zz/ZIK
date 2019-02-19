const Discord = require('discord.js'),
	client = new Discord.Client(),
	activities_list = [
	  "",
	  "de la musique", 
	  "Imagine Dragons - Believer",
	  "un concert de musique",
	  "les derniers album sorties",
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

client.on('message', message => {
	if (message.author.bot) return;
	if (message.channel.type === 'dm') return;

	if(message.content =="ping") {
		msg.reply("Pong")	
	}
});

// Login
client.login(process.env.TOKEN);
