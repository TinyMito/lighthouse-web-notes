# Pseudocode
### Text base logic
```javascript
FUNCTION calculateOntarioTax:
  SET taxRate = 0.13
  SET purchasePrice = 100
  SET taxAmount = purchasePrice * taxRate
  RETURN taxAmount
END FUNCTION
```
### Into code
```javascript
function calculateOntarioTax() {
  const taxRate = 0.13;
  const purchasePrice = 100;
  const taxAmount = purchasePrice * taxRate;
  return taxAmount;
}

// Example usage
const tax = calculateOntarioTax();
console.log(`The Ontario tax for a purchase price of $100 is ${tax}.`);
```
### Add comments
```javascript
// Function to calculate Ontario sales tax for a purchase price of $100
function calculateOntarioTax() {
  // Set the tax rate to 13%
  const taxRate = 0.13;

  // Set the purchase price to $100
  const purchasePrice = 100;

  // Calculate the tax amount by multiplying the purchase price by the tax rate
  const taxAmount = purchasePrice * taxRate;

  // Return the tax amount
  return taxAmount;
}

// Example usage
// Call the calculateOntarioTax function and store the result in a variable called tax
const tax = calculateOntarioTax();

// Log a message to the console that displays the tax amount for a purchase price of $100
console.log(`The Ontario tax for a purchase price of $100 is ${tax}.`);
```