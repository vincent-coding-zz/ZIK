/* ZIK! Bot
Created by legameur6810#4488
For the server Theotime.me
https://discord.gg/PuU3BSJ
*/

/*   1 / Variables
====================================================== */

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

	
	
});


/*   5 / Login
====================================================== */
client.login(process.env.TOKEN);
