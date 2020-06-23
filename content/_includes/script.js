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