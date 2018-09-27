DOMNodeCollection = function(array) {
  this.array = array;
};


DOMNodeCollection.prototype.html = function(string = null) {
  // debugger
  if (string === null) {
    return this.array[0].innerHtml;
  } else {
    this.array.forEach((el) => {
    el.innerHTML = string;
    });
  }
};

DOMNodeCollection.prototype.empty = function() {
  // debugger
  this.array.forEach((el) => {
  el.innerHTML = '';
  });
};

DOMNodeCollection.prototype.append = function(item) {
  this.array.forEach((el) => {
    el.innerHTML += item;
  });
};

DOMNodeCollection.prototype.children = function() {
let result = [];
this.array.forEach(function(el) {
  result.push(el.children);
});
return new DOMNodeCollection(result);
};

DOMNodeCollection.prototype.parent = function() {
let result = []; 
this.array.forEach(function(el) {
  result.push(el.parentNode);
});
return result;
};

DOMNodeCollection.prototype.find = function(el) {
let result = [];
};

DOMNodeCollection.prototype.attr = function(el) {

};
module.exports = (DOMNodeCollection);