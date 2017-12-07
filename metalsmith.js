const Metalsmith = require("metalsmith");
const pug = require("metalsmith-pug");
const changed = require("metalsmith-changed");
const sass = require("metalsmith-sass");

Metalsmith(__dirname)
    .clean(false)
    .use(changed())
    .source("./src")
    .destination("./build")
    .use(pug())
    .use(sass())
    .build((err) => {
        if (err) {
            console.log(err);
        }
    })
