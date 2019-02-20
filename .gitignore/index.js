const config = require('./config.json'),
      	cookie = require('./cookie.json'),
	Discord = require('discord.js'),
	client = new Discord.Client(),
      	ytdl = require('ytdl-core'),
	activities_list = [
	  "",
	  "de la musique", 
	  "Imagine Dragons - Believer",
	  "un concert de musique",
	  "les derniers albums sorties",
	  "la radio",
	  "petit poney. Attends quoi !"
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

// Pour roboto (channel privé)
client.on('message', msg => {
	if (msg.channel.type === 'dm') return;
	if (msg.content == "Hey, je suis prêt à faire feu !"){
		msg.channel.send('Cool ta vie !');
	}
});

// MUSIQUE
client.on('message', async message => {
	if (message.author.bot) return;
	if (message.channel.type === 'dm') return;

	//	Usercount
	if(message.content == "usercount") {
		const nbrmember = message.member.guild.memberCount;
		message.channel.send({"embed":{"title":"**:boy: Nombres d'utilisateur :girl: **","description":"Il y a actuellement "+nbrmember+" personnes uniques sur le serveur !","color":16777215}});
	}
});


// Login
client.login(process.env.TOKEN);
