// 1. Create collection and insert one book
db.books.insertOne({
  book_id: "B001",
  bookName: "Atomic Habits",
  author: "James Clear",
  category: "Self-Help",
  price: 450,
  stock: 20
});

// 2. Insert multiple book records
db.books.insertMany([
  { book_id: "B002", bookName: "Brief History of Time", author: "Stephen Hawking", category: "Science", price: 500, stock: 15 },
  { book_id: "B003", bookName: "The Selfish Gene", author: "Richard Dawkins", category: "Science", price: 400, stock: 10 },
  { book_id: "B004", bookName: "Clean Code", author: "Robert C. Martin", category: "Programming", price: 650, stock: 8 },
  { book_id: "B005", bookName: "Deep Work", author: "Cal Newport", category: "Self-Help", price: 550, stock: 12 },
  { book_id: "B006", bookName: "The Gene", author: "Siddhartha Mukherjee", category: "Science", price: 480, stock: 6 }
]);

// 3. Retrieve all books
db.books.find();

// 4. Display only book name and price
db.books.find({}, { bookName: 1, price: 1, _id: 0 });

// 5. Find 5 science books in ascending order of price
db.books.find({ category: "Science" })
        .sort({ price: 1 })
        .limit(5);