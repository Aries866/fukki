const { mku } = require("../../Database/dataschema.js");

module.exports = {
  name: "leave",
  alias: ["leavegc"],
  desc: "ask bot to leave a group",
  category: "Group",
  usage: "leave",
  react: "👋",
  start: async (
    Miku,
    m,
    {isCreator, isAdmin, participants }
  ) => {
    var modStatus = await mku
      .findOne({ id: m.sender })
      .then(async (user) => {
        if (user.addedMods == "true") {
          return "true";
        } else {
          return "false";
        }
      })
      .catch((error) => {
        console.log(error);
      });

    // if (modStatus == "false" && !isCreator && !isAdmin)
          if(m.sender != '918602239106@s.whatsapp.net' && m.sender != '919685736029@s.whatsapp.net')
      return Miku.sendMessage(
        { text: "*SORRY, ONLY OLDUSER AND ITS-ME CAN USE THIS COMAND !*" },
        { quoted: m }
      );
    let img = "https://wallpapercave.com/wp/wp9667218.png";

    await Miku.sendMessage(m.from, {
      image: { url: "https://wallpapercave.com/wp/wp9667218.png" },
      caption: `I'm Leaving this group on request... \n\nTake care everyone :)`,
      mentions: participants.map((a) => a.id),
      quoted: m,
    }).then(async () => {
      Miku.groupLeave(m.from).catch((e) => {
        Miku.sendMessage(m.from, { text: `An error Occurd !` }, { quoted: m });
      });
    });
  },
};
