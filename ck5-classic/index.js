'use strict';

(function (document, ClassicEditor) {
    document.addEventListener('DOMContentLoaded', () => {
        let editor;

        ClassicEditor
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
})(document, ClassicEditor);
