'use strict';

(function (document, InlineEditor) {
    document.addEventListener('DOMContentLoaded', () => {
        let editor;

        InlineEditor
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
                console.error(error);
            });
        document.querySelector('#save').addEventListener('click', () => {
            console.log(editor.getData());
        });
    });
})(document, InlineEditor);
