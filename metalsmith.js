const Metalsmith = require("metalsmith");
const pug = require("metalsmith-pug");
// const changed = require("metalsmith-changed");
const sass = require("metalsmith-sass");
const jstransformer = require("metalsmith-jstransformer");
const branch = require("metalsmith-branch");

Metalsmith(__dirname)
    // .clean(false)
    // .use(changed())
    // .use(branch()
    //     .pattern(["posts/**/*.md"])
    //     .use((files, metalsmith, done) => {
    //         console.log(metalsmith);
    //         return done();
    //     })
    // )
    .use(
        branch()
            .pattern(["posts/*/*.md", "layouts/**"])
            .use(
                jstransformer({
                    defaultLayout: "layouts/post.pug"
                })
            )
            .use((files, metalsmith, done) => {
                // build post metadata
                let postObjects = [];
                for (var file in files) {
                    if (files.hasOwnProperty(file)) {
                        // console.log(files[file]);
                        let post = {
                            ...files[file]
                        };
                        delete post.stats;
                        delete post.mode;
                        delete post.contents;
                        post.slug = file.replace("/index.html", "");
                        console.log(post.slug);
                        postObjects.push(post);
                    }
                }
                // sort posts
                postObjects.sort((a, b) => {
                    return b.date.valueOf() - a.date.valueOf();
                });
                metalsmith.postObjects = postObjects;
                return done();
            })
    )
    .use((files, metalsmith, done) => {
        files["posts/index.pug"].postObjects = [...metalsmith.postObjects];
        return done();
    })
    .use(pug({useMetadata: true}))
    .use(sass())
    .build(err => {
        if (err) {
            console.log(err);
        }
    });
