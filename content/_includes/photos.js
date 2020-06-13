var listElm = document.querySelector('#photos')

/* Mark first list item */
//listElm.firstElementChild.focus()

/* Event listener */
window.addEventListener('keydown', onKeyDown)

/* Event callback */
function onKeyDown(e) {
    if (e.keyCode == '38' || e.keyCode == '40' || e.keyCode == '37' || e.keyCode == '39') {
        e.preventDefault();

        var selectedElm = document.activeElement,
            goToStart,
            /* map actions to event's key */
            action = {
                ArrowUp: "previous",
                Up: "previous",
                ArrowDown: "next",
                Down: "next"
            }

        selectedElm = selectedElm[action[e.key] + "ElementSibling"];

        /* loop if top/bottom edges reached or "home"/"end" keys clicked */
        if (!selectedElm || e.key == 'Home' || e.key == 'End') {
            goToStart = action[e.key] == "next" || e.key == 'Home'
            selectedElm = listElm.children[goToStart ? 0 : listElm.children.length - 1]
        }

        selectedElm.focus()
    }
}