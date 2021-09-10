var rpc = require("discord-rpc")
const client = new rpc.Client({ 
	transport: 'ipc' 
})
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "🌹 FrenchRobloxCommunity 🌹",
state: "🌴✨ Rejoins nous ✨🌴",
assets : {
large_image : "bhop",
large_text : "🌹 FrenchRobloxCommunity 🌹"
},
buttons : [{label : "Lien 1❤️" , url : "https://discord.gg/frcv3"},{label : "Lien 2💎", url : "https://discord.gg/V5H33qubw3"}]
}
})
})
client.login({ 
	clientId : "820236976439164949" 
}).catch(console.error);