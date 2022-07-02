let div = dom.create("<td>div1</td>");
dom.before(test, div);
dom.after(test, div);

dom.append(test2, div);
let div2 = dom.create("<div id='father'>parent</div>");
dom.wrap(div, div2);

dom.remove(father);

dom.attr(test, "title", "Hello World");

const title = dom.attr(test, "title");

console.log(title);

dom.text(test, "hi, this is new content");

console.log(dom.text(test));
console.log(dom.html(test));

dom.style(test, { border: "1px solid red" });
console.log(dom.style(test, "border"));
dom.style(test, "color", "blue");

dom.class.add(test, "newGate");
dom.class.add(test, "gold");
dom.class.add(test, "shiver");
dom.class.remove(test, "gold");
console.log(dom.class.has(test, "gold"));

let fn = () => console.log("hi");
dom.on(test, "click", fn);
dom.off(test, "click", fn);

console.log(dom.find("#test"));

console.log(".red", test2);

console.log(dom.siblings(e1));

console.log(dom.next(e1));
