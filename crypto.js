import { createHash } from 'crypto';

function findHashWithPrefix(prefix) {
    let number = 0;
    while (true) {
        const hash = createHash('sha256').update(number.toString()).digest('hex');
        if (hash.startsWith(prefix)) {
            return { input: number.toString(), hash };
        }
        number++;
}
}
const result = findHashWithPrefix('00000');
console.log('Input:', result.input);
console.log('Hash:', result.hash);

