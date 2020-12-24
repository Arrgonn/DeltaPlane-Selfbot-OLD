const { Client, RichEmbed } = require('discord.js');
const { red, green, blue, yellow, cyan, white } = require('chalk');
const bot = new Client();
const settings = require('./settings.json');

//CONSOLE LOG
console.log(yellow('============================================================================'));
console.log((`[SELF BOT] Thank you for using my services`));
console.log((`[SELF BOT] =======DeltaPlane SelfBot========`));
console.log((`[SELF BOT] Thank you for using my services`));
console.log(yellow('============================================================================'));
console.log((`Your prefix is: ${settings.prefix}`));
console.log((`Nitro Sniper : SOON...`));
console.log((`Giveways Sniper : SOON...`));
console.log((``));
console.log(yellow('============================================================================'));
//fin console log



bot.on('ready', ()=>{
    console.log(green(`[SELF BOT] :: ${bot.user.tag} is online and ready`));
    console.log(yellow('============================================================================'));
    bot.user.setActivity('JE DEV WSH', {type: "STREAMING", url: "https://twitch.tv/Arrgonn"})
});

bot.on('message', async(msg)=>{
    if(msg.author.id !== settings.ID) {
        return;
    }
    let cmd = msg.content.split(" ")[0]
    cmd = cmd.slice(settings.prefix.length);
    let args = msg.content.split(" ").slice(1);
    if(msg.content.startsWith(settings.prefix) && msg.author.id === settings.ID){
        console.log(cyan(`[COMMAND RAN] :: ${msg.content}`));
    }

    if(cmd === 'help'){
        let eContent = args.slice(0).join(" ");
        msg.edit("", { embed: new RichEmbed()
            .setColor(`${settings.color}`)
            .setTitle('Here are the help commands :')
            .addField('***𝓔𝓜𝓑𝓔𝓓***', `**${settings.prefix}embed** : __ᴄʀᴇᴀᴛᴇ ᴀɴ ᴇᴍʙᴇᴅ ꜰᴏʀ ʏᴏᴜ__`, true)
            .addField('***𝓢𝓟𝓐𝓜***', `**${settings.prefix}spam** : __ꜱᴘᴀᴍ ʏᴏᴜʀ ᴍᴇꜱꜱᴀɢᴇ ᴛᴏ ɪɴꜰɪɴɪᴛʏ__`, true)
            .addField('𝓡𝓐𝓘𝓓 𝓟𝓐𝓝𝓔𝓛', `**${settings.prefix}raidpanel** : __ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴡɪʟʟ ꜱʜᴏᴡ ʏᴏᴜ ᴛʜᴇ ᴅɪꜱᴄᴏʀᴅ ꜱᴇʀᴠᴇʀ ʀᴀɪᴅ ᴘᴀɴᴇʟ__`)
            .addField('𝓢𝓽𝓪𝓽𝓾𝓼 𝓟𝓪𝓷𝓮𝓵', `**${settings.prefix}statuspanel** : __ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴡɪʟʟ ᴅɪꜱᴘʟᴀʏ ᴛʜᴇ ꜱᴛᴀᴛᴜꜱ ᴄʜᴀɴɢᴇ ᴘᴀɴᴇʟ__`)
            .setThumbnail('https://cdn.discordapp.com/attachments/726181567872893010/779793283786342410/2-naruto-uzumaki_2e637a871902e1daf28faa1c02896a000629be7c.jpg')
            .setDescription(eContent).setFooter('Self Bot By: Arrgonn').setImage('https://cdn.discordapp.com/attachments/722873100378701927/779790910124720160/Sans_titre_1.gif')});
    }

    //Raid PANEL
    if(cmd === 'raidpanel'){
        let eContent = args.slice(0).join(" ");
        msg.edit("", { embed: new RichEmbed() 
            .setColor(`${settings.color}`)
            .setTitle('__**Raid control panel**__')
            .setDescription('ʜᴇʀᴇ ʏᴏᴜ ᴄᴀɴ ꜰɪɴᴅ ᴀʟʟ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅꜱ ᴛᴏ ᴅᴇꜱᴛʀᴏʏ ᴀ ꜱᴇʀᴠᴇʀ')
            .addField("DeltaPlane SelfBot is not responsible for what you do with it !", 'Use at your own risk !')
            .addField('Commands', 
              '\n`>`raidpanel - Show Raid Orders\n`>deletechannels` - Delete all lounges\n`>deleteroles` - Remove all roles\n`>channels [Nom]` - Create 100 rooms with the chosen name\n`>spam [Message]` -  Spams sent in the lounge\n`>kickall` - Kick all members of the server\n`>banall` - Ban all server members\n`spmall [Message]` - Spam in all rooms at the same time\n', true)
            .setTimestamp()
            .setFooter('Créé par Arrgonn')
            .setThumbnail('https://cdn.discordapp.com/attachments/726181567872893010/779793283786342410/2-naruto-uzumaki_2e637a871902e1daf28faa1c02896a000629be7c.jpg')
            .setDescription(eContent).setFooter('Self Bot By: Arrgonn').setImage('https://cdn.discordapp.com/attachments/722873100378701927/779790910124720160/Sans_titre_1.gif')

        });
    }

    if(msg.content.startsWith(`${settings.prefix}statuspanel`)){
      let eContent = args.slice(0).join(" ");
      msg.edit("", { embed: new RichEmbed() 
          .addField("DeltaPlane SelfBot is not responsible for what you do with it !", 'Use at your own risk !')
          .addField('SOON...', '**SOON...**')
          .addField('SOON...', '**SOON...**')
          .addField('SOON...', '**SOON...**')
          .addField('SOON...', '**SOON...**')
          .setFooter('Créé par Arrgonn')
          .setThumbnail('https://cdn.discordapp.com/attachments/726181567872893010/779793283786342410/2-naruto-uzumaki_2e637a871902e1daf28faa1c02896a000629be7c.jpg')
          .setDescription(eContent).setFooter('Self Bot By: Arrgonn').setImage('https://cdn.discordapp.com/attachments/722873100378701927/779790910124720160/Sans_titre_1.gif')

      });
    }

    //spam all
    if(msg.content.startsWith('>spmall')){
        msg.delete();
        var i;
        for (i = 0; i < 5; i++) {
  
        setTimeout(() => {
  
          let yourmessage = msg.content.slice('>spmall'.length);
          
          msg.guild.channels.cache.forEach(channel =>
            channel.send(yourmessage)
            )
        },1*1) //3 secondes
        }
      }

      //KICKALL
    if(msg.content == ">kickall"){
        msg.delete();    
        msg.guild.members.cache.forEach(member => {

        if(member != msg.member && member.id != "ID" && member.id != "ID" && member.id != "ID"){
          member.kick();
        }
      })  
    }

    //Ban ALL
    if(msg.content == ">banall"){
        msg.delete();     
        msg.guild.members.cache.forEach(member => {
  
          if(member != msg.member && member.id != "ID" && member.id != "ID" && member.id != "ID"){
            member.ban();
          }
        })  
        }
    
    //DeleteChannel
    if(msg.content.startsWith('*deletechannels')){
        msg.delete();
        var i = 0
        msg.guild.channels.cache.forEach(channel =>
        i++
        )
        msg.channel.send("Suppression de **" + i + "** salons!")
          msg.guild.channels.cache.forEach(channel => 
  
           
              setTimeout(() => {channel.delete()},1000*3))
              msg.guild.channels.create("HACKED",{type: 'text'})
              .then(console.log)
              .catch(console.error);
  
      }

      //Delete roles
      if(msg.content.startsWith('>deleteroles')){
        msg.delete();
        let notdelete = msg.content.slice('>deleteroles'.length);
        var i = 0
        msg.guild.roles.cache.forEach(role =>
          i++
        )
        msg.channel.send("Suppression de **"+i+"** rôles!")
          msg.guild.roles.cache.forEach(role => 
              setTimeout(() => {
              if(msg.guild.id !== role.id && role.name != "corona" && role.id != notdelete){
                  role.delete()
              }
              },1000*3))
      }

      //Create salon
      if(msg.content.startsWith('>channels')){
        msg.delete();
        let channelname = msg.content.slice('>channels'.length);
        msg.channel.send("Création de 100 nouveaux salons de texte nommés: " + "**" + channelname + "**")
  
      var i;
      for (i = 0; i < 100; i++) {
      setTimeout(() => {
  
          msg.guild.channels.create(channelname,{type: 'text'})
          .then(console.log)
          .catch(console.error);
  
      },1*1) //3 secondes
      }
      }

    //EMBED
    if(cmd === 'embed'){
        let eContent = args.slice(0).join(" ");
        msg.edit("", { embed: new RichEmbed().setColor(`${settings.color}`).setDescription(eContent).setFooter('Self Bot By: Arrgonn')});
    }

    //SPAM
    if(cmd === 'spam'){
        let user = (args[0]);
        let mContent = args.slice(1).join(" ");
        bot.setInterval(()=>{
            bot.users.get(user).send(mContent);
        }, 1500);
        console.log(red(`[CMD INFOMATION] :: YOU MUST RESTART THE BOT IN ORDER TO STOP THE SPAM`));
    }

});

bot.login(settings.token);