const crypto = require('crypto');
const fs = require('fs');

const input = "596138";
const answer = crypto.createHash('sha256').update(input).digest('hex');
console.log(answer);