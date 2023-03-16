const axios = require('axios')
const fs = require('fs')

module.exports = {
    name: "script",
    alias: ["repo","sc","sourcecode"],
    desc: "Say hello to bot.",
    react: "🍁",
    category: "Core",
    start: async(Miku, m,{pushName,prefix,args,flags,commands,comnd}) => {
        let picURL = fs.readFileSync('./Page/BG.jpg')
        let repoInfo = await axios.get('https://api.github.com/repos/FantoX001/Atlas-MD')
        let repo = repoInfo.data
        let txt = `      🧣 *${botName}'s Script* 🧣\n\n*🎀 Total Forks:* ${repo.forks_count}\n*⭐ Total Stars:* ${repo.stargazers_count}\n*📜 License:* ${repo.license.name}\n*📁 Repo Size:* ${(repo.size/1024).toFixed(2)} MB\n*📅 Last Updated:* ${repo.updated_at}\n\n*🔗 Repo Link:* https://link.atlasmd.ninja/AtlasMD-Repo\n\n❝ Dont forget to give a Star ⭐ to the repo. It's made with restless harkwork by *Team ATLAS*. ❞\n\n*©️ Team ATLAS- 2023*`
      textHelpMenu = `*ARE YOU WANT A SCRIPT LINK IN INBOX IF  YES THEN PRESS YES IF NO THEN PRESS NO`
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
    image:picURL,
    caption: textHelpMenu,
    buttons: buttons,
    headerType: 4,
  };
       if (args[0] === 'yes'){
        await Miku.sendMessage(m.sender,{image:picURL, caption:txt},{quoted:m});
        await Miku.sendMessage(m.from, { text :`Check your DM *${pushName}* Senpai !\n\nI have sent you script link personally.` }, {quoted:m});
        } else 
        if (args[0] === 'no'){
        await Miku.sendMessage(m.from,{image:picURL, caption:txt},{quoted:m});
          } else { 
        await Miku.sendMessage(m.from, buttonMessage, {image:picURL}, {quoted:m});
      }
    }
}