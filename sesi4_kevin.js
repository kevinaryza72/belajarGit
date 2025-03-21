let result;

// pilih opsi penjumlahan , pengurangan dsb...
const kalkulator = prompt("Enter kalkulator ( either +, -, * or / ): ");

// input bilangan yang ingin dijumlahkan
const bilangan1 = parseFloat(prompt("bilangan pertama: "));
const bilangan2 = parseFloat(prompt("bilangan kedua: "));

switch (kalkulator) {
  case "+":
    result = bilangan1 + bilangan2;
    console.log(`${bilangan1} + $ bilangan2} = ${result}`);
    break;

  case "-":
    result = bilangan1 - bilangan2;
    console.log(`${bilangan1} - $ bilangan2} = ${result}`);
    break;

  case "*":
    result = bilangan1 * bilangan2;
    console.log(`${bilangan1} * $ bilangan2} = ${result}`);
    break;

  case "/":
    result = bilangan1 / bilangan2;
    console.log(`${bilangan1} / $ bilangan2} = ${result}`);
    break;

  default:
    console.log("Invalid kalkulator");
    break;
}
