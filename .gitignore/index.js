/* ZIK! Bot
Created by legameur6810#4488
For the server Theotime.me
https://discord.gg/PuU3BSJ
*/

/*   1 / Variables
====================================================== */

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


/*   2/ Lancement du bot
====================================================== */
client.on('ready', () => {
	client.user.setActivity('Reload');
	client.channels.find("id", "539847850666885131").send("ZIK! aime twerker !");
	client.user.setUsername('ZIK!');
	setInterval(() => {
	      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
	      client.user.setActivity(activities_list[index], { type: 'LISTENING' });
	}, 2500);
});


/*   3 / Functions
====================================================== */
client.on('message', msg => {
	var m = msg.content.toLowerCase();
	
	let messageArray = m.split(' ');
	let command = messageArray[0];
	let args = messageArray.slice(1);

	function isAdmin(){
		if (msg.author.id == "483335511159865347" || msg.author.id == "467630539898224661"){
			return true;
		} else {
			return false;
		}
	}
	
	function isAuth(){ // use msg.author
		if (msg.member.roles.find('name', 'noBot')){
			return false;
		} else {
			return true;
		}
	}
	
	if (msg.author.bot) return false;
	if (msg.channel.type == "dm") return false;
	
	
/*   4 / Custom commande 
====================================================== */
	// Réponds a Roboto
	if (msg.content == "Hey, je suis prêt à faire feu !"){
		msg.channel.send('Cool ta vie !');
	}
	
	// Usercount
	if(m=="usercount") {
		const nbrmember = msg.member.guild.memberCount;
		msg.channel.send({"embed":{
			"title":"**:boy: Nombres d'utilisateur :girl: **","description":"Il y a actuellement "+nbrmember+" personnes uniques sur le serveur !",
			"color":16777215
		}});
	}
	
	// ZIK! Admin
	if(m=="zik! admins"||m=="zik admins"||m=="zik! admin"||m=="zik admin") {
		msg.channel.send({"embed":{
			"title":"Mes créateurs","description":"Mon développeurs principale est : @legameur6810#4488\nMon dévelopeurs secondaire est : @Théotime#6461\n\nSe sont mes uniques créateur, si une personne essaye de se faire passer pour eux :\n !report @sonspeudo raison\nExemples : !report @legameur6810#4488 Le meilleurs admins",
			"color":16777215
		}});
	}
	
	// Report un utilisateur
	//Non fonctionnel !
	if(m=="!report") {
		let reportedUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
		
		if (!reportedUser) {
			return msg.channel.send("L'utilisateur n'existe pas !");	
		}
		let reportedReason = args.join(" ").slice(22);
		
		
		let reportEmbed = new Discord.RichEmbed(),
		   .setDescription("Reports"),
		   .setColor("#FF0000"),
		   .addField("Utilisateur reporté", `${reportedUser} (ID: ${reportedUser.id})`),
		   .addField("Utilisateur reporté", `${msg.author} (ID: ${msg.author.id})`),
	 	   .addField("Canal", msg.channel),
		   .addField("Raison", reportedReason);
		
		let reportChannel = msg.guild.channels.find(`id`, "547878085542805505");
		if (!reportChannel) {
			return msg.channel.send("Salon introuvables !");
		}
		msg.delete();
		reportChannel.send(reportEmbed);
	}
	
});



/*   5 / Login
====================================================== */
client.login(process.env.TOKEN);
