const Discord = require('discord.js');
const { TOKEN, owner_id, mod_ids, dnsStr, prefix } = require('./assets/config.json');

const Sentry = require('@sentry/node');
Sentry.init({ dsn: dnsStr });

const client = new Discord.Client();
client.commands = new Discord.Collection();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  try {
    //Do stuff ¯\(º_o)/¯
  }
  catch(err) {
    //(╯ಠ_ ಠ）╯︵ ┳━┳ Log it
    Sentry.captureException(err);
  }
});

client.login(TOKEN);