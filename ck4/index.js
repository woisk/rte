'use strict';

(function (document, CKEDITOR) {
    document.addEventListener('DOMContentLoaded', () => {
        CKEDITOR.plugins.addExternal('detail', '/ck4/detail/');
        CKEDITOR.plugins.addExternal('media', '/ck4/media/');
        CKEDITOR.plugins.addExternal('mediabrowser', '/ck4/mediabrowser/');
        const editor = CKEDITOR.replace(document.getElementById('editor'), {
            contentsCss: '',
            disableNativeSpellChecker: true,
            extraAllowedContent: 'details summary',
            extraPlugins: 'detail,media,mediabrowser',
            format_tags: 'p;h2;h3',
            language: 'de',
            mediabrowserUrl: '/rte/browser/',
            removeDialogTabs: 'link:advanced;link:target',
            plugins:
                'basicstyles,' +
                'blockquote,' +
                'dialogadvtab,' +
                'divarea,' +
                'elementspath,' +
                'enterkey,' +
                'floatingspace,' +
                'format,' +
                'link,' +
                'list,' +
                'liststyle,' +
                'magicline,' +
                'showborders,' +
                'tab,' +
                'table,' +
                'tableselection,' +
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
                        'Detail',
                        'Media',
                        'Table',
                        'ShowBlocks'
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
