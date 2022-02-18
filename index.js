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
	
	if (message.body != null){
		async function cin(){
let contact_iswwa = await client.isRegisteredUser(message.body + "@c.us");

console.log(contact_iswwa);
		}


		cin();
    }
async function start () {const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});}
});

client.initialize();
