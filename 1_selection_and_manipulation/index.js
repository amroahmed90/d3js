// d3 provides us 2 ways of selecting DOM elements
// d3.select()      >> returns the first element matching 
// d3.selectAll()   >> returns all elements matching

var el = d3.select("h1");
console.log(el);

el.style("color", "red")
.attr("class", "first-heading")
.text("Updated h1 tag");

d3.select("body").append("p").text("This is the 1st paragraph");
d3.select("body").append("p").text("This is the 2nd paragraph");
d3.select("body").append("p").text("This is the 3rd paragraph");

d3.selectAll("p").style("color","blue")
