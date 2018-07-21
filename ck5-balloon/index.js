'use strict';

(function (document, BalloonEditor) {
    document.addEventListener('DOMContentLoaded', () => {
        let editor;

        BalloonEditor
            .create(document.querySelector('#rte'), {
                media: {
                    browser: '/rte/browser/sample/'
                }
            })
            .then(ed => {
                editor = ed;
                console.log(ed);
            })
            .catch(error => {
                console.error(error.stack);
            });
        document.querySelector('#save').addEventListener('click', function () {
            console.log(editor.getData());
        });
    });
})(document, BalloonEditor);
