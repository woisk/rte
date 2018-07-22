'use strict';

(function (document, InlineEditor) {
    document.addEventListener('DOMContentLoaded', () => {
        let editor;

        InlineEditor
            .create(document.querySelector('#rte'), {
                media: {
                    browser: '/rte/browser/'
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
})(document, InlineEditor);
