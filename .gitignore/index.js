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

	let prefix = config.prefix;
	let messageArray = message.content.split(" ");
   	let cmd = messageArray[0];
    	let args = messageArray.slice(1);

	//	Usercount
	if(message.content == "!usercount") {
		const nbrmember = message.memberCount;
		message.channel.reply(`Il y a actuellement : ${nbrmember}`);
	}
});


// Login
client.login(process.env.TOKEN);
