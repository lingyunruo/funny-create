
const fs = require('fs');
const path = require('path');
const color = require('colors');



const demoDir = path.join(__dirname, './demo');
const projectDir = process.cwd();



function copyDir(src, dst) {
	try {
		let demoFiles = fs.readdirSync(src);

		demoFiles.map((file) => {
			let fileDir = path.join(src, file);
			let tarDir = path.join(dst, file);
			let stat = fs.statSync(fileDir);

			if(stat.isFile()) {
				copy(fileDir, tarDir);
			}
			else if(stat.isDirectory()){
				fs.mkdir(tarDir, (err) => {
					copyDir(fileDir, tarDir);
				});

			}
		});
	}
	catch(e) {
		console.log(color.red(`ERROR ${e}`));
	}
}


function copy(src, dst) {
	try {
		let resdStream = fs.createReadStream(src);
		let writeStream = fs.createWriteStream(dst);

		resdStream.pipe(writeStream);
		console.log(color.green(`${dst} copy success`));
	}
	catch(e) {
		console.log('copy Error', e);
	}
}


module.exports = function() {
	try {
		copyDir(demoDir, projectDir);
	}
	catch(e) {
		console.log(e);
	}
}