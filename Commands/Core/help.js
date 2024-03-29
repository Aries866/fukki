module.exports = {
  name: "help",
  alias: ["menu", "h", "helpm", "helpmenu"],
  desc: "Gives all bot commands list",
  react: "✨",
  category: "Core",
  start: async (
    Miku,
    m,
    { prefix, pushName, NSFWstatus, args, commands, text }
  ) => {
    if (args[0]) {
      let data = [];
      let name = args[0].toLowerCase();
      let cmd =
        commands.get(name) ||
        Array.from(commands.values()).find((v) => v.alias.includes(name));
      if (!cmd || cmd.type == "hide") return m.reply("No Command Found");
      else
        data.push(
          `🍁Command : ${cmd.name.replace(/^\w/, (c) => c.toUpperCase())}`
        );
      if (cmd.alias) data.push(`👾Alias : ${cmd.alias.join(", ")}`);
      if (cmd.cool) data.push(`⏱️Cooldown: ${cmd.cool}`);
      if (cmd.desc) data.push(`🧾Description : ${cmd.desc}`);
      if (cmd.usage)
        data.push(
          `💡Example : ${cmd.usage
            .replace(/%prefix/gi, prefix)
            .replace(/%command/gi, cmd.name)
            .replace(/%text/gi, text)}`
        );
      var buttonss = [
        {
          buttonId: `${prefix}help`,
          buttonText: { displayText: `help` },
          type: 1,
        },
      ];
      let buth = {
        text: `ℹ️Command Info\n\n${data.join("\n")}`,
        footer: `${botName}`,
        buttons: buttonss,
        headerType: 1,
      };
      return Miku.sendMessage(m.from, buth, { quoted: m });
    } else {
      const pad = (s) => (s < 10 ? "0" : "") + s;
        const formatTime = (seconds) => {
        const hours = Math.floor(seconds / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const secs = Math.floor(seconds % 60);
        return time = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
        };
        const uptime = () => formatTime(process.uptime());

      let textHelpMenu = `Konnichiwa *${pushName}* Senpai,

I am *${botName}*, a bot developed by *Team Atlas*.

🎀 My prefix is: *${prefix}*

🧩 Server Uptime: *${uptime()}*

Here's the list of my Commands.\n
           
╭──────ꕥ Core ꕥ─────╮
├
├・🎐 ʜɪ, ʜᴇʟᴘ, 
├・🎐 ᴄᴏᴜᴘʟᴇᴘᴘ, ᴏᴡɴᴇʀ, 
├・🎐 ꜱᴄʀɪᴘᴛ, ꜱᴛᴀʟᴋ, 
├・🎐 ꜱᴜᴘᴘᴏʀᴛ, ʀᴀɴᴋ
├
╰──────────────────╯
╭─────ꕥ Group ꕥ─────╮
├
├・🏮 ᴀᴅᴍɪɴꜱ, ᴀɴɴᴏᴜɴᴄᴇ,
├・🏮 ᴀɴᴛɪʟɪɴᴋɢᴄ, ʙᴏᴛꜱᴡɪᴛᴄʜ, 
├・🏮 ᴄʜᴀɴɢᴇɢᴄɴᴀᴍᴇ, ᴄʜᴀᴛʙᴏᴛɢᴄ, 
├・🏮 ᴅᴇʟᴇᴛᴇ, ᴘʀᴏᴍᴏᴛᴇ, 
├・🏮 ᴅᴇᴍᴏᴛᴇ, ɢᴄʟɪɴᴋ, 
├・🏮 ɢʀᴏᴜᴘ, ɢʀᴏᴜᴘɪɴꜰᴏ, 
├・🏮 ʜɪᴅᴇᴛᴀɢ, ʟᴇᴀᴠᴇ, 
├・🏮 ɴꜱꜰᴡ, ʀᴇᴍᴏᴠᴇ, 
├・🏮 ʀᴇᴘᴏʀᴛ, ʀᴇᴠᴏᴋᴇ, 
├・🏮 ꜱᴇᴛɢᴄᴅᴇꜱᴄ, ꜱᴇᴛᴘᴘɢᴄ, 
├・🏮 ᴛᴀɢᴀʟʟ, ᴡᴇʟᴄᴏᴍᴇ
├
╰──────────────────╯
╭──────ꕥ Mods ꕥ──────╮
├
├・🎀 ᴀᴅᴅᴍᴏᴅ, ᴅᴇʟᴇᴛᴇᴍᴏᴅ, 
├・🎀 ʙᴀɴ, ᴜɴʙᴀɴ, 
├・🎀 ʙᴀɴɢᴄ, ᴜɴʙᴀɴɢᴄ, 
├・🎀 ʙʟᴏᴄᴋ, ᴜɴʙʟᴏᴄᴋ, 
├・🎀 ʙʀᴏᴀᴅᴄᴀꜱᴛ, ᴄʜᴀʀʟɪꜱᴛ, 
├・🎀 ᴍᴏᴅᴇ, ʙᴀɴʟɪꜱᴛ, 
├・🎀 ᴘᴍᴄʜᴀᴛʙᴏᴛ, ᴄʜᴀʀʟɪꜱᴛ, 
├・🎀 ꜱᴇᴛᴄʜᴀʀᴀᴄᴛᴇʀ
├
╰──────────────────╯          
╭──────ꕥ Media ꕥ─────╮
├
├・💫 ɪɢᴅʟ, ɪɢᴅʟ2, 
├・💫 ᴘʟᴀʏʟɪꜱᴛ, ᴘʟᴀʏ, 
├・💫 ʏᴛᴀᴜᴅɪᴏ, ʏᴛᴠɪᴅᴇᴏ, 
├・💫 ʏᴛꜱ, ᴛɪᴋᴛᴏᴋ,
├・💫 ᴛɪᴋᴛᴏᴋᴀᴜᴅɪᴏ, ᴛɪᴋᴛᴏᴋᴠɪᴅᴇᴏ,
├・💫 ᴛɪᴄᴛᴏᴋᴅᴏᴄ, ʏᴛᴅᴏᴄ,
├
╰──────────────────╯
╭─────ꕥ Search ꕥ─────╮
├
├・🔎 ᴀɴɪᴍᴇ, ɢɪꜰꜱᴇᴀʀᴄʜ, 
├・🔎 ɢɪᴍᴀɢᴇ, ᴘɪɴᴛᴇʀᴇꜱᴛ, 
├・🔎 ɢɪᴛʜᴜʙ, ɢᴏᴏɢʟᴇ, 
├・🔎 ʟʏʀɪᴄꜱ, ʀɪɴɢᴛᴏɴᴇ, 
├・🔎 ꜱᴛɪᴄᴋᴇʀꜱᴇᴀʀᴄʜ, ᴡᴇᴀᴛʜᴇʀ, 
├・🔎 ʏᴏᴜᴛᴜʙᴇꜱᴇᴀʀᴄʜ
├
╰──────────────────╯
╭────ꕥ Utilities ꕥ────╮
├
├・🎗 ᴇᴍᴏᴊɪᴍɪx, Q / Qᴜᴏᴛᴇ, 
├・🎗 ꜱᴛɪᴄᴋᴇʀ, ꜱᴛɪᴄᴋᴇʀᴄʀᴏᴘ, 
├・🎗 ꜱᴛᴇᴀʟ, ᴛᴏᴀᴜᴅɪᴏ, 
├・🎗 ᴛᴏᴍᴘ3, ᴛᴏᴍᴘ4, 
├・🎗 ᴛᴏᴜʀʟ, ꜱᴛɪᴄᴋᴇʀᴍᴇᴍᴇ,
├・🎗 ᴛᴇxᴛᴅᴇꜱɪɢɴ
├
╰──────────────────╯
╭────ꕥ Image Edit ꕥ────╮
├
├・💠 ʙʟᴜʀ, ᴄɪʀᴄʟᴇ, 
├・💠 ᴊᴀɪʟ, ʀᴇᴍᴏᴠᴇʙɢ, 
├・💠 ᴛʀɪɢɢᴇʀ
├
╰──────────────────╯
╭────ꕥ Audio Edit ꕥ────╮
├
├・🎧 ʙᴀꜱꜱ, ʙʟᴏᴡɴ, 
├・🎧 ᴅᴇᴇᴘ, ꜰᴀᴛ, 
├・🎧 ɴɪɢʜᴛᴄᴏʀᴇ, ʀᴇᴠᴇʀꜱᴇ, 
├・🎧 ʀᴏʙᴏᴛ, ꜱʟᴏᴡ, 
├・🎧 ꜱᴍᴏᴏᴛʜ, ᴛᴇᴍᴘᴏ
╰──────────────────╯
╭────ꕥ Essentials ꕥ────╮
├
├・🧩 ᴇʟᴇᴍᴇɴᴛ, ꜱᴄʀᴇᴇɴꜱʜᴏᴛ
├・🧩 Qᴜᴇꜱᴛɪᴏɴ, ꜱᴀʏ, 
├・🧩 ꜱᴀʏᴊᴀᴘᴀɴᴇꜱᴇ, ꜱᴀʏʙᴇɴɢᴀʟɪ, 
├・🧩 ꜱᴀʏʜɪɴᴅɪ, ᴜᴅɪᴄᴛɪᴏɴᴀʀʏ
├
╰───────────────────────╯
╭────ꕥ Weeb ꕥ────╮
├
├・ 🧧 ᴀɴɪᴍᴇQᴜᴏᴛᴇ, ᴄᴏꜱᴘʟᴀʏ, 
├・ 🧧 ᴄᴏꜱᴘʟᴀʏᴠɪᴅᴇᴏ, ꜰᴏxɢɪʀʟ, 
├・ 🧧 ᴍᴀɪᴅ, ᴡᴀʟʟᴘᴀᴘᴇʀ, 
├・ 🧧 ᴡᴀɪꜰᴜ
├
╰──────────────────╯
╭────ꕥ Reactions ꕥ────╮
├
├・ 🎋 ʙᴇʜᴀᴘᴘʏ, ʙɪᴛᴇ, 
├・ 🎋 ʙᴏɴᴋ, ʙᴜʟʟʏ, 
├・ 🎋 ᴄʀʏ, ᴅᴀɴᴄᴇ, 
├・ 🎋 ʜᴀɴᴅʜᴏɴᴅ, ʜᴀᴘᴘʏ, 
├・ 🎋 ʜɪɢʜꜰɪᴠᴇ, ʜᴜɢ, 
├・ 🎋 ᴋɪᴄᴋ, ᴋɪʟʟ, 
├・ 🎋 ᴋɪꜱꜱ, ᴘᴀᴛ, 
├・ 🎋 ꜱʟᴀᴘ, ꜱᴍɪʟᴇ, 
├・ 🎋 ᴡᴀᴠᴇ, ᴡɪɴᴋ, 
├・ 🎋 ʏᴇᴇᴛ
├
╰──────────────────╯
╭────ꕥ Logo Maker ꕥ────╮
├
├・ 🎄 3ᴅᴄʜʀɪꜱᴛᴍᴀꜱ, 3ᴅɴᴇᴏɴ, 
├・ 🎄 3ᴅꜱᴘᴀᴄᴇ, 3ᴅꜱᴛᴏɴᴇ,
├・ 🎄 ʙᴇᴀʀ, ʙʟᴀᴄᴋᴘɪɴᴋ,
├・ 🎄 ʙʟᴏᴏᴅ, ʙᴏᴋᴇʜ, 
├・ 🎄 ᴄᴀɴᴅʏ, ᴄᴀʀʙᴏɴ, 
├・ 🎄 ᴄʜᴏᴄᴏʟᴀᴛᴇ, ᴄʜʀɪꜱᴛᴍᴀꜱ, 
├・ 🎄 ᴄɪʀᴄᴜɪᴛ, ᴄʟᴏᴜᴅ, 
├・ 🎄 ᴅᴇᴇᴘꜱᴇᴀ, ᴅᴇᴍᴏɴ, 
├・ 🎄 ᴅʀᴏᴘᴡᴀᴛᴇʀ, ɢʟɪᴛᴄʜ, 
├・ 🎄 ᴄʟɪᴛᴄʜ2, ɢʟɪᴛᴄʜ3 
├・ 🎄 ɢʀᴀꜰꜰɪᴛɪ, ʜᴏʟʟᴏɢʀᴀᴘʜɪᴄ, 
├・ 🎄 ᴊᴏᴋᴇʀ, ʟɪᴏɴ , ᴍᴀɢᴍᴀ, 
├・ 🎄 ᴍᴀᴛʀɪx, ɴᴇᴏɴ, 
├・ 🎄 ɴᴇᴏɴᴅᴇᴠɪʟ, ɴᴇᴏɴɢʀᴇᴇɴ, 
├・ 🎄 ɴᴇᴏɴʟɪɢʜᴛ, ᴘᴀᴘᴇʀᴄᴜᴛ, 
├・ 🎄 ᴘᴇɴᴄɪʟ, ᴘᴏʀɴʜᴜʙ, 
├・ 🎄 ꜱᴄɪꜰɪ, ꜱᴘᴀʀᴋʟᴇᴄʜʀɪꜱᴛᴍᴀꜱ, 
├・ 🎄 ᴛʜᴜɴᴅᴇʀ, ᴛʜᴜɴᴅᴇʀ2, 
├・ 🎄 ᴛʀᴀɴꜱꜰᴏʀᴍᴇʀ, ᴡᴀʟʟ,
├・ 🎄 ᴡᴏʟꜰ
├
╰──────────────────╯
╭────ꕥ Mine Craft ꕥ────╮
├
├・ 🎒 ʙᴜʏ, ɪɴᴠᴇɴᴛᴏʀʏ, 
├・ 🎒 ᴍɪɴᴇ, ꜱʜᴏᴘ, 
├・ 🎒 ʀᴇɢ-ɪɴᴠ, 
├
╰──────────────────╯
╭────ꕥ ECONOMY ꕥ────╮
├
├・ 🔖 ʙᴀɴᴋ, ᴄᴀᴘᴀᴄɪᴛʏ, 
├・ 🔖 ᴅᴀɪʟʏ, ᴅᴇᴘᴏꜱɪᴛ, 
├・ 🔖 ɢᴀᴍʙʟᴇ, ʟʙ, 
├・ 🔖 ʀᴏʙ, ꜱʟᴏᴛ, 
├・ 🔖 ᴛʀᴀɴꜱꜰᴇʀ, ᴡᴀʟʟᴇᴛ, 
├・ 🔖 ᴡɪᴛʜᴅʀᴀᴡ
├
╰──────────────────╯\n\n`;

      if (NSFWstatus == "true") {
        textHelpMenu += `╭────ꕥ NSFW ꕥ────╮
├
├・ 💦 ᴘᴜꜱꜱʏ, ꜱᴘʀᴇᴀᴅᴘᴜꜱꜱʏ,
├・ 💦 ɢᴇɴꜱʜɪɴ, ꜱQᴜɪʀᴛ,
├・ 💦 ɢʟᴀꜱꜱᴇꜱ, ꜱᴜɴɢʟᴀꜱꜱᴇꜱ,
├・ 💦 ꜱᴡɪᴍꜱᴜɪᴛ, ꜱᴄʜᴏᴏʟꜱᴡɪᴍꜱᴜɪᴛ,
├・ 💦 ʜᴏʟᴏ ʟɪᴠᴇ, ᴀꜱꜱ,
├・ 💦 ᴜɴᴅᴇʀᴡᴇᴀʀ, ɴɪᴘᴘʟᴇꜱ,
├・ 💦 ᴜɴᴄᴇɴꜱᴏʀᴇᴅ, ɴɪᴘᴘʟᴇꜱ,
├・ 💦 ᴜɴᴄᴇɴꜱᴏʀᴇᴅ, ꜱᴇx,
├・ 💦 ꜱᴇx2, ꜱᴇx3,
├・ 💦 ʙʟᴏɴᴅᴇ, ᴛᴡɪɴᴛᴀɪʟꜱ,
├・ 💦 ʙʀᴇᴀꜱᴛꜱ, ᴛʜɪɢʜʜɪɢʜꜱ,
├・ 💦 ꜱᴋɪʀᴛ, ɢᴀᴍᴇᴄɢ,
├・ 💦 ᴀɴɪᴍᴀʟᴇᴀʀꜱ, ꜰᴏxɢɪʀʟ,
├・ 💦 ᴅʀᴇꜱꜱ, ꜱᴄʜᴏᴏʟᴜɴɪꜰᴏʀᴍ,
├・ 💦 ᴛᴡᴏɢɪʀʟꜱ, ɢʟᴏᴠᴇꜱ,
├・ 💦 ᴠᴏᴄᴀʟᴏɪᴅ, ᴛᴏᴜʜᴏᴜ,
├・ 💦 ᴡᴇᴀᴘᴏɴ, ᴡɪᴛʜꜰʟᴏᴡᴇʀꜱ,
├・ 💦 ᴘɪɴᴋʜᴀɪʀ, ᴄʟᴏᴜᴅꜱᴠɪᴇᴡ,
├・ 💦 ᴡʜɪᴛᴇ, ᴀɴɪᴍᴀʟ,
├・ 💦 ᴛᴀɪʟ, ɴᴜᴅᴇ,
├・ 💦 ᴘᴏɴʏᴛᴀɪʟ, ʙᴇᴅ,
├・ 💦 ᴡʜɪᴛᴇ ʜᴀɪʀ, ʀɪʙʙᴏɴꜱ,
├・ 💦 ᴊᴀᴘᴀɴᴇꜱᴇᴄʟᴏᴛʜꜱ, 
├・ 💦 ʜᴀᴛꜱᴜɴᴇᴍɪᴋᴜ,
├・ 💦 ʙɪᴋɪɴɪ, ʙᴀʀᴇꜰᴏᴏᴛ,
├・ 💦 ɴᴏʙʀᴀ, ꜰᴏᴏᴅ,
├・ 💦 ᴡɪɴɢꜱ, ᴘᴀɴᴛʏʜᴏꜱᴇ,
├・ 💦 ᴏᴘᴇɴꜱʜɪʀᴛ, ʜᴇᴀᴅʙᴀɴᴅ,
├・ 💦 ᴘᴇɴɪꜱ, ᴄʟᴏꜱᴇ,
├・ 💦 ᴡᴇᴛ, ᴄᴀᴛɢɪʀʟ,
├・ 💦 ᴡᴏʟꜰɢɪʀʟ, ɴᴇᴋᴏ,
├・ 💦 ʟᴏʟɪ, ꜱᴘʀᴇᴀᴅʟᴇɢꜱ,
├・ 💦 ʙʀᴀ, ꜰᴀᴛᴇꜱᴇʀɪᴇꜱ,
├・ 💦 ᴛʀᴇᴇ, ᴇʟʙᴏᴡɢʟᴏᴠᴇꜱ,
├・ 💦 ɢʀᴇᴇɴʜᴀɪʀ, ʜᴏʀɴꜱ,
├・ 💦 ᴡɪᴛʜᴘᴇᴛᴀʟꜱ, ᴅʀᴜɴᴋ,
├・ 💦 ᴄᴜᴍ, ʜᴇᴀᴅ ᴅʀᴇꜱꜱ,
├・ 💦 ᴛɪᴇ, ꜱʜᴏʀᴛꜱ,
├・ 💦 ᴍᴀɪᴅ, ʜᴇᴀᴅᴘʜᴏɴᴇꜱ,
├・ 💦 ᴀɴᴜꜱᴠɪᴇᴡ, ɪᴅᴏʟ,
├・ 💦 ɢᴜɴ, ꜱᴛᴏᴄᴋɪɴɢꜱ,
├・ 💦 ᴛᴇᴀʀꜱ, ʙʀᴇᴀꜱᴛʜᴏʟᴅ,
├・ 💦 ɴᴇᴄᴋʟᴀᴄᴇ, ꜱᴇᴇᴛʜʀᴏᴜɢʜ,
├・ 💦 ʙᴜɴɴʏᴇᴀʀꜱ, ʙᴜɴɴʏɢɪʀʟ,
├・ 💦 ᴛᴏᴘʟᴇꜱꜱ, ʙᴇᴀᴄʜ,
├・ 💦 ᴇʀᴇᴄᴛɴɪᴘᴘʟᴇꜱ, ʏᴜʀɪ,
├・ 💦 ᴠᴀᴍᴘɪʀᴇ, ꜱʜɪʀᴛ,
├・ 💦 ᴘᴀɴᴛʏᴘᴜʟʟ, ᴛᴏʀɴᴄʟᴏᴛʜᴇꜱ,
├・ 💦 ʙᴏɴᴅᴀɢᴇ, ꜰɪɴɢᴇʀɪɴɢ
├・ 💦 ʙᴇʟʟ, ꜱʜɪʀᴛʟɪꜰᴛ,
├・ 💦 ᴛᴀᴛᴛᴏᴏ, ᴄʜᴀɪɴ,
├・ 💦 ꜰʟᴀᴛᴄʜᴇꜱᴛ 
├
╰──────────────────╯\n\n`;
      }

      textHelpMenu += `*🔰  ${botName}  🔰*
 _Powered By:_ *Team ATLAS*

🎀 To use any of these commands type " *${prefix}Command name* ".

🏮 To get Support Group link type " *${prefix}support* ".

🧩 To report any issues to Developer type " *${prefix}report <describe issue>* ".\n`;

      let favSongs = [
        "mud mud je na dekh",
        "illegal weapons 2.0",
        "tu junooniyat",
        "phatte tak nachna",
        "dono hi mohabbat k by sneha upadhyay",
        "mujhe ishq sikha karke by snhea upadhyay",
        "meri khanai by sneha updhyay",
        "billi billi - kisi ka bhai kisi ki jaan",
        "balam pichkari",
        "naino bali ne by anupna tiwari",
        "52 gaj daman hindi",
        "yaad Piya ki aane lagi",
        "raat gayi so baat gayi",
        "x.x.x baby",
        "pine ki tammana",
        "naughty no.1",
        "poster's lagwa do",
        "pine k badd senti",
        "thug ranjha",
        "tipsy tipsy",
        "kangna villaytu",
        "Saturday Saturday",
        "husn parcham",
        "i wanna tera ishq",
        "tang uthake",
        "hare krishna hare ram",
        "thumka",
        "bawla",
        "so gaya yeah jaha",
        "line marti hai",
        "tunu tunu",
        "daru vich pyar",
        "meri khanai sneha updhyay",
        "maine payal hai chankai by Sneha upadhyay",
        "saansuen gin gin by sneha updhyay",
        "teri ummed tera intizaar by sneha updhyay",
        "besharam rang",
        "rafta rafta medly",
        "million dollar",
        "auntya dance karegi",
        "ignore",
        "pardesi",
        
        
        //day1 part1 done ✅
        
        
        "taveej by sneha updhyay",
        "ladke hai mohalle ke shaitan meri laila by teena parvej",
        "bihari bride - Pandey ft Mars king",
        "haryanvi k utt full song",
        "bateu khugya",
        "deewane hum nahi hote deewani raat hoti hai",
        "chirta chakkar",
        "chittiya kalaiyan",
        "love letter",
        "chamkeelaa chera by badhshah",
        "mercy by badshah",
        "bad boy bad girl by badhsah",
        "top tucker by badhsah",
        "tauba by badhsah",
        "nache nagin by srishi",
        "awara by badhsan",
        "awara hawaka ka jhooka by sneha updhyay",
        "pagaal by badshah",
        "genda phool by badshah",
        "buzz bt badshah astha gill",
        "kya say ? by badshah",
        "kudi chamkeeli by honey singh",
        "kaan vich waaliyan by honey Singh",
        
        
        //day2 part done ✅
        
        
        "haule haule by renuka panwar",
        "Naina k teer by renuka panwar",
        "kabootar bt Renuka panwar",
        "chakki niche bhoot by renuka panwar",
        "bhabhi bhabhi by renuka panwar",
        "dil ki baat by renuka Panwar",
        "laung laichi by renuka panwar",
        "mummy ko bolde baby",
        "jhanjhar by Sapna Chaudhary",
        "jalebi by renuka panwar",
        "gunghat by ruchika jangir",
        "nachungi piya by renuka panwar",
        "rail me dhakke lage se by Renuka panwar",
        "bhaga aala by renuka panwar",
        "tata summo by renuka panwar",
        "naital k jhume by renuka panwar",
        "jannat ka tukda by Renuka panwar",
        "dj rukna nahi chaiye by renuka panwar",
        "Garam jalebi fear vanshika hapur",
        "baby mere birthday pe goli chalegi by pranjal dhaiya",
        "bhai bhabhi leaven aaye by pranjal dhaiya",
        "haryanvi beat - diler kharkiya",
        "feem diler kharikiya",
        "classmate diler khariya",
        "lal dupatta by renuka panwar",
        
        
        //day2 part2 done ✅
          
        
        "8 prache",
        "wang tut gayi",
        "jass manak saiyaan",
        "teri meri ladai",
        "sumit gosawami holi anthem",
        "fruity lagdi hai",
        "diamond punjabi song",
        "dil ka telephone",
        "ek diamond the har",
        "phulkadi",
        "libas kaka",
        "pagla pagli 2 by zb",
        "tera suit by tonny kakkar",
        "dheeme dheeme",
        "coca cola tu ",
        "car mein music baza by neha kakkar",
        "botty shake by tonny kakkar",
        "pallo latke",
        "tu banja gali banaras ki by asses Kaur",
        "hue beachan pehli baar",
        "meri asshqui pasand aaye",

         
        //day2 part3 done ✅
    
       
        "baarshat ki dhun",
        "dil galti kar baitha hai ",
        "bedardi sa pyar ka",
        "raatan lambiya",
        "khushi jab bhi teri",
        "bewaafa tera muskurana",
        "mast aakhein",
        "mast nazron mein by jubin nautiyal",
        "lut gaye",
        "padhoge likhoge",
        "chedkhaniya - sehzada", 
        "raat gayi so baat gayi", 
        "munda sona hoon main sehzada",  
        "billi billi - kisi ka bhai kisi ki jaan",
        "shake karan", 
        "deewaane (selfiee)", 
        "tere pyar mein - tu jhoothi me nakkar",
        "so gaya yeah jaha", 
        "character dheela 2.0",
        "panghat",
        "faraar - akull", 
        
        
    

        
        
  /*      //day2 part4 done ✅
        //more changing soon 
        
       
      
        
        "Roll Roll Kanika Kapoor",
        
        
        "The Business",
        "Love Nwantiti (feat. Dj Abux & Soulking)",
        "You Right",
        "Proud Of You",
        "All I Know So Far",
        "Wild Side",
        "Take Me Home Tonight",
        "Breaking Up Was Easy In The 90s",
        "I Wanna Dance With Somebody (Who Loves Me)",
        "In The Bible",
        "Leave The Door Open",
        "Don't Start Now",
        "Savage Love (Laxed - Siren Beat)",
        "Golden",
        "Rasputin",
        "Waves",
        "Blue Jeans",
        "Dancing With The Devil",
        "Happier Than Ever",
        "Bad Guy",
        "Stay",
        "Good 4 U",
        "Levitating",
        "Kiss Me More",
        "Montero (Call Me By Your Name)",
        "Bad Habits",
        "Peaches",
        "Save Your Tears",
        "Industry Baby",
        "Deja Vu",
        "Heartbreak Anniversary",
        "My Ex's Best Friend",
        "Fancy Like",
        "Take My Breath",
        "Mood",
        "Don't Go Yet",
        "Rapstar",
        "Blinding Lights",
        "Shivers",
        "Leave Before You Love Me",
        "Therefore I Am",
        "Good Days",
        "drivers license",
        "You Right",
        "Better Days",
        "Leave The Door Open",
        "All I Know So Far",
        "Wild Side",
        "The Business",
        "Rumors",
        "Astronaut In The Ocean",
        "Breaking Up Was Easy In The 90s",
        "Dancing With The Devil",
        "Happier Than Ever",
        "Without You",
        "Love Nwantiti (feat. Dj Abux & Soulking)",
        "Golden",
        "Waves",
        "In The Bible",
        "I Wanna Dance With Somebody (Who Loves Me)",
        "Rasputin",
        "Take Me Home Tonight",
        "Bad Guy",
        "Dance Monkey",
        "Watermelon Sugar",
        "Don't Start Now",
        "Savage Love (Laxed - Siren Beat)",
        "I Don't Wanna Live Forever",
        "Levitating (feat. DaBaby)",
        "Good 4 U",
        "Levitating",
        "Kiss Me More",
        "Montero (Call Me By Your Name)",
        "Bad Habits",
        "Peaches",
        "Save Your Tears",
        "Industry Baby",
        "Deja Vu",
        "Heartbreak Anniversary",
        "My Ex's Best Friend",
        "Fancy Like",
        "Take My Breath",
        "Mood",
        "Don't Go Yet",
        "Rapstar",
        "Blinding Lights",
        "Shivers",
        "Leave Before You Love Me",
        "Therefore I Am",
        "Good Days",
        "drivers license",
        "You Right",
        "Better Days",
        "Leave The Door Open",
        "All I Know So Far",
        "Wild Side",
        "The Business",
        "Rumors",
        "Astronaut In The Ocean",
        "Breaking Up Was Easy In The 90s",
        "Dancing With The Devil",
        "Happier Than Ever",
        "Without You",
        "Love Nwantiti (feat. Dj Abux & Soulking)",
        "Golden",
        "Waves",
        "In The Bible",
        "I Wanna Dance With Somebody (Who Loves Me)",
        "Rasputin",
        "Take Me Home Tonight",
        "Bad Guy",
        "Dance Monkey",
        "Watermelon Sugar",
        "Don't Start Now",
        "Savage Love (Laxed - Siren Beat)",
        "I Don't Wanna Live Forever",
        "Levitating (feat. DaBaby)",
        "Shallow",
        "Rolling in the Deep",
        "Someone Like You",
        "Hello",
        "Someone You Loved",
        "All of Me",
        "Thinking Out Loud",
        "Shape of You",
        "The A Team",
        "Photograph", */
      ];

      let selectedSong = favSongs[Math.floor(Math.random() * favSongs.length)];

      let buttons = [
        {
          buttonId: `${prefix}owner`,
          buttonText: { displayText: "🧣 Bot Owner 🧣" },
          type: 1,
        },
        {
          buttonId: `${prefix}repo`,
          buttonText: { displayText: "🧩 Source Code 🧩" },
          type: 1,
        },
        {
          buttonId: `${prefix}play ${selectedSong}`,
          buttonText: { displayText: `🔖 Song of the day 🔖` },
          type: 1,
        },
      ];
      let buttonMessage = {
        video: { url: botVideo },
        gifPlayback: true,
        caption: textHelpMenu,
        buttons: buttons,
        footer: `*${botName}*`,
        headerType: 4,
      };

      await Miku.sendMessage(m.from, buttonMessage, { quoted: m });
    }
  },
};
