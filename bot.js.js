const Discord = require('discord.js');
const client = new Discord.Client();
const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.reply('Ping Değerim: **' + client.ping + '** ms');
};

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

client.login(process.env.BOT_TOKEN);
