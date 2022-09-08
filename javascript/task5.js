// display pattern
//              1
//            2	  2
//          3		3	  3
//        4		4		4	  4

const x = 4;
var lines = "";
for (var i = 0; i < x; i++) {
  for (var j = 0; j < x - i; j++) {
    lines += " ";
  }
  for (var k = 0; k <= i; k++) {
    lines += " " + (i + 1);
  }
  lines += "\n";
}
console.log(lines);
