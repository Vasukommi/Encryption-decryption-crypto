// const crypto = require('crypto');
// const validator = require('validator');
// const algorithm = 'aes256';
// const inputEncoding = 'utf8';
// const outputEncoding = 'hex';
// const iv = crypto.randomBytes(16)

// function encrypt(key,text) {
//     let cipher = crypto.createCipheriv(algorithm, key, iv);
//     let ciphered = cipher.update(text, inputEncoding, outputEncoding);
//     ciphered += cipher.final(outputEncoding);
//     return ciphered;
// }


// const key = '123456673959499f9d37623168b2c977';                 
// const text = 'hello world'
// const encrypted = encrypt(key, text);
// console.log("IV (hex):         " + iv.toString('hex'));
// console.log("Ciphertext (hex): " + encrypted); 

import crypto from "crypto"

const encryptData = (data) => {
    const key = crypto.createCipheriv('aes-128-cbc', 'vasukommi')
    const encryptedData = key.update(data, 'utf-8', 'hex')
    encryptedData +=key.final('hex')
    console.log(encryptedData)
}

export default encryptData

