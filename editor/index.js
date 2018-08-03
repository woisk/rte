import Editor from '../../editor/src/Editor.js';

(function (document, Editor) {
    document.addEventListener('DOMContentLoaded', () => {
        const editor = Editor.create(document.getElementById('rte'), {
            gui: '/editor/gui',
            mediabrowser: '/rte/browser'
        });
        const save = document.getElementById('save');

        console.log(editor);
        save.addEventListener('click', (ev) => {
            ev.preventDefault();
            console.log(editor.getData());
        });
    });
})(document, Editor);
