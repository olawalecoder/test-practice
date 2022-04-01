const stringLength = (inputText) => {
  if(inputText.length < 1 || inputText.length > 10) {
    throw "Length Error";
  }
  return inputText.length;
}

const reverseString = (inputText) => {
  inputText = inputText.split('');
  inputText = inputText.reverse();
  inputText = inputText.join('');
  return inputText;
}

module.exports = {stringLength, reverseString};