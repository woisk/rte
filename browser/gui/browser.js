'use strict';

(function (document, window) {
    if (!window.opener) {
        return;
    }

    function getUrl(url) {
        const a = document.createElement('a');
        a.href = url;

        return a.origin === window.opener.origin ? a.pathname : a.href;
    }

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('figure > audio, figure > iframe, figure > img, figure > video').forEach((media) => {
            const figure = media.parentElement;
            const caption = figure.querySelector('figcaption');
            const tag = media.tagName.toLowerCase();

            figure.addEventListener('click', () => {
                window.opener.postMessage({
                    alt: media.getAttribute('alt'),
                    caption: !!caption ? caption.innerHTML : null,
                    src: getUrl(media.src),
                    type: tag === 'img' ? 'image' : tag
                }, window.opener.origin);
            });
        });
    });
})(document, window);
