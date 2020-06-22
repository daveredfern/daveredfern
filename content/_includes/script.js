/* Add arrow to external links and making them open in a new window */

document.querySelectorAll('a').forEach(function (link) {
    if (
        link.href.indexOf('daveredfern.com') == -1 &&
        link.href.indexOf('ngrok.io') == -1 &&
        link.href.indexOf('127.0.0.1') == -1 &&
        link.href.indexOf('localhost') == -1 ||
        link.href.indexOf('http') == -1
    ) {
        link.insertAdjacentHTML('beforeend', '&nbsp;↗');
        link.setAttribute('rel', 'noopener noreferrer');

    }
});

/* Add hash to h2 */

document.querySelectorAll('[role="main"] h2, [role="main"] h3').forEach(function (heading) {
    var hash = heading.textContent.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    var anchor = document.createElement('a');
    anchor.href = `#${hash}`;
    anchor.classList.add('anchor-link');
    anchor.setAttribute('aria-label', 'Anchor link for this heading');
    anchor.innerHTML = '#';
    heading.setAttribute('id', hash);
    heading.append(anchor);
});