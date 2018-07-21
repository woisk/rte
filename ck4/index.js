'use strict';

(function (document, CKEDITOR) {
    document.addEventListener('DOMContentLoaded', function () {
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
            mediabrowserUrl: '/rte/browser/sample/',
            removeButtons: 'Cut,Copy,Paste,Anchor,Strike,Subscript,Superscript,Indent,Outdent',
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
                'horizontalrule,' +
                'indentlist,' +
                'link,' +
                'list,' +
                'liststyle,' +
                'magicline,' +
                'removeformat,' +
                'showblocks,' +
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
                        'Format',
                        'Bold',
                        'Italic',
                        'RemoveFormat',
                        'Link',
                        'Unlink',
                        'BulletedList',
                        'NumberedList',
                        'Blockquote',
                        'Detail',
                        'Media',
                        'Table',
                        'HorizontalRule',
                        'ShowBlocks'
                    ]
                }
            ]
        });
        console.log(editor);
        document.getElementById('save').addEventListener('click', function () {
            console.log(editor.getData());
        });
    });
})(document, CKEDITOR);
