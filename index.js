const {createHash} = require('crypto');
const uid = "76561198017925694";
const steamId = BigInt(uid);	
const bytes = [];

for (let i = 0; i < 8; i++) {
	bytes.push(Number((steamId >> (8n * BigInt(i))) & 0xffn));
}

const guid = createHash('md5').update(Buffer.from([0x42, 0x45, ...bytes])).digest('hex');
console.log(guid);
