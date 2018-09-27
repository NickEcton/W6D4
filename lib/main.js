const DOMNodeCollection = require('./dom_node_collection.js');

window.$l = (el) => {
  if (el instanceof HTMLElement) {
    let all = document.querySelectorAll(el);
    all = Array.from(all);
    return new DOMNodeCollection(all);
  } else if ( typeof(el) === 'string') {
    let all = document.querySelectorAll(el);
    all = Array.from(all);
    return new DOMNodeCollection(all);
  } else {
    return new DOMNodeCollection(el);
  }
  
  };
  console.log('sup');

console.log('hello');


