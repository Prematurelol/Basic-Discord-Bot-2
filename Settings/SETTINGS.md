# SETTINGS


# Text Commands 

If you would like to add text commands then Follow these Instructions.

First.
```
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'Hello World'){

        

        client.commands.get('').execute(message, args, Discord);
        
}
});
```
Second. 

```
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'Hello World'){

      message.channel.send("Hello, World");
      message.author.send("Hello, World");
      message.reply("Hello, World");

        
}
});
```

# Embed Commands

Just Copy and paste the .js files inside of (./commands)

And Change:

```
name: 'userinfo',
description: "user info",
``` 
And: 

```.setColor('#000066')
   .setTitle(``)
   .addFields(
   {name: '', value: ``},
    )
   message.channel.send(newEmbed)

```

# Status

The Default Status is ``client.user.setPresence({ activity: { type: "LISTENING", name: `${prefix}help || ${client.users.cache.size} users`}, status: "idle"})``

But if you want a Random / Auto Changing Status then Replace The ``DEFAULT`` Status to:

```
const statusArray = ['For Rule Breakers, WATCHING', 'Loki (Only On Disney+), WATCHING', 'GTAO, PLAYING', 'On Scarlet\'s Dream World, WATCHING', 'Music w Tiger\'s Rythm, LISTENING', ' Commands, LISTENING', 'Catching Variants, WATCHING', 'Football With Messi, PLAYING', 'Billie Eilish, LISTENING', 'HIVE Tresure Wars, PLAYING', ];

    setInterval(() => {
      client.user.setStatus('dnd');
      const random = statusArray[Math.floor(Math.random() * statusArray.length)].split(', ')
      const status = random[0];
      const mode = random[1];
      client.user.setActivity(status, { type: mode })

    }, 3000) //your time of changing status in miliseconds for example 1 second = 1000 ms
});
```
What you want your statuses to be after puting the status name put a coma and a space and then the type what you want it to be note: please dont to it to STREAMING as you would have to input a twitch link


# TOKENS

If you are having Problems With the online, idle, dnd, and/or offline status then follow this:

First: 

Go to https://discord.com/developers/applications/YOUR_CLIENT_ID/bot
or https://discord.com/developers/applications

Then click on ``bot``.

Then click on ``Regenerate``

Then click on ``copy``

Then go to ``config.json``

Then put the token you copied in


Then run the bot again.


# HOSTING

If you are hosting on Repl then:

INSTEAD OF USING client.login(token); USE client.login(process.env.TOKEN);

(index.js || line 91)

click on the "Lock" icon in the tab on the left. It will show you your repl's secrets. On this tab, add a new secret, set its name to TOKEN and its value to your discord bot token
