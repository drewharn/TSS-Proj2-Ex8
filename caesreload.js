const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

//Step 1:
function encryptLetter(letter, shift){
    const index = alphabet.indexOf(letter.toLowerCase());
    const newIndex = (index + shift) % alphabet.length;
    return alphabet[newIndex];
    
};

//Step 2:
function encryptMessage(word, shift){
    let encryptedMessage = "";
    for (let i = 0; i < word.length; i++){
        encryptedMessage += encryptLetter(word[i], shift);
    }
    return encryptedMessage;
}

//Step 3:
function decryptLetter(letter, shift){
    const index = alphabet.indexOf(letter.toLowerCase());
    const newIndex = (index - shift + alphabet.length) % alphabet.length;
    return alphabet[newIndex];  
};

//Step 4:
function decryptMessage(word, shift){
    let decryptedMessage = "";
    for (let i = 0; i < word.length; i++){
        decryptedMessage += decryptLetter(word[i], shift);
    }
    return decryptedMessage;
}

//Question: If Caesar encrypts the word "BRUTUS" using our encryptMessage function and then decrypts the result using our decryptMessage function, he will get "BRUTUS" back because running these four functions ensure that the original sequence of letters in "BRUTUS" are returned. This is because the decryption function cancels out the encryption function by applying them in order and the decryption fucntion is the inverse of the other function. 