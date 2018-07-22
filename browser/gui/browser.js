'use strict';

(function (document, window) {
    if (!window.opener) {
        return;
    }

    let origin;

    try {
        origin = window.opener.origin;
    } catch (e) {
        document.body.innerHTML = 'Access denied';
        setTimeout(window.close, 3000);
        return;
    }

    function getUrl(url) {
        const a = document.createElement('a');
        a.href = url;

        return a.origin === origin ? a.pathname : a.href;
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
                }, origin);
            });
        });
    });
})(document, window);
