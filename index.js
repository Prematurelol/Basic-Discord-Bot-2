const Discord = require('discord.js');
const config = require('./config.json')
const client = new Discord.Client();
const { token, prefix, name, verison} = require('./config.json');

///////////////////////////////////////////////////////////////////////

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

///////////////////////////////////////////////////////////////////////


client.once('ready', () => {
    console.clear('');
    console.log(' ');
    console.log(' - Prefix -');
    console.log(prefix);
    console.log(' ');
    console.log(' - Tag -');
    console.log(name);
    console.log(' ');
    console.log(' -Verison -');
    console.log(verison);
    console.log(' ');
    console.log(`Logged in as ` + client.user.tag);
    client.user.setPresence({ activity: { type: "LISTENING", name: `${prefix}help || ${client.users.cache.size} users`}, status: "idle"})
});

// if you want to use status: "online" // status: "dnd" // status: "idle" // status: "offline" then you need to go to the
// https://discord.com/developers/applications
// and regenerate your bots token
// then copy it 
// then paste it in config.json



///////////////////////////////////////////////////////////////////////


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'help'){

        client.commands.get('help').execute(message, args, Discord);
        
}
});

// IF YOU DO NOT WANT TO USE EMBEDS THEN GO TO (./Settings/SETTINGS.md) Line : 6

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'whois'){

        

        client.commands.get('userinfo').execute(message, args, Discord);
        
}
});

client.on("message", async message => {
    const regex = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li|club)|discordapp\.com\/invite|discord\.com\/invite)\/.+[a-z]/gi;
    if (regex.exec(message.content)) {
      await message.delete({timeout: 100});
        await message.channel.send(
          `${message.author} You cannot post invites!`
        );
    }
  });

  // IF YOU HOST ON REPL THEN INSTEAD OF USING client.login(token); USE client.login(process.env.TOKEN);
 // click on the "Lock" icon in the tab on the left. It will show you your repl's secrets. On this tab, add a new secret, set its name to TOKEN and its value to your discord bot token
client.login(token);