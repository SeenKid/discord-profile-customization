var rpc = require("discord-rpc")
const client = new rpc.Client({ 
	transport: 'ipc' 
})
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "🌹 Your Server Name 🌹",
state: "🌴Some texts🌴",
assets : {
large_image : "YOUR_IMAGE_NAME",
large_text : "🌹 Your Server Name 🌹"
},
buttons : [{label : "Link1" , url : "Your Server Link"},{label : "link2", url : "rando stuff"}]
}
})
})
client.login({ 
	clientId : "CLIENT_ID" 
}).catch(console.error);

/* Remplace CLIENT_ID */ 
/* Remplace YOUR_IMAGE_NAME */
