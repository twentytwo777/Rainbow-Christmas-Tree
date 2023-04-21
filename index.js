// Imports
import chalk from 'chalk';
const rows = 1;
const randomHEX = _ => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const tree = _ => {
	for (let i = 0; i < rows; i++) {
		console.log(`${' '.repeat(rows - i)}${chalk.hex(randomHEX())('*'.repeat(i * 2 + 1))}`);
	}
};
rows > 70 || rows < 10 ? console.log(chalk.hex(randomHEX())('Man, you\'re crazy!')) : tree.call(this);