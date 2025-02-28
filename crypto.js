import { createHash } from 'crypto';

// function findHashWithPrefix(prefix) {
//     let number = 0;
//     while (true) {
//         const input = "harkirat => raman|100"+number.toString();
//         const hash = createHash('sha256').update(input).digest('hex');
//         if (hash.startsWith(prefix)) {
//             return { input: number.toString(), hash };
//         }
//         number++;
// }
// }
// const result = findHashWithPrefix('00000');
// console.log('Input:', result.input);
// console.log('Hash:', result.hash);


function FIND(prefix) {
   let number = 0;
   while(true) {
         const input = "Raunit Jaiswal"+number.toString();
         const hash = createHash('sha256').update(input).digest('hex');
         if(hash.startsWith(prefix)) {
              return { input: number.toString(), hash };
         }
         number++;
   }
}
const value = FIND('000000');
console.log(value.input);
console.log(value.hash);