const fs = require('fs');
const koa = require('koa');

module.exports = function() {

    const app = new koa();

    app.use(async function(ctx, next) {
        await next();
        console.log('lingyun');
    });

    app.use((ctx) => {
        ctx.body = 'hello world';
    });

    app.listen(3000);
    console.log(`server is start at port:3000`);

}