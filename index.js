let inputOne = ["2 book at 12.49","1 music CD at 14.99","1 chocolate bar at 0.85"]
let inputTwo = ["1 imported box of chocolates at 10.00","1 imported bottle of perfume at 47.50"]
let inputThree = ["1 imported bottle of perfume at 27.99","1 bottle of perfume at 18.99","1 packet of headache pills at 9.75","3 imported boxes of chocolates at 11.25"]
let salesTaxes = 0
let total = 0
let output = []
let exemptedItems = "book box of chocolates chocolate bar packet of headache pills boxes of chocolates books"

const taxCalculator = (input) => {
  input.forEach((item) => {
  let itemTax = 0
  let itemTotal = 0
  let slicedItem = item.split(" ")
  let quantity = slicedItem.shift()
  let isImported = false
  let price = slicedItem.pop()
  if(slicedItem[0] == "imported") {
    //apply import duty tax
    isImported = true
    slicedItem.shift()
    for (let i = 0; i < quantity; i++) {
      let tax = (price * 0.05)
      let saleTax = (Math.ceil(tax*20)/20).toFixed(2)
      salesTaxes = (parseFloat(salesTaxes)+parseFloat(saleTax)).toFixed(2)
      itemTax = (parseFloat(itemTax)+parseFloat(saleTax)).toFixed(2)
    }
  }
  slicedItem.pop()
  let stringItem = slicedItem.toString()
  stringItem = stringItem.replaceAll(',', ' ')
  if(exemptedItems.includes(stringItem) === false) {
    //apply basic sales tax
    for (let i = 0; i < quantity; i++) {
      let tax = (price * 0.1)
      let saleTax = (Math.ceil(tax*20)/20).toFixed(2)
      salesTaxes = (parseFloat(salesTaxes)+parseFloat(saleTax)).toFixed(2)
      itemTax = (parseFloat(itemTax)+parseFloat(saleTax)).toFixed(2)
      
    }
  }
  total += quantity * price
  //build output
  itemTotal = quantity * price
  let outputRow = `${quantity} ${isImported? `imported` : ``} ${stringItem}: ${(parseFloat(itemTotal)+parseFloat(itemTax)).toFixed(2)}`
  output.push(outputRow)
})
let totalWithTaxes = (parseFloat(total)+parseFloat(salesTaxes)).toFixed(2)
//print output
output.forEach(function(item) {
  console.log(item);
});
console.log('Sales Taxes: ' + salesTaxes)
console.log('Total: ' + totalWithTaxes)
}
//run test cases; change the input parameter to any input with the list of products inside of an array
taxCalculator(inputThree)
//taxCalculator(inputOne)
//taxCalculator(inputTwo)
