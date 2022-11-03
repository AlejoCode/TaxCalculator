const taxCalculator = require('./taxCalculator')

const input = ["2 book at 12.49","1 music CD at 14.99","1 chocolate bar at 0.85"]

test('taxCalculator returns something', () => {
    expect(taxCalculator(input)).toBeDefined()
})

test('first input test case', () => {
    const inputOne = ["2 book at 12.49","1 music CD at 14.99","1 chocolate bar at 0.85"]
    const outputOne = ["2  book: 24.98","1  music CD: 16.49","1  chocolate bar: 0.85", "Sales Taxes: 1.50", "Total: 42.32"]
    expect(taxCalculator(inputOne)).toEqual(expect.arrayContaining(outputOne))
})

test('second input test case', () => {
    const inputTwo = ["1 imported box of chocolates at 10.00","1 imported bottle of perfume at 47.50"]
    const outputTwo = ["1 imported box of chocolates: 10.50","1 imported bottle of perfume: 54.65","Sales Taxes: 7.65", "Total: 65.15"]
    expect(taxCalculator(inputTwo)).toEqual(expect.arrayContaining(outputTwo))
})

test('third input test case', () => {
    const inputThree = ["1 imported bottle of perfume at 27.99","1 bottle of perfume at 18.99","1 packet of headache pills at 9.75","3 imported boxes of chocolates at 11.25"]
    const outputThree = ["1 imported bottle of perfume: 32.19","1  bottle of perfume: 20.89","1  packet of headache pills: 9.75", "3 imported boxes of chocolates: 35.55","Sales Taxes: 7.90", "Total: 98.38"]
    expect(taxCalculator(inputThree)).toEqual(expect.arrayContaining(outputThree))
})
