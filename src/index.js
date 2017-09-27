module.exports = function multiply(first, second) {
    var memorizedPart = 0;
    var previousPartialProduct = "";
    var twoDigitsProduct = 0;
    var currentPartialProduct = "";
    var fullProduct = "";
    for (decimalShift in second) {
        for (i in first) {
            twoDigitsProduct = second[second.length-1-decimalShift] * first[first.length-1-i];
            twoDigitsProduct += memorizedPart;
            twoDigitsProduct += (previousPartialProduct[previousPartialProduct.length-i-2]) ? Number(previousPartialProduct[previousPartialProduct.length-i-2]) : 0;
            currentPartialProduct = String(twoDigitsProduct % 10) + currentPartialProduct;
            memorizedPart = (twoDigitsProduct - twoDigitsProduct % 10)/10;
        }
        if (memorizedPart != 0) {
            currentPartialProduct = memorizedPart + currentPartialProduct;
        }
        fullProduct = currentPartialProduct.slice(currentPartialProduct.length-1, currentPartialProduct.length) + fullProduct;
        previousPartialProduct = currentPartialProduct;
        currentPartialProduct = "";
        memorizedPart = 0;
    }
    fullProduct = previousPartialProduct.slice(0,-1) + fullProduct;
    return (fullProduct);
};