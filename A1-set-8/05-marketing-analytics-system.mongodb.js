// 1. Create campaigns collection 
db.campaigns.insertMany([
  { campaignName: "Summer Sale", channel: "Email", leads: 200, revenue: 50000 },
  { campaignName: "Festive Offer", channel: "Social Media", leads: 300, revenue: 70000 },
  { campaignName: "Referral Bonus", channel: "Email", leads: 150, revenue: 30000 },
  { campaignName: "Ad Campaign", channel: "Google Ads", leads: 400, revenue: 90000 },
  { campaignName: "Influencer Promo", channel: "Social Media", leads: 250, revenue: 60000 }
]);

// 2. Total revenue 
db.campaigns.aggregate([
  {
    $group: {
      _id: null,
      totalRevenue: { $sum: "$revenue" }
    }
  }
]);

// 3. Average leads per channel 
db.campaigns.aggregate([
  {
    $group: {
      _id: "$channel",
      avgLeads: { $avg: "$leads" }
    }
  }
]);

// 4. Count campaigns per channel 
db.campaigns.aggregate([
  {
    $group: {
      _id: "$channel",
      campaignCount: { $sum: 1 }
    }
  }
]);

// 5. top 3 campaigns (revenue > 40000)
db.campaigns.aggregate([
  {
    $match: { revenue: { $gt: 40000 } }
  },
  {
    $sort: { revenue: -1 }
  },
  {
    $limit: 3
  }
]);