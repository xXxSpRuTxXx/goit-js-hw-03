function filterArray(numbers, value) {
  // 1. Створюємо порожній масив для результатів
  const filteredNumbers = [];

  // 2. Використовуємо цикл для ітерації кожного елемента масиву numbers
  for (let i = 0; i < numbers.length; i++) {
    // 3. Умовний оператор if для перевірки: чи число більше за value
    if (numbers[i] > value) {
      // Додаємо число до нашого нового масиву
      filteredNumbers.push(numbers[i]);
    }
  }

  // 4. Повертаємо новий масив із підхожими числами
  return filteredNumbers;
}

// Перевірка результатів
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
