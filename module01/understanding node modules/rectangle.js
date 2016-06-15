/*
  THIS IS A NODE MODULE
*/

//Definition like a JSON Object
// module.exports = {
//   perimeter: function (x, y) {
//     return (2*(x+y));
//   },
//   area: function (x, y) {
//     return (x*y);
//   }
// }

//OR

//another definition
exports.perimeter = function (x, y) {
        return (2*(x+y));
}
exports.area = function (x, y) {
        return (x*y);
}
