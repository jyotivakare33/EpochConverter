function toHumanDate(epoch) {
  const myDate = new Date( epoch *1000);
  return (myDate.toGMTString()+"<br>"+myDate.toLocaleString());
}

function toEpoch(year, month, date, hour, minute, seconds) {
  const myDate = new Date(`${month} ${date}, ${year} ${hour}:${minute}:${seconds}`); // Your timezone!
  return myDate.getTime()/1000.0;
}


const readLineSync = require('readline-sync');

const selectedUtilityOption = parseInt(readLineSync.question('Welcome to Epoch Converter. Which utility function would you like to use?\n1. To Epoch\n2.To Human Readable Form\n'));

console.log(`You selected ${selectedUtilityOption}`);

switch(selectedUtilityOption) {
  case 1:
    const year = readLineSync.question('Please enter year\n');
    const month = readLineSync.question('Please enter month\n');
    const date = readLineSync.question('Please enter date\n');
    const hour = readLineSync.question('Please enter hour\n');
    const minute = readLineSync.question('Please enter minute\n');
    const seconds = readLineSync.question('Please enter seconds\n');
    const encodedURL = toEpoch(year, month, date, hour, minute, seconds);
    console.log(encodedURL);
    break;
  case 2:
    const epoch = readLineSync.question('Please enter the epoch time\n');
    const decodedURL = toHumanDate(epoch);
    console.log(decodedURL);
    break;
  default:
    console.log('Invalid URL\n');
    break;
}