const Metalsmith = require("metalsmith");
const pug = require("metalsmith-pug");
const changed = require("metalsmith-changed");
const sass = require("metalsmith-sass");
const jstransformer = require("metalsmith-jstransformer");
const branch = require("metalsmith-branch");

Metalsmith(__dirname)
    .clean(false)
    .use(changed())
    .use(branch().pattern(["posts/**/*.md", "layouts/**",]).use(jstransformer({defaultLayout: "layouts/post.pug"})))
    .use(pug())
    .use(sass())
    .build((err) => {
        if (err) {
            console.log(err);
        }
    })
