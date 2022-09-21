// Task 1
// Создать рекурсивную функцию вычисления факториала числа.Факториал - произведение всех натуральных чисел от 1 до x.
// // 5! = 1 * 2 * 3 * 4 * 5 = 120

// Answer Task 1
// program to find the factorial of a number
function factorial(x) {
  // should number be zero
  if (x == 0) {
    return 1;
  }

  // in case number is positive
  else {
    return x * factorial(x - 1);
  }
}

// user provides input himself
const num = prompt("Type positive number: ");

// returning factorial() if input num is positive
if (num >= 0) {
  const result = factorial(num);
  console.log(`The factorial of ${num} is ${result}`);
} else {
  console.log("Provide positive number.");
}
