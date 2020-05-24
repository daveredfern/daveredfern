/* Add arrow to external links and making them open in a new window */

document.querySelectorAll('a').forEach(function (link) {
    if (
        link.href.indexOf('daveredfern.com') == -1 &&
        link.href.indexOf('127.0.0.1') == -1 &&
        link.href.indexOf('localhost') == -1 ||
        link.href.indexOf('http') == -1
    ) {
        link.innerHTML = link.innerHTML + '<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="external-link" class="external-link" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M497.6,0,334.4.17A14.4,14.4,0,0,0,320,14.57V47.88a14.4,14.4,0,0,0,14.69,14.4l73.63-2.72,2.06,2.06L131.52,340.49a12,12,0,0,0,0,17l23,23a12,12,0,0,0,17,0L450.38,101.62l2.06,2.06-2.72,73.63A14.4,14.4,0,0,0,464.12,192h33.31a14.4,14.4,0,0,0,14.4-14.4L512,14.4A14.4,14.4,0,0,0,497.6,0ZM432,288H416a16,16,0,0,0-16,16V458a6,6,0,0,1-6,6H54a6,6,0,0,1-6-6V118a6,6,0,0,1,6-6H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V304A16,16,0,0,0,432,288Z"></path></svg>';
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');

    }
});

/* Add hash to h2 */

document.querySelectorAll('[role="main"] h2, [role="main"] h3').forEach(function (link) {
    var hash = link.textContent.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    var anchor = document.createElement('a');
    anchor.innerHTML = `#`;
    anchor.classList.add('hash');
    anchor.href = `#${hash}`;
    link.setAttribute('id', hash);
    link.append(' ');
    link.append(anchor);
});