function getByte(arrBinary) {
  let byte = 0;
  // 1 byte
  if (arrBinary[0][0] == '0') {
    byte = 1;
  } else if (arrBinary[0][0] == '1') {
    // 2 byte up
    for (let i = 0; i < arrBinary[0].length; i++) {
      if (arrBinary[0][i] == '0') {
        break;
      }
      if (arrBinary[0][i] == '1') {
        byte++;
      }
    }
  }
  return byte;
}

function validate(arrBinary, byte) {
  // validate n-1 byte

  if (byte > arrBinary.length) {
    return false;
  }
  let validate = true;
  for (let i = 1; i < byte; i++) {
    if (!(arrBinary[i][0] == '1' && arrBinary[i][1] == '0')) {
      validate = false;
    }
  }
  return validate;
}

function convertToBinary(arrInt) {
  for (let i = 0; i < arrInt.length; i++) {
    let newBinary = '00000000' + arrInt[i].toString(2);
    arrInt[i] = newBinary.substring(newBinary.length - 8);
  }
  return arrInt;
}

function main(arrInt) {
  const arrBinary = convertToBinary(arrInt);
  const byte = getByte(arrBinary);
  return validate(arrBinary, byte);
}

var arrInt = [197, 130, 1]; //Input Arry

// This is the answer function
console.log(main(arrInt));
