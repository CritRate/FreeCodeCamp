const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
// change code below this line
const resultDisplay = `<li class="text-warning">${result.failure[0]}</li>
 * <li class="text-warning">${result.failure[1]}</li>
 * <li class="text-warning">${result.failure[2]}</li>`;
// change code above this line
console.log(resultDisplay);
/**
 * should look like this
 * <li class="text-warning">no-var</li>
 * <li class="text-warning">var-on-top</li>
 * <li class="text-warning">linebreak</li>
 **/
