const Metalsmith = require("metalsmith");
const pug = require("metalsmith-pug");
const changed = require("metalsmith-changed");
const sass = require("metalsmith-sass");
const jstransformer = require("metalsmith-jstransformer");
const branch = require("metalsmith-branch");
const moment = require("moment");
const posts = require("./plugins/posts");

Metalsmith(__dirname)
    .clean(false)
    .use(changed({forcePattern: ["posts/*/*.md", "layouts/**", "posts/index.pug"]}))
    .use(
        branch()
            .pattern(["posts/*/*.md"])
            .use((files, metalsmith, done) => {
                for (var file in files) {
                    if (files.hasOwnProperty(file)) {
                        files[file].formattedDate = moment(
                            files[file].date
                        ).format("YYYY, MMMM Do");
                    }
                }
                return done();
            })
    )
    .use(
        branch()
            .pattern(["posts/*/*.md", "layouts/**"])
            .use(
                jstransformer({
                    defaultLayout: "layouts/post.pug",
                    engineOptions: {
                        "markdown-it": {
                            html: true
                        }
                    }
                })
            )
            .use(posts())
    )
    .use((files, metalsmith, done) => {
        if (files["posts/index.pug"]) {
            files["posts/index.pug"].postGroups = {...metalsmith.postGroups};
        }
        return done();
    })
    .use(pug({useMetadata: true}))
    .use(sass())
    .build(err => {
        if (err) {
            console.log(err);
        }
    });
