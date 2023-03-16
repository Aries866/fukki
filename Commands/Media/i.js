module.exports = {
    name: "reply",
    alias: ["r"],
    desc: "gay ki maro",
    react: "🍁",
    category: "",
    start: async(Miku, m,{pushName,prefix,text,args,flags}) => {
      if (args[0] === 'f'){
      Miku.sendMessage(m.from, { text: 'testing 1' } , { quoted: m })
      } else 
        if (args[0] === 'e'){
    Miku.sendMessage(m.from, { text: 'testing 2' } , { quoted: m })
       } else { 
          Miku.sendMessage(m.from, { text: 'testing 3' } , { quoted: m }) 
      }
}
}