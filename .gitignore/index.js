/* ZIK! Bot
Created by legameur6810#4488
For the server Theotime.me
https://discord.gg/PuU3BSJ
*/

/*   1 / Variables
====================================================== */

const Discord = require('discord.js'), 
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
	],
      chat_list = [
	 "",
	 "https://vincent-p.netlify.com/discord/zik!/chat1.png",
	 "https://vincent-p.netlify.com/discord/zik!/chat2.png",
	 "https://vincent-p.netlify.com/discord/zik!/chat3.png",
	 "https://vincent-p.netlify.com/discord/zik!/chat4.png",
	 "https://vincent-p.netlify.com/discord/zik!/chat5.png",
	 "https://vincent-p.netlify.com/discord/zik!/chat6.png"
      ],
      chien_list = [
	 "",
	 "https://vincent-p.netlify.com/discord/zik!/chien1.jpg",
	 "https://vincent-p.netlify.com/discord/zik!/chien2.png",
	 "https://vincent-p.netlify.com/discord/zik!/chien3.png",
	 "https://vincent-p.netlify.com/discord/zik!/chien4.png",
	 "https://vincent-p.netlify.com/discord/zik!/chien5.png",
	 "https://vincent-p.netlify.com/discord/zik!/chien6.png"
      ];


const prefix = "!";



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
	const prefix = "!";
	var command = msg.content.split(" ")[0].slice(prefix.length).toLowerCase(),
       		args = msg.content.split(" ").slice(1);
    	let suffix = args.join(" ");
	
	if(!msg.content.startsWith(prefix)) {
	   return;
	}
	
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
	
	// Pour éviter que le bot se réponde tout seul
	if (msg.author.bot) return false;
	if (msg.channel.type == "dm") return false;

	if ( msg.member.roles.find(val => val.name === 'Muted')) {
		msg.delete();
		msg.author.createDM().then(channel => {
			return channel.send('Désolé, vous avez été mute car vous n\'avez pas respecté les <#540256081293606915>');
	 	});
		return false;
	}
	

	
	
/*   4 / Custom commande 
====================================================== */
	// Réponds a Roboto
	if (msg.content == "Hey, je suis prêt à faire feu !"){
		msg.channel.send('Cool ta vie !');
	}
	
	// Usercount
	if(command === "usercount") {
		const nbrmember = msg.member.guild.memberCount;
		msg.channel.send({"embed":{
			"title":"**:boy: Nombres d'utilisateur :girl: **","description":"Il y a actuellement "+nbrmember+" personnes uniques sur le serveur !",
			"color":16777215
		}});
	}
	
	// ZIK! Admin
	if(command === "admin") {
		msg.channel.send({"embed":{
			"title":"Mes créateurs","description":"Mon développeurs principal est : @legameur6810#4488\nMon dévelopeurs secondaire est : @Théotime#6461\n\nSe sont mes uniques créateur, si une personne essaye de se faire passer pour eux :\n !report @sonspeudo raison\nExemples : !report @legameur6810#4488 Le meilleurs admins",
			"color":16777215
		}});
	}

	if(command === "cat") {
		const chat_index = Math.floor(Math.random() * (chat_list.length - 1) + 1);
		const chat_index_embed = chat_list[chat_index];
		const msgmembername = msg.member.user;
		msg.channel.send({"embed": {
        		"color": 16777215,
        		"title": "Voila",
        		"description": "Voici le chat que "+msgmembername+" a demandé !\n\n",
			"image": {
           		"url": chat_index_embed
		        }
		}});
	}
	if(command === "dog"|| command === "chien") {
		const chien_index = Math.floor(Math.random() * (chien_list.length - 1) + 1);
		const chien_index_embed = chien_list[chien_index];
		const msgmembername = msg.member.user;
		msg.channel.send({"embed": {
        		"color": 16777215,
        		"title": "Voila",
        		"description": "Voici le chien que "+msgmembername+" a demandé !\n\n",
			"image": {
           		"url": chien_index_embed
		        }
		}});
	}
	
	
	if (command === "say") {
	const saymembername = msg.member.user;
		if(isAdmin()) {
			msg.delete();
			if (!suffix) {
				msg.author.createDM().then(channel => {
					return channel.send({"embed": {
						"title": "Erreur de syntaxe",
						"color": 16711680,
						"description": "Vous avez faire une erreur de syntaxe, voici la commande :\n\n!say Mon message"
    					}});
	 			});
				return;
			}
			
			msg.channel.send(`${suffix}`);
		}else {
			msg.delete();
			if (!suffix) return;
			msg.channel.send(`${suffix}\n\nCe message a été posté par : ${saymembername}`);
		}
	}
	
	
	
});


/*   5 / Login
====================================================== */

client.login(process.env.TOKEN);
