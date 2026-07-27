/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */
type Product = {
    productCode: string;
    productName: string;                
    sellingPrice: number;
    stockQuantity: number;
    productWeight: number;
    averageCustomerRating: number;
    isDiscounted: boolean;
};
const product1: Product = {
    productCode: "PRD001",
    productName: "Wireless Earbuds",
    sellingPrice: 1500000,
    stockQuantity: 50,
    productWeight: 0.2,
    averageCustomerRating: 4.5,
    isDiscounted: true
};
const product2: Product = {
    productCode: "PRD002",
    productName: "Smartphone",
    sellingPrice: 3500000,
    stockQuantity: 30,
    productWeight: 0.3,
    averageCustomerRating: 4.7,
    isDiscounted: false
};
const product3: Product = {
    productCode: "PRD003",
    productName: "Gaming Laptop",
    sellingPrice: 15000000,
    stockQuantity: 10,
    productWeight: 2.5,
    averageCustomerRating: 4.8,
    isDiscounted: true
};
console.log("Product 1:", product1);
console.log("Product 2:", product2);
console.log("Product 3:", product3);