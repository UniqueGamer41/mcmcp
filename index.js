const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
const keep_alive = require('./webserver')
const mongoose = require("mongoose")
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds, 
		GatewayIntentBits.GuildMessages, 
		GatewayIntentBits.GuildPresences, 
		GatewayIntentBits.GuildMessageReactions, 
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.MessageContent
	],
	ws: { properties: { browser: 'Discord iOS' } }, 
	partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction] 
});

const fs = require('fs');
const config = require('./config.json');
require('dotenv').config() // remove this line if you are using replit

client.commands = new Collection()
client.aliases = new Collection()
client.slashCommands = new Collection();
client.buttons = new Collection();
client.prefix = config.prefix;
client.StringSelectMenus = new Collection();
client.Modals = new Collection();

module.exports = client;


fs.readdirSync('./handlers').forEach((handler) => {
  require(`./handlers/${handler}`)(client)
});
mongoose.connect(config.mongooseConnectionString).then(() => console.log('Connected to mongodb'));

keep_alive(client);
client.login(process.env.TOKEN)