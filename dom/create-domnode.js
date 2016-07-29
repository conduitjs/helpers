import isDomNode from './is-dom-node';

export default function createDomNode(options={}) {

    let htmlString = options.el;
    let selectedEl = options.context.querySelector(htmlString);

    if (selectedEl) {
        return selectedEl;
    }

    let div = document.createElement('div');
    let elNode;

    div.innerHTML = htmlString;

    Array.from(div.childNodes).forEach((node) => {
        if (!elNode && isDomNode(node)) {
            elNode = node;
        }
    })

    return elNode || div;
}