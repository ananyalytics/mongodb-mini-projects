// 1. Create collection and insert one record
db.members.insertOne({
  member_id: "MB001",
  memberName: "Rahul",
  membershipType: "Premium",
  booksBorrowed: 4,
  city: "Chennai",
  status: "Active"
});

// 2. Insert multiple records
db.members.insertMany([
  { member_id: "MB002", memberName: "Priya", membershipType: "Basic", booksBorrowed: 2, city: "Trichy", status: "Inactive" },
  { member_id: "MB003", memberName: "Kiran", membershipType: "Premium", booksBorrowed: 5, city: "Chennai", status: "Active" },
  { member_id: "MB004", memberName: "Meena", membershipType: "Basic", booksBorrowed: 1, city: "Chennai", status: "Suspended" },
  { member_id: "MB005", memberName: "Arjun", membershipType: "Premium", booksBorrowed: 6, city: "Trichy", status: "Inactive" },
  { member_id: "MB006", memberName: "Sneha", membershipType: "Basic", booksBorrowed: 3, city: "Chennai", status: "Active" }
]);

// 3. Members with more then 3 books borrowed
db.members.find({ booksBorrowed: { $gt: 3 } });

// 4. Chennai + bookBorrowed > 2
db.members.find({
  city: "Chennai",
  booksBorrowed: { $gt: 2 }
});

// 5. Complex filter + sort
db.members.find({
  status: { $ne: "Active" },
  city: { $in: ["Chennai", "Trichy"] }
})
.sort({ booksBorrowed: -1 });