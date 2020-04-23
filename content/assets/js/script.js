/* Add arrow to external links and making them open in a new window */
document.querySelectorAll('a').forEach(function (link) {
    if (
        link.href.indexOf('daveredfern.com') == -1 &&
        link.href.indexOf('127.0.0.1') == -1 &&
        link.href.indexOf('localhost') == -1 ||
        link.href.indexOf('http') == -1
    ) {
        link.append(' ↗');
        link.setAttribute('target', '_blank');
    }
});

/* Add hash to h2 */
document.querySelectorAll('[role="main"] h2, [role="main"] h3').forEach(function (link) {
    var hash = link.textContent.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    var anchor = document.createElement('a');
    anchor.innerHTML = `<a href="#${hash}">#</a>`;
    link.setAttribute('id', hash);
    link.append(' ');
    link.append(anchor);
});