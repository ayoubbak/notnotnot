const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '#'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame('MÁGNUS');
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});








client.on("message", message => {

            if (message.content.startsWith(prefix + "obc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});

















client.on('message' , message => {
      if(message.author.bot) return;
     
      if(message.content.startsWith(prefix + "rbc")) {
        if (!message.member.hasPermission("ADMINISTRATOR"))  return;
        let args = message.content.split(" ").slice(2);
     var codes = args.join(' ')
       
        if(!codes) {
          message.channel.send("Try -help")
            return;
        }
     
     
              var role = message.mentions.roles.first();
                if(!role) {
                  message.reply("I CAnot Find TheRole")
                    return;
                }
            message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
              n.send(
              "**" + "السيرفر :" + "\n" +
              `${message.guild.name}` + "\n" +
              "المرسل :" + "\n" +
              `${message.author.tag}` + "\n" +
              "الرسالة :" + "\n" +
              `${codes}` + "**"
              )
            })
            message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عضو`)
        }
    });
	
	
	
	
    client.on('message', message => {
	    var prefix = "$";
              if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + 'ebc')) {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**You Dont Have perms** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "Speed Bot";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**Write Some Things To Broadcast**');message.channel.send(`**Are You Sure \nThe Broadcast: ** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
 reaction1.on("collect", r => {
    message.channel.send(`**☑ | Done ... The Broadcast Message Has Been Sent To __${message.guild.members.size}__ Members**`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
  
  var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('Server', message.guild.name)
       .addField('Sender', message.author.username)
       .addField('Message', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });



client.on("message", message => {

            if (message.content.startsWith("$bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`**Broadcast begin send to** \`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` **members....** `); 
 message.delete(); 
};     
});













const devid = ["433296250293714944"]//غيرها الي ايديهات مبرمجين البوت
const devpr = "$"//غيرها الي البرفكس الخاص
client.on("message", message => {
    var chanarg = message.content.split(` `).slice(1).join(' ');
    if(!devid.includes(message.author.id)) return;
    if(message.content.startsWith('$ply')) {
		if(!chanarg) return message.channel.send("**Please include args to Set | :x:**")
    client.user.setGame(chanarg);
    message.channel.send(`**Done Set Game ${chanarg} | :white_check_mark:**`)
      } else
    if(message.content.startsWith('$setLi')) {
		if(!chanarg) return message.channel.send("**Please include args to Set | :x:**")
    client.user.setActivity(chanarg, {type:'LISTENING'});
    message.channel.send(`**Done Set Listen ${chanarg} | :white_check_mark:**`)
      } else
    if(message.content.startsWith('$setWa')) {
	    if(!chanarg) return message.channel.send("**Please include args to Set | :x:**")
    client.user.setActivity(chanarg, {type:'WATCHING'});
    message.channel.send(`**Done Set Watch ${chanarg} | :white_check_mark:**`)
      } else
    if(message.content.startsWith('$setSt')) {
		if(!chanarg) return message.channel.send("**Please include args to Set | :x:**")
    client.user.setGame(chanarg, "https://www.twitch.tv/bakkariayoub");
    message.channel.send(`**Done Set Streaming ${chanarg} | :white_check_mark:**`)
      } else
    if(message.content.startsWith('$setName')) {
		if(!chanarg) return message.channel.send("**Please include args to Set | :x:**")
    client.user.setUsername(chanarg).then
    message.channel.send(`**Done Set Name ${chanarg} | :white_check_mark:**`)
      } else
    if(message.content.startsWith('$setAvatar')) {
		if(!chanarg) return message.channel.send("**Please include args to Set | :x:**")
    client.user.setAvatar(chanarg).then
    message.channel.send(`**Done :white_check_mark:**`)
}
});
























client.login(process.env.BOT_TOKEN);
