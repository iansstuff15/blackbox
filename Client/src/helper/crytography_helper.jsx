import CryptoJS from 'crypto-js'

export const handeEncryption=(stringToEncrypt, encryptionKey)=>{
    return  CryptoJS.AES.encrypt(stringToEncrypt, encryptionKey).toString()

    }

