module.exports = {
    name: "support",
    alias: ["supportgc"],
    desc: "Sends support group link.",
    cool:3,
    react: "🍁",
    category: "Core",
    start: async(Miku, m,{pushName}) => {
        m.reply(`Check your DM *${pushName}* Senpai !\n\nI have sent you support group link personally.`)
        let botpic = botImage1
        let txt = `      🧣 *Support Group* 🧣\n\n*${botName}* is an open source project, and we are always happy to help you.\n\n*Link:* https://link.atlasmd.ninja/AtlasMD-Support\n\n*Note:* Please don't spam in the group, and don't message *Admins directly* without permission. Ask for help in *Group*.\n\n*Thanks for using Atlas.*`
textHelpMenu = `*ARE YOU WANT A SUPPORT GROUP LINK IN INBOX IF  YES THEN PRESS YES IF NO THEN PRESS NO` 
      let buttons = [
    {
      buttonId: `${prefix}${comnd} yes`,
      buttonText: { displayText: "YES" },
      type: 1,
    },
    {
      buttonId: `${prefix  + comnd} no`,
      buttonText: { displayText: "NO" },
      type: 1,
    },
  ];
  let buttonMessage = {
    image:botpic,
    caption: textHelpMenu,
    buttons: buttons,
    headerType: 4,
  };
       if (args[0] === 'yes'){
        await await Miku.sendMessage(m.sender,{image:{url:botpic}, caption:txt},{quoted:m});
        await Miku.sendMessage(m.from, { text :`Check your DM *${pushName}* Senpai !\n\nI have sent you support group link personally.` }, {quoted:m});
        } else 
        if (args[0] === 'no'){
        await await Miku.sendMessage(m.from,{image:{url:botpic}, caption:txt},{quoted:m});
          } else { 
        await Miku.sendMessage(m.from, buttonMessage, {image:picURL}, {quoted:m});
      }
    }
}