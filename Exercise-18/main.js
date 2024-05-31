var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var myPlaces = ["America", "China", "Dubai", "Germany", "USA"];
console.log("Original Order:", myPlaces);
console.log("Alphabetical Order:", __spreadArray([], myPlaces, true).sort());
console.log("Still in Original Order:", myPlaces);
console.log("Reverse Order:", __spreadArray([], myPlaces, true).reverse());
console.log("Still in Original Order:", myPlaces);
console.log("Original Array Reversed:", myPlaces.reverse());
console.log("Back to Original Order:", myPlaces.reverse());
console.log("sorted in Alphabetical Order:", myPlaces.sort());
console.log("Original Array Reversed:", myPlaces.reverse());
