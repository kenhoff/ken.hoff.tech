module.exports = () => {
    return (files, metalsmith, done) => {
        // build post metadata
        let postObjects = [];
        for (var file in files) {
            if (files.hasOwnProperty(file)) {
                // console.log(file);
                // console.log(files[file])

                // set up moment on all the file dates

                let post = {
                    ...files[file]
                };
                delete post.stats;
                delete post.mode;
                delete post.contents;
                post.slug = file.replace("/index.html", "");
                postObjects.push(post);
            }
        }
        // sort posts
        postObjects.sort((a, b) => {
            return b.date.valueOf() - a.date.valueOf();
        });
        let postGroups = [];

        for (let postObject of postObjects) {
            addToPostGroups(postObject, postGroups);
        }

        // then, sort the postgroups
        metalsmith.postGroups = postGroups;
        return done();
    };
};

const addToPostGroups = (postObject, postGroups) => {
    let postYear = postObject.date.getFullYear();
    // if postgroups already contains a group with that year, push
    for (let postGroup of postGroups) {
        if (postGroup.year == postYear) {
            postGroup.posts.push(postObject);
            return;
        }
    }
    // else, create a new postgroup
    postGroups.push({year: postYear, posts: [postObject]});
};
