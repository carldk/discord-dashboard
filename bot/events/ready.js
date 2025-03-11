module.exports = {
  name: "ready",
  execute(client) {
    console.log(`✅ Bot is ingelogd als ${client.user.tag}`);
  },
};