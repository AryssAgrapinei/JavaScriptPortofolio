function calculator() {
    // Get the input values
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
  
    // Convert the input values to numbers
    num1 = Number(num1);
    num2 = Number(num2);
  
    // Get the selected operation
    let operation = document.getElementById('operation').value;
  
    // Declare a variable to store the result
    let result;
  
    // Perform the selected operation
    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        result = num1 / num2;
        break;
    }
  
    // Display the result
    document.getElementById('result').innerHTML = result;
  }
  
  // Add an event listener to the "Calculate" button
  document.getElementById('calculate').addEventListener('click', calculator);
  