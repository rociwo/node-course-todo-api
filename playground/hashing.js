const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log('hasr:', hash);
  });
});

var hashedPassword = '$2a$10$kLOXlEsbeHQrIyYmJaW.3OMbIFKUd1EcG4vUcPINvLXp.is9hHPVm';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});

// var data = {
//   id: 10
// };
//
// var token = jwt.sign(data, '123abc');
// console.log(token);
//
// var decoded = jwt.verify(token, '123abc');
// console.log('decode: ',decoded);

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTUxNTA1ODc3NH0.Z2BJbmDPzWsTikE034YE1r6XCOJXarWnd_hEt-eHeyw


// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
// console.log(`message: ${message}`);
// console.log(`hash: ${hash}`);
//
// var data = {
//   id: 4
// };
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
//
// // token.data.id= 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// var resulHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if (resulHash === token.hash) {
//   console.log('Data was no change');
// }
// else {
//   console.log('Data was changed');
// }
