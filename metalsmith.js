const Metalsmith = require("metalsmith");
const pug = require("metalsmith-pug");
const changed = require("metalsmith-changed");
const sass = require("metalsmith-sass");
const jstransformer = require("metalsmith-jstransformer");
const branch = require("metalsmith-branch");
const moment = require("moment");
const posts = require("./plugins/posts");
const dayjs = require("dayjs");

Metalsmith(__dirname)
    .clean(false)
    .use(changed({forcePattern: ["stuff/*/*.md", "layouts/**", "stuff/index.pug"]}))
    .use(
        branch()
            .pattern(["stuff/*/*.md"])
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
            .pattern(["stuff/*/*.md", "layouts/**"])
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
        if (files["stuff/index.pug"]) {
            files["stuff/index.pug"].postGroups = {...metalsmith.postGroups};
        }
        return done();
    })
    .use((files, metalsmith, done) => {
        if ("index.pug" in files) {
            files["index.pug"].resumeFormattedDate = dayjs().format("YYYY-MM-DD");
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
