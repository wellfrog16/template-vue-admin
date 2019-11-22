const ghpages = require('gh-pages');

ghpages.publish('dist', {
    message: 'Updates'
}, () => {
    ghpages.publish('docs', {
        src: 'index.html',
        message: 'Updates',
        dest: 'docs',
        add: true,
    }, () => {
        console.log('finished');
    });
});