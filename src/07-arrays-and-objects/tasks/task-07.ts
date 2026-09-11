/**
 * An online store has customer orders.
 * Tasks:
 * 1. Get only completed orders.
 * 2. Calculate the total value of each order.
 * 3. Find the customer who spent the most.
 * 4. Calculate the total revenue from completed orders.
 * 5. Find all products that have been purchased.
 */
const orders = [
    {
        id: 101,
        customer: "Andi",
        status: "completed",
        items: [
            { product: "Keyboard", price: 350000, quantity: 1 },
            { product: "Mouse", price: 150000, quantity: 2 },
        ],
    },
    {
        id: 102,
        customer: "Budi",
        status: "cancelled",
        items: [
            { product: "Monitor", price: 2500000, quantity: 1 },
        ],
    },
    {
        id: 103,
        customer: "Citra",
        status: "completed",
        items: [
            { product: "Monitor", price: 2500000, quantity: 2 },
            { product: "Keyboard", price: 350000, quantity: 1 },
        ],
    },
];

const completedOrders = orders.filter(
    order => order.status === "completed"
);

const orderTotals = orders.map(order => ({
    id: order.id,
    customer: order.customer,
    total: order.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    )
}));

const customerWhoSpentMost = orderTotals.reduce(
    (highest, order) =>
        order.total > highest.total ? order : highest
);

const totalRevenue = completedOrders.reduce(
    (total, order) =>
        total +
        order.items.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        ),
    0
);

const purchasedProducts = [
    ...new Set(
        orders.flatMap(order =>
            order.items.map(item => item.product)
        )
    )
];

console.log("1. Completed Orders:", completedOrders);
console.log("2. Order Totals:", orderTotals);
console.log("3. Customer Who Spent Most:", customerWhoSpentMost);
console.log("4. Total Revenue:", totalRevenue);
console.log("5. Purchased Products:", purchasedProducts);