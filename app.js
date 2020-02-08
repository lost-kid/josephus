const Discord = require('discord.js');
const { TOKEN, owner_id, mod_ids, dnsStr, welcome_id, blueberry_id, prefix } = require('./assets/config.json');

const Sentry = require('@sentry/node');
Sentry.init({ dsn: dnsStr });

const client = new Discord.Client();
client.commands = new Discord.Collection();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
  const channel = client.channels.get(welcome_id);
  const guild = member.guild;
  const roleName = guild.roles.find(role => role.id === blueberry_id).name;
  member.addRole(blueberry_id)
  .then(channel.send("You were invited and now your here. This is your new role " + roleName))
  .catch(Sentry.captureException(err));
});

client.login(TOKEN);