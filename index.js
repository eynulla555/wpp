const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
	if(message.body === '!sim') {

async function sim(){
		client.sendMessage("994503071506@c.us", "Test");
let contact_iswa = await client.getContactById("994503071506@c.us");
console.log(contact_iswa);

}
sim();
	}

	if(message.body === '!nar') {
		async function nar(){
let contact_iswaa = await client.isRegisteredUser("994705690700@c.us");
console.log(contact_iswaa);
		}
		nar();
	}
	if(message.body === '!cin') {
		async function cin(){
let contact_iswwa = await client.isRegisteredUser("994503071506@c.us");
console.log(contact_iswwa);
		}
		cin();
	}
});

client.initialize();