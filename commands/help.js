const config = require('../config.json');


module.exports = {
    name: 'help',
    description: "this is the commands command",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#8000ff')
        .setTitle(`----|  ${config.name} Commands  |----`)
        .setDescription('List of Commands.')
        .addFields(

          
            {name: `${config.prefix}help`, value: 'Gives the help list' , inline: true},


            {name: `${config.prefix}userinfo`, value: 'Shows the users info' , inline: true},

            {name: `BOT BY:`, value: 'https://www.lunar-dev.tk/' , inline: true},

           )
            .setTimestamp()
            .setFooter(`Executed by: ${message.member ? message.member.displayName : message.author.username}`, message.author.displayAvatarURL());
            message.channel.send(newEmbed);

       

    }
}