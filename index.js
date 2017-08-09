#!/usr/bin/env node


require('babel-register');
require("babel-polyfill");

const program = require('commander');

const childProcess = require('child_process');
const projectDir = process.cwd();

program.version('1.0.0')
	.option('init', '')
	.option('server')
	.parse(process.argv);

let command = '';

if(program.init) {
	command = 'init';
}
else if(program.server) {
	command = 'server';
}


const workProcess = childProcess.exec(`node --harmony-async-await ./src/index.js ${command} ${projectDir}`, {
	cwd: __dirname
}, (e, stdout) => {
	console.log(e);
});

workProcess.stdout.on('data', (data) => {
	console.log(data);
});