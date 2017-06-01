// x^2 + y^2 = z^2
var input = [
  { x: 3, y: 4 },

  { x: 12, y: 5 },

  { x: 8, y: 15 }
];
var result = input.map(function(triangle) {
  var toSqrt = Math.pow(triangle.x, 2) + Math.pow(triangle.y, 2)
  return Math.sqrt(toSqrt);
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);