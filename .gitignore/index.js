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
		if (msg.member.roles.find('name', 'Fondateurs')){
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
	
	// Usercount
	if(command === "usercount") {
		const nbrmember = msg.member.guild.memberCount;
		const nbrmembernoBot = nbrmember - 6;
		msg.channel.send({"embed":{
			"title":"**:boy: Nombres d'utilisateur :girl: **","description":"Il y a actuellement "+nbrmember+" comptes (bot + utilisateur) sur le serveur !\nIl y a "+nbrmembernoBot+" utilisateurs sans les bots !",
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
	
	// Random cat
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
	
	//Random dog
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
	
	// Say
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
			msg.channel.send(`${suffix}\n\nCe message a été posté par : ${saymembername}`);
		}
	}
	
	// code
	if (command === "code") {
	const saymembername = msg.member.user;
		if(isAdmin()) {
			msg.delete();
			if (!suffix) {
				msg.author.createDM().then(channel => {
					return channel.send({"embed": {
						"title": "Erreur de syntaxe",
						"color": 16711680,
						"description": "Vous avez faire une erreur de syntaxe, voici la commande :\n\n!code Mon code"
    					}});
	 			});
				return;
			}
			
			msg.channel.send(`\`\`\`Markdown\n${suffix}\`\`\``);
		}else {
			msg.delete();
			if (!suffix) {
				msg.author.createDM().then(channel => {
					return channel.send({"embed": {
						"title": "Erreur de syntaxe",
						"color": 16711680,
						"description": "Vous avez faire une erreur de syntaxe, voici la commande :\n\n!code Mon code"
    					}});
	 			});
				return;
			};
			msg.channel.send(`\`\`\`Markdown\n${suffix}\`\`\`\n Posté par ${saymembername}`);
		}
	}
	
	//help or aide
	if(command === "help"||command === "aide"||command === "aides") {
		const helpmembername = msg.member.user;
			msg.delete()
			msg.author.createDM().then(channel => {
				return channel.send({"embed": {
					"title": "Commande de ZIK!",
					"color": 16777215,
					"description": "Voici le prefix de ZIK! : !\n\n:ferris_wheel: Commande fun :ferris_wheel: \n!`dog` : Montre une image aléatoire de chien\n!`cat` : Montre une image aléatoire de chat\n\n:pencil2: Commande utile :pencil2: \n`!usercount` : Donne le nombre d'utilisateurs sur le serveur\n`!say` votre message : Affiche votre message\n`!code` votre code : Affiche votre code\n`!aide` ou `!help` : Affiche les commande de ZIK!"
				   }});
		});
		msg.reply("La liste des commandes vous à été envoyé en mp !");
	}
	
	// cFakeBAN
	if(command === "fakeban") {
		msg.delete();
		if(!suffix) {
			msg.reply("ok");
		}
		msg.channel.send(`${suffix}`);
	}
});


/*   5 / Login
====================================================== */

client.login(process.env.TOKEN);
