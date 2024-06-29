document.getElementById('convertBtn').addEventListener('click', function() {
  // Get user input
  let amount = parseFloat(document.getElementById('amount').value);
  let fromCurrency = document.getElementById('fromCurrency').value;
  let toCurrency = document.getElementById('toCurrency').value;

  // Conversion rates (as of a specific date)
  // Rates are relative to 1 unit of fromCurrency.
  let conversionRates = {
      'USD': 1.0,
      'EUR': 0.85,
      'GBP': 0.75,
      'JPY': 110.0,
      'INR': 74.0, // Approximate conversion rate
      'AUD': 1.30,
      'CAD': 1.25,
      'CNY': 6.45,
      'CHF': 0.92,
      'NZD': 1.40
  };

  // Perform conversion
  if (fromCurrency in conversionRates && toCurrency in conversionRates) {
      let fromRate = conversionRates[fromCurrency];
      let toRate = conversionRates[toCurrency];

      // Convert amount from fromCurrency to USD first
      let amountInUSD = amount / fromRate;

      // Convert amount from USD to toCurrency
      let convertedAmount = amountInUSD * toRate;

      // Display result
      document.getElementById('result').innerText = `${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`;
  } else {
      document.getElementById('result').innerText = "Currency not supported or rates not available.";
  }
});
