const config = require('./config.json'),
	Discord = require('discord.js'),
	client = new Discord.Client(),
      	ytdl = require('ytdl-core'),
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

	// !play
	if(cmd == `${prefix}play`) {
		if(message.member.voiceChannel) {
			if(!message.guild.me.voiceChannel){
				if(args[0]){
					const validate = await ytdl.validateURL(args[0]);
					if(validate){
						//const info = ytdl.getInfo(args[0]);
						//const connection = message.member.voiceChannel.join();
						//const dispatcher = connection.playStream(ytdl(args[0], { filter: 'audioonly'}));
						//ytdl.getInfo(args[0]);

						message.member.voiceChannel.join();
					}else if (!validate) {
						return message.channel.send("Désolé, l'url n'est pas valide !");
					}
				}else if(!args[0]) {
					return message.channel.send("Merci de préciser un lien YouTube !");
				}
			}else if(message.guild.me.voiceChannel) {
				return message.channel.send("Le bot est déjà connecté à un salon vocal");
			}
		}else if(!message.member.voiceChannel) {
			return message.channel.send("Connectez-vous à un salon vocal !");
		}
	}
});

// Login
client.login(process.env.TOKEN);
