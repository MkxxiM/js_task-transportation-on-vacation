/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dailyRate = 40;
  const totalCost = days * dailyRate;
  const shortTerm = 3;
  const shortTermDiscount = 20;
  const longerm = 7;
  const longTermDiscount = 50;

  if (days < shortTerm) {
    return totalCost;
  }

  if (days < longerm) {
    return totalCost - shortTermDiscount;
  }

  return totalCost - longTermDiscount;
}

module.exports = calculateRentalCost;
