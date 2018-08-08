'use strict';

(function (document, CKEDITOR) {
    document.addEventListener('DOMContentLoaded', () => {
        const editor = CKEDITOR.replace(document.getElementById('rte'), {
            contentsCss: '',
            customConfig: '',
            disableNativeSpellChecker: true,
            fillEmptyBlocks: false,
            format_tags: 'p;h2;h3',
            height: '30rem',
            language: 'de',
            mediabrowserUrl: '../browser/',
            removeDialogTabs: 'link:advanced;link:target',
            stylesSet: false,
            toolbar: [
                {
                    name: 'all',
                    items: [
                        'Undo',
                        'Redo',
                        'Bold',
                        'Italic',
                        'Link',
                        'Unlink',
                        'Format',
                        'BulletedList',
                        'NumberedList',
                        'Blockquote',
                        'Media',
                        'Table',
                        'Detail'
                    ]
                }
            ]
        });
        console.log(editor);
        document.getElementById('save').addEventListener('click', () => {
            console.log(editor.getData());
        });
    });
})(document, CKEDITOR);
