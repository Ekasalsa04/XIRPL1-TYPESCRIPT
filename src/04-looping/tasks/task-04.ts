/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */

const sales: number[] = [
  125000,
  350000,
   78000,
    910000,
    150000,
    420000,
    275000,
    99000,
    640000,
    18000
];

const totalRevenue: number = sales.reduce((acc, curr) => acc + curr, 0);
const highestTransaction: number = Math.max(...sales);
const lowestTransaction: number = Math.min(...sales);
const transactionsAbove300k: number = sales.filter(amount => amount >= 300000).length;
const averageTransaction: number = totalRevenue / sales.length;



console.log("Total Sales Revenue:", totalRevenue);
console.log("Highest Transaction:", highestTransaction);
console.log("Lowest Transaction:", lowestTransaction);
console.log("Number of Transactions >= Rp300,000:", transactionsAbove300k);
console.log("Average Transaction Value:", averageTransaction);


