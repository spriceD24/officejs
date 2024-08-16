/**
 * Make an API call with a string and number parameter and return the result.
 * @param {string} text - The text parameter.
 * @param {number} number - The number parameter.
 * @returns {Promise<string>} - The result from the API.
 * @customfunction
 */
export async function wire(text, number) {
    return 1
  }
  
  export function currentTime() {
    return new Date().toLocaleTimeString();
  }
  
  // Export the function if using modules (ES6 or CommonJS)
if (typeof exports !== "undefined") {
    exports.wire = wire;
}