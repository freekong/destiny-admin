// AES 加密
import cryptoJs from 'crypto-js'
const CryptoSecret = '__CryptoJS_Secret__';

const key = cryptoJs.enc.Utf8.parse("YJWL202101010000")
const iv = cryptoJs.enc.Utf8.parse('YJWL202101010000')

  /**
   * @description: 加密函数
   * @param { * } 要加密的字符 [word]
   * @return { * } 加密后的字符
   */
export function encryption(word: any) {
  let enc: any = {}
  if (typeof word === 'string') {
    enc = cryptoJs.AES.encrypt(word, key, {
      iv: iv,
      mode: cryptoJs.mode.CBC,
      padding: cryptoJs.pad.Pkcs7
    })
  } else if (typeof word === 'object') {
    let data = JSON.stringify(word)
    enc = cryptoJs.AES.encrypt(data, key, {
      iv: iv,
      mode: cryptoJs.mode.CBC,
      padding: cryptoJs.pad.Pkcs7
    })
  }
  // let encResult = enc.ciphertext.toString()
  let encResult = cryptoJs.enc.Base64.stringify(enc.ciphertext)
  return encResult
}
  /**
   * @description: 解密函数
   * @param { * } 要解密的字符 [word]
   * @return { * } 解密后的字符
   */
export function  decryption(word: any) {
  word = cryptoJs.enc.Base64.parse(word).toString()
  let dec = cryptoJs.AES.decrypt(cryptoJs.format.Hex.parse(word), key, {
    iv: iv,
    mode: cryptoJs.mode.CBC,
    padding: cryptoJs.pad.Pkcs7
  })
  let decData = cryptoJs.enc.Utf8.stringify(dec)
  return decData
}

/**
 * 加密数据
 * @param data - 数据
 */
export function encrypto(data: any) {
  const newData = JSON.stringify(data);
  return cryptoJs.AES.encrypt(newData, CryptoSecret).toString();
}

/**
 * 解密数据
 * @param cipherText - 密文
 */
export function decrypto(cipherText: string) {
  const bytes = cryptoJs.AES.decrypt(cipherText, CryptoSecret);
  const originalText = bytes.toString(cryptoJs.enc.Utf8);
  if (originalText) {
    return JSON.parse(originalText);
  }
  return null;
}
