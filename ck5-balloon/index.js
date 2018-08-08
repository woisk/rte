'use strict';

(function (document, BalloonEditor) {
    document.addEventListener('DOMContentLoaded', () => {
        let editor;

        BalloonEditor
            .create(document.querySelector('#rte'), {
                media: {
                    browser: '../browser/'
                }
            })
            .then(ed => {
                editor = ed;
                console.log(ed);
            })
            .catch(error => {
                console.error(error.stack);
            });
        document.querySelector('#save').addEventListener('click', () => {
            console.log(editor.getData());
        });
    });
})(document, BalloonEditor);
