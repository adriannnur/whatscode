//const Client = require("./src/client.js");
const { Client } = require("whatscode.js");

// all Client options in the docs!
const bot = new Client({
  name: "Adrian Bot",
  prefix: "",
});

// required callbacks (all callbacks available in the docs)
bot.onConnectionUpdate();
bot.onCredsUpdate();
bot.onMessage();

// example ping command
bot.command({
  name: "yan",
  code: `Mohon maaf kak, Saat ini *Adrian* tidak dapat membalas pesan mu\nJika penting silahkan tinggalkan pesan!\n\n🤖 | Chat ini dibalas oleh *Bot System*`
})

bot.command({
  name: "p",
  code: "Pong | Auto pilot *system* $ping ms"
})

bot.command({
  name: "instagram",
  code: "https://www.instagram.com/adriannnrr_"
})
/*bot.status({
 status: ["Whatscode.js", "Hello", "Online"],
 every: 2500 // Changing Status Every 25 Seconds
})*/
