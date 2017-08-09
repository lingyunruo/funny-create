#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const program = require('commander');

const init = require('./init');
const start = require('./server/server');

program.version('1.0.0')
    .option('init', '')
    .option('server')
    .parse(process.argv);


if(program.server) {
    start();
}

if(program.init) {
	init();
}