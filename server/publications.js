Meteor.publish("allCustomers", function() {
  return Customers.find({});
});

// Meteor.publish("allImages", function() {
//   return Images.find({});
// });