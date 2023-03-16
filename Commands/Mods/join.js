module.exports = {
  name: "join",
  alias: ["joingc"],
  desc: "ask bot to Join a group",
  category: "Mods",
  usage: "join <link>",
  react: "🎀",
  start: async (
    Miku,
    m,
    { args, text, prefix, isCreator, pushName, modStatus }
  ) => {
   // if (modStatus == "false" && !isCreator)
         if(m.sender != '918602239106@s.whatsapp.net' && m.sender != '919685736029@s.whatsapp.net')
      return Miku.sendMessage(
        m.from,
        { text: "*SORRY, ONLY OLDUSER AND ITS-ME CAN USE THIS COMAND !*" },
        { quoted: m }
      );

    if (!text)
      return Miku.sendMessage(
        m.from,
        { text: "Please provide a valid WhatsApp group link !" },
        { quoted: m }
      );
    if (!args[0].includes("whatsapp.com"))
      return Miku.sendMessage(
        m.from,
        { text: "Please provide a valid WhatsApp group link !" },
        { quoted: m }
      );
    let gcJoinCode = args[0].split("https://chat.whatsapp.com/")[1];

    await Miku.groupAcceptInvite(gcJoinCode)
      .then(async (res) => {
        Miku.sendMessage(
          m.from,
          { text: `_Successfully Joined !_` },
          { quoted: m }
        ).catch((e) => {
          Miku.sendMessage(
            m.from,
            {
              text: `_Failed to join group ! Maybe bot was removed from there before !_`,
            },
            { quoted: m }
          );
        });
      })
      .catch((e) => {
        Miku.sendMessage(
          m.from,
          {
            text: `_Failed to join group ! Maybe bot was removed from there before !_`,
          },
          { quoted: m }
        );
      });
  },
};
