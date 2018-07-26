import Editor from '../../editor/src/Editor.js';

(function (document, Editor) {
    document.addEventListener('DOMContentLoaded', () => {
        const editor = Editor.create(document.getElementById('rte'), {
            mediabrowser: '/rte/browser',
            path: '/editor'
        });
        const save = document.getElementById('save');

        save.addEventListener('click', (ev) => {
            ev.preventDefault();
            console.log(editor.getData());
        });
    });
})(document, Editor);
