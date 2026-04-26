// 1. Create collection order and insert one document
db.orders.insertOne({
  order_id: "O001",
  customerName: "Kiran",
  item: "Pizza",
  quantity: 2,
  totalAmount: 600,
  status: "Pending"
});

// 2. Insert multiple records
db.orders.insertMany([
  { order_id: "O002", customerName: "Ravi", item: "Burger", quantity: 1, totalAmount: 250, status: "Pending" },
  { order_id: "O003", customerName: "Anjali", item: "Pasta", quantity: 3, totalAmount: 900, status: "Confirmed" },
  { order_id: "O004", customerName: "Kiran", item: "Sandwich", quantity: 1, totalAmount: 150, status: "Pending" },
  { order_id: "O005", customerName: "Meena", item: "Biryani", quantity: 2, totalAmount: 500, status: "Pending" },
  { order_id: "O006", customerName: "Arjun", item: "Steak", quantity: 0, totalAmount: 0, status: "Pending" }
]);

// 3. Update status of Kiran to "delivered"
db.orders.updateMany(
  { customerName: "Kiran" },
  { $set: { status: "Delivered" } }
);

// 4. Update all "pending" to "confirmed"
db.orders.updateMany(
  { status: "Pending" },
  { $set: { status: "Confirmed" } }
);

// 5. Delete invalid orders (quantity < 1)
db.orders.deleteMany({ quantity: { $lt: 1 } });
 
// 6. Retrieve order where totalAmount > 800
db.orders.find({ totalAmount: { $gt: 800 } });