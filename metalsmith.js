const Metalsmith = require('metalsmith');
const pug = require('metalsmith-pug');
const changed = require('metalsmith-changed');
const sass = require('metalsmith-sass');
const markdown = require('metalsmith-markdown');
const layouts = require('metalsmith-layouts');
const branch = require('metalsmith-branch');

Metalsmith(__dirname)
    .clean(false)
    .use(changed())
    .source('./src')
    .destination('./build')
    // .use(markdown())
    .use(pug())
    .use(sass())
    .use(
        branch()
            .pattern(['posts/**/*.md'])
            .use(
                layouts({
                    engine: 'pug',
                    default: 'post.pug',
                    directory: 'layouts',
                }),
            ),
    )
    .build(err => {
        if (err) {
            console.log(err);
        }
    });
