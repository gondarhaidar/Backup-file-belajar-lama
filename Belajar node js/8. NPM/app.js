const validator = require('validator');
const chalk = require('chalk');


console.log(validator.isEmail('gondarahmadhaidar@gmail.com'));
console.log(validator.isMobilePhone('081287388540', 'id-ID'));

console.log(chalk.blue.bgGreen('tesNodemon'));
console.log(chalk.red(123));