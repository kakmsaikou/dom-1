window.dom = {
  create(string) {
    const container = document.createElement("template");
    container.innerHTML = string.trim();
    return container.content.firstChild;
  },
  after(node, node2) {
    node.parentNode.insertBefore(node2, node.nextSibling);
  },
  before(node, node2) {
    node.parentNode.insertBefore(node2, node);
  },
  append(parent, child) {
    parent.appendChild(child);
  },
  wrap(node, parent) {
    dom.before(node, parent);
    dom.append(parent, node);
  },
  remove(node) {
    node.parentNode.removeChild(node);
    return node;
  },
  empty(parent) {
    const arr = [];
    while (parent.firstChild) {
      arr.push(dom.remove(parent.firstChild));
    }
    return arr;
  },
  attr(node, key, value) {
    if (arguments.length === 2) {
      return node.getAttribute(key);
    } else if (arguments.length === 3) {
      node.setAttribute(key, value);
    }
  },
  text(node, string) {
    if (arguments.length === 1) {
      if ("innerText" in node) {
        return node.innerText;
      } else {
        return node.textContent;
      }
    } else if (arguments.length === 2) {
      if ("innerText" in node) {
        node.innerText = string;
      } else {
        node.textContent = string;
      }
    }
  },
  html(node, string) {
    if (arguments.length === 1) {
      return node.innerHTML;
    } else if (arguments.length === 2) {
      node.innerHTML = string;
    }
  },
  style(node, param1, param2) {
    if (arguments.length === 2) {
      if (typeof arguments[1] === "object") {
        for (let key in param1) {
          node.style[key] = param1[key];
        }
      } else if (typeof arguments[1] === "string") {
        return node.style[param1];
      }
    } else if (arguments.length === 3) {
      node.style[param1] = param2;
    }
  },
  class: {
    add(node, className) {
      node.classList.add(className);
    },
    remove(node, className) {
      node.classList.remove(className);
    },
    has(node, className) {
      return node.classList.contains(className);
    },
  },
  on(node, eventName, fn) {
    node.addEventListener(eventName, fn);
  },
  off(node, eventName, fn) {
    node.removeEventListener(eventName, fn);
  },
  find(selector, scope) {
    return (scope || document).querySelectorAll(selector);
  },
  parent(node) {
    return node.parentNode;
  },
  child(node) {
    return node.children;
  },
  siblings(node) {
    return Array.from(node.parentNode.children).filter((x) => x !== node);
  },
  next(node) {
    let x = node.nextSibling;
    while (x && x.nodeType !== 1) {
      x = x.nextSibling;
    }
    return x;
  },
  previous(node) {
    return Array.from(node.parentNode.children).filter((x) => x !== node);
  },
  next(node) {
    let x = node.previousSibling;
    while (x && x.nodeType !== 1) {
      x = x.previousSibling;
    }
    return x;
  },
  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i]);
    }
  },
  index(node) {
    const list = dom.children(node.parentNode);
    let i;
    for (i = 0; i < list.length; i++) {
      if (list[i] === node) {
        break;
      }
    }
    return i;
  },
};
