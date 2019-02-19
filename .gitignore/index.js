const config = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');



// START
client.on('ready', () => {
	client.user.setActivity(' de la musique', { type: 'LISTENING' })
	client.channels.find("id", "539847850666885131").send("ZIK! aime twerker !");
	client.user.setAvatar('https://theotime.me/discord/ZIK!.png');
	client.user.setUsername('ZIK!');
});


client.on('message', async message => {
	if (message.author.bot) return;
	if (message.channel.type === 'dm') return;

	let prefix = config.prefix;
	let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);


	if(cmd == `${prefix}play`) {
		    // Vérification 
		if(!message.member.voiceChannel) 
			return message.channel.send("Connectez-vous à un salon vocal !");
		if(message.guild.me.voiceChannel) 
			return message.channel.send("Le bot est déjà connecté à un salon vocal");
		if(!args[0])
			return message.channel.send("Merci de préciser un lien YouTube !");
	
		const validate = await ytdl.validateURL(args[0]);
		if (!validate) return message.channel.send("Désolé, l'url n'est pas valide !");

		if(message.member.voiceChannel) {
			if(!message.guild.me.voiceChannel){
				if(args[0]){
					const info = ytdl.getInfo(args[0]);
					const connection = message.member.voiceChannel.join();
					const dispatcher = connection.playStream(ytdl(args[0], { filter: 'audioonly'}));
					ytdl.getInfo(args[0]);

					//message.member.voiceChannel.join();

				}
			}
		}
	}

	if(cmd == `${prefix}stop`) {
		// Vérification 
		if(!message.member.voiceChannel)
			return message.channel.send("Connectez-vous à un salon vocal !");
		if(!message.guild.me.voiceChannel) 
			return message.channel.send("Le bot n'est pas connecté dans un salon vocal !");
		if(!message.guild.me.voiceChannelID !== message.member.voiceChannelID) 
			return message.channel.send("Vous n'êtes pas dans le même salon que le bot");
		
		if(message.member.voiceChannel) {
			if(message.guild.me.voiceChannel) {
				if(message.me.voiceChannelID) {
					message.guild.me.voiceChannel.leave();
					message.delete();
				}
			}
		}
	}
});

// Login
client.login(env.process.TOKEN);
