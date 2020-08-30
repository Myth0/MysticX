const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "pat",
    category: "action",
    run: async (client, message, args) => {
        const url = 'https://some-random-api.ml/animu/pat';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured!`)
        }

        const embed = new MessageEmbed()
            .setTitle(`${message.author.username} pets ${message.mentions.users.first().username || message.mentions.members.first()}`)
            .setImage(data.link)
            .setColor("RANDOM")

        await message.channel.send(embed)
    }
}
