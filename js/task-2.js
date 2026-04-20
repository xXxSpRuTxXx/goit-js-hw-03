function makeArray(firstArray, secondArray, maxLength) {
  // 1. Створюємо новий масив, об'єднуючи два вхідних
  const allElements = firstArray.concat(secondArray);

  // 2. Перевіряємо довжину: якщо вона більша за ліміт, повертаємо обрізану копію
  if (allElements.length > maxLength) {
    return allElements.slice(0, maxLength);
  }

  // 3. Якщо все в нормі — повертаємо весь масив
  return allElements;
}
console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []
