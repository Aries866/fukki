const axios = require("axios");

module.exports = {
  name: "quote2",
  alias: ["q2", "quotes2"],
  desc: "To make any text to quote",
  category: "Search",
  usage: `q <Your line>`,
  react: "🍁",
  start: async (Miku, m, { text, prefix, args, pushName }) => {
    if (!args[0] && !m.quoted)
      return m.reply(`Please provide a text (Type or mention a message) !`)
      
        if (m.quoted){
          try {
            userPfp = await Miku.profilePictureUrl(m.quoted.sender, "image");
          } catch (e) {
            userPfp = botImage3;
          }
        }
        else{
          try {
            userPfp = await Miku.profilePictureUrl(m.sender, "image");
          } catch (e) {
            userPfp = botImage3;
          }
        }
    

    var waUserName = pushName;

    const quoteText = m.quoted ? m.quoted.msg : args ? args.join(" ") : "";

    var quoteJson = {
      type: "quote",
      format: "png",
      backgroundColor: "#FFFFFF",
      width: 700,
      height: 580,
      scale: 2,
      messages: [
        {
          entities: [],
          avatar: true,
          from: {
            id: 1,
            name: waUserName,
            photo: {
              url: userPfp,
            },
          },
          text: quoteText,
          replyMessage: {},
        },
      ],
    };

    const quoteResponse = await axios
      .post("https://bot.lyo.su/quote/generate", quoteJson, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        const buffer = Buffer.from(res.data.result.image, "base64");
        Miku.sendImageAsSticker(m.from, buffer, m, {
          packname: `${botName}`,
          author: waUserName,
        });
      });
  },
};
