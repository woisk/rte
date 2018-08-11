'use strict';

(function (document, ClassicEditor) {
    document.addEventListener('DOMContentLoaded', () => {
        let editor;

        ClassicEditor
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
})(document, ClassicEditor);
