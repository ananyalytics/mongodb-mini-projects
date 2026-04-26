// 1. Create transactions and insert data
db.transactions.insertMany([
  { transactionId: "T001", user: "Rahul", amount: 500, method: "UPI", status: "Success" },
  { transactionId: "T002", user: "Priya", amount: 1500, method: "Card", status: "Success" },
  { transactionId: "T003", user: "Kiran", amount: 800, method: "UPI", status: "Failed" },
  { transactionId: "T004", user: "Meena", amount: 2000, method: "NetBanking", status: "Success" },
  { transactionId: "T005", user: "Arjun", amount: 1200, method: "Card", status: "Pending" }
]);

// 2. Index on transactionId
db.transactions.createIndex({ transactionId: 1 });

// 3. Compound Index
db.transactions.createIndex({ method: 1, amount: 1 });

// 4. Use explain() for quesry analysis
db.transactions.find({ method: "UPI" }).explain("executionStats");

// 5. Best Index type
{ method: 1; amount: 1 }

// WHY
// 1. Queries often filter by method
// 2. Then may sort/filter by amount
// 3. Compound index supports both efficiently