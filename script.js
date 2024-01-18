function add(a, b) {
    return a + b;
    //console.log(a+b)
  }
  
  function subtract(a, b) {
    return a - b;
  }
  function multiply(a, b) {
    return a * b;
  }
  function devide(a, b) {
    return a / b;
  }

  console.log("Welcome to the JS calculator")
  
  let a = prompt("Enter the first number: ");
  let b = prompt("Enter the second number: ");
 a=parseInt(a)
 b=parseInt(b)
  
  let operation = prompt("Enter the operation (+, -, *, /): ");
  if(operation == "+"){
    console.log(add(a, b))
  }
  
  else if(operation == "-"){
    console.log(subtract(a, b))
  }
  
  else if(operation == "*"){
    console.log(multiply(a, b))
  }
  
  else if(operation == "/"){
    console.log(devide(a, b))
  }
  
  else{
    console.log("Invalid Operation, Thankyou.")
  }
