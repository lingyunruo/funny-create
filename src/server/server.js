const fs = require('fs');
const koa = require('koa');
const opn = require('opn');


module.exports = function () {

    const app = new koa();

    app.use(async function (ctx, next) {
        await next();
        console.log('lingyun');
    });

    app.use((ctx) => {
        ctx.body = 'hello world';
    });

    app.listen(3000);

    opn(`http://127.0.0.1:3000`);
}