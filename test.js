
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    expect(dollars).toBeCloseTo(3.745); 
});

test("One dollar should be 146.26 yen", function() {
    const yen = fromDollarToYen(1);
    expect(yen).toBeCloseTo(146.26); 
});

test("156.5 yen should be 0.87 pounds", function() {
    const pounds = fromYenToPound(156.5);
    expect(pounds).toBeCloseTo(0.87); 
});
