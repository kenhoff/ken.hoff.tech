const Metalsmith = require("metalsmith");
const pug = require("metalsmith-pug");
const changed = require("metalsmith-changed");

Metalsmith(__dirname)
    .clean(false)
    .use(changed())
    .source("./src")
    .destination("./build")
    .use(pug())
    .build((err) => {
        if (err) {
            console.log(err);
        }
    })
