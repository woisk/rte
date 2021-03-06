'use strict';

(function (document, CKEDITOR) {
    document.addEventListener('DOMContentLoaded', () => {
        CKEDITOR.plugins.addExternal('detail', '../../../ckeditor4-detail/');
        CKEDITOR.plugins.addExternal('media', '../../../ckeditor4-media/');
        CKEDITOR.plugins.addExternal('mediabrowser', '../../../ckeditor4-mediabrowser/');
        const editor = CKEDITOR.replace(document.getElementById('rte'), {
            contentsCss: '',
            customConfig: '',
            disableNativeSpellChecker: true,
            extraPlugins: 'detail,media,mediabrowser',
            fillEmptyBlocks: false,
            format_tags: 'p;h2;h3',
            height: '30rem',
            language: 'de',
            mediabrowserUrl: '../browser/',
            removeDialogTabs: 'link:advanced;link:target',
            plugins:
                'basicstyles,' +
                'blockquote,' +
                'divarea,' +
                'enterkey,' +
                'floatingspace,' +
                'format,' +
                'link,' +
                'list,' +
                'magicline,' +
                'table,' +
                'toolbar,' +
                'undo',
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
