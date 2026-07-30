/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */

const friedRicePrice: number = 18000;
const mineralWaterPrice: number = 5000;
const friedRiceQuantity: number = 3;
const mineralWaterQuantity: number = 2;
const discount: number = 10000;

const totalFriedRicePrice: number = friedRicePrice * friedRiceQuantity;
const totalMineralWaterPrice: number = mineralWaterPrice * mineralWaterQuantity;
const totalPriceBeforeDiscount: number = totalFriedRicePrice + totalMineralWaterPrice;
const finalPayment: number = totalPriceBeforeDiscount - discount;

console.log("Total Fried Rice Price:", totalFriedRicePrice);
console.log("Total Mineral Water Price:", totalMineralWaterPrice);
console.log("Total Price Before Discount:", totalPriceBeforeDiscount);
console.log("Final Payment:", finalPayment);