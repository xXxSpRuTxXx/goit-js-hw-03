function checkForSpam(message) {
  // 1. Переводимо весь рядок у нижній регістр, щоб пошук не залежав від великих/малих літер
  const lowerCaseMessage = message.toLowerCase();

  // 2. Перевіряємо, чи містить рядок заборонені слова "spam" або "sale"
  // Метод .includes() повертає true, якщо рядок містить підрядок
  if (lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale')) {
    return true;
  } else {
    return false;
  }
}

// Тести для перевірки:
console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('Amazing SalE, only tonight!')); // true
console.log(checkForSpam('Trust me, this is not a spam message')); // true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
