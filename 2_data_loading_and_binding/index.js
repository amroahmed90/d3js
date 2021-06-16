var dataset = [1, 2, 3, 4, 5];

d3.select("body")
.selectAll('p')         // returns an empty selection since there're no paragraphs yet
.data(dataset)          // this method will put data into the waiting state for processing
.enter()                // this method takes data points one by one and perform further operations on them
.append("p")            
// .text("This is a demo")
.text(function(d) {return "This is paragraph " + d})