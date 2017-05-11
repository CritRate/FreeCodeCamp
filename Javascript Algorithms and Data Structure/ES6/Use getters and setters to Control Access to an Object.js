/* Alter code below this line */
class Thermostat {
  constructor(farenheit) {
    this.farenheit = farenheit;
  }
  get celsius() {
    return (farenheit - 32) * 5 / 9;
  }
  set celsius(celsius) {
    this.celsius = celsius;
  }
}
/* Alter code above this line */
const thermos = new Thermostat(76); // setting in Farenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
